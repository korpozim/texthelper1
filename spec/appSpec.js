const helper = require("../index");

describe("App", function () {

    it("endpoint test", function () {
        expect(helper.endpoint("test")).toEqual("test.");
        expect(helper.endpoint("test.")).toEqual("test..");
        expect(helper.endpoint("test..")).toEqual("test...");
    });

    it("firstup test", function () {
        expect(helper.firstup("test")).toEqual("Test");
        expect(helper.firstup("Test")).toEqual("Test");
    });

    it("wordsfirstup test", function () {
        expect(helper.wordsfirstup("test test")).toEqual("Test Test");
        expect(helper.wordsfirstup("Test test")).toEqual("Test Test");
        expect(helper.wordsfirstup("test Test")).toEqual("Test Test");
        expect(helper.wordsfirstup("Test Test")).toEqual("Test Test");
    });

    it("upper test", function () {
        expect(helper.upper("test")).toEqual("TEST");
        expect(helper.upper("test test")).toEqual("TEST TEST");
    });

    it("lower test", function () {
        expect(helper.lower("TEST")).toEqual("test");
        expect(helper.lower("TEST TEST")).toEqual("test test");
    });

    it("doublequotes test", function () {
        expect(helper.doublequotes("test")).toEqual("\"test\"");
    });

    it("singlequotes test", function () {
        expect(helper.singlequotes("test")).toEqual("\'test\'");
    });

    it("brackets test", function () {
        expect(helper.brackets("test")).toEqual("(test)");
    });

    it("blabla test", function () {
        expect(helper.blabla("test")).toEqual("test...");
    });

    it("camelcase test", function () {
        expect(helper.camelcase("test")).toEqual("test");
        expect(helper.camelcase("test test")).toEqual("testTest");
    });

    it("pascalcase test", function () {
        expect(helper.pascalcase("test")).toEqual("Test");
        expect(helper.pascalcase("test test")).toEqual("TestTest");
    });

    it("snakecase test", function () {
        expect(helper.snakecase("test")).toEqual("test");
        expect(helper.snakecase("TEST")).toEqual("test");
        expect(helper.snakecase("test test")).toEqual("test_test");
    });

    it("kebabcase test", function () {
        expect(helper.kebabcase("test")).toEqual("test");
        expect(helper.kebabcase("TEST")).toEqual("test");
        expect(helper.kebabcase("test test")).toEqual("test-test");
    });

    it("trim test", function () {
        expect(helper.trim("test")).toEqual("test");
        expect(helper.trim(" test")).toEqual("test");
        expect(helper.trim("test ")).toEqual("test");
        expect(helper.trim(" test ")).toEqual("test");
    });

    it("reverse test", function () {
        expect(helper.reverse("test")).toEqual("tset");
        expect(helper.reverse("test test")).toEqual("tset tset");
    });

    it("removenumber test", function () {
        expect(helper.removenumber("test")).toEqual("test");
        expect(helper.removenumber("test1")).toEqual("test");
        expect(helper.removenumber("1test")).toEqual("test");
        expect(helper.removenumber("1te1st1")).toEqual("test");
        expect(helper.removenumber("12434test")).toEqual("test");
    });

    it("password test", function () {
        expect(helper.password("")).toEqual("");
        expect(helper.password("test")).toEqual("****");
    });

    it("reset test", function () {
        expect(helper.reset("test")).toEqual("");
        expect(helper.reset("test test")).toEqual("");
    });

    it("removespace test", function () {
        expect(helper.removespace("test")).toEqual("test");
        expect(helper.removespace("test ")).toEqual("test");
        expect(helper.removespace(" test ")).toEqual("test");
        expect(helper.removespace(" t est ")).toEqual("test");
        expect(helper.removespace(" t e st ")).toEqual("test");
        expect(helper.removespace(" t e s t ")).toEqual("test");
    });

    it("getlength test", function () {
        expect(helper.getlength("")).toEqual(0);
        expect(helper.getlength("test")).toEqual(4);
        expect(helper.getlength("test test")).toEqual(9);
    });

    it("isstring test", function () {
        expect(helper.isstring("")).toEqual(true);
        expect(helper.isstring("test")).toEqual(true);
        expect(helper.isstring("1")).toEqual(true);
        expect(helper.isstring(1)).toEqual(false);
        expect(helper.isstring(true)).toEqual(false);
    });

    it("isurl test", function () {
        expect(helper.isurl("test")).toEqual(false);
        expect(helper.isurl("test http test")).toEqual(false);
        expect(helper.isurl("http://www.github.com")).toEqual(true);
        expect(helper.isurl("https://www.github.com")).toEqual(true);
        expect(helper.isurl("http://github.com")).toEqual(true);
        expect(helper.isurl("https://github.com")).toEqual(true);
    });

    it("isnullorempty test", function () {
        expect(helper.isnullorempty("")).toEqual(true);
        expect(helper.isnullorempty(null)).toEqual(true);
        expect(helper.isnullorempty(undefined)).toEqual(true);
        expect(helper.isnullorempty("test")).toEqual(false);
        expect(helper.isnullorempty(true)).toEqual(false);
        expect(helper.isnullorempty(1)).toEqual(false);
        expect(helper.isnullorempty("null")).toEqual(false);
        expect(helper.isnullorempty("undefined")).toEqual(false);
    });

});  