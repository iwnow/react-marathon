export function styleVal(val) {
    return val ? val : null;
}

export function styleObj(obj) {
    return Object.keys(obj).reduce((o, key) => {
        if (obj[key]) {
            o[key] = obj[key];
        }
        return o;
    }, {});
}