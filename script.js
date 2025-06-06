function ex1() {
      let nome = prompt("Digite seu nome completo:");
      let sexo = prompt("Digite seu sexo (Masculino/Feminino/Outro):");
      alert(`Você informou:\nNome: ${nome}\nSexo: ${sexo}`);
    }

    function ex2() {
      let n1 = parseInt(prompt("Digite o primeiro número inteiro:"));
      let n2 = parseInt(prompt("Digite o segundo número inteiro:"));
      let n3 = parseInt(prompt("Digite o terceiro número inteiro:"));
      let n4 = parseInt(prompt("Digite o quarto número inteiro:"));
      let soma = n1 + n2 + n3 + n4;
      let mult = n1 * n2 * n3 * n4;
      alert(`Soma: ${soma}\nMultiplicação: ${mult}`);
    }

    function ex2c() {
      let dolar = parseFloat(prompt("Digite o valor em dólares (U$):"));
      let reais = dolar * 5.70;
      alert(`U$${dolar.toFixed(2)} = R$${reais.toFixed(2)}`);
    }

    function ex3() {
      let n = parseInt(prompt("Digite um número inteiro:"));
      alert(`Antecessor: ${n - 1}\nNúmero: ${n}\nSucessor: ${n + 1}`);
    }

    
    function ex4() {
      let salario = parseFloat(prompt("Digite o salário:"));
      let novo = salario * 1.15;
      alert(`Salário com aumento de 15%: R$${novo.toFixed(2)}`);
    }

    function ex5() {
      let f = parseFloat(prompt("Digite a temperatura em Fahrenheit:"));
      let c = (f - 32) * 5 / 9;
      alert(`Temperatura em Celsius: ${c.toFixed(2)}°C`);
    }

    function ex6() {
      let n1 = parseFloat(prompt("Digite o primeiro número:"));
      let n2 = parseFloat(prompt("Digite o segundo número:"));
      let n3 = parseFloat(prompt("Digite o terceiro número:"));
      let media = (n1 + n2 + n3) / 3;
      alert(`Média aritmética: ${media.toFixed(2)}`);
    }

    function ex7() {
      let distancia = parseFloat(prompt("Distância da viagem (km):"));
      let consumo = parseFloat(prompt("Consumo médio do carro (km/l):"));
      let litros = distancia / consumo;
      alert(`Você gastará ${litros.toFixed(2)} litros na viagem.`);
    }

    function ex8() {
      let num = parseFloat(prompt("Digite um número:"));
      let quadrado = Math.pow(num, 2);
      let raiz = Math.sqrt(num);
      alert(`Número: ${num}\nQuadrado: ${quadrado}\nRaiz quadrada: ${raiz.toFixed(2)}`);
    }

    function ex9() {
      let valor = parseFloat(prompt("Valor da prestação:"));
      let taxa = parseFloat(prompt("Taxa de juros (% ao dia):"));
      let tempo = parseInt(prompt("Dias de atraso:"));
      let prestacao = valor + (valor * (taxa / 100) * tempo);
      alert(`Prestação atualizada: R$${prestacao.toFixed(2)}`);
    }