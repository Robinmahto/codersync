import React, { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import toast from "react-hot-toast";
import {useNavigate} from 'react-router-dom';

const Home = () => {
  // Navigation
  const navigate = useNavigate();

  // state
  const [roomId, setRoomID] = useState("");
  const [userName, setUserName] = useState("");

  // generate new id
  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidV4();
    setRoomID(id);
    toast.success("created successfully");
  };

  // join Room
  const joinRoom = () => {
    if (!roomId || !userName) {
      toast.error("Room ID and username is required");
      return;
    }
    // Redirect
    navigate(`/editor/${roomId}`, {
      state: {
        userName,
      },
    });
  };

  // handleInputEnter
  const handleInputEnter = (e)=>{
      if(e.code === 'Enter'){
         joinRoom();
      }
  }

  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <h1>Coder-Sync</h1>
        <h4 className="mainLabel">Paste invitation ROOM ID</h4>
        <div className="inputGroup">
          <input
            type="text"
            className="input-box"
            placeholder="ROOM ID"
            value={roomId}
            onChange={(e) => {
              setRoomID(e.target.value);
            }}
            onKeyUp={handleInputEnter}
          />
          <input
            type="text"
            className="input-box"
            placeholder="USERNAME"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            onKeyUp={handleInputEnter}
          />
          <button className="btn joinBtn" onClick={joinRoom}>
            join
          </button>
          <span className="createInfo">
            if you don't have invite then create &nbsp;
            <a href="#" className="createNewBtn" onClick={createNewRoom}>
              new room
            </a>
          </span>
        </div>
      </div>

      <footer>
        <h4>
          Built with By <a href="#">robinmahto</a>
        </h4>
      </footer>
    </div>
  );
};

export default Home;
