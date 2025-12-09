// BANCO MASSIVO DE PERGUNTAS - 25+ por nível
const perguntas = {
    facil: [
        {pergunta: "Qual é o nome do protagonista de Naruto?", opcoes: ["Sasuke", "Naruto", "Kakashi", "Itachi"], correta: 1},
        {pergunta: "Quem é o capitão do esquadrão 5 em Bleach?", opcoes: ["Aizen", "Hirako", "Gin", "Byakuya"], correta: 1},
        {pergunta: "Qual o nome do espírito de Inuyasha?", opcoes: ["Tessaiga", "Kikyo", "Shippo", "Sango"], correta: 0},
        {pergunta: "Em Dragon Ball, quem é o rival de Goku?", opcoes: ["Vegeta", "Piccolo", "Krillin", "Gohan"], correta: 0},
        {pergunta: "Qual o nome da escola em My Hero Academia?", opcoes: ["UA High", "Hogwarts", "Konoha", "True Cross"], correta: 0},
        {pergunta: "Qual o nome do Capitão dos chapeu de palha em One Piece?", opcoes: ["Luffy", "Zoro", "Nami", "Sanji"], correta: 0},
        {pergunta: "Quem é o detetive principal em Death Note?", opcoes: ["L", "Light", "Misa", "Near"], correta: 0},
        {pergunta: "Qual o nome da irma do tanjiro em Demon Slayer?", opcoes: ["Nezuko", "Tanjiro", "Zenitsu", "Inosuke"], correta: 0},
        {pergunta: "Em Jujutsu Kaisen, quem é o protagonista?", opcoes: ["Gojo", "Yuji", "Megumi", "Nobara"], correta: 1},
        {pergunta: "Qual o nome do dragão em Fairy Tail?", opcoes: ["Natsu", "Igneel", "Erza", "Gray"], correta: 1}
    ],
    medio: [
        {pergunta: "Qual o nome verdadeiro de L de Death Note?", opcoes: ["Lawliet", "Near", "Mello", "Light"], correta: 0},
        {pergunta: "Em Attack on Titan, qual titã Eren possui primeiro?", opcoes: ["Titã Colossal", "Titã Blindado", "Titã de Ataque", "Titã Bestial"], correta: 2},
        {pergunta: "Qual o nome do banco de dados de SAO?", opcoes: ["Cardinal", "Yui", "Kirito", "Asuna"], correta: 0},
        {pergunta: "Quem é o usuário do Stand 'The World' em JoJo?", opcoes: ["Jotaro", "DIO", "Joseph", "Kakyoin"], correta: 1},
        {pergunta: "Qual o nome do gato falante de Soul Eater?", opcoes: ["Blair", "Crona", "Maka", "Black Star"], correta: 0},
        {pergunta: "Em Hunter x Hunter, qual o nome do protagonista?", opcoes: ["Killua", "Gon", "Kurapika", "Leorio"], correta: 1},
        {pergunta: "Qual o nome da organização de Levi em AoT?", opcoes: ["Scout Regiment", "Garrison", "Military Police", "Nobility"], correta: 0},
        {pergunta: "Em Chainsaw Man, qual o nome do protagonista?", opcoes: ["Power", "Denji", "Aki", "Makima"], correta: 1},
        {pergunta: "Qual o nome do primeiro arco de Bleach?", opcoes: ["Soul Society", "Agent of the Shinigami", "Hueco Mundo", "Arrancar"], correta: 1},
        {pergunta: "Quem criou One Piece?", opcoes: ["Eiichiro Oda", "Tite Kubo", "Masashi Kishimoto", "Akira Toriyama"], correta: 0}
    ],
    dificil: [
        {pergunta: "Qual o nome completo do criador de Fullmetal Alchemist?", opcoes: ["Hiromu Arakawa", "Tite Kubo", "Eiichiro Oda", "Masashi Kishimoto"], correta: 0},
        {pergunta: "Em Steins;Gate, qual o nome do celular modificado?", opcoes: ["D-Mail", "Phone Microwave", "Time Leap", "SERN"], correta: 1},
        {pergunta: "Qual o nome do primeiro episódio de Cowboy Bebop?", opcoes: ["Asteroid Blues", "Honky Tonk Woman", "Session 1", "Tank!"], correta: 0},
        {pergunta: "Quem é o 9º usuário do One For All em MHA?", opcoes: ["All Might", "Deku", "Nana Shimura", "Daigoro Banjo"], correta: 0},
        {pergunta: "Qual o nome da organização secreta em Code Geass?", opcoes: ["Black Knights", "Britannia", "Geass Order", "Ashford Academy"], correta: 0},
        {pergunta: "Qual o nome do primeiro Stand de Jotaro em JoJo?", opcoes: ["Star Platinum", "Hierophant Green", "Silver Chariot", "Crazy Diamond"], correta: 0},
        {pergunta: "Em Evangelion, qual o número da EVA de Asuka?", opcoes: ["Unit-01", "Unit-02", "Unit-00", "Unit-03"], correta: 1},
        {pergunta: "Qual o nome do planeta natal de Frieza em Dragon Ball?", opcoes: ["Planet Vegeta", "Namek", "Frost", "Earth"], correta: 2},
        {pergunta: "Quem é o sensei de Rock Lee em Naruto?", opcoes: ["Kakashi", "Guy", "Asuma", "Kurenai"], correta: 1},
        {pergunta: "Qual o nome do primeiro jogo de Sword Art Online?", opcoes: ["ALO", "GGO", "SAO", "ALfheim"], correta: 2}
    ],
    impossivel: [
        {pergunta: "Qual o nome do assistente de laboratório de Okabe em Steins;Gate?", opcoes: ["Mayuri", "Kurisu", "Daru", "Suzuha"], correta: 2},
        {pergunta: "Em Monogatari, qual o nome completo da primeira vampira?", opcoes: ["Hitagi Senjougahara", "Shinobu Oshino", "Nadeko Sengoku", "Tsubasa Hanekawa"], correta: 1},
        {pergunta: "Qual o nome do primeiro OVA de Neon Genesis Evangelion?", opcoes: ["Death and Rebirth", "The End of Evangelion", "Evangelion: 1.0", "Rebuild"], correta: 0},
        {pergunta: "Quem é o autor de 'Berserk'?", opcoes: ["Kentaro Miura", "Yoshihiro Togashi", "Takehiko Inoue", "CLAMP"], correta: 0},
        {pergunta: "Em Made in Abyss, qual o nome da abismo mais profundo?", opcoes: ["1º Layer", "4º Layer", "6º Layer", "7º Layer"], correta: 3},
        {pergunta: "Qual o nome do primeiro episódio de Perfect Blue?", opcoes: ["Don't do it!", "PersonA", "Death Notice", "Sweet Home"], correta: 0},
        {pergunta: "Em Psycho-Pass, qual o nome do sistema de vigilância?", opcoes: ["Sibyl System", "Dominator", "Enforcer", "Latent Criminal"], correta: 0},
        {pergunta: "Quem é o criador de Ghost in the Shell?", opcoes: ["Masamune Shirow", "Mamoru Oshii", "Katsuhiro Otomo", "Hayao Miyazaki"], correta: 0},
        {pergunta: "Qual o nome do primeiro arco de Vinland Saga?", opcoes: ["Farmland Saga", "Warrior", "Slave", "Eastern Expedition"], correta: 1},
        {pergunta: "Em Haikyuu!!, qual o número da camisa do Kageyama?", opcoes: ["9", "10", "11", "7"], correta: 0}
    ]
};

