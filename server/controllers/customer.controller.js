const connection = require('../connection');
const response = require('../helpers/response.helper');
const pagination = require('../helpers/pagination.helper');
const MongoDb = require('mongodb');
const _ = require('lodash');

module.exports = {
    find: (req, res) => {
        const id = new MongoDb.ObjectID(req.params.id);
        connection((db) => {
            db.collection('customer').findOne({
                _id: id
            }).then((customer) => {
                let data = response.makeResponse(200, customer);
                response.sendResponse(res, data);
            }).catch((err) => {
                let data = response.makeResponse(500, err);
                response.sendResponse(res, data);
            });
        });
    },
    get: (req, res) => {
        connection(async (db) => {
            const count = await db.collection('customer')
                .find().count();
            const itemsPerPage = pagination.getItemsPerPage(req.query.limit);
            const currentPageIndex = pagination.getCurrentPageIndex(req.query.page);
            const skip = pagination.getSkip(currentPageIndex, itemsPerPage);
            const noOfPages = pagination.getNoOfPages(count, itemsPerPage);
            const nextPageIndex = pagination.getNextPageIndex(currentPageIndex, noOfPages);
            const prevPageIndex = pagination.getPreviousPageIndex(currentPageIndex);
            db.collection('customer').find()
                .limit(itemsPerPage)
                .skip(skip)
                .toArray()
                .then((customers) => {
                    let data = response.makeResponse(200, customers);
                    data.count = count;
                    data.index = currentPageIndex;
                    data.next = nextPageIndex;
                    data.previous = prevPageIndex;
                    response.sendResponse(res, data);
                }).catch((err) => {
                    let data = response.makeResponse(500, err);
                    response.sendResponse(res, data);
                });
        });
    },
    create: (req, res) => {
        connection(async (db) => {
            db.collection('customer').insert(req.body).then((customers) => {
                let data = response.makeResponse(200, customers.ops);
                response.sendResponse(res, data);
            }).catch((err) => {
                let data = response.makeResponse(500, err);
                response.sendResponse(res, data);
            });
        });
    },
    update: (req, res) => {
        const id = new MongoDb.ObjectID(req.params.id);
        let values = req.body;
        delete values._id;
        connection(async (db) => {
            db.collection('customer').updateOne({
                _id: id
            }, { $set: values }).then(() => {
                let data = response.makeResponse(200, req.body);
                response.sendResponse(res, data);
            }).catch((err) => {
                let data = response.makeResponse(500, err);
                response.sendResponse(res, data);
            });
        });
    },
    delete: (req, res) => {
        const id = new MongoDb.ObjectID(req.params.id);
        connection(async (db) => {
            db.collection('customer').deleteOne({
                _id: id
            }).then(() => {
                let data = response.makeResponse(200, req.body);
                response.sendResponse(res, data);
            }).catch((err) => {
                let data = response.makeResponse(500, err);
                response.sendResponse(res, data);
            });
        });
    }
};