import DateSelector from "@/app/_components/DateSelector";
import ReservationForm from "@/app/_components/ReservationForm";
import {
  getBookedDatesByCabinId,
  getCabin,
  getSettings,
} from "@/app/_libs/data-service";

async function Reservation({ cabinId }) {
  const [
    { name, maxCapacity, regularPrice, discount, image },
    { maxBookingLength },
    bookedDates,
  ] = await Promise.all([
    getCabin(cabinId),
    getSettings(),
    getBookedDatesByCabinId(cabinId),
  ]);

  return (
    <>
      <DateSelector
        name={name}
        cabinId={cabinId}
        maxBookingLength={maxBookingLength}
        regularPrice={regularPrice}
        discount={discount}
        bookedDates={bookedDates}
        image={image}
      />
      <ReservationForm maxCapacity={maxCapacity} />
    </>
  );
}

export default Reservation;
