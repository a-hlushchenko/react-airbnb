import "./index.css";

import Heading from "../heading";

export default function Contacts({
  name,
  image,
  response_rate,
  response_time,
  info,
  phone,
}) {
  return (
    <div className="contact">
      <div className="contact__top">
        <img className="contact__img" src={image} alt="avatar" />

        <div className="contact__top-block">
          <Heading>Господар – {name}</Heading>

          <div className="contact__top-content">
            <span className="top-content__value">{phone}</span>
            <span className="top-content__value">{response_time}</span>
            <span className="top-content__value">
              {response_rate}% відповідей
            </span>
          </div>
        </div>
      </div>

      <p className="contact__description">{info}</p>
    </div>
  );
}
