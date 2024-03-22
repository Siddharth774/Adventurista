import {
  createContext,
  useState,
  useEffect,
  useContext,
  useReducer,
} from "react";

const CitiesContext = createContext();

// const BASE_URL = "http://localhost:9000";
const BASE_URL = "https://adventurista-data.onrender.com/cities";

const initalState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "cities/loading":
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
      };

    case "city/loaded":
      return { ...state, isLoading: false, currentCity: action.payload };

    case "city/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };
    case "city/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
        currentCity: {},
      };
    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      throw new Error("Unknown action type error");
  }
}

// eslint-disable-next-line react/prop-types
function CitiesProvider({ children }) {
  const [{ cities, isLoading, currentCity, error }, dispatch] = useReducer(
    reducer,
    initalState
  );

  // const [cities, setCities] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [currentCity, setCurrentCity] = useState({});
  useEffect(function () {
    async function fetchCities() {
      dispatch({ type: "loading" });

      try {
        // setIsLoading(true);
        const res = await fetch(`${BASE_URL}`);
        const data = await res.json();
        // setCities(data);
        dispatch({ type: "cities/loading", payload: data });
      } catch {
        // alert("There was an error loading data...");
        dispatch({
          type: "rejected",
          payload: "There was an error loading data...",
        });
      }
      // finally {
      //   setIsLoading(false);
      // }
    }
    fetchCities();
  }, []);

  async function getCity(id) {
    if (Number(id) === currentCity.id) return;

    dispatch({ type: "loading" });
    try {
      // setIsLoading(true);
      const res = await fetch(`${BASE_URL}/${id}`);
      const data = await res.json();
      // setCurrentCity(data);
      dispatch({ type: "city/loaded", payload: data });
    } catch {
      // alert("There was an error loading data...");
      dispatch({
        type: "rejected",
        payload: "There was an error fetching city...",
      });
    }
    // finally {
    //   setIsLoading(false);
    // }
  }

  async function createCity(newCity) {
    dispatch({ type: "loading" });

    try {
      // setIsLoading(true);
      const res = await fetch(`${BASE_URL}/`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      // console.log(data);
      // setCities(cities.concat(data));
      dispatch({ type: "city/created", payload: data });
    } catch {
      // alert("There was an error creating new city...");
      dispatch({
        type: "rejected",
        payload: "There was an error creating new city...",
      });
    }
    // finally {
    //   setIsLoading(false);
    // }
  }
  // hello this this is new addition.

  async function deleteCity(id) {
    dispatch({ type: "loading" });
    try {
      // setIsLoading(true);
      await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
      });

      // console.log(data);
      // setCities((cities) => cities.filter((city) => city.id !== id));
      dispatch({ type: "city/deleted", payload: id });
    } catch {
      // alert("There was an error deleting city...");
      dispatch({
        type: "rejected",
        payload: "There was an error deleting city...",
      });
    }
    // finally {
    //   setIsLoading(false);
    // }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        error,
        currentCity,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}
function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined) {
    throw new Error("CitiesContext  must be used within a CitiesProvider.");
  }
  return context;
}

export { CitiesProvider, useCities };
