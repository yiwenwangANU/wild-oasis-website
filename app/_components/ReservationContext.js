"use client";

import { useState, createContext, useContext } from "react";

const ReservationContext = createContext();

function ReservationProvider({ children }) {
  const initialState = { from: undefined, to: undefined };
  const [selected, setSelected] = useState(initialState);
  const clearSelected = () => setSelected(initialState);
  return (
    <ReservationContext.Provider
      value={{ selected, setSelected, clearSelected }}
    >
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined) throw new error("context used outside provider");
  return context;
}
export { ReservationProvider, useReservation };
