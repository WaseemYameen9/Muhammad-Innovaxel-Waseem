const UrlController = require('../controller/UrlController')
const express = require("express")
const router = express.Router()

router.post('/shorten',UrlController.CreateShorterUrl)
router.get('/shorten/:shorterUrl',UrlController.GetShorterUrl)
router.delete('/shorten/:shorterUrl',UrlController.DeleteShortUrl)


module.exports = router