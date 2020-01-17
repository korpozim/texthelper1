module.exports = {
    endpoint: function (text) {
        return text + ".";
    },

    firstup: function (text) {
        return text.toString()[0].toUpperCase() + text.toString().substring(1, text.length);
    },

    wordsfirstup: function (text) {
        return text.toString().split(" ").map(x => x[0].toUpperCase() + x.substring(1, x.length)).join(" ");
    },

    upper: function (text) {
        return text.toString().toUpperCase();
    },

    lower: function (text) {
        return text.toString().toLowerCase();
    },

    doublequotes: function (text) {
        return "\"" + text.toString() + "\"";
    },

    singlequotes: function (text) {
        return "\'" + text.toString() + "\'";
    },

    brackets: function (text) {
        return "(" + text.toString() + ")";
    },

    blabla: function (text) {
        return text.toString() + "...";
    },

    camelcase: function (text) {
        return text.toString().split(" ").map((word, index) => {
            let tempWord = word.toString().toLowerCase();

            if (index != 0) {
                tempWord = tempWord[0].toUpperCase() + tempWord.substring(1, tempWord.length)
            }

            return tempWord;
        }).join("");
    },

    pascalcase: function (text) {
        return text.toString().split(" ").map((word) => {
            return word.toString()[0].toUpperCase() + word.toString().toLowerCase().substring(1, word.toString().length);
        }).join("");
    },

    snakecase: function (text) {
        return text.toString().split(" ").map(x => x.toString().toLowerCase()).join("_");
    },

    kebabcase: function (text) {
        return text.toString().split(" ").map(x => x.toString().toLowerCase()).join("-");
    },

    trim: function (text) {
        return text.toString().trim();
    },

    reverse: function (text) {
        return text.toString().split("").reverse().join("");
    },

    removenumber: function (text) {
        return text.toString().split("").map(x => { return isNaN(x) ? x : "" }).join("");
    },

    removespace: function (text) {
        return text.toString().split("").map(x => x.trim()).join("");
    },

    password: function (text) {
        return text.toString().split("").map(x => "*").join("");
    },

    reset: function (text) {
        return "";
    },

    getlength: function (text) {
        return text.toString().length;
    },

    isstring: function (text) {
        return typeof (text) === typeof ("");
    },

    isurl: function (text) {
        return text.toString().includes("http://") || text.toString().includes("https://");
    },

    isnullorempty: function (text) {
        return typeof (text) === typeof (null) || typeof (text) === typeof (undefined) || (typeof (text) === typeof ("") ? (text.toString().length < 1 ? true : false) : false);
    }
}