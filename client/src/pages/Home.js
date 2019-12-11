import React, { useContext, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { SocketContext } from "../contexts/socketContext";

const Home = props => {
  const { state, dispatch } = useContext(SocketContext);

  const onTest = useCallback(message => {
    console.log(message);
  }, []);

  useEffect(() => {
    dispatch({ type: "SUBSCRIBE", name: "test", value: onTest });
    // return () => dispatch({ type: "UNSUBSCRIBE", name: "test", value: onTest });
  }, [state, dispatch, onTest]);

  return (
    <>
      <h1>Home</h1>
      <button
        onClick={() => {
          dispatch({ type: "EMIT", name: "test", value: "This is a test" });
        }}
      >
        Click Me
      </button>
      <Link to="/other">Other</Link>
    </>
  );
};

export default Home;
