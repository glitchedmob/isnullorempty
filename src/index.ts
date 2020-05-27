function isObjectEmpty(obj: object) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }

    return true;
}

export function isNullOrEmpty(value: any): boolean {
    if (value === null) {
        return true;
    }

    if (value === undefined) {
        return true;
    }

    if (typeof value === 'string' && value === '') {
        return true;
    }

    if (typeof value === 'number' && isNaN(value)) {
        return true;
    }

    if (value.constructor.name === 'Object' && isObjectEmpty(value)) {
        return true;
    }

    if (Array.isArray(value) && value.length === 0) {
        return true;
    }

    return false;
}
