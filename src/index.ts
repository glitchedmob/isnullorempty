function isObjectEmpty(obj: object): boolean {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }

    return true;
}

export function isNullOrEmpty(value: unknown): value is null | undefined {
    if (value === null) {
        return true;
    }

    switch (typeof value) {
        case 'undefined':
            return true;
        case 'string':
            return value === '';
        case 'number':
            return isNaN(value);
        case 'object':
            if (Array.isArray(value)) {
                return value.length < 1;
            }

            if (typeof NodeList !== 'undefined' && value instanceof NodeList) {
                return value.length < 1;
            }

            if (typeof HTMLCollection !== 'undefined' && value instanceof HTMLCollection) {
                return value.length < 1;
            }

            return value?.constructor?.name === 'Object' && isObjectEmpty(value);
        case 'bigint':
        case 'function':
        case 'boolean':
        case 'symbol':
            return false;
    }
}

export function isNotNullOrEmpty<T>(value: T | null | undefined): value is T {
    return !isNullOrEmpty(value);
}

export function isNullOrWhiteSpace(value: unknown): value is null | undefined {
    if (typeof value === 'string') {
        value = value.trim();
    }

    return isNullOrEmpty(value);
}

export function isNotNullOrWhiteSpace<T>(value: T | null | undefined): value is T {
    return !isNullOrWhiteSpace(value);
}
