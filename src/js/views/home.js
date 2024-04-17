import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Category from "../component/Category";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <div className=" container text-center mt-5">
        <Category
          categoryTitle="Characters"
          imageUrl="https://starwars-visualguide.com/assets/img/characters/"
          list={store.people}
          type="Character"
        />
      </div>
      <div className=" container text-center mt-5">
        <Category
          categoryTitle="Vehicles"
          imageUrl="https://starwars-visualguide.com/assets/img/vehicles/"
          list={store.vehicles}
          type="Vehicle"
        />
      </div>
      <div className=" container text-center mt-5">
        <Category
          categoryTitle="Planets"
          imageUrl="https://starwars-visualguide.com/assets/img/planets/"
          list={store.planets}
          type="Planet"
        />
      </div>
    </div>
  );
};
