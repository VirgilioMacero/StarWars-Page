import React, { useContext } from "react";
import { Context } from "../store/appContext";
import NotFound from "../../img/mediaNotFound.gif";
import { Link } from "react-router-dom";

export default function Card(props) {
  const { store, actions } = useContext(Context);
  const { url, title, imageUrl, id, type } = props;

  return (
    <div
      className=" col card shadow"
      style={{
        width: "18rem",
        border: "1px solid black",
        paddingLeft: "0px",
        paddingRight: "0px",
        minWidth: "15rem",
      }}
    >
      <img
        src={imageUrl}
        onError={(e) => {
          e.target.src = NotFound;
        }}
        height={270}
        style={{ borderBottom: "1px solid black" }}
        className="card-img-top"
        alt="..."
      ></img>
      <div className="card-body">
        <h5 className="card-title text-start">{title}</h5>
        <div className="d-flex justify-content-between">
          <Link
            to={url}
            className="btn btn-primary shadow "
            style={{ background: "black" }}
          >
            Read More
          </Link>
          <button
            onClick={() => {
              actions.updateFavorites(id, type);
            }}
            className="btn btn-success shadow"
            style={{ background: "black" }}
          >
            <i className="bi bi-heart-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
