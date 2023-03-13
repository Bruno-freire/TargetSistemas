fetch('http://localhost:3000/faturamento')
  .then(response => response.json())
  .then(data => {
    // Filtra os valores maiores que 0
    console.log(data)
    const valores = data.filter(dia => dia.valor > 0).map(dia => dia.valor);

    // Calcula o menor valor
    const menorValor = Math.min(...valores);

    // Calcula o maior valor
    const maiorValor = Math.max(...valores);

    // Calcula a média
    const media = valores.reduce((acc, cur) => acc + cur, 0) / valores.length;

    // Filtra os valores maiores que a média
    const diasAcimaDaMedia = data.filter(dia => dia.valor > media).length;

    console.log(`Menor valor: ${menorValor}`);
    console.log(`Maior valor: ${maiorValor}`);
    console.log(`Dias acima da média: ${diasAcimaDaMedia}`);
  })
  .catch(error => console.error(error));
