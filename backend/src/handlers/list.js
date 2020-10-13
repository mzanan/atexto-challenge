import Audio from "../models/audio.js";

const handle = async (req, res) => {
  const data = await Audio.find({}, null, { sort: { createdAt: -1 } });

  res.send({ data });
};

const list = (router) => {
  router.get("/audios/", handle);
};

export default list;
