'use strict'

const rp = require('request-promise');
const base64 = require('base-64');
var utf8 = require('utf8');

let publicKey,
    secretKey,
    apiKeyId,
    olpaysUri;

var init = (params) => {
    apiKeyId = params.apiKeyId;
    publicKey = params.publicKey;
    secretKey = params.secretKey;
    olpaysUri = (params.sandbox) ?
        'https://sandbox.olpays.com/api/v1/' :
        'https://olpays.com/api/v1/';
}

var getPayments = (page, from, to) => {
    let getUri = olpaysUri + 'payments?page=' + page + '&from=' + from + '&to=' + to;
    var options = {
        uri: getUri,
        headers: {
            'Authorization': 'Basic ' + base64.encode(utf8.encode(apiKeyId + ':' + secretKey))
        },
        json: true // Automatically parses the JSON string in the response
    };
    return new Promise(function (resolve, reject) {
        rp(options)
            .then(function (parsedBody) {
                resolve(parsedBody);
            })
            .catch(function (err) {
                reject(err);
            });
    });

}

var getPayment = paymentId => {
    let getUri = olpaysUri + 'payments/' + paymentId;
    var options = {
        uri: getUri,
        headers: {
            'Authorization': 'Basic ' + base64.encode(utf8.encode(apiKeyId + ':' + secretKey))
        },
        json: true // Automatically parses the JSON string in the response
    };
    return new Promise(function (resolve, reject) {
        rp(options)
            .then(function (parsedBody) {
                resolve(parsedBody);
            })
            .catch(function (err) {
                reject(err);
            });
    });

}

var createPayment = paymentData => {
    let getUri = olpaysUri + 'payments';
    var options = {
        uri: getUri,
        method: 'POST',
        body: paymentData,
        headers: {
            'Authorization': 'Basic ' + base64.encode(utf8.encode(apiKeyId + ':' + secretKey))
        },
        json: true // Automatically parses the JSON string in the response
    };
    return new Promise(function (resolve, reject) {
        rp(options)
            .then(function (parsedBody) {
                resolve(parsedBody);
            })
            .catch(function (err) {
                reject(err);
            });
    });

}

var createCardToken = cardData => {
    let getUri = olpaysUri + 'public/cardtoken';
    var options = {
        uri: getUri,
        method: 'POST',
        body: cardData,
        headers: {
            'Authorization': 'Basic ' + base64.encode(utf8.encode(apiKeyId + ':' + publicKey))
        },
        json: true // Automatically parses the JSON string in the response
    };
    return new Promise(function (resolve, reject) {
        rp(options)
            .then(function (parsedBody) {
                resolve(parsedBody);
            })
            .catch(function (err) {
                reject(err);
            });
    });

}

var getCurrentBusiness = () => {
    let getUri = olpaysUri + 'business/current';
    var options = {
        uri: getUri,
        headers: {
            'Authorization': 'Basic ' + base64.encode(utf8.encode(apiKeyId + ':' + secretKey))
        },
        json: true // Automatically parses the JSON string in the response
    };
    return new Promise(function (resolve, reject) {
        rp(options)
            .then(function (parsedBody) {
                resolve(parsedBody);
            })
            .catch(function (err) {
                reject(err);
            });
    });

}

var getCreditCardTypes = () => {
    let getUri = olpaysUri + 'public/payment/creditcard/types';
    var options = {
        uri: getUri,
    };
    return new Promise(function (resolve, reject) {
        rp(options)
            .then(function (parsedBody) {
                resolve(parsedBody);
            })
            .catch(function (err) {
                reject(err);
            });
    });

}

module.exports = {
    getPayments,
    getPayment,
    createPayment,
    createCardToken,
    getCurrentBusiness,
    getCreditCardTypes,
    init
}