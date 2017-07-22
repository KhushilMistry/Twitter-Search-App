var expect = require("chai").expect;
var request = require("request");

describe("Tweet Search API", function () {

  describe("Home Page Tweet API", function () {

    var url = "http://localhost:3000/v1";

    it("returns status 200", function (done) {
      request(url, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("Size Test in Home Page", function (done) {
      request(url, function (error, response, body) {
        expect(body).to.not.equal(null);
        expect(body).lengthOf.not.equal(0);
        done();
      });
    });

  });

  describe("Search Page Tweet API", function () {
    var url = "http://localhost:3000/v1/tweets";

    var tweet = {
      search: 'Hello'
    };

    it("returns status 404", function (done) {
      request(url, function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });

    it("returns status 200", function (done) {
      request.post(url, tweet, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });

});

