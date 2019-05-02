const express = require('express')
const router = express.Router()
const demoRouter = require('./demo')

router.get('/demo', demoRouter)

module.exports = router