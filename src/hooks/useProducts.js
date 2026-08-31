import { useState, useEffect } from "react";
import { createUniqueId } from "../utils/id";

export function useProducts() {
  const [products, setProducts] = useState(() => {
    const stored = localStorage.getItem("products");
    if (stored) return JSON.parse(stored);

    const initial = [];
    (initial.push({ id: createUniqueId(initial), name: "Lelo A1" }),
      initial.push({ id: createUniqueId(initial), name: "Lodo J1" }),
      initial.push({ id: createUniqueId(initial), name: "Lelo A2" }),
      initial.push({ id: createUniqueId(initial), name: "Lelo A3" }),
      initial.push({ id: createUniqueId(initial), name: "Lodo J2" }),
      initial.push({ id: createUniqueId(initial), name: "Ven D1" }),
      initial.push({ id: createUniqueId(initial), name: "Lelo A4" }),
      initial.push({ id: createUniqueId(initial), name: "Lodo J3" }),
      initial.push({ id: createUniqueId(initial), name: "Ven D2" }),
      initial.push({ id: createUniqueId(initial), name: "Lodo J4" }),
      initial.push({ id: createUniqueId(initial), name: "Lodo J5" }),
      initial.push({ id: createUniqueId(initial), name: "Ven D3" }),
      initial.push({ id: createUniqueId(initial), name: "Lodo J6" }),
      initial.push({ id: createUniqueId(initial), name: "Ven D4" }),
      initial.push({ id: createUniqueId(initial), name: "Ven D5" }));
    return initial;
  });

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const addProduct = (name) => {
    setProducts((prev) => [...prev, { id: nextProductId(prev), name }]);
  };

  const removeProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return { products, addProduct, removeProduct };
}
