import { supabase } from "./supabase";
import { notFound } from "next/navigation";
import { eachDayOfInterval } from "./helper";
import { DateTime } from "luxon";
/////////////
// GET

export async function getCabin(id) {
  const { data, error } = await supabase
    .from("cabins")
    .select("*")
    .eq("id", id)
    .single();

  // For testing
  // await new Promise((res) => setTimeout(res, 1000));

  if (error) {
    console.error(error);
    notFound();
  }

  return data;
}

export async function getCabinPrice(id) {
  const { data, error } = await supabase
    .from("cabins")
    .select("regularPrice, discount")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
  }

  return data;
}

export const getCabins = async function () {
  const { data, error } = await supabase
    .from("cabins")
    .select("id, name, maxCapacity, regularPrice, discount, image")
    .order("name");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
};

// Guests are uniquely identified by their email address
export async function getGuest(email) {
  const { data, error } = await supabase
    .from("guests")
    .select("*")
    .eq("email", email)
    .single();

  // No error here! We handle the possibility of no guest in the sign in callback
  return data;
}

export async function getBooking(id) {
  const { data, error, count } = await supabase
    .from("bookings")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not get loaded");
  }

  return data;
}

export async function getCabinFromBookingId(bookingId) {
  const { data, error } = await supabase
    .from("bookings")
    .select("cabins(*)")
    .eq("id", bookingId)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not get loaded");
  }

  return data;
}

export async function getReservationRangeByBookingId(bookingId) {
  const { data, error } = await supabase
    .from("bookings")
    .select("startDate, endDate")
    .eq("id", bookingId)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }
  return {
    from: new Date(data.startDate),
    to: new Date(data.endDate),
  };
}

export async function getBookedDatesByBookingIdExcludeOwn(bookingId) {
  const { data: bookingData, error: bookingError } = await supabase
    .from("bookings")
    .select("cabinId, startDate, endDate")
    .eq("id", bookingId)
    .single();
  // console.log(`booking id: ${bookingId}`);
  // console.log(bookingData);
  if (bookingError) {
    console.error("Error fetching cabinId:", bookingError);
  } else {
    const { cabinId, startDate, endDate } = bookingData;

    const bookedDate = await getBookedDatesByCabinId(cabinId);
    // console.log(bookedDate);

    const filteredDates = bookedDate.filter((date) => {
      return (
        date.getTime() < new Date(startDate + "Z").getTime() ||
        date.getTime() > new Date(endDate + "Z").getTime()
      );
    });
    // console.log(filteredDates);
    return filteredDates;
  }
}

export async function getBookings(guestId) {
  const { data, error, count } = await supabase
    .from("bookings")
    // We actually also need data on the cabins as well. But let's ONLY take the data that we actually need, in order to reduce downloaded data.
    .select(
      "id, created_at, startDate, endDate, numNights, numGuests, totalPrice, guestId, cabinId, cabins(name, image)"
    )
    .eq("guestId", guestId)
    .order("startDate");

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  return data;
}

export async function getBookedDatesByCabinId(cabinId) {
  const today = DateTime.utc().startOf("day");

  // Getting all bookings
  const { data, error } = await supabase
    .from("bookings")
    .select("*")
    .eq("cabinId", cabinId)
    .gte("startDate", today.toISO());

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }
  // console.log(data);
  // Converting to actual dates to be displayed in the date picker

  const bookedDates = data
    .map((booking) => {
      const startDate = DateTime.fromISO(booking.startDate, {
        zone: "utc",
      }).startOf("day");
      const endDate = DateTime.fromISO(booking.endDate, {
        zone: "utc",
      }).startOf("day");

      const dates = [];
      let currentDate = startDate;

      while (currentDate <= endDate) {
        dates.push(currentDate.toJSDate());
        currentDate = currentDate.plus({ days: 1 });
      }

      return dates;
    })
    .flat();

  return bookedDates;
}

export async function getSettings() {
  const { data, error } = await supabase.from("settings").select("*").single();

  if (error) {
    console.error(error);
    throw new Error("Settings could not be loaded");
  }

  return data;
}

export async function getCountries() {
  try {
    const res = await fetch(
      "https://restcountries.com/v3/all?fields=name,flag"
    );
    const countries = await res.json();
    return countries;
  } catch {
    throw new Error("Could not fetch countries");
  }
}

/////////////
// CREATE

export async function createGuest(newGuest) {
  const { data, error } = await supabase.from("guests").insert([newGuest]);

  if (error) {
    console.error(error);
    throw new Error("Guest could not be created");
  }

  return data;
}

export async function createBooking(newBooking) {
  const { data, error } = await supabase
    .from("bookings")
    .insert([newBooking])
    // So that the newly created object gets returned!
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not be created");
  }

  return data;
}

/////////////
// UPDATE

// The updatedFields is an object which should ONLY contain the updated data
export async function updateGuest(id, updatedFields) {
  const { data, error } = await supabase
    .from("guests")
    .update(updatedFields)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Guest could not be updated");
  }
  return data;
}

export async function updateBooking(id, updatedFields) {
  const { data, error } = await supabase
    .from("bookings")
    .update(updatedFields)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }
  return data;
}

/////////////
// DELETE

export async function deleteBooking(id) {
  const { data, error } = await supabase.from("bookings").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be deleted");
  }
  return data;
}
