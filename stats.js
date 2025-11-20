// stats.js

export function getStats(list) {
  return list.reduce(
    (acc, t) => {
      acc.total++;

      if (t.hecho) acc.hechas++;
      else acc.pendientes++;

      return acc;
    },
    { total: 0, hechas: 0, pendientes: 0 }
  );
}
