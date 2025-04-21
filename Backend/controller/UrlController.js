const Url = require("../model/Url");

async function CreateShorterUrl(req, res) {
  //console.log(req.body);
  const { url } = req.body;
  const { nanoid } = await import("nanoid");
  const SUrl = nanoid(8);
  try {
    const data = await Url.create({
      originalUrl: url,
      shorterUrl: SUrl,
    });
    if (data) {
      res.status(201).send(data);
    } else {
      res.status(400).send({ message: "Server or Validation Error" });
    }
  } catch (err) {
    res.status(400).send({ error: err });
  }
}

async function GetShorterUrl(req, res) {
  const SUrl = req.params.shorterUrl;
  //const data = await Url.findOne({ shorterUrl: SUrl });
  const data = await Url.findOneAndUpdate(
    { shorterUrl: SUrl },
    { $inc: { accessCount: 1 } },
    { new: true }
  );

  if (data) {
    res.status(200).send(data);
  } else {
    res.status(404).send({ message: "No url found" });
  }
}

async function DeleteShortUrl(req, res) {
  const SUrl = req.params.shorterUrl;
  try {
    const result = await Url.deleteOne({ shorterUrl: SUrl });
    if (result.deletedCount === 0) {
      return res.status(404).send({ "message": "Short URL not found" });
    } else {
      return res.status(204).send({ "message": "Url deleted Successfully" });
    }
  } catch (err) {
    return res.status(404).send({ "message": err });
  }
}

async function UpdateShortUrl(req, res) {
  const { url } = req.body;
  const SUrl = req.params.shorterUrl;
  try {
    const result = await Url.findOneAndUpdate(
      { shorterUrl: SUrl },
      { $set: { originalUrl: url } }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Short URL not found" });
    }

    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ "result: ": err });
  }
}
async function GetStats(req, res) {
  const SUrl = req.params.shorterUrl;
  const data = await Url.find({ shorterUrl: SUrl });
  if(data){
    return res.status(200).send(data);
  }
  else{
    return res.status(404).send({"message": "Short Url not found"});
  }
  
}

module.exports = {
  CreateShorterUrl,
  GetShorterUrl,
  DeleteShortUrl,
  UpdateShortUrl,
  GetStats,
};
