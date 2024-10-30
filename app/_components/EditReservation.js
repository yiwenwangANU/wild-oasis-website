import DateSelector from "@/app/_components/DateSelector";
import ReservationForm from "@/app/_components/ReservationForm";
import {
  getBookedDatesByBookingIdExcludeOwn,
  getBooking,
  getCabinFromBookingId,
  getReservationRangeByBookingId,
} from "@/app/_libs/data-service";
import { auth } from "@/app/_libs/auth";

async function EditReservation({ bookingId }) {
  const [
    {
      cabins: { maxCapacity, regularPrice, discount },
    },
    reservedRange,
    bookedDates,
    { numGuests, observations },
    session,
  ] = await Promise.all([
    getCabinFromBookingId(bookingId),
    getReservationRangeByBookingId(bookingId),
    getBookedDatesByBookingIdExcludeOwn(bookingId),
    getBooking(bookingId),
    auth(),
  ]);
  // console.log(bookedDates);
  const today = new Date();
  today.setUTCDate(today.getUTCDate());
  today.setUTCHours(0, 0, 0, 0);
  const tomorrow = new Date();
  tomorrow.setUTCDate(tomorrow.getUTCDate() + 1);
  tomorrow.setUTCHours(0, 0, 0, 0);

  return (
    <>
      <DateSelector
        regularPrice={regularPrice}
        discount={discount}
        bookedDates={bookedDates}
        reservedRange={reservedRange}
        isEdit={true}
        tomorrow={tomorrow}
        today={today}
      />

      <ReservationForm
        maxCapacity={maxCapacity}
        username={session.user.name}
        userImg={session.user.image}
        isEdit={true}
        numGuests={numGuests}
        observations={observations}
        bookingId={bookingId}
      />
    </>
  );
}

export default EditReservation;
