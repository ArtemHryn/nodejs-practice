const express = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
    console.log('hel');
    next()
})

module.exports = {router}