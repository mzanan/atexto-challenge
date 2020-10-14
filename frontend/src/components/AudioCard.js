import { Card, CardContent, IconButton, Input, InputLabel } from "@material-ui/core";

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
    await axios.put(`/audios/${props._id}`, { name: inputValue });
    props.onUpdate(props._id, inputValue);

    setEditting(false);
  };

  const remove = async () => {
    await axios.delete(`/audios/${props._id}`);

    props.onDelete(props._id);
  };

  return (
    <Card className="card">
      <CardContent>
        <div className="inputsContainer">
          <Input
            component="h5"
            variant="h5"
            value={inputValue}
            disabled={!editting}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <InputLabel className="inputsContainer__dateValue">  
            {
              (new Date(Date.parse(props.createdAt)).toString()).substr(0,25)
            }
          </InputLabel>
        </div>

        <div className="icons">
          <div>
            <IconButton
              style={{ display: editting ? "block" : "none" }}
              onClick={save}
            >
              <CheckCircleIcon color="primary" />
            </IconButton>
          </div>

          <div>
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
