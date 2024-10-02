import DateSelector from "@/app/_components/DateSelector";
import ReservationForm from "@/app/_components/ReservationForm";
import { getCabin, getSettings } from "../_libs/data-service";

async function Reservation({ cabinId }) {
  const [
    { maxCapacity, regularPrice, discount },
    { minBookingLength, maxBookingLength },
  ] = await Promise.all([getCabin(cabinId), getSettings()]);
  console.log(maxBookingLength);
  return (
    <>
      <DateSelector min={minBookingLength} max={maxBookingLength} />
      <ReservationForm maxCapacity={maxCapacity} />
    </>
  );
}

export default Reservation;
