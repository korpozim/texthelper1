require("../index");

describe("App", function () {

    it("endpoint test", function () {
        expect("test".endpoint()).toEqual("test.");
        expect("test.".endpoint()).toEqual("test..");
        expect("test..".endpoint()).toEqual("test...");
    });

    it("firstup test", function () {
        expect("test".firstup()).toEqual("Test");
        expect("Test".firstup()).toEqual("Test");
    });

    it("wordsfirstup test", function () {
        expect("test test".wordsfirstup()).toEqual("Test Test");
        expect("Test test".wordsfirstup()).toEqual("Test Test");
        expect("test Test".wordsfirstup()).toEqual("Test Test");
        expect("Test Test".wordsfirstup()).toEqual("Test Test");
    });

    it("doublequotes test", function () {
        expect("test".doublequotes()).toEqual("\"test\"");
    });

    it("singlequotes test", function () {
        expect("test".singlequotes()).toEqual("\'test\'");
    });

    it("brackets test", function () {
        expect("test".brackets()).toEqual("[test]");
    });

    it("blabla test", function () {
        expect("test".blabla()).toEqual("test...");
    });

    it("camelcase test", function () {
        expect("test".camelcase()).toEqual("test");
        expect("test test".camelcase()).toEqual("testTest");
    });

    it("pascalcase test", function () {
        expect("test".pascalcase()).toEqual("Test");
        expect("test test".pascalcase()).toEqual("TestTest");
    });

    it("snakecase test", function () {
        expect("test".snakecase()).toEqual("test");
        expect("TEST".snakecase()).toEqual("test");
        expect("test test".snakecase()).toEqual("test_test");
    });

    it("kebabcase test", function () {
        expect("test".kebabcase()).toEqual("test");
        expect("TEST".kebabcase()).toEqual("test");
        expect("test test".kebabcase()).toEqual("test-test");
    });

    it("reverse test", function () {
        expect("test".reverse()).toEqual("tset");
        expect("test test".reverse()).toEqual("tset tset");
    });

    it("removenumber test", function () {
        expect("test".removenumber()).toEqual("test");
        expect("test1".removenumber()).toEqual("test");
        expect("1test".removenumber()).toEqual("test");
        expect("1te1st1".removenumber()).toEqual("test");
        expect("12434test".removenumber()).toEqual("test");
    });

    it("password test", function () {
        expect("".password()).toEqual("");
        expect("test".password()).toEqual("****");
    });

    it("reset test", function () {
        expect("test".reset()).toEqual("");
        expect("test test".reset()).toEqual("");
    });

    it("removespace test", function () {
        expect("test".removespace()).toEqual("test");
        expect("test ".removespace()).toEqual("test");
        expect(" test ".removespace()).toEqual("test");
        expect(" t est ".removespace()).toEqual("test");
        expect(" t e st ".removespace()).toEqual("test");
        expect(" t e s t ".removespace()).toEqual("test");
    });

    it("question test", function () {
        expect("test".question()).toEqual("test?");
    });

    it("exclamation test", function () {
        expect("test".exclamation()).toEqual("test!");
    });

    it("parentheses test", function () {
        expect("test".parentheses()).toEqual("(test)");
    });

    it("braces test", function () {
        expect("test".braces()).toEqual("{test}");
    });

    it("anglebrackets test", function () {
        expect("test".anglebrackets()).toEqual("<test>");
    });

    it("isurl test", function () {
        expect("test".isurl()).toEqual(false);
        expect("test http test".isurl()).toEqual(false);
        expect("http://www.github.com".isurl()).toEqual(true);
        expect("https://www.github.com".isurl()).toEqual(true);
        expect("http://github.com".isurl()).toEqual(true);
        expect("https://github.com".isurl()).toEqual(true);
    });

    it("isnullorempty test", function () {
        expect("".isnullorempty()).toEqual(true);
        expect("test".isnullorempty()).toEqual(false);
    });

});  