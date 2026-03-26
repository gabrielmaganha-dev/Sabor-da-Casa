// Função de busca de receitas
function buscarReceita() {
    const inputBusca = document.getElementById('busca');
    const termoBusca = inputBusca.value.toLowerCase().trim();
    const receitas = document.querySelectorAll('.receita-card');
    let encontrados = 0;
    
    receitas.forEach(receita => {
        const titulo = receita.querySelector('h3').textContent.toLowerCase();
        const descricao = receita.querySelector('p').textContent.toLowerCase();
        
        if (termoBusca === '' || titulo.includes(termoBusca) || descricao.includes(termoBusca)) {
            receita.style.display = 'grid';
            receita.style.animation = 'slideIn 0.3s ease-in-out';
            encontrados++;
        } else {
            receita.style.display = 'none';
        }
    });
    
    // Mostrar mensagem se não encontrar receitas
    let mensagemNaoEncontrada = document.getElementById('nao-encontrado');
    if (encontrados === 0 && termoBusca !== '') {
        if (!mensagemNaoEncontrada) {
            mensagemNaoEncontrada = document.createElement('div');
            mensagemNaoEncontrada.id = 'nao-encontrado';
            mensagemNaoEncontrada.textContent = `Nenhuma receita encontrada para "${termoBusca}"`;
            document.querySelector('.receitas').parentElement.insertBefore(mensagemNaoEncontrada, document.querySelector('.receitas'));
        }
        mensagemNaoEncontrada.style.display = 'block';
    } else if (mensagemNaoEncontrada) {
        mensagemNaoEncontrada.style.display = 'none';
    }
}

// Adicionar evento ao input de busca com debounce
document.addEventListener('DOMContentLoaded', function() {
    const inputBusca = document.getElementById('busca');
    
    // Limpar busca ao focar
    inputBusca.addEventListener('focus', function() {
        if (this.value === '') {
            buscarReceita();
        }
    });
    
    // Buscar em tempo real
    inputBusca.addEventListener('keyup', buscarReceita);
    inputBusca.addEventListener('input', buscarReceita);
});

// Efeitos ao passar o mouse nas receitas
document.addEventListener('DOMContentLoaded', function() {
    const receitas = document.querySelectorAll('.receita-card');
    
    receitas.forEach(receita => {
        receita.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.3)';
        });
        
        receita.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
        });
    });
});


