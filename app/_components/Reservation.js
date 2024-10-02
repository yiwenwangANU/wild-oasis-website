import DateSelector from "@/app/_components/DateSelector";
import ReservationForm from "@/app/_components/ReservationForm";
import {
  getBookedDatesByCabinId,
  getCabin,
  getSettings,
} from "@/app/_libs/data-service";

async function Reservation({ cabinId }) {
  const [
    { maxCapacity, regularPrice, discount },
    { maxBookingLength },
    bookedDates,
  ] = await Promise.all([
    getCabin(cabinId),
    getSettings(),
    getBookedDatesByCabinId(cabinId),
  ]);
  console.log(bookedDates);
  return (
    <>
      <DateSelector
        maxBookingLength={maxBookingLength}
        regularPrice={regularPrice}
        discount={discount}
        bookedDates={bookedDates}
      />
      <ReservationForm maxCapacity={maxCapacity} />
    </>
  );
}

export default Reservation;
