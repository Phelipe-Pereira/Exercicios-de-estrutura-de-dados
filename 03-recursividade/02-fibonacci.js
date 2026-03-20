// 2) FIBONACCI RECURSIVO + OTIMIZAÇÃO

function fibonacci(n) {
  if (n < 0) throw new Error("fibonacci: n deve ser >= 0");

  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciMemoization(n, memo = {}) {
  if (n < 0) throw new Error("fibonacciMemo: n deve ser >= 0");

  if (memo[n] !== undefined) return memo[n];

  if (n === 0) return 0;
  if (n === 1) return 1;

  memo[n] = fibonacciMemoization(n - 1, memo) + fibonacciMemoization(n - 2, memo);
  return memo[n];
}

function fibonacciIter(n) {
  if (n < 0) throw new Error("fibonacciIter: n deve ser >= 0");
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0;
  let b = 1;

  for (let i = 2; i <= n; i++) {
    const prox = a + b;
    a = b;
    b = prox;
  }

  return b;
}

// Demo
console.log("===== 2) FIBONACCI =====");
console.log("fibonacci(10) (lento) =", fibonacci(10)); // 55
console.log("fibonacciMemoization(40) =", fibonacciMemoization(40)); // rápido
console.log("fibonacciIter(40) =", fibonacciIter(40)); // rápido