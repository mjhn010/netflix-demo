import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import YouTube from "react-youtube";
import { useState } from "react";
import "./movieDetailModal.style.css"


const MovieDetailModal = ({ VideoData }) => {
  console.log("dede", VideoData);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const opts = {
    width: "100%",
    height: "700px",
    playerVars: {
      autoplay: 0,
    },
  };
  const onReady = (event) => {
    event.target.pauseVideo();
  };
  return (
    <div className="flex" style={{width:"100%"}}>
      <Button
        onClick={() => handleShow()}
        className="view-btn"
        variant="outline-success"
      >
        예고편
      </Button>
      <Modal className="modal-box"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
         <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body className="box">
          <YouTube
            videoId={VideoData && VideoData[1]?.key}
            opts={opts}
            onReady={(e) => onReady(e)}
          />
          
        </Modal.Body>
        <Modal.Footer className="box">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MovieDetailModal;
