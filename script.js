const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function() {
        const atual = document.querySelector('.ativo');
        if (!atual) {
            console.error('Nenhum passo ativo encontrado!');
            return;
        }

        const proximoPassoId = 'passo-' + this.dataset.proximo;
        const proximoPasso = document.getElementById(proximoPassoId);

        if (!proximoPasso) {
            console.error(`Não existe elemento com id ${proximoPassoId}`);
            return;
        }

        atual.classList.remove('ativo');
        proximoPasso.classList.add('ativo');
    });
});
