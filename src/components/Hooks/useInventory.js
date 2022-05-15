import { useEffect, useState } from "react";

const useInventory = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://nameless-brook-52284.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return [items, setItems];
};

export default useInventory;
