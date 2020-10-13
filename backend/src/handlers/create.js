import AudioService from "../services/audios.js";
import { upload } from "../services/storage.js";

const handle = async (req, res) => {
  const { name } = req.body;

  const audio = await AudioService.create({
      name,
      file: req.file
  });

  res.send({
      data: audio
  });
}

const create = (router) => {
  router.post("/audios", upload.single('file'), handle);
};

export default create;
