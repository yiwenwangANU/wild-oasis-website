import DateSelector from "@/app/_components/DateSelector";
import ReservationForm from "@/app/_components/ReservationForm";
import {
  getBookedDatesByCabinId,
  getCabin,
  getSettings,
} from "@/app/_libs/data-service";
import { auth } from "@/app/_libs/auth";
import LoginMessage from "./LoginMessage";

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
  const session = await auth();

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
      {session ? (
        <ReservationForm
          maxCapacity={maxCapacity}
          username={session.user.name}
          userImg={session.user.image}
        />
      ) : (
        <LoginMessage />
      )}
    </>
  );
}

export default Reservation;
