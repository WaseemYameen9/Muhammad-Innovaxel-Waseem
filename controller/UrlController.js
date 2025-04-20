const Url = require("../model/Url");

async function CreateShorterUrl(req, res) {
  console.log(req.body);
  const { url } = req.body;
  const { nanoid } = await import("nanoid");
  const SUrl = nanoid(8);
  const data = await Url.create({
    originalUrl: url,
    shorterUrl: SUrl,
    accessCount: 0,
  });
  if(data){
  res.status(201).send(data);
  }
  else{
    res.status(400).send({"message":"Server or Validation Error"});
  }
}

async function GetShorterUrl(req, res) {
  const SUrl = req.params.shorterUrl;
  const data = await Url.findOne({ shorterUrl: SUrl });
  if (data) {
    res.status(200).send(data);
  } else {
    res.status(404).send({ message: "No url found" });
  }
}


async function DeleteShortUrl(req,res){
    const SUrl = req.params.shorterUrl;
    const result = await Url.deleteOne({shorterUrl: SUrl})
    if (result.deletedCount === 0) {
        return res.status(404).send({ "message": "Short URL not found" });
    }
    else{
        res.status(204).send({"message":"Url deleted Successfully"})
    }
}

module.exports = {
  CreateShorterUrl,
  GetShorterUrl,
  DeleteShortUrl,
};
