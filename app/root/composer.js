var Response = require("ringo/webapp/response").Response;
var Request = require("ringo/webapp/request").Request;
var auth = require("../auth");

exports.app = function(req) {
    var request = new Request(req);
    var status = auth.getStatus(request);
    var response = Response.skin(module.resolve("../templates/start.html"), {status: status || 404});
    return response;
};