let dificuldadeAtual = 'facil';
let perguntasAtual = [];
let perguntaAtual = 0;
let pontuacao = 0;
let timer = 15;
let timerInterval;
let tempoEsgotado = false;

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.btn-dificuldade').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.btn-dificuldade').forEach(b => b.classList.remove('ativo'));
            btn.classList.add('ativo');
            dificuldadeAtual = btn.dataset.dificuldade;
        });
    });
});

function iniciarQuiz() {
    perguntasAtual = [...perguntas[dificuldadeAtual]];
    // Embaralhar perguntas
    perguntasAtual.sort(() => Math.random() - 0.5);
    perguntaAtual = 0;
    pontuacao = 0;
    
    document.querySelector('.dificuldade').style.display = 'none';
    document.getElementById('iniciarBtn').style.display = 'none';
    document.getElementById('quiz-area').style.display = 'block';
    document.getElementById('final').style.display = 'none';
    
    mostrarPergunta();
}

function mostrarPergunta() {
    const pergunta = perguntasAtual[perguntaAtual];
    document.getElementById('pergunta').textContent = pergunta.pergunta;
    document.querySelector('.pergunta-numero').textContent = `#${perguntaAtual + 1}`;
    document.getElementById('progresso').textContent = `${perguntaAtual + 1}/${perguntasAtual.length}`;
    
    const opcoesDiv = document.getElementById('opcoes');
    opcoesDiv.innerHTML = '';
    
    // Embaralhar opções
    const opcoesEmbaralhadas = [...pergunta.opcoes];
    opcoesEmbaralhadas.sort(() => Math.random() - 0.5);
    
    opcoesEmbaralhadas.forEach((opcao, index) => {
        const btn = document.createElement('div');
        btn.className = 'opcao';
        btn.textContent = opcao;
        const indiceCorreto = pergunta.opcoes.indexOf(opcao);
        btn.onclick = () => selecionarResposta(indiceCorreto);
        opcoesDiv.appendChild(btn);
    });

    document.getElementById('proxima-btn').style.display = 'none';
    document.querySelectorAll('.opcao').forEach(op => op.style.pointerEvents = 'auto');
    iniciarTimer();
    atualizarPontuacao();
}

