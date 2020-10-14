import React, { useEffect, useState } from "react";

import NavBar from "./components/NavBar";
import RecordButton from "./components/RecordButton";
import axios from "./axios.config";
import AudioCard from "./components/AudioCard";

import "./styles/App.css";

function App() {
  const [audios, setAudios] = useState([]);

  const fetchAudios = async () => {
    const req = await axios.get("/audios");

    setAudios(req.data.data);
  };

  const saveFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file.audioBlob);
    formData.append("name", file.name);

    const req = await axios.post("/audios", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    setAudios([req.data.data, ...audios]);
  };

  const renderItems = () => {
    return audios
      .filter((audio) => !audio.hide)
      .map((audio) => (
        <AudioCard
          key={audio._id}
          {...audio}
          onDelete={removeItem}
          onUpdate={updateItem}
        />
      ));
  };

  const removeItem = (id) => {
    setAudios(audios.filter((audio) => audio._id !== id));
  };

  const updateItem = (id, newName) => {
    const audio = audios.find((audio) => audio._id === id);

    audio.name = newName;

    audios[audios.indexOf(audio)] = audio;

    setAudios(audios);
  };

  const filterItems = (search) => {
    const filterAudios = audios.map((audio) => {
      let hide = true;

      if (audio.name?.includes(search)) hide = false;

      return { ...audio, hide };
    });

    setAudios(filterAudios);
  };

  const orderByName = () => {
    return console.log("hola");
  };

  const orderByDate = () => {};

  useEffect(() => {
    fetchAudios();
  }, []);

  return (
    <div className="container">
      <NavBar
        onSearch={filterItems}
        orderByName={orderByName}
        orderByDate={orderByDate}
      />
      <div className="container__cards">
        {
          renderItems()
        }
      </div>
      <RecordButton onSave={saveFile} />
    </div>
  );
}

export default App;
