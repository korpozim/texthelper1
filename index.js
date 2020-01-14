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
    }
}