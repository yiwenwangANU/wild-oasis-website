import DateSelector from "@/app/_components/DateSelector";
import ReservationForm from "@/app/_components/ReservationForm";
import { getCabin, getSettings } from "../_libs/data-service";

async function Reservation({ cabinId }) {
  const [{ maxCapacity, regularPrice, discount }, { maxBookingLength }] =
    await Promise.all([getCabin(cabinId), getSettings()]);

  return (
    <>
      <DateSelector
        maxBookingLength={maxBookingLength}
        regularPrice={regularPrice}
        discount={discount}
      />
      <ReservationForm maxCapacity={maxCapacity} />
    </>
  );
}

export default Reservation;
