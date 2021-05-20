import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';
export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='titleInput'>Title</label>
      <input
        type="text"
        id='titleInput'
        value={title}
        onChange={({ target }) => setTitle(target.value)}
      />
      <label htmlFor='dateInput'>Date</label>
      <input
        type="date"
        id='dateInput'
        value={date}
        min={getTodayString()}
        onChange={({ target }) => setDate(target.value)}
      />
      <label htmlFor='timeInput'>Time</label>
      <input
        type="time"
        id='timeInput'
        value={time}
        onChange={({ target }) => setTime(target.value)}
      />
      <ContactPicker
        contacts={contacts}
        value={contact}
        onChange={({ target }) => setContact(target.value)}
      />
      <input type="submit" />
    </form>
  );
};
