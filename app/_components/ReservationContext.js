"use client";

import { useState, createContext, useContext } from "react";

const ReservationContext = createContext();

function ReservationProvider({ children }) {
  const initialState = { from: undefined, to: undefined };
  const [reservedCabinId, setReservedCabinId] = useState();
  const [reservedDate, setReservedDate] = useState(initialState);
  const [reservedCabin, setReservedCabin] = useState();
  const [reservationPrice, setReservationPrice] = useState();
  const [reservedCabinImage, setReservedCabinImage] = useState();
  const [totalDays, setTotalDays] = useState();
  const clearReservation = () => {
    setReservedDate(initialState);
    setReservedCabinId("");
    setReservedCabin("");
    setReservationPrice("");
    setReservedCabinImage("");
    setTotalDays("");
  };
  return (
    <ReservationContext.Provider
      value={{
        reservedCabinId,
        setReservedCabinId,
        reservedDate,
        setReservedDate,
        clearReservation,
        reservedCabin,
        setReservedCabin,
        reservationPrice,
        setReservationPrice,
        reservedCabinImage,
        setReservedCabinImage,
        totalDays,
        setTotalDays,
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
