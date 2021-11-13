// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//test isPhoneNumber()
test('222-222-2222 is a phone #', () => {
    expect(functions.isPhoneNumber('222-222-2222')).toBe(true);
});

test('510-123-4567 is a phone #', () => {
    expect(functions.isPhoneNumber('510-123-4567')).toBe(true);
});

test('2222222222 is not a phone #', () => {
    expect(functions.isPhoneNumber('2222222222')).toBe(false);
});

test('100 is a not phone #', () => {
    expect(functions.isPhoneNumber('100')).toBe(false);
});

//test isEmail()
test('bwchen@ucsd.edu is an email', () => {
    expect(functions.isEmail('bwchen@ucsd.edu')).toBe(true);
});

test('somerandomemail@thisdomain.com is an email', () => {
    expect(functions.isEmail('somerandomemail@thisdomain.com')).toBe(true);
});

test('bwchenucsdedu is not an email', () => {
    expect(functions.isEmail('bwchenucsdedu')).toBe(false);
});

test('notavalidemail@com is not an email', () => {
    expect(functions.isEmail('notavalidemail@com')).toBe(false);
});

//test isStrongPassword()
test('aASTOspjt is a strong password', () => {
    expect(functions.isStrongPassword('aASTOspjt')).toBe(true);
});

test('Password is a strong password', () => {
    expect(functions.isStrongPassword('Password')).toBe(true);
});

test('bad is not a strong password', () => {
    expect(functions.isStrongPassword('bad')).toBe(false);
});

test('include@123 is not a strong password', () => {
    expect(functions.isStrongPassword('include@123')).toBe(false);
});

//test isDate()
test('01/09/2001 is a valid date', () => {
    expect(functions.isDate('01/09/2001')).toBe(true);
});

test('12/31/1999 is a valid date', () => {
    expect(functions.isDate('12/31/1999')).toBe(true);
});

test('01092001 is not a valid date', () => {
    expect(functions.isDate('01092001')).toBe(false);
});

test('February 30th is not a valid date', () => {
    expect(functions.isDate('February 30th')).toBe(false);
});

//test isHexColor()
test('#07F3A4 is a hex color', () => {
    expect(functions.isHexColor('#07F3A4')).toBe(true);
});

test('#FFF is a hex color', () => {
    expect(functions.isHexColor('#FFF')).toBe(true);
});

test('1000 is not a hex color', () => {
    expect(functions.isHexColor('1000')).toBe(false);
});

test('purple is not a hex color', () => {
    expect(functions.isHexColor('purple')).toBe(false);
});
