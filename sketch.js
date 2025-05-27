let livros = [
  { nome: "Harry Potter e a Pedra Filosofal", idade: 10, categorias: ["fantasia", "aventura"] },
  { nome: "Jogos Vorazes", idade: 12, categorias: ["distopia", "ação", "aventura"] },
  { nome: "Percy Jackson e o Ladrão de Raios", idade: 10, categorias: ["fantasia", "aventura", "mitologia"] },
  { nome: "A Culpa é das Estrelas", idade: 13, categorias: ["romance", "drama"] },
  { nome: "Maze Runner: Correr ou Morrer", idade: 12, categorias: ["distopia", "ficção científica", "ação"] },
  { nome: "Divergente", idade: 13, categorias: ["distopia", "ficção científica", "romance"] },
  { nome: "O Ladrão de Raios (As Crônicas dos Kane)", idade: 10, categorias: ["fantasia", "aventura", "mitologia"] },
  { nome: "Extraordinário", idade: 9, categorias: ["drama", "superação"] },
  { nome: "Anne de Green Gables", idade: 9, categorias: ["clássico", "drama"] },
  { nome: "As Vantagens de Ser Invisível", idade: 14, categorias: ["drama", "adolescência"] },
  { nome: "Corte de Espinhos e Rosas", idade: 16, categorias: ["fantasia", "romance"] },
  { nome: "O Oceano no Fim do Caminho", idade: 14, categorias: ["fantasia", "mistério"] },
  { nome: "O Sol é para Todos", idade: 12, categorias: ["drama", "clássico"] }
];

let idadeUsuario;
let gostaFantasia, gostaAventura, gostaDistopia, gostaAcao, gostaFiccaoCientifica, gostaRomance, gostaDrama, gostaMitologia, gostaSuperacao, gostaClassico, gostaAdolescencia, gostaMisterio;
let livrosRecomendados = [];

function setup() {
  createCanvas(600, 400);
  background(240);
  textSize(16);
  fill(50);
  text("Recomendador de Livros para Adolescentes", 20, 30);

  // Coletar idade
  idadeUsuario = int(prompt("Qual sua idade?"));

  // Coletar preferências
  gostaFantasia = prompt("Você gosta de livros de fantasia? (sim/não)").toLowerCase() === "sim";
  gostaAventura = prompt("Você gosta de livros de aventura? (sim/não)").toLowerCase() === "sim";
  gostaDistopia = prompt("Você gosta de livros de distopia? (sim/não)").toLowerCase() === "sim";
  gostaAcao = prompt("Você gosta de livros de ação? (sim/não)").toLowerCase() === "sim";
  gostaFiccaoCientifica = prompt("Você gosta de livros de ficção científica? (sim/não)").toLowerCase() === "sim";
  gostaRomance = prompt("Você gosta de livros de romance? (sim/não)").toLowerCase() === "sim";
  gostaDrama = prompt("Você gosta de livros de drama? (sim/não)").toLowerCase() === "sim";
  gostaMitologia = prompt("Você gosta de livros sobre mitologia? (sim/não)").toLowerCase() === "sim";
  gostaSuperacao = prompt("Você gosta de livros de superação? (sim/não)").toLowerCase() === "sim";
  gostaClassico = prompt("Você gosta de livros clássicos? (sim/não)").toLowerCase() === "sim";
  gostaAdolescencia = prompt("Você gosta de livros que abordam a adolescência? (sim/não)").toLowerCase() === "sim";
  gostaMisterio = prompt("Você gosta de livros de mistério? (sim/não)").toLowerCase() === "sim";


  // Lógica de recomendação
  for (let livro of livros) {
    if (idadeUsuario >= livro.idade) {
      if (
        (gostaFantasia && livro.categorias.includes("fantasia")) ||
        (gostaAventura && livro.categorias.includes("aventura")) ||
        (gostaDistopia && livro.categorias.includes("distopia")) ||
        (gostaAcao && livro.categorias.includes("ação")) ||
        (gostaFiccaoCientifica && livro.categorias.includes("ficção científica")) ||
        (gostaRomance && livro.categorias.includes("romance")) ||
        (gostaDrama && livro.categorias.includes("drama")) ||
        (gostaMitologia && livro.categorias.includes("mitologia")) ||
        (gostaSuperacao && livro.categorias.includes("superação")) ||
        (gostaClassico && livro.categorias.includes("clássico")) ||
        (gostaAdolescencia && livro.categorias.includes("adolescência")) ||
        (gostaMisterio && livro.categorias.includes("mistério"))
      ) {
        // Evita livros duplicados
        if (!livrosRecomendados.includes(livro.nome)) {
          livrosRecomendados.push(livro.nome);
        }
      }
    }
  }

  // Exibir recomendações na tela
  if (livrosRecomendados.length > 0) {
    text("Livros recomendados para você:", 20, 70);
    for (let i = 0; i < livrosRecomendados.length; i++) {
      text("- " + livrosRecomendados[i], 40, 100 + i * 25);
    }
  } else {
    text("Nenhum livro disponível para sua idade e preferências.", 20, 70);
  }
}
