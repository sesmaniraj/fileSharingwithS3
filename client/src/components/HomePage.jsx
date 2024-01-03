import React, { useRef } from "react";

const HomePage = () => {
  const inputUserRef = useRef();
  const handleUploadClick = () => {
    inputUserRef.current.click();
  };
  return (
    <div>
      <h1>FileSharing</h1>
      <p>Convinent way to share file in 3 easy step</p>
      <span>1</span>
      <input type="file" ref={inputUserRef} className="hidden" />
      <button className="bg-blue-400" onClick={handleUploadClick}>
        Select to upload file
      </button>
      <span>2</span>
      <p>wait until file is upload</p>
      <span>3</span>
      <p>the file will be available at :http://localhost:8000</p>
    </div>
  );
};

export default HomePage;
