import { useState } from "react";
import "./eventForm.css";

const EventForm = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    attending: "",
    profession: "",
    excited: "",
    expect: "",
  });

  const handleFormChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
  };

  return (
    <div className="event__container">
      <h1 className="event__title">
        Data Warehouse <span>Workshop</span>
      </h1>

      <div className="event__location__date">
        <h2 className="event__location">
          <i className="fa-solid fa-location-dot" />
          Museo Camera, Gurgaon
        </h2>
        <div className="event__date__time">
          <span className="event__date">
            <i className="fa-regular fa-calendar-days" /> 7th July, 2024
          </span>
          <span className="event__time">
            <i className="fa-solid fa-clock" /> 11am - 2pm
          </span>
        </div>
      </div>

      <form>
        <div className="input__area">
          <input
            type="text"
            id="name"
            name="name"
            value={formValue.name}
            onChange={handleFormChange}
          />
          <label htmlFor="name">Name</label>
        </div>

        <div className="input__area">
          <input
            type="email"
            id="email"
            name="email"
            value={formValue.email}
            onChange={handleFormChange}
          />
          <label htmlFor="email">Email</label>
        </div>

        <div className="input__area">
          <input
            type="number"
            id="phone"
            name="phone"
            value={formValue.phone}
            onChange={handleFormChange}
          />
          <label htmlFor="phone">Phone</label>
        </div>

        <div className="input__area">
          <input
            type="text"
            id="city"
            name="city"
            value={formValue.city}
            onChange={handleFormChange}
          />
          <label htmlFor="city">City</label>
        </div>

        <div className="input__area select">
          <select id="attend" value={formValue.attending}>
            <option value="offline">Offline</option>
            <option value="online">Online</option>
          </select>
          <label htmlFor="attend">Attending</label>
        </div>

        <div className="input__area select">
          <select id="profession" value={formValue.profession}>
            <option value="" className="select__label" hidden>
              Profession
            </option>
            <option value="student">Student</option>
            <option value="working">Working</option>
          </select>
          <label htmlFor="profession">Profession</label>
        </div>

        <div className="input__area textarea">
          <textarea
            id="excited"
            name="excited"
            value={formValue.excited}
            onChange={handleFormChange}
          />
          <label htmlFor="excited">What's in your mind?</label>
        </div>

        <div className="input__area textarea">
          <textarea
            id="expect"
            name="expect"
            value={formValue.expect}
            onChange={handleFormChange}
          />
          <label htmlFor="expect">Wanna become better?</label>
        </div>

        <button onClick={handleFormSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default EventForm;
