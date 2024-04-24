import React from "react";
import Stars from "./Stars";

const ProdItem = ({ id, img, title, price, onDelete, rating }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="card">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{price}</p>
      <button onClick={handleDelete}>Удалить</button>
      <Stars rating={rating} />
    </div>
  );
};

export default ProdItem;
