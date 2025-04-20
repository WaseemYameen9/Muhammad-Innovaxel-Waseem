const UrlController = require('../controller/UrlController')
const express = require("express")
const router = express.Router()

router.post('/shorten',UrlController.CreateShorterUrl)
router.get('/shorten/:shorterUrl',UrlController.GetShorterUrl)
router.delete('/shorten/:shorterUrl',UrlController.DeleteShortUrl)
router.put('/shorten/:shorterUrl',UrlController.UpdateShortUrl)
router.get('/stats/:shorterUrl',UrlController.GetStats)


module.exports = router