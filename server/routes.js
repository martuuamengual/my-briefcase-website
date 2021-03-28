const multer  = require('multer')
const { body } = require('express-validator');
const expressStaticGzip = require("express-static-gzip");
const express = require('express')
const Path = require('./utils/Path')
const ContactController = require('./controllers/ContactController')
const CalificationController = require('./controllers/CalificationController')


class Routes {

    constructor(app) {
        this.app = app
        this.statics()
        this.frontend()
        this.api()
    }

    statics() {
        this.app.use('/images', expressStaticGzip(Path.IMAGES_FOLDER_PATH));
        this.app.use('/js', expressStaticGzip(Path.JS_FOLDER_PATH));
        this.app.use('/public', expressStaticGzip(Path.PUBLIC_FOLDER_PATH));
        this.app.use('/dist', expressStaticGzip(Path.DIST_FOLDER_PATH));
        this.app.use('/robots.txt', express.static(Path.ROBOTSTXT_PATH));
    }

    frontend() {
        this.app.get('*', (req, res) => {
            res.setHeader('Content-Encoding', 'gzip')
            res.setHeader('Content-Type', 'text/html; charset=UTF-8')
            res.setHeader('Vary', 'Accept-Encoding')
            res.sendFile(Path.INDEXHTML_PATH);
        });
    }

    api() {

        this.app.post(
            '/api/contact/send-message', 
            ...Routes.api_getMw_Contact_sendMessage(), ContactController.SendMessage);

        this.app.post('/api/contact/check', ContactController.Check);
    
        this.app.post('/api/calification/check', CalificationController.Check);
    
        this.app.put('/api/calification/set', CalificationController.Set);

        this.app.post('/test/500', (req, res) => {
            throw new Error('Testing 500 error server')
        })
    }

    static escapeError(value, { req }) {
        if (value?.includes('<') || value?.includes('>') 
        || value?.includes('&') || value?.includes("'") 
        || value?.includes('"') || value?.includes('/')) throw new Error('An html object was inserted')
        return true
    }

    static api_getMw_Contact_sendMessage() {

        return [
            body('name').isString().trim().custom(this.escapeError).notEmpty(),
            body('email').isEmail().normalizeEmail(),
            body('message').isString().trim().custom(this.escapeError).notEmpty()
        ]
    }
}

module.exports = Routes