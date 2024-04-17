import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import NotFound from "../../img/mediaNotFound.gif";

export default function Planet() {
  const params = useParams();
  const { store, actions } = useContext(Context);
  const getPlanet = async () => {
    const planet = await fetch(
      `https://www.swapi.tech/api/planets/${params.planetId}`
    );

    const plenteFormated = await planet.json();
    const newJson = plenteFormated.result.properties;
    newJson.description = plenteFormated.result.description;
    actions.setPlanet(newJson);
  };
  useEffect(() => {
    getPlanet();
  }, [params.planetId]);

  return (
    <div className="container">
      {store.planet && (
        <div className="card mb-3 shadow" style={{ border: "1px solid black" }}>
          <div className="row g-0">
            <div
              className="col-md-4"
              style={{ borderRight: "1px solid black" }}
            >
              <img
                src={
                  `https://starwars-visualguide.com/assets/img/planets/${params.planetId}` +
                  ".jpg"
                }
                onError={(e) => {
                  e.target.src = NotFound;
                }}
                className="img-fluid rounded-start"
                alt=""
              ></img>
            </div>
            <div className="col-md-8" style={{ flexShrink: 0 }}>
              <div className="card-body">
                <h3 className="card-title">{store.planet.name}</h3>
                <p className="card-text">{store.planet.description}</p>
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
                        <td>Diameter</td>
                        <td>{store.planet.diameter}</td>
                      </tr>
                      <tr>
                        <td>Rotation Period</td>
                        <td>{store.planet.rotation_period}</td>
                      </tr>
                      <tr>
                        <td>Orbital Period</td>
                        <td>{store.planet.orbital_period}</td>
                      </tr>
                      <tr>
                        <td>Gravity</td>
                        <td>{store.planet.gravity}</td>
                      </tr>
                      <tr>
                        <td>Population</td>
                        <td>{store.planet.population}</td>
                      </tr>
                      <tr>
                        <td>Climate</td>
                        <td>{store.planet.climate}</td>
                      </tr>
                      <tr>
                        <td>Terrain</td>
                        <td>{store.planet.terrain}</td>
                      </tr>
                      <tr>
                        <td>Surface Water</td>
                        <td>{store.planet.surface_water}</td>
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
