import { Fragment } from "react";

import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

export default function Atractions({ ...rest }) {
  return (
    <Box className="price" shadow>
      <Heading border>Пам'ятки поблизу</Heading>

      <List {...rest} />
    </Box>
  );
}

function List({ list }) {
  return (
    <ul className="price__list">
      {list.map(({ id, name, link }) => (
        <Fragment key={id}>
          <ListItem>
            <a className="link" href={link}>
              {name}
            </a>
          </ListItem>
        </Fragment>
      ))}
    </ul>
  );
}
