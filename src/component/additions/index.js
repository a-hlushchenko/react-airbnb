import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

export default function Additions({ ...rest }) {
  return (
    <Box className="price" shadow>
      <Heading border>Додатково</Heading>

      <List {...rest} />
    </Box>
  );
}

function List({
  rules,
  cancellation,
  transportation,
  languages,
  offers,
  instructions,
}) {
  return (
    <ul className="price__list">
      <ListItem title="Правила дому">
        <span>{rules}</span>
      </ListItem>
      <ListItem title="Політика скасування">
        <span>{cancellation}</span>
      </ListItem>
      <ListItem title="Місцевий транспорт">
        <span>{transportation}</span>
      </ListItem>
      <ListItem title="Мови хоста">
        <span>{languages}</span>
      </ListItem>
      <ListItem title="Спеціальні пропозиції:">
        <span>{offers}</span>
      </ListItem>
      <ListItem title="Інструкції щодо реєстрації">
        <span>{instructions}</span>
      </ListItem>
    </ul>
  );
}
