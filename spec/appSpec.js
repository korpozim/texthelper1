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

});  