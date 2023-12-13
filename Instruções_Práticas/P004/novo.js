function inserirNovoPacote() {
    const destino = document.getElementById('destino').value;
    const imagemURL = document.getElementById('imagemURL').value;
    const duracao = document.getElementById('duracao').value;
    const preco = document.getElementById('preco').value;

    const novoPacote = document.createElement('div');
    novoPacote.classList.add('roteiros-viagens');

    novoPacote.innerHTML = `
        <img src="${imagemURL}" alt="${destino}">
        <div class="roteiro-destino">${destino}</div>
        <ul class="roteiro-incluso">
            <li>Áereo ida e volta</li>
            <li>${duracao} diárias</li>
            <li>Café da Manhã</li>
        </ul>
        <div class="roteiro-preco">${preco}</div>
        <div class="roteiro-obs">Taxas Inclusas</div>
        <div class="roteiro-parcelamento">Em até 10x sem Juros</div>
        <button class="roteiro-comprar">Comprar</button>
    `;

    const containerDestinos = document.querySelector('.container-destinos');
    containerDestinos.appendChild(novoPacote);
}
