// write a function that takes a string and a number called n , and repeats the string
// n times with a space in the middle of each time

// "Oliver", 3 => "Oliver Oliver Oliver"

function repeatNTimesWithSpace(string, n) {
    if (!string) {
        return "";
    }
    // if (string.length === 1) {
    //     return string;
    // }
    // return (string + " ").repeat(n);

    const arr = new Array(n).fill(string);
    return arr.join(" ");
};

function capitalizeFirstLetter(string) {
    if (!string) {
        return "";
    }
    return string[0].toUpperCase() + string.slice(1);
};

module.exports = {
    repeatNTimesWithSpace,
    capitalizeFirstLetter
}