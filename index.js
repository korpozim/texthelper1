Object.assign(String.prototype, {
    endpoint: function () {
        return this + ".";
    },

    firstup: function () {
        return this.toString()[0].toUpperCase() + this.toString().substring(1, this.length);
    },

    wordsfirstup: function () {
        return this.toString().split(" ").map(x => x[0].toUpperCase() + x.substring(1, x.length)).join(" ");
    },

    doublequotes: function () {
        return "\"" + this.toString() + "\"";
    },

    singlequotes: function () {
        return "\'" + this.toString() + "\'";
    },

    brackets: function () {
        return "[" + this.toString() + "]";
    },

    blabla: function () {
        return this.toString() + "...";
    },

    camelcase: function () {
        return this.toString().split(" ").map((word, index) => {
            let tempWord = word.toString().toLowerCase();

            if (index != 0) {
                tempWord = tempWord[0].toUpperCase() + tempWord.substring(1, tempWord.length)
            }

            return tempWord;
        }).join("");
    },

    pascalcase: function () {
        return this.toString().split(" ").map((word) => {
            return word.toString()[0].toUpperCase() + word.toString().toLowerCase().substring(1, word.toString().length);
        }).join("");
    },

    snakecase: function () {
        return this.toString().split(" ").map(x => x.toString().toLowerCase()).join("_");
    },

    kebabcase: function () {
        return this.toString().split(" ").map(x => x.toString().toLowerCase()).join("-");
    },

    reverse: function () {
        return this.toString().split("").reverse().join("");
    },

    removenumber: function () {
        return this.toString().split("").map(x => { return isNaN(x) ? x : "" }).join("");
    },

    removespace: function () {
        return this.toString().split("").map(x => x.trim()).join("");
    },

    password: function () {
        return this.toString().split("").map(x => "*").join("");
    },

    reset: function () {
        return "";
    },

    question: function () {
        return this.toString() + "?";
    },

    exclamation: function () {
        return this.toString() + "!";
    },

    parentheses: function () {
        return "(" + this.toString() + ")";
    },

    braces: function () {
        return "{" + this.toString() + "}";
    },

    anglebrackets: function () {
        return "<" + this.toString() + ">";
    },

    isurl: function () {
        return this.toString().includes("http://") || this.toString().includes("https://");
    },

    isnullorempty: function () {
        return this.length > 0 ? false : true;
    }
})
