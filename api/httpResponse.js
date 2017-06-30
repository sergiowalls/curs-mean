const HTTPStatus = require('http-status');

const DEFAULT_CREATED_MESSAGE = {message: "Resource created successfully"};
const DEFAULT_NOT_FOUND_MESSAGE = {message: "Resource not found"};
const DEFAULT_BAD_REQUEST_MESSAGE = {message: "Your request is malformed"};
const DEFAULT_INTERNAL_ERROR_MESSAGE = {message: "An internal error has occurred"};
const DEFAULT_UNAUTHORIZED_MESSAGE = {message: "You are unauthorized"};

class HttpResponse {

    constructor() {
    }

    ok(res, msg) {
        res.status(HTTPStatus.OK).json(msg);
    }

    created(res, msg = DEFAULT_CREATED_MESSAGE) {
        res.status(HTTPStatus.CREATED).json(msg);
    }

    notFound(res, msg = DEFAULT_NOT_FOUND_MESSAGE) {
        res.status(HTTPStatus.NOT_FOUND).json(msg);
    }

    badRequest(res, msg = DEFAULT_BAD_REQUEST_MESSAGE) {
        res.status(HTTPStatus.BAD_REQUEST).json(msg);
    }

    internalError(res, msg = DEFAULT_INTERNAL_ERROR_MESSAGE) {
        res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json(msg);
    }

    unauthorized(res, msg = DEFAULT_UNAUTHORIZED_MESSAGE) {
        res.status(HTTPStatus.UNAUTHORIZED).json(msg);
    }

}

module.exports = new HttpResponse();