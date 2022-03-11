import React from "react";
import "./faceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  if (!imageUrl) return null;

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ position: "relative", marginTop: "10px" }}>
        <img
          id="inputImage"
          alt=""
          src={imageUrl}
          width="500px"
          height="auto"
        />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
