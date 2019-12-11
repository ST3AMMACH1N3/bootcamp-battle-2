import React, { useContext, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { SocketContext } from "../contexts/socketContext";

const Other = props => {
  const { state, dispatch } = useContext(SocketContext);

  const onTest = useCallback(message => {
    console.log(message);
  }, []);

  useEffect(() => {
    // dispatch('SUBSCRIBE')
  }, [state, dispatch]);

  return (
    <>
      <h1>Other</h1>
      <button
        onClick={() => {
          dispatch({ type: "EMIT", name: "test", value: "Second" });
        }}
      >
        Click Me
      </button>
      <Link to="/">Home</Link>
    </>
  );
};

export default Other;
