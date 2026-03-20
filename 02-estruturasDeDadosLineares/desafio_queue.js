import Queue from "./queue.js";

const fila = new Queue();

console.log("🏦 Bem-vindo ao sistema do Banco!");
console.log("----------------------------------");

console.log("🎟️ Gerando senhas...");

fila.enqueue("B-1001");
fila.enqueue("B-1002");
fila.enqueue("B-1003");

console.log("✅ 3 senhas inseridas com sucesso!");
console.log(`📋 Fila atual: ${fila.toArray().join(" → ")}`);

console.log("----------------------------------");

console.log("🔔 Chamando próxima senha...");

const atendido = fila.dequeue();
console.log(`🧾 Senha chamada: ${atendido}`);
console.log(`📋 Fila restante: ${fila.toArray().join(" → ")}`);

console.log("----------------------------------");