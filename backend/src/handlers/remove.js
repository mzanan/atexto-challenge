import Audio from '../models/audio.js';

const handle = async (req, res) => {
    const _id = req.params.id;

    await Audio.deleteOne({ _id });

    res.status(204).send();
}

const remove = router => {
    router.delete("/audios/:id", handle);
}

export default remove;