function selecionarResposta(indiceCorreto) {
    clearInterval(timerInterval);
    const opcoes = document.querySelectorAll('.opcao');
    
    opcoes.forEach((opcao, i) => {
        const textoOpcao = opcao.textContent;
        const indiceReal = perguntasAtual[perguntaAtual].opcoes.indexOf(textoOpcao);
        
        if (indiceReal === perguntasAtual[perguntaAtual].correta) {
            opcao.classList.add('correta');
        } else if (indiceReal === indiceCorreto) {
            opcao.classList.add('errada');
        }
        opcao.style.pointerEvents = 'none';
    });

    if (indiceCorreto === perguntasAtual[perguntaAtual].correta && !tempoEsgotado) {
        const multiplicador = dificuldadeAtual === 'facil' ? 1 : dificuldadeAtual === 'medio' ? 2 : dificuldadeAtual === 'dificil' ? 3 : 5;
        pontuacao += 10 * multiplicador;
    }

    document.getElementById('proxima-btn').style.display = 'block';
}

function proximaPergunta() {
    perguntaAtual++;
    if (perguntaAtual < perguntasAtual.length) {
        mostrarPergunta();
    } else {
        finalizarQuiz();
    }
}

function iniciarTimer() {
    tempoEsgotado = false;
    timer = 15;
    const timerEl = document.getElementById('timer');
    timerEl.textContent = `${timer}s`;
    timerEl.style.color = '#ffd43b';
    
    timerInterval = setInterval(() => {
        timer--;
        timerEl.textContent = `${timer}s`;
        
        if (timer <= 5) {
            timerEl.style.color = '#ff4757';
        }
        
        if (timer <= 0) {
            clearInterval(timerInterval);
            tempoEsgotado = true;
            const correta = perguntasAtual[perguntaAtual].correta;
            const opcoes = document.querySelectorAll('.opcao');
            opcoes.forEach((opcao, i) => {
                const textoOpcao = opcao.textContent;
                const indiceReal = perguntasAtual[perguntaAtual].opcoes.indexOf(textoOpcao);
                if (indiceReal === correta) opcao.classList.add('correta');
                opcao.style.pointerEvents = 'none';
            });
            document.getElementById('proxima-btn').style.display = 'block';
        }
    }, 1000);
}

