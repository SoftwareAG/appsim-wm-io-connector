function removeSpacesAndLowerCase(str) {
    // Remove white spaces using regular expression
    const stringWithoutSpaces = str.replace(/\s/g, '');
    // Convert the string to lowercase
    const lowerCaseString = stringWithoutSpaces.toLowerCase();
    return lowerCaseString;
}

function pluralizeNoun(str) {
    // function to return plural string of noun
    if (str.endsWith("ss")) {
        return str + "es";
    } else if (str.endsWith("y")) {
        return str.slice(0, -1) + "ies";
    } else if (str.endsWith("us")) {
        return str.slice(0, -1) + "es";
    } else {
        return str + "s";
    }
}


module.exports = {
    removeSpacesAndLowerCase: removeSpacesAndLowerCase,
    pluralizeNoun: pluralizeNoun
};