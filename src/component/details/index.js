import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

import guestsImg from "./guests.svg";
import bedroomsImg from "./bedrooms.svg";
import bedsImg from "./beds.svg";
import bathsImg from "./baths.svg";

export default function Price({ ...rest }) {
  return (
    <Box className="price" shadow>
      <Heading border>Деталі</Heading>

      <List {...rest} />
    </Box>
  );
}

function List({ guests, bedrooms, beds, baths }) {
  return (
    <ul className="price__list">
      <ListItem imgSrc={guestsImg}>
        <span>гості: {guests}</span>
      </ListItem>
      <ListItem imgSrc={bedroomsImg}>
        <span>спальні: {bedrooms}</span>
      </ListItem>
      <ListItem imgSrc={bedsImg}>
        <span>ліжка: {beds}</span>
      </ListItem>
      <ListItem imgSrc={bathsImg}>
        <span>ванні кімнати: {baths}</span>
      </ListItem>
    </ul>
  );
}
