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
    bookedDates,
    session,
  ] = await Promise.all([
    getCabin(cabinId),
    getBookedDatesByCabinId(cabinId),
    auth(),
  ]);
  const tomorrow = new Date();
  tomorrow.setUTCDate(tomorrow.getUTCDate() + 1);
  tomorrow.setUTCHours(0, 0, 0, 0);
  return (
    <>
      <DateSelector
        name={name}
        cabinId={cabinId}
        regularPrice={regularPrice}
        discount={discount}
        bookedDates={bookedDates}
        image={image}
        tomorrow={tomorrow}
        isEdit={false}
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
