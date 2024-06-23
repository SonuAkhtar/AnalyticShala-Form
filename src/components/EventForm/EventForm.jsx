const EventForm = () => {
  return (
    <div className="event__container">
      <h1 className="event__title">
        Data Warehouse <span>Workshop</span>
      </h1>

      <h2 className="event__location">Museo Camera, Gurgaon</h2>
      <div className="event__date__time">
        <span className="event__date">7th July, 2024</span>
        <span className="event__time">11am - 2pm</span>
      </div>

      <form>
        <div className="input__area">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Please enter your Name" />
        </div>

        <div className="input__area">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Please enter your Email"
          />
        </div>

        <div className="input__area">
          <label htmlFor="phone">Phone</label>
          <input
            type="number"
            id="phone"
            placeholder="Please enter your Phone Number"
          />
        </div>

        <div className="input__area">
          <label htmlFor="city">City</label>
          <input type="text" id="city" placeholder="Please enter your City" />
        </div>

        <div className="input__area select">
          <select id="attend">
            <option value="">Select attending type</option>
            <option value="offline">Offline</option>
            <option value="online">Online</option>
          </select>
        </div>

        <div className="input__area select">
          <select id="profession">
            <option value="">Select Profession</option>
            <option value="student">Student</option>
            <option value="working">Working</option>
          </select>
        </div>

        <div className="input__area textarea">
          <label htmlFor="why__excited">What's in your mind?</label>
          <textarea
            id="why__excited"
            placeholder="why are you excited to join the event?"
          />
        </div>

        <div className="input__area textarea">
          <label htmlFor="what__expect">Wanna become better?</label>
          <textarea
            id="what__expect"
            placeholder="What do yo expect to gain?"
          />
        </div>
      </form>
    </div>
  );
};

export default EventForm;
