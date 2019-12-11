import React, { createContext, useEffect, useReducer } from "react";
import io from "socket.io-client";

const initialState = {
  socket: null,
  listeners: []
};

const socketReducer = (state, action) => {
  const { type, name, value } = action;
  if (!state.socket && type !== "SET_SOCKET") return state;
  switch (type) {
    case "SET_SOCKET":
      return { ...state, socket: value };
    case "SUBSCRIBE":
      state.socket.on(name, value);
      return state;
    case "UNSUBSCRIBE":
      state.socket.off(name, value);
      return state;
    case "EMIT":
      state.socket.emit(name, value);
      return state;
    default:
      return state;
  }
};

const SocketContext = createContext(initialState);

const SocketProvider = props => {
  const [allState, dispatch] = useReducer(socketReducer, initialState);
  const { socket, ...state } = allState;

  useEffect(() => {
    let pieces = window.location.origin.split(":");
    pieces[pieces.indexOf(window.location.port)] = 3001;
    const url = pieces.join(":");
    dispatch({ type: "SET_SOCKET", value: io(url) });
    // setSocket(io());
  }, []);

  return (
    <SocketContext.Provider value={{ socket, state, dispatch }}>
      {props.children}
    </SocketContext.Provider>
  );
};

export { SocketContext, SocketProvider };
