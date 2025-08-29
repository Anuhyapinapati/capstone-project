import React, { useState, useEffect } from "react";
import { fetchAPI, submitAPI } from "../api"; // ✅ import from local file

export default function BookingForm() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [availableTimes, setAvailableTimes] = useState([]);

  // Initialize available times
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setDate(today);
    const times = fetchAPI(new Date(today));
    setAvailableTimes(times);
  }, []);

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    const times = fetchAPI(new Date(selectedDate));
    setAvailableTimes(times);
    setTime("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date, time, guests, occasion };
    const success = submitAPI(formData);

    if (success) {
      alert(`✅ Reservation submitted for ${guests} people on ${date} at ${time}`);
    } else {
      alert("❌ Failed to submit reservation. Try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        <option value="">-- Select a time --</option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        min="1"
        max="10"
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Engagement</option>
        <option>Anniversary</option>
        <option>Others</option>
      </select>

      <input type="submit" value="Make Your Reservation" />
    </form>
  );
}
