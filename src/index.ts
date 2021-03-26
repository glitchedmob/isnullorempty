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
            return value?.constructor?.name === 'Object' && isObjectEmpty(value)
        case 'bigint':
        case 'function':
        case 'boolean':
        case 'symbol':
            return false;
    }
}
