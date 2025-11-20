// index.js
import readline from "readline";
import { add, toggle, remove, filterBy } from "./data.js";
import { getStats } from "./stats.js";

let tareas = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// Función que imprime la lista
function mostrarTareas(list) {
  console.log("\n LISTA DE TAREAS:");
  if (list.length === 0) {
    console.log("  (sin tareas)");
    return;
  }

  list.forEach((t, i) => {
    console.log(
      `${i + 1}. [${t.hecho ? "✔" : " "}] ${t.titulo}  (id: ${t.id})`
    );
  });
}

// Menú principal
function menu() {
  console.log(`
===============================
   GESTOR DE TAREAS - MENÚ
===============================
1. Agregar tarea
2. Listar tareas
3. Marcar tarea (toggle)
4. Eliminar tarea
5. Filtrar tareas (all / done / todo)
6. Ver estadísticas
7. Salir
-------------------------------
`);

  rl.question("Elige una opción: ", (opcion) => {
    switch (opcion) {

      case "1": // Agregar tarea
        rl.question("Título de la tarea: ", (titulo) => {
          tareas = add(tareas, titulo);
          console.log("✔ Tarea agregada.");
          menu();
        });
      break;

      case "2": // Listar tareas
        mostrarTareas(tareas);
        menu();
      break;

      case "3": // Toggle
        mostrarTareas(tareas);
        rl.question("ID de la tarea a marcar: ", (id) => {
          tareas = toggle(tareas, id);
          console.log("✔ Estado cambiado.");
          menu();
        });
      break;

      case "4": // Eliminar
        mostrarTareas(tareas);
        rl.question("ID de la tarea a eliminar: ", (id) => {
          tareas = remove(tareas, id);
          console.log("🗑 Tarea eliminada.");
          menu();
        });
      break;

      case "5": // Filtrar
        rl.question("Filtrar por (all / done / todo): ", (filtro) => {
          const filtradas = filterBy(tareas, filtro);
          mostrarTareas(filtradas);
          menu();
        });
      break;

      case "6": // Stats
        const stats = getStats(tareas);
        console.log("\n ESTADÍSTICAS:");
        console.log(`Total:       ${stats.total}`);
        console.log(`Completadas: ${stats.hechas}`);
        console.log(`Pendientes:  ${stats.pendientes}`);
        menu();
      break;

      case "7": // Salir
        console.log("👋 ¡Hasta luego!");
        rl.close();
      break;

      default:
        console.log(" Opción inválida. Intenta de nuevo.");
        menu();
    }
  });
}

menu();

