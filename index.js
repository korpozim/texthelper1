module.exports = {
    endpoint: function (text) {
        return text[text.length - 1] != "." ? text + "." : text;
    },

    firstup: function (text) {
        return text.toString()[0].toUpperCase() + text.toString().substring(1, text.length);
    },

    wordsfirstup: function (text) {
        return text.toString().split(" ").map(x => x[0].toUpperCase() + x.substring(1, x.length)).join(" ");
    }
}