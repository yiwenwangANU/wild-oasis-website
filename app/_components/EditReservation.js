import DateSelector from "@/app/_components/DateSelector";
import ReservationForm from "@/app/_components/ReservationForm";
import {
  getBookedDatesByBookingIdExcludeOwn,
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
    session,
  ] = await Promise.all([
    getCabinFromBookingId(bookingId),
    getReservationRangeByBookingId(bookingId),
    getBookedDatesByBookingIdExcludeOwn(bookingId),
    auth(),
  ]);
  // console.log(bookedDates);
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
      />

      <ReservationForm
        maxCapacity={maxCapacity}
        username={session.user.name}
        userImg={session.user.image}
        isEdit={true}
      />
    </>
  );
}

export default EditReservation;
