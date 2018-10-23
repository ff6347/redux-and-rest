"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const buildStore = require("json-fs-store");
const router = express.Router();
const store = buildStore('./db');
exports.default = router.get('/get-all', (req, res) => {
    store.list((err, objects) => {
        if (err) {
            res.json({
                status: 'not-ok',
                data: err
            });
        }
        else {
            res.json({
                status: 'ok',
                data: objects
            });
        }
    });
});
router.get('/get/:id([0-9]+)', (req, res) => {
    store.load(req.params.id, (err, object) => {
        if (err) {
            res.json({
                status: 'not-ok',
                data: 'no object with that id available'
            });
        }
        else {
            res.json({
                status: 'ok',
                data: object
            });
        }
    });
});
router.get('/', (req, res) => {
    res.json({ status: 'ok', data: null });
});
router.post('/add', (req, res) => {
    console.log('add body', req.body);
    store.add(req.body, (err) => {
        if (err) {
            console.error(err);
        }
    });
    res.json({
        status: 'ok',
        data: req.body
    });
});
module.exports = router;
//# sourceMappingURL=routes.js.map