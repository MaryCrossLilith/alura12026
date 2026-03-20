const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');

    })
})

 const container = document.getElementById('container-link');

// Cria o elemento de âncora (link)
const link = document.createElement('a');

link.target = '_blank'; // Abre em nova aba

// Adiciona o link ao contêiner
container.appendChild(link);

