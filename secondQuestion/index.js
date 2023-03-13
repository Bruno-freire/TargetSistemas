function verificaFibonacci(num) {
  let [a, b] = [0, 1]; //usei desestruturação para declarar as variaveis

  while (b <= num) {
    if (b === num) return `${num} pertence à sequência de Fibonacci`; //se o numero da fibonacci for igual ao parametro entao o parametro pertence a fibonacci
    [a, b] = [b, a + b];
  }

  return `${num} não pertence à sequência de Fibonacci`;
}
