import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import NotFound from "../../img/mediaNotFound.gif";

export default function Vehicle() {
  const params = useParams();
  const { store, actions } = useContext(Context);
  const getVehicle = async () => {
    const vehicle = await fetch(
      `https://www.swapi.tech/api/vehicles/${params.vehicleId}`
    );

    const vehicleFormated = await vehicle.json();
    const newJson = vehicleFormated.result.properties;
    newJson.description = vehicleFormated.result.description;
    actions.setVehicle(newJson);
  };
  useEffect(() => {
    getVehicle();
  }, [params.vehicleId]);

  return (
    <div className="container">
      {store.vehicle && (
        <div className="card mb-3 shadow" style={{ border: "1px solid black" }}>
          <div className="row g-0">
            <div
              className="col-md-4"
              style={{ borderRight: "1px solid black" }}
            >
              <img
                src={
                  `https://starwars-visualguide.com/assets/img/vehicles/${params.vehicleId}` +
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
                <h3 className="card-title">{store.vehicle.name}</h3>
                <p className="card-text">{store.vehicle.description}</p>
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
                        <td>Model</td>
                        <td>{store.vehicle.model}</td>
                      </tr>
                      <tr>
                        <td>Vehicle Class</td>
                        <td>{store.vehicle.vehicle_class}</td>
                      </tr>
                      <tr>
                        <td>manufacturer</td>
                        <td>{store.vehicle.manufacturer}</td>
                      </tr>
                      <tr>
                        <td>Cost in credits</td>
                        <td>{store.vehicle.cost_in_credits}</td>
                      </tr>
                      <tr>
                        <td>Length</td>
                        <td>{store.vehicle.length}</td>
                      </tr>
                      <tr>
                        <td>Crew</td>
                        <td>{store.vehicle.crew}</td>
                      </tr>
                      <tr>
                        <td>Passengers</td>
                        <td>{store.vehicle.passengers}</td>
                      </tr>
                      <tr>
                        <td>Max atmosphering speed</td>
                        <td>{store.vehicle.max_atmosphering_speed}</td>
                      </tr>
                      <tr>
                        <td>Cargo Capacity</td>
                        <td>{store.vehicle.cargo_capacity}</td>
                      </tr>
                      <tr>
                        <td>Consumables</td>
                        <td>{store.vehicle.consumables}</td>
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
