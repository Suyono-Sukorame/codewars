function sort(items) {
    for (let i = 0; i < items.length - 1; i++) {
        for (let j = i + 1; j < items.length; j++) {
            if (compare(items[i], items[j]) > 0) {
                [items[i], items[j]] = [items[j], items[i]];
            }
        }
    }
    return items;
}

function compare(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
    } else if (typeof a === 'string' && typeof b === 'string') {
        return a.localeCompare(b);
    } else if (typeof a === 'number' && typeof b === 'string') {
        return -1;
    } else if (typeof a === 'string' && typeof b === 'number') {
        return 1;
    } else {
        throw new Error('Unsupported types');
    }
}
