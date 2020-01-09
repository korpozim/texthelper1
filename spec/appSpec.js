const helper = require("../index");

describe("App", function () {

    it("endpoint test", function () {
        expect(helper.endpoint("test")).toEqual("test.");
        expect(helper.endpoint("test.")).toEqual("test.");
        expect(helper.endpoint("test..")).toEqual("test..");
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

});  