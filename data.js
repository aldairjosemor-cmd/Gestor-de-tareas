
export function add(list, titulo) {
  const nuevaTarea = {
    id: crypto.randomUUID(),
    titulo,
    hecho: false
  };
  return [...list, nuevaTarea];
}


export function toggle(list, id) {
  return list.map(t =>
    t.id === id ? { ...t, hecho: !t.hecho } : t
  );
}


export function remove(list, id) {
  return list.filter(t => t.id !== id);
}


export function filterBy(list, estado) {
  switch (estado) {
    case "done":
      return list.filter(t => t.hecho);
    case "todo":
      return list.filter(t => !t.hecho);
    default:
      return [...list];
  }
}
