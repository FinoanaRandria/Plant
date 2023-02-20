import React from "react";
import logo from "../../assets/png/logo.png";
import "./Body.scss";
const Body = ({ data }) => {
  return (
    <div>
      <nav>
        <div>
          <img className="logo" src={logo} alt="logo" width={300} />
        </div>

        <hr />
      </nav>
      {/* =================================================================body==================================== */}

      <div className="plant-content">
        {data.map((elment) => (
          <div key={elment.id} className="plant">
            <img src={elment.photo} width={100} alt="plante" />
            <p> {elment.nom}</p>
          </div>
        ))}
      </div>

      {/* ============================================================================================================= */}
      <footer>
        <div className="f-container">
          <div>
            <h1>Prix</h1>
          </div>

          <div>
            <ul>
              <li> niveau1:8000ar</li>
              <li>niveau2:10000ar</li>
              <li>niveau3:15000ar</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Body;
