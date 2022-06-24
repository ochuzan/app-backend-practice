const {repeatNTimesWithSpace, capitalizeFirstLetter} = require("./stringUtils");

describe("take a string and number and repeat string same number of times separated with spaces", () => {
    it("handles an empty string", () => {
        expect(repeatNTimesWithSpace('', 0)).toBe('');
        expect(repeatNTimesWithSpace('', 5)).toBe('');
    });

    it("handles a string with 1 or more characters", () => {
        expect(repeatNTimesWithSpace('a', 1)).toBe('a');
        expect(repeatNTimesWithSpace('a', 5)).toBe('a a a a a');
        expect(repeatNTimesWithSpace('abc', 3)).toBe('abc abc abc');
    });
});

describe("take a string capitlizes the first letter/character in the string", () => {
    it("handles an empty string", () => {
        expect(capitalizeFirstLetter('')).toBe('');
    });

    it("handles a string with 1 or more characters", () => {
        expect(capitalizeFirstLetter('a')).toBe('A');
        expect(capitalizeFirstLetter('ab')).toBe('Ab');
        expect(capitalizeFirstLetter('abc')).toBe('Abc');
        expect(capitalizeFirstLetter('A')).toBe('A');
    });
});