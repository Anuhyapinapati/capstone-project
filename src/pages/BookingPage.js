import React from "react";
import BookingForm from "../components/BookingForm";

export default function BookingPage({ availableTimes, dispatch }) {
  return (
    <section
      className="booking-page"
      aria-labelledby="booking-heading"
    >
      <h1 id="booking-heading">Reserve a Table</h1>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </section>
  );
}
