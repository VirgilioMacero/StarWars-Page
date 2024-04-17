import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import logo from "../../img/StarWarsLogo.png";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav
      className="sticky-top navbar-light bg-light mb-3 "
      style={{ borderBottom: "1px solid black" }}
    >
      <div className="container navbar ">
        <Link to="/">
          <img
            className="navbar-brand mb-0 h1 shadow"
            width={80}
            src={logo}
            style={{
              marginRight: "0px",
              paddingRight: "5px",
              paddingLeft: "5px",
              border: "1px solid black",
              borderRadius: "10px",
            }}
          ></img>
        </Link>
        <div className="ml-auto">
          <div className="btn-group dropstart shadow">
            <button
              className="btn btn-success rounded"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ paddingLeft: "10px" }}
            >
              <div className="d-flex flex-row gap-2">
                <p
                  className="mb-0"
                  style={{
                    background: "#FFFFFF",
                    color: "black",
                    paddingLeft: "2px",
                    paddingRight: "2px",
                    borderRadius: "3px",
                  }}
                >
                  <strong>{store.favorites.length}</strong>
                </p>
                <i className="bi bi-heart-fill"></i>
              </div>
            </button>
            <ul
              className="dropdown-menu gap-2"
              style={{ paddingBottom: "0px" }}
            >
              {store.favorites.length != 0 ? (
                store.favorites.map((favorite) => {
                  return (
                    <li
                      key={Date() + Math.random()}
                      className="d-flex justify-content-between  mb-3"
                      style={{ paddingRight: "10px" }}
                    >
                      {favorite.type == "Character" && (
                        <Link
                          to={`people/${favorite.uid}`}
                          className="dropdown-item"
                        >
                          {favorite.name}
                        </Link>
                      )}{" "}
                      {favorite.type == "Vehicle" && (
                        <Link
                          to={`vehicles/${favorite.uid}`}
                          className="dropdown-item"
                        >
                          {favorite.name}
                        </Link>
                      )}{" "}
                      {favorite.type == "Planet" && (
                        <Link
                          to={`planets/${favorite.uid}`}
                          className="dropdown-item"
                        >
                          {favorite.name}
                        </Link>
                      )}
                      <button
                        onClick={() => {
                          actions.removeFavorite(favorite.name);
                        }}
                        className="btn btn-danger"
                      >
                        <i className="bi bi-x-lg"></i>
                      </button>
                    </li>
                  );
                })
              ) : (
                <li>
                  <a className="dropdown-item">No Favorite Yet</a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
