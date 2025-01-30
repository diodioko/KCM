import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UploadPage: React.FC = () => {
  const navigate = useNavigate();
  const [files, setFiles] = useState<(File | null)[]>([null, null, null]);

  const handleFileChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = [...files];
    newFiles[index] = event.target.files ? event.target.files[0] : null;
    setFiles(newFiles);
  };

  return (
    <div className="page">
      <h1>Upload Data Files</h1>
      {[0, 1, 2].map((index) => (
        <div key={index}>
          <label>File {index + 1}:</label>
          <input type="file" onChange={(e) => handleFileChange(index, e)} />
        </div>
      ))}
      <button onClick={() => navigate("/charts")}>Next</button>
    </div>
  );
};

export default UploadPage;