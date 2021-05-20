import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='nameInput'>Name</label>
      <input
        type="text"
        id='nameInput'
        value={name}
        onChange={({ target }) => { setName(target.value) }}
        required
      />
      <label htmlFor='phoneInput'>Phone</label>
      <input
        type="tel"
        id='phoneInput'
        value={phone}
        pattern="(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)"
        onChange={({ target }) => { setPhone(target.value) }}
        required
      />
      <label htmlFor='emailInput'>Email</label>
      <input
        type="email"
        id='emailInput'
        value={email}
        onChange={({ target }) => { setEmail(target.value) }}
        required
      />
      <input
        type="submit"
      />
    </form>
  );
};
