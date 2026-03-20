class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
    return true;
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }

  top() {
    if (this.isEmpty()) return null;
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  isFull() {
    return false;
  }
}

let pilha = new Stack();

pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);

console.log(pilha);

pilha.pop();
console.log(pilha);

console.log(pilha.top());

/*
    Desafio do equilíbrio.
*/

let expression = "";

function verifyBalance(expression) {
  let stack = new Stack();

  for (let i = 0; i < expression.length; i++) {
    if (expression[i] === "(") {
      stack.push("(");
    } else if (expression[i] === ")") {
      if (stack.isEmpty()) {
        console.log("Não está balanceado");
        return;
      }
      stack.pop();
    }
  }

  if (stack.isEmpty()) {
    console.log("Está balanceado");
  } else {
    console.log("Não está balanceado");
  }
}

verifyBalance("(1+1)+()");
