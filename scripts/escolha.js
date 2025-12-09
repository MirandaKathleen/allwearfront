const cards = document.getElementById('roupas');
var roupas = [];
var escolhidas = [];

async function carregarRoupas() {
  try {
    const resposta = await fetch('https://allwearback00.vercel.app/roupa');
    const dados = await resposta.json();
    roupas = dados;
  } catch (erro) {
    console.error('Erro ao carregar roupas:', erro);
  }
}

async function exibirRoupas(filtro, nome) {
  await carregarRoupas();
  cards.innerHTML = '';
  const roupasFiltradas = roupas.filter(roupa => roupa.descricao.toLowerCase() === filtro.toLowerCase() && roupa.nome.toLowerCase() === nome.toLowerCase());
  roupasFiltradas.forEach(roupa => {
    const img = document.createElement('img');
    img.src = roupa.imagemUrl;
    img.alt = roupa.nome;
    img.classList.add('image-option');
    cards.appendChild(img);
  });
} 