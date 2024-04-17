const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      vehicles: [],
      people: [],
      planets: [],
      favorites: [],
      character: {},
      planet: {},
      vehicle: {},
    },
    actions: {
      setCharacter: (character) => {
        setStore({ character: character });
      },
      setPlanet: (planet) => {
        setStore({ planet: planet });
      },
      setVehicle: (vehicle) => {
        setStore({ vehicle: vehicle });
      },
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
      getPeople: async () => {
        const query = await fetch("https://www.swapi.tech/api/people/");

        const people = await query.json();

        setStore({ people: people.results });
      },
      getPlanets: async () => {
        const query = await fetch("https://www.swapi.tech/api/planets/");

        const planet = await query.json();

        setStore({ planets: planet.results });
      },
      getVehicles: async () => {
        const query = await fetch("https://www.swapi.tech/api/vehicles/");

        const vehicle = await query.json();

        setStore({ vehicles: vehicle.results });
      },
      removeFavorite: (name) => {
        const newArray = getStore().favorites.filter(
          (value) => value.name !== name
        );

        setStore({ favorites: newArray });
      },
      updateFavorites: (id, type) => {
        const store = getStore();
        let containValue = true;
        let returningValue = {};

        if (type === "Character") {
          store.people.map((person1) => {
            if (person1.uid == id) {
              returningValue = person1;
              returningValue.type = type;
            }
          });
          containValue = store.favorites.some(
            (value) => value.name === returningValue.name
          );
        } else if (type === "Vehicle") {
          store.vehicles.map((vehicle1) => {
            if (vehicle1.uid == id) {
              returningValue = vehicle1;
              returningValue.type = type;
            }
          });
          containValue = store.favorites.some(
            (value) => value.name === returningValue.name
          );
        } else if (type === "Planet") {
          store.planets.map((planet1) => {
            if (planet1.uid == id) {
              returningValue = planet1;
              returningValue.type = type;
            }
          });
          containValue = store.favorites.some(
            (value) => value.name === returningValue.name
          );
        }

        if (!containValue) {
          setStore({ favorites: [...store.favorites, returningValue] });
        }
      },
    },
  };
};

export default getState;
