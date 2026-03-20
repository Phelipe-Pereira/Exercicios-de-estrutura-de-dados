// 1) FATORIAL RECURSIVO
function fatorial(n) {
  if (n < 0) {
    throw new Error("fatorial: n deve ser >= 0");
  }

  if (n === 0) {
    return 1;
  }

  return n * fatorial(n - 1);
}

// Demo
console.log("===== 1) FATORIAL =====");
console.log("fatorial(5) =", fatorial(5)); // 120