import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useSingleInventory = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    const url = `https://nameless-brook-52284.herokuapp.com/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [item]);
  return [id, item];
};

export default useSingleInventory;
