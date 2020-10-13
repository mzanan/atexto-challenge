import Audio from "../models/audio.js";

const handle = async (req, res) => {
  const id = req.params.id;
  const data = await Audio.findById(id);
  if (!data) return res.status(404).send();
  res.send({ data });
}

const read = (router) => {
  router.get("/audios/:id", handle);
};

export default read;
