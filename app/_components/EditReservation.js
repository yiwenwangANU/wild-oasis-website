import DateSelector from "@/app/_components/DateSelector";
import ReservationForm from "@/app/_components/ReservationForm";
import {
  getBookedDatesByBookingIdExcludeOwn,
  getCabinFromBookingId,
  getReservationRangeByBookingId,
  getSettings,
} from "@/app/_libs/data-service";
import { auth } from "@/app/_libs/auth";

async function EditReservation({ bookingId }) {
  const [
    { maxCapacity, regularPrice, discount },
    { maxBookingLength },
    reservedRange,
    bookedDates,
    session,
  ] = await Promise.all([
    getCabinFromBookingId(bookingId),
    getSettings(),
    getReservationRangeByBookingId(bookingId),
    getBookedDatesByBookingIdExcludeOwn(bookingId),
    auth(),
  ]);
  // console.log(bookedDates);
  // console.log(reservedRange);
  return (
    <>
      <DateSelector
        maxBookingLength={maxBookingLength}
        regularPrice={regularPrice}
        discount={discount}
        bookedDates={bookedDates}
        reservedRange={reservedRange}
        isEdit={true}
      />

      <ReservationForm
        maxCapacity={maxCapacity}
        username={session.user.name}
        userImg={session.user.image}
      />
    </>
  );
}

export default EditReservation;
