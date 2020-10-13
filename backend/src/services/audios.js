import Audio from "../models/audio.js";
import { uploadFile } from "./s3-storage.js";

const AudioService = {
  create: async (payload) => {
    const name = 'audios/' + Date.now() + `_${payload.name}.webm`;

    uploadFile({
      name,
      fileName: payload.file.path,
    }, () => {})

    const audio = await Audio.create({
      name: payload.name,
      url: `https://atexto-challenge.s3.amazonaws.com/${name}`,
    });

    return audio;
  },

  update: async (id, name) => {
    const audio = await Audio.findById(id);
    audio.name = name;

    return await audio.save();
  },
};

export default AudioService;
