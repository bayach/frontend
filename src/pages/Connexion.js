import React from 'react';
import Log from "../components/Log";

function connexion() {
  return (
    <div className="connexion-page">
      
        <div className="log-container">
          <Log signin={false} signup={true} />
          <div className="img-container">
            <img src="./img/log.svg" alt="img-log" />
          </div>
        </div>
      
    </div>
  );
};

export default connexion;