import axios from "axios";
import React, { useEffect, useReducer } from "react";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "DATA_FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "DATA_FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: "Ooops ... Something went wrong",
      };
    default:
      return state;
  }
};

function UseReducerDataFetch() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({type: "DATA_FETCH_SUCCESS", payload: response.data});
      })
      .catch((error) => {
       dispatch({type: "DATA_FETCH_ERROR"})
      });
  }, []);
  return (
    <div>
  
   {
        state.isLoading ? "data is loading" : state.post.body

   }
   {
    state.error ? state.error : null
   }
        
    </div>

  
  );
}

export default UseReducerDataFetch;
