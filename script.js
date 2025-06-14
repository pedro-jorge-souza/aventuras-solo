document.addEventListener('DOMContentLoaded', () => {

    // --- Estrutura de Dados da Aventura ---
    // IMPORTANTE: Substitua 'imagens/cenaX.jpg' pelo caminho real das suas imagens.
    const adventureData = {
        1: {
            image: 'imagens/cena1.jpg',
            text: 'Você está diante da imponente entrada da Cripta do Rei Sombrio. A porta de madeira escura parece selada há séculos. O ar aqui é frio e carregado de uma energia sinistra. Você aperta a empunhadura de sua espada.',
            choices: [
                { text: 'Forçar a porta principal.', destination: 2 },
                { text: 'Procurar por uma entrada alternativa.', destination: 18 }
            ]
        },
        2: {
            image: 'imagens/cena2.jpg',
            text: 'Você empurra com toda a sua força, mas a porta não cede. Parece estar trancada ou selada magicamente. A fechadura é antiga e complexa.',
            choices: [
                { text: 'Tentar arrombar a fechadura com sua espada.', destination: 31 },
                { text: 'Desistir e procurar outra entrada.', destination: 18 }
            ]
        },
        3: {
            image: 'imagens/cena3.jpg',
            text: 'Você avança por uma passagem escura. Ouve um clique sob seus pés. Uma grade de metal cai atrás de você, bloqueando o retorno! Agulhas finas disparam das paredes laterais.',
            choices: [
                { text: 'Abaixar-se rapidamente para evitar as agulhas.', destination: 22 },
                { text: 'Correr para frente antes que a grade feche.', destination: 39 }
            ]
        },
        4: {
            image: 'imagens/cena4.jpg',
            text: 'Você força a fechadura com a espada, mas com um estalo metálico, a lâmina se parte. Agora você está sem sua arma principal e a porta continua trancada.',
            isEnding: true,
            endingText: 'Sua aventura termina aqui. Desarmado e sem poder entrar, sua missão falhou antes mesmo de começar.'
        },
        5: {
            image: 'imagens/cena5.jpg',
            text: 'Você examina a tapeçaria. Em um canto, nota um bordado diferente: uma pequena chave prateada. Você a pega. Lembre-se que você possui a CHAVE PRATEADA.',
            choices: [
                { text: 'Guardar a chave e continuar explorando.', destination: 13 },
                { text: 'Voltar para a porta trancada para testar a chave.', destination: 35 }
            ]
        },
        // ... E assim por diante para todas as 40 cenas ...
        // Vou adicionar algumas cenas chave e as finais para o exemplo funcionar.
        // Você precisará preencher o resto.

        11: {
            image: 'imagens/cena11.jpg',
            text: 'Você ataca a sombra, mas sua espada a atravessa sem causar dano. A criatura ri e o ataca. Sem uma arma eficaz, você é rapidamente derrotado.',
            isEnding: true,
            endingText: 'Sua aventura termina aqui. Você foi derrotado pela criatura das sombras.'
        },
        13: {
            image: 'imagens/cena13.jpg',
            text: 'Você continua explorando a câmara. As paredes estão cobertas por tapeçarias antigas. Em um canto, você encontra um baú de madeira empoeirado.',
            choices: [
                { text: 'Abrir o baú.', destination: 30 },
                { text: 'Examinar as outras tapeçarias.', destination: 38 }
            ]
        },
        18: {
            image: 'imagens/cena18.jpg',
            text: 'Você circula a base da montanha e avista uma abertura estreita na rocha, parcialmente escondida por uma trepadeira grossa.',
            choices: [
                { text: 'Entrar pela abertura estreita.', destination: 36 },
                { text: 'Continuar procurando por outra entrada.', destination: 25 }
            ]
        },
        29: {
            image: 'imagens/cena29.jpg',
            text: 'A passagem leva a uma câmara circular. No centro, sobre um pedestal de obsidiana, flutua a Pedra do Sol. Entre você e a pedra, um Cavaleiro Espectral se materializa.',
            choices: [
                { text: 'Enfrentar o Cavaleiro (Requer Adaga de Obsidiana).', destination: 33 }, // Exemplo de escolha condicional
                { text: 'Atacar com sua espada comum.', destination: 11 }
            ]
        },
        31: {
            image: 'imagens/cena31.jpg',
            text: 'Você é consumido pelo conhecimento proibido do livro. Sua mente se estilhaça.',
            isEnding: true,
            endingText: 'Sua aventura termina aqui. Você foi consumido pelo conhecimento que não deveria possuir.'
        },
        33: {
            image: 'imagens/cena33.jpg',
            text: 'O Cavaleiro Espectral avança. Ele é imune a armas normais, mas a Adaga de Obsidiana que você carrega pulsa, ressoando com a energia sombria da criatura.',
            choices: [
                { text: 'Atacar o Cavaleiro Espectral com a Adaga de Obsidiana.', destination: 40 },
                { text: 'Tentar se defender com o Escudo do Sol Nascente.', destination: 37 }
            ]
        },
        39: {
            image: 'imagens/cena39.jpg',
            text: 'Você corre, mas não é rápido o suficiente. A pesada grade de metal desce com uma força esmagadora, prendendo-o sob ela.',
            isEnding: true,
            endingText: 'Sua aventura termina aqui. Você foi esmagado pela armadilha.'
        },
        40: {
            image: 'imagens/cena40.jpg',
            text: 'Você ataca com a Adaga de Obsidiana. A lâmina perfura a armadura espectral e o cavaleiro se dissolve em fumaça. Você pega a Pedra do Sol. Uma onda de calor e luz o envolve. Lá fora, os primeiros raios de sol rompem as nuvens. Você salvou Eldoria.',
            isEnding: true,
            isVictory: true,
            endingText: 'Você venceu! Parabéns! Sua aventura foi um sucesso!'
        }
        // PREENCHA AS OUTRAS CENAS AQUI...
    };

    // --- Elementos do DOM ---
    const introScreen = document.getElementById('intro-screen');
    const sceneContainer = document.getElementById('scene-container');
    const startButton = document.getElementById('start-button');
    const restartButton = document.getElementById('restart-button');
    
    const sceneImage = document.getElementById('scene-image');
    const sceneNumber = document.getElementById('scene-number');
    const sceneText = document.getElementById('scene-text');
    const sceneChoices = document.getElementById('scene-choices');

    const gameOverMessage = document.getElementById('game-over-message');
    const gameOverText = document.getElementById('game-over-text');

    // --- Lógica do Jogo ---
    function showScene(id) {
        const scene = adventureData[id];
        if (!scene) {
            console.error(`Cena com ID ${id} não encontrada!`);
            return;
        }

        // Atualiza conteúdo da cena
        sceneImage.src = scene.image;
        sceneNumber.textContent = `Entrada ${id}`;
        sceneText.textContent = scene.text;

        // Limpa escolhas anteriores
        sceneChoices.innerHTML = '';
        gameOverMessage.classList.add('hidden');
        sceneChoices.classList.remove('hidden');

        if (scene.isEnding) {
            // É um final
            sceneChoices.classList.add('hidden');
            gameOverText.textContent = scene.endingText;
            if (scene.isVictory) {
                gameOverText.style.color = '#78e08f'; // Verde para vitória
            } else {
                gameOverText.style.color = '#ff6b6b'; // Vermelho para derrota
            }
            gameOverMessage.classList.remove('hidden');
        } else {
            // Não é um final, cria botões de escolha
            scene.choices.forEach(choice => {
                const button = document.createElement('button');
                button.textContent = choice.text;
                button.className = 'choice-button';
                button.onclick = () => showScene(choice.destination);
                sceneChoices.appendChild(button);
            });
        }
    }

    // --- Eventos ---
    startButton.addEventListener('click', () => {
        introScreen.classList.add('hidden');
        sceneContainer.classList.remove('hidden');
        showScene(1);
    });

    restartButton.addEventListener('click', () => {
        // Para uma reinicialização completa, recarregamos a página.
        // Para uma versão mais complexa com inventário, seria necessário resetar o estado.
        window.location.reload();
    });
});