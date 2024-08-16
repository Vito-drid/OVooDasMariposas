const avanca = document.querySelectorAll('.btn-proximo');
const iniciar = document.querySelector('.btn-iniciar');
const inicioBox = document.querySelector('.inicio-box');
const inicio = document.querySelector('.inicio');

iniciar.addEventListener('click', function () {
    // Adiciona classe de transição ao body
    document.body.classList.add('transicao');

    // Animação de saída para a caixa de título e fundo
    inicioBox.classList.add('diminui');
    inicio.classList.add('diminui');

    // Remove a tela de início após a transição
    setTimeout(() => {
        inicio.style.display = 'none';
        document.querySelector('.main-content').style.display = 'block';
    }, 1000); // Tempo para as animações terminarem
});

avanca.forEach(button => {
    button.addEventListener('click', function () {
        // Obtém o elemento atualmente ativo
        const atual = document.querySelector('.ativo');

        // Obtém o próximo passo usando o atributo data-proximo
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');
        const proximo = document.getElementById(proximoPasso);

        // Adiciona a classe 'saindo' ao passo atual e a classe 'entrando' ao próximo passo
        atual.classList.add('saindo');
        proximo.classList.add('entrando');

        // Após a animação, remove a classe 'ativo' do passo atual e a classe 'entrando' do próximo passo
        atual.addEventListener('animationend', () => {
            atual.classList.remove('ativo', 'saindo');
            proximo.classList.remove('entrando');
            proximo.classList.add('ativo');

            // Aplica o efeito de fundo para finais
            if (verificarFinal(proximo)) {
                document.body.classList.add('fim');
                showFinal(proximo.id); // Exibe a caixa final correspondente
            } else {
                document.body.classList.remove('fim');
                hideFinal(); // Esconde qualquer caixa final
            }
        }, { once: true });
    });
});

function verificarFinal(passo) {
    const finais = [
        'passo-1.1.1',
        'passo-1.1.2',
        'passo-1.2.1',
        'passo-1.2.2',
        'passo-2.1.1',
        'passo-2.1.2',
        'passo-2.2.1',
        'passo-2.2.2'
    ];

    return finais.includes(passo.id);
}

function showFinal(finalId) {
    // Esconde todas as caixas finais
    document.querySelectorAll('.final-box').forEach(box => {
        box.classList.add('final-box-hidden');
        box.classList.remove('final-box-visible');
    });
    
    // Exibe a caixa final desejada
    const finalBox = document.getElementById(finalId);
    if (finalBox) {
        finalBox.classList.remove('final-box-hidden');
        finalBox.classList.add('final-box-visible');
    }
}

function hideFinal() {
    // Esconde todas as caixas finais
    document.querySelectorAll('.final-box').forEach(box => {
        box.classList.add('final-box-hidden');
        box.classList.remove('final-box-visible');
    });
}






