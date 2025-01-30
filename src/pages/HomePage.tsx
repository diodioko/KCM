import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h1>Welcome to EcoRider, a zero emissions bus feasibility simulator!</h1>
      
      <div className="steps-container">
        <div className="step-box">
          <h2>Step 1: Prepare Files</h2>
          <p>Download the example files and prepare your data:</p>
          <div className="download-container">
            <div className="download-box">
              <h3>1. Operational Data</h3>
              <button className="download-btn">Download Sample</button>
            </div>
            <div className="download-box">
              <h3>2. Base Data</h3>
              <button className="download-btn">Download Sample</button>
            </div>
            <div className="download-box">
              <h3>3. Bus Data</h3>
              <button className="download-btn">Download Sample</button>
            </div>
          </div>
          <p className="note">You can download the sample files and prepare your data in this format, you need to upload them during step 2.</p>
        </div>
        
        <div className="step-box">
          <h2>Step 2: Input Current Fleet and Service Data</h2>
          <p>Input the data or file required in step 1 to generate current fleet service</p>
        </div>
        
        <div className="step-box">
          <h2>Step 3: Zero Emissions Simulation</h2>
          <p>Play with the variables to replace all the diesel bus into electric bus.</p>
        </div>
      </div>

      <button onClick={() => navigate("/upload")}>Start</button>
    </div>
  );
};

export default HomePage;