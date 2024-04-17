import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import NotFound from "../../img/mediaNotFound.gif";

export default function Character() {
  const params = useParams();
  const { store, actions } = useContext(Context);
  const getCharacter = async () => {
    const charcater = await fetch(
      `https://www.swapi.tech/api/people/${params.characterId}`
    );

    const characterFormated = await charcater.json();
    const newJson = characterFormated.result.properties;
    newJson.description = characterFormated.result.description;
    actions.setCharacter(newJson);
  };
  useEffect(() => {
    getCharacter();
  }, [params.characterId]);

  return (
    <div className="container">
      {store.character && (
        <div className="card mb-3 shadow" style={{ border: "1px solid black" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={
                  `https://starwars-visualguide.com/assets/img/characters/${params.characterId}` +
                  ".jpg"
                }
                className="img-fluid rounded-start"
                alt=""
                onError={(e) => {
                  e.target.src = NotFound;
                }}
                style={{ borderRight: "1px solid black" }}
              ></img>
            </div>
            <div className="col-md-8" style={{ flexShrink: 0 }}>
              <div className="card-body">
                <h3 className="card-title">{store.character.name}</h3>
                <p className="card-text">{store.character.description}</p>
                <h5 className="card-title">Carateristics</h5>
                <div
                  className="py-4 "
                  style={{
                    borderRadius: "10px",
                    border: "1px solid black",
                    background: "white",
                  }}
                >
                  <table className="table">
                    <thead>
                      <tr style={{ background: "translucid" }}>
                        <th scope="col">Atribute</th>
                        <th scope="col">Value</th>
                      </tr>
                    </thead>
                    <tbody style={{ background: "translucid" }}>
                      <tr>
                        <td>Height</td>
                        <td>{store.character.height}</td>
                      </tr>
                      <tr>
                        <td>Mass</td>
                        <td>{store.character.mass}</td>
                      </tr>
                      <tr>
                        <td>Hair Color</td>
                        <td>{store.character.hair_color}</td>
                      </tr>
                      <tr>
                        <td>Skin Color</td>
                        <td>{store.character.skin_color}</td>
                      </tr>
                      <tr>
                        <td>Eye Color</td>
                        <td>{store.character.eye_color}</td>
                      </tr>
                      <tr>
                        <td>Birth Year</td>
                        <td>{store.character.birth_year}</td>
                      </tr>
                      <tr>
                        <td>Gender</td>
                        <td>{store.character.gender}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
