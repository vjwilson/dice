export function updateAttributes(attributes, action) {
    return attributes.map(attr => {
        if (attr.name === action.name) {
            attr.value = action.total;
            return attr;
        }
        return attr;
    });
}
