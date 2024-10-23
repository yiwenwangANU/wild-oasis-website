import { UTCDate } from "@date-fns/utc";
import { isAfter, isBefore, max, min } from "date-fns";

export function formatDaysDifference(daysDifference) {
  if (daysDifference >= 60) {
    const months = Math.ceil(daysDifference / 30);
    return `in ${months} month${months > 1 ? "s" : ""}`;
  } else if (daysDifference >= 30) {
    return `in 1 month`;
  } else if (daysDifference >= 2) {
    return `in ${daysDifference} days`;
  } else if (daysDifference === 1) {
    return `in 1 day`;
  } else if (daysDifference === 0) {
    return `today`;
  } else if (daysDifference === -1) {
    return `1 day ago`;
  } else if (daysDifference <= -60) {
    const months = Math.ceil(-daysDifference / 30);
    return `${months} month${months > 1 ? "s" : ""} ago`;
  } else if (daysDifference <= -30) {
    return `1 month ago`;
  } else {
    // daysDifference between -29 and -1
    const days = -daysDifference;
    return `${days} day${days > 1 ? "s" : ""} ago`;
  }
}

export function toUTCDate(date) {
  const utcDate = new UTCDate(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );

  return utcDate;
}

export function getNearestDateOnLeft(targetDate, bookedDates) {
  if (!targetDate || !bookedDates) return;
  const datesBeforeTarget = bookedDates.filter((date) =>
    isBefore(date, targetDate)
  );
  if (datesBeforeTarget.length !== 0) return max(datesBeforeTarget);
}

export function getNearestDateOnRight(targetDate, bookedDates) {
  if (!targetDate || !bookedDates) return;
  const datesAfterTarget = bookedDates.filter((date) =>
    isAfter(date, targetDate)
  );
  if (datesAfterTarget.length !== 0) return min(datesAfterTarget);
}
