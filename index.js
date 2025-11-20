// index.js

import { add, toggle, remove, filterBy } from "./data.js";
import { getStats } from "./stats.js";


let tareas = [];

tareas = add(tareas, "Hacer tarea");
tareas = add(tareas, "Comprar pan");
tareas = add(tareas, "Estudiar JavaScript");

console.log("➡️ Tareas iniciales:", tareas);

tareas = toggle(tareas, tareas[0].id);

console.log("➡️ Tareas después de toggle:", tareas);

tareas = remove(tareas, tareas[1].id);

console.log("➡️ Tareas después de remove:", tareas);

const hechas = filterBy(tareas, "done");
console.log("➡️ Solo hechas:", hechas);

const stats = getStats(tareas);
console.log("📊 Stats:", stats);
