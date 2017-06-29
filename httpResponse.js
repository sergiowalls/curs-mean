const HTTPStatus = require('http-status');

const DEFAULT_CREATED_MESSAGE = {message: "Resource created successfully"};

class HttpResponse {

    constructor() {
    }

    ok(res, msg) {
        res.status(HTTPStatus.OK).json(msg);
    }

    created(res, msg = DEFAULT_CREATED_MESSAGE) {
        res.status(HTTPStatus.CREATED).json(msg);
    }

    notFound(res, msg) {
        res.status(HTTPStatus.NOT_FOUND).json(msg);
    }

    badRequest(res, msg) {
        res.status(HTTPStatus.BAD_REQUEST).json(msg);
    }

    internalError(res, msg) {
        res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json(msg);
    }

}

module.exports = new HttpResponse();