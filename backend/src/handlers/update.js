import AudioService from "../services/audios.js";

const handle = async (req, res) => {
  const { name } = req.body;
  console.log(req.body);
  const id = req.params.id;

  const audio = await AudioService.update(id, name);

  if (!audio) return res.status(404).send();

  res.send({
    data: audio,
  });
};

const update = (router) => {
  router.put("/audios/:id", handle);
};

export default update;
