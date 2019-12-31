const helper = require("../index");

describe("App", function() {

    it("endpoint test",function() {
        expect(helper.endpoint("test")).toEqual("test.");
        expect(helper.endpoint("test.")).toEqual("test.");
        expect(helper.endpoint("test..")).toEqual("test..");
    });

    it("firstup test",function() {
        expect(helper.firstup("test")).toEqual("Test");
        expect(helper.firstup("Test")).toEqual("Test");
    });
  
  });  