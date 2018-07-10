const constant = require('../constant');
const _ = require('lodash');

let responseBody = {
    status: 200,
    data: [],
    message: null
};

const getDefaultMessage = (code) => {
    switch (code) {
        case 201:
            return constant.CODE_201;
        case 300:
            return constant.CODE_300;
        case 302:
            return constant.CODE_302;
        case 400:
            return constant.CODE_400;
        case 401:
            return constant.CODE_401;
        case 403:
            return constant.CODE_403;
        case 404:
            return constant.CODE_404;
        case 500:
            return constant.CODE_500;
        default:
            return constant.CODE_200;
    }
};

module.exports = {
    makeResponse: (code = null, data = {}, message = null) => {
        let response = {
            status: code,
            data: data,
            message: message || getDefaultMessage(code)
        };
        return _.extend({}, responseBody, response);
    },

    sendResponse: (res, data) => {
        return res.status(data.status).json(data);
    }
};
