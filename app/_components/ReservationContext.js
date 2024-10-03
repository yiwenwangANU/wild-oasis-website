"use client";

import { useState, createContext, useContext } from "react";

const ReservationContext = createContext();

function ReservationProvider({ children }) {
  const initialState = { from: undefined, to: undefined };
  const [ReservedDate, setReservedDate] = useState(initialState);
  const [reservedCabin, setReservedCabin] = useState();
  const [reservationPrice, setReservationPrice] = useState();
  const clearReservation = () => {
    setReservedDate(initialState);
    setReservedCabin("");
    setReservationPrice("");
  };
  return (
    <ReservationContext.Provider
      value={{
        ReservedDate,
        setReservedDate,
        clearReservation,
        reservedCabin,
        setReservedCabin,
        reservationPrice,
        setReservationPrice,
      }}
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
