// 6) TORRE DE HANÓI

function hanoi(n, origem, auxiliar, destino, moves = []) {
  if (n < 1) throw new Error("hanoi: n deve ser >= 1");

  if (n === 1) {
    moves.push(`Mover disco 1 de ${origem} para ${destino}`);
    return moves;
  }

  hanoi(n - 1, origem, destino, auxiliar, moves);
  moves.push(`Mover disco ${n} de ${origem} para ${destino}`);
  hanoi(n - 1, auxiliar, origem, destino, moves);

  return moves;
}

// Demo
console.log("===== 6) TORRE DE HANÓI =====");
const movimentos = hanoi(3, "A", "B", "C"); // 2^3-1 = 7 movimentos
console.log("movimentos (n=3):");
movimentos.forEach((m) => console.log(" -", m));
console.log("total =", movimentos.length);