export function createUniqueId(array) {
  let id;
  do {
    id =
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : Date.now().toString(36) +
          "-" +
          Math.random().toString(36).slice(2, 10);
  } while (array.some((p) => p.id === id));
  return id;
}
