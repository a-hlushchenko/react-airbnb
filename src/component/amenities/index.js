import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

import guestsImg from "./pool.svg";
import gym from "./gym.svg";
import breakfast from "./breakfast.svg";
import wifi from "./wifi.svg";
import parking from "./parking.svg";
import pets from "./pets.svg";
import airport from "./airport.svg";
import conciergeService from "./concierge-service.svg";
import roomService from "./room-service.svg";
import child from "./child.svg";

export default function Price({ ...rest }) {
  return (
    <Box className="price" shadow>
      <Heading border>Зручності</Heading>

      <List {...rest} />
    </Box>
  );
}

function List({
  hasPool,
  hasGym,
  hasFreeBreakfast,
  hasFreeWiFi,
  hasParking,
  hasPetsAllowed,
  hasAirportShuttle,
  hasConciergeService,
  hasRoomService,
  hasChildFriendly,
}) {
  return (
    <ul className="price__list">
      {hasPool && (
        <ListItem imgSrc={guestsImg}>
          <span>Басейн</span>
        </ListItem>
      )}
      {hasGym && (
        <ListItem imgSrc={gym}>
          <span>Спортивний зал</span>
        </ListItem>
      )}
      {hasFreeBreakfast && (
        <ListItem imgSrc={breakfast}>
          <span>Безкоштовний сніданок</span>
        </ListItem>
      )}
      {hasFreeWiFi && (
        <ListItem imgSrc={wifi}>
          <span>Безкоштовний Wi-Fi</span>
        </ListItem>
      )}
      {hasParking && (
        <ListItem imgSrc={parking}>
          <span>Безкоштовний вуличний паркінг</span>
        </ListItem>
      )}
      {hasPetsAllowed && (
        <ListItem imgSrc={pets}>
          <span>Дозволено розміщення з домашніми тваринами</span>
        </ListItem>
      )}
      {hasAirportShuttle && (
        <ListItem imgSrc={airport}>
          <span>Трансфер до/з аеропорту</span>
        </ListItem>
      )}
      {hasConciergeService && (
        <ListItem imgSrc={conciergeService}>
          <span>Консьєрж-сервіс</span>
        </ListItem>
      )}
      {hasRoomService && (
        <ListItem imgSrc={roomService}>
          <span>Обслуговування номерів</span>
        </ListItem>
      )}
      {hasChildFriendly && (
        <ListItem imgSrc={child}>
          <span>Підходить для дітей</span>
        </ListItem>
      )}
    </ul>
  );
}
