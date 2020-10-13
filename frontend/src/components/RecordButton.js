import React, { useEffect, useState, useRef } from "react";
import PlayArrow from "@material-ui/icons/PlayArrow";
import MicIcon from "@material-ui/icons/Mic";
import SendIcon from "@material-ui/icons/Send";
import { IconButton, Input } from "@material-ui/core";

import "../styles/RecordButton.css";

function RecordButton(props) {
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const inputRef = useRef(null);
  const [recording, setRecording] = useState(false);
  const [recordedAudio, setRecorderAudio] = useState(null);
  const [audioBlob, setAudioBlob] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);

  const start = () => {
    if (!mediaRecorder) return;

    setRecorderAudio(null);
    setRecording(true);

    mediaRecorder.start();
  };

  const stop = async () => {
    if (!mediaRecorder) return;

    await mediaRecorder.stop();

    setRecording(false);
  };

  const play = () => {
    if (!recordedAudio) return;

    recordedAudio.play();
  };

  const save = () => {
    props.onSave({ audioBlob, name: inputRef.current.value });

    setRecorderAudio(null);
    setMediaRecorder(null);
    setRecording(false);
    setRecorderAudio(null);
    setAudioBlob(null);
    setAudioChunks([]);

    inputRef.current.value = "";
  };

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const recorder = new MediaRecorder(stream);

      recorder.addEventListener("dataavailable", (event) => {
        audioChunks.push(event.data);
        setAudioChunks(audioChunks);
      });

      recorder.addEventListener("stop", () => {
        const audioBlob = new Blob(audioChunks, { type: audioChunks[0].type });
        const audioUrl = URL.createObjectURL(audioBlob);
        const audio = new Audio(audioUrl);

        setAudioBlob(audioBlob);
        setRecorderAudio(audio);
      });

      setMediaRecorder(recorder);
    });
  }, [audioChunks]);

  return (
    <div className="recordButton">
      <div>
        <IconButton
          onClick={recording ? stop : start}
          disabled={!mediaRecorder}
        >
          <MicIcon fontSize="large" color={recording ? "error" : "primary"} />
        </IconButton>
        <IconButton onClick={play} disabled={!recordedAudio}>
          <PlayArrow fontSize="large" />
        </IconButton>
      </div>
      <div>
        <Input
          inputRef={inputRef}
          disabled={!recordedAudio}
          name="name"
          placeholder="Name"
        />
        <IconButton onClick={save} disabled={!recordedAudio}>
          <SendIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
}

export default RecordButton;
