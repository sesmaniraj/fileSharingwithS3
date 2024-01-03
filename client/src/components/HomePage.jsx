import React, { useRef } from "react";

const HomePage = () => {
  const inputUserRef = useRef();

  const handleUploadClick = () => {
    inputUserRef.current.click();
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">FileSharing</h1>
      <p className="text-lg mb-6">
        Convenient way to share files in 3 easy steps
      </p>

      <div className="flex items-center mb-4">
        <span className="text-2xl  mr-2">1</span>
        <input type="file" ref={inputUserRef} className="hidden" />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleUploadClick}
        >
          Select to upload file
        </button>
      </div>

      <div className="mb-4">
        <span className="text-2xl  mr-2">2</span>
        <p>Wait until the file is uploaded</p>
      </div>

      <div className="mb-4">
        <span className="text-2xl  mr-2">3</span>
        <p>
          The file will be available at:{" "}
          <a href="http://localhost:8000" className="text-blue-500">
            http://localhost:8000
          </a>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
