const Url = require('../model/Url')

async function CreateShorterUrl(req,res)
{
    console.log(req.body)
    const {OUrl} = req.body
    const { nanoid } = await import('nanoid');
    const SUrl = nanoid(8)
    URL.create({
        originalUrl: OUrl,
        shorterUrl: SUrl,
        accessCount: 0,
    })
    const message ={
        url: "http://localhost:5000/"+SUrl
    }
    res.status(200).send(message)
}

module.exports = {
    CreateShorterUrl,
}