const botaoSim = document.getElementById('Sim')
const botaoNao = document.getElementById('Não')

botaoSim.addEventListener('click', () => {
    mensagem.textContent = "AAAAAAAAAAAAAH, muito obrigado. Ainda bem que foi uma escolha sincera!"
});

botaoNao.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - botaoNao.offsetWidth);
    const y = Math.random() * (window.innerHeight - botaoSim.offsetHeight);

    botaoNao.style.position = 'absolute';
    botaoNao.style.left = `${x}px`;
    botaoNao.style.top = `${y}px`;
})

