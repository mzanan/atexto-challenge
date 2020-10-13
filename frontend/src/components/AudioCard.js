import { Card, CardContent, IconButton, Input } from "@material-ui/core";

import EditIcon from "@material-ui/icons/Edit";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import DeleteIcon from "@material-ui/icons/Delete";

import React, { useState } from "react";
import Player from "./Player";
import "../styles/AudioCard.css";
import axios from "../axios.config";

function AudioCard(props) {
  const [editting, setEditting] = useState(false);
  const [inputValue, setInputValue] = useState(props.name);

  const toggleEditing = () => {
    setEditting(!editting);
  };

  const save = async () => {
    const formData = new FormData();
    formData.append("name", inputValue);
    await axios.put(`/audios/${props._id}`, formData);
    props.onUpdate(props._id, inputValue);

    setEditting(false);

    console.log(formData);
  };

  const remove = async () => {
    await axios.delete(`/audios/${props._id}`);

    props.onDelete(props._id);
  };

  return (
    <Card className="card">
      <CardContent>
        <Input
          component="h5"
          variant="h5"
          value={inputValue}
          disabled={!editting}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <div className="icons">
          <div className="icons__leftIcon">
            <IconButton
              style={{ display: editting ? "block" : "none" }}
              onClick={save}
            >
              <CheckCircleIcon color="primary" />
            </IconButton>
          </div>

          <div className="icons__rightIcons">
            <IconButton onClick={toggleEditing}>
              <EditIcon />
            </IconButton>

            <IconButton onClick={remove}>
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
      </CardContent>

      <Player url={props.url} />
    </Card>
  );
}

export default AudioCard;
