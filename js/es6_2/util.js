
export const PI = Math.PI;

const regexForPositiveNumberOnly = /^(?!0(\.0+)?$)\d*\.?\d+$/;

function isValidIput(...values) {
    return values.every(value => typeof value === "number" && regexForPositiveNumberOnly.test(value.toString()));
}

export function areaOfCircle(radius) {
    if (!isValidIput(radius)) return "Error: Value of radius must be  a positive number.";
    return `${PI * radius * radius} square unit`;
    
}

export function areaOfRectangle(length, width) {
    if (!isValidIput(length, width)) return "Error: Value of length and width must be  a positive number.";
    return `${length * width} square units`;
}

export function areaOfCylinder(radius, height) {
    if (!isValidIput(radius, height)) return "Error: Value of radius and height must be  a positive number.";
    return `${2 * PI * radius * (radius + height)} square units`;
}
