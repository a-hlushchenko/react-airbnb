import "./index.css";

export default function ListItem({ children, imgSrc, title }) {
  return (
    <li className="list-item">
      {imgSrc && <img src={imgSrc} alt="icon" height={24} width={24} />}

      <div className="list-item__block">
        {title && <div className="list-item__title">{title}</div>}
        <div className="list-item__content">{children}</div>
      </div>
    </li>
  );
}
