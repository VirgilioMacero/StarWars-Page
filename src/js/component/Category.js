import React from "react";
import Card from "./Card";

export default function Category(props) {
  const { categoryTitle, list, imageUrl, type } = props;

  let url = "/";
  if (type === "Character") {
    url = "/people/";
  } else if (type === "Vehicle") {
    url = "/vehicles/";
  } else if (type === "Planet") {
    url = "/planets/";
  }

  return (
    <div
      className=" bg-light shadow"
      style={{
        borderRadius: "10px",
        padding: "50px",
        border: "1px solid black",
      }}
    >
      <h1 className="mb-5 text-start" style={{ fontFamily: "Star Wars" }}>
        {!categoryTitle ? "Section" : categoryTitle}
      </h1>
      <div
        className="row gap-2 px-2"
        style={{ height: "400px", overflowX: "auto", flexWrap: "unset" }}
      >
        {list.map((value) => {
          return (
            <Card
              key={value.uid}
              title={value.name}
              imageUrl={imageUrl + value.uid + ".jpg"}
              id={value.uid}
              type={type}
              url={url + value.uid}
            />
          );
        })}
      </div>
    </div>
  );
}