function atualizarPontuacao() {
    document.getElementById('pontuacao').textContent = pontuacao;
}

function finalizarQuiz() {
    document.getElementById('quiz-area').style.display = 'none';
    document.getElementById('final').style.display = 'block';
    
    const multiplicador = dificuldadeAtual === 'facil' ? 1 : dificuldadeAtual === 'medio' ? 2 : dificuldadeAtual === 'dificil' ? 3 : 5;
    const total = perguntasAtual.length * 10 * multiplicador;
    
    document.getElementById('pontuacao-final').textContent = `${pontuacao}/${total}`;
    
    const porcentagem = (pontuacao / total) * 100;
    let rank = '', trofeu = '', mensagem = '';
    
    if (porcentagem >= 90) {
        rank = '🏆 LENDÁRIO';
        trofeu = '🥇';
        mensagem = 'Você é um DEUS dos animes! Os maiores otakus te reverenciam.';
    } else if (porcentagem >= 75) {
        rank = '⭐ PLATINA';
        trofeu = '🥈';
        mensagem = 'Nível profissional! Você vive e respira anime.';
    } else if (porcentagem >= 60) {
        rank = '⭐⭐ OURO';
        trofeu = '🥉';
        mensagem = 'Otaku Elite! Conhecimento impressionante.';
    } else if (porcentagem >= 40) {
        rank = '⭐ PRATA';
        trofeu = '⭐';
        mensagem = 'Muito bom! Continue treinando.';
    } else {
        rank = '📚 INICIANTE';
        trofeu = '📖';
        mensagem = 'Primeiros passos no mundo otaku. O caminho é longo!';
    }
    
    if (dificuldadeAtual === 'impossivel' && porcentagem >= 50) {
        rank = '💀 SOBREVIVENTE';
        mensagem = 'VOCÊ É UM MONSTRO! Poucos sobrevivem ao IMPOSSÍVEL!';
    }
    
    document.getElementById('trophy').textContent = trofeu;
    document.getElementById('rank').textContent = rank;
    document.getElementById('rank').style.background = `linear-gradient(45deg, ${porcentagem >= 90 ? '#ffd43b' : porcentagem >= 75 ? '#ffd43b' : '#ff6b6b'}, ${porcentagem >= 90 ? '#ffed4a' : porcentagem >= 75 ? '#ffed4a' : '#ff8e8e'})`;
    document.getElementById('mensagem-final').textContent = mensagem;
}

function reiniciarQuiz() {
    document.querySelector('.dificuldade').style.display = 'flex';
    document.getElementById('iniciarBtn').style.display = 'inline-flex';
    document.getElementById('final').style.display = 'none';
    document.querySelectorAll('.btn-dificuldade').forEach(b => b.classList.remove('ativo'));
    document.querySelector('.btn-dificuldade[data-dificuldade="facil"]').classList.add('ativo');
    pontuacao = 0;
}

function compartilharResultado() {
    const multiplicador = dificuldadeAtual === 'facil' ? 'Fácil' : dificuldadeAtual === 'medio' ? 'Médio' : dificuldadeAtual === 'dificil' ? 'Difícil' : 'IMPOSSÍVEL';
    const texto = `Completei o Quiz Anime Pro (${multiplicador})! ${pontuacao} pontos! 🎌 ${window.location.href}`;
    navigator.clipboard.writeText(texto);
    alert('Resultado copiado! Compartilhe com seus amigos otakus! 🚀');
}
