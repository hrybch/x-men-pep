/* 
    Objetivo 1: Hover para trocar o mutante selecionado.
            Passo 1: Verificar o mutante que o mouse está com o hover;
            Passo 2: Adicionar a classe 'selecionado' ao hover;
            Passo 3: Verificar se já existe algum mutante selecionado e remover, se necessário.
    Objetivo 2: Trocar o mutante grande e suas informações de acordo com o hover.
            Passo 1: Pegar o elemento do mutante grande para adicionar informações;
            Passo 2: Alterar a imagem do mutante grande;
            Passo 3: Alterar o nome e a descrição do mutante.
*/


const mutantes = document.querySelectorAll('.mutante');
mutantes.forEach(mutante => {
    mutante.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450){
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        selecionarNovoMutante(mutante);
        
        alterarImagemMutante(mutante);

        alterarNomeMutante(mutante);

        alterarDescricaoMutante(mutante);
        
    })
});

function alterarDescricaoMutante(mutante) {
    const descricaoMutante = document.getElementById('descricao-mutante');
    descricaoMutante.innerText = mutante.getAttribute('data-description');
}

function alterarNomeMutante(mutante) {
    const nomeMutante = document.getElementById('nome-mutante');
    nomeMutante.innerText = mutante.getAttribute('data-name');
}

function alterarImagemMutante(mutante) {
    const imgMutanteGrande = document.querySelector('.mutante-grande');

    const idMutante = mutante.attributes.id.value;
    imgMutanteGrande.src = `./src/imagens/card-${idMutante}.png`;
}

function selecionarNovoMutante(mutante) {
    const mutanteSelecionado = document.querySelector('.selecionado');
    mutanteSelecionado.classList.remove('selecionado');
    mutante.classList.add('selecionado');
}

