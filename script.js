const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Ao iniciar um novo projeto, qual é sua abordagem predominante?",
        alternativas: [
            {
                texto: "Estruturo um planejamento detalhado, definindo escopo, arquitetura e entregas antes de qualquer linha de código.",
                afirmacao: "<b>Visão estratégica</b> é seu selo. Você pensa como um arquiteto de software, valorizando planejamento e previsibilidade."
            },
            {
                texto: "Mergulho no código rapidamente, construindo um protótipo funcional e iterando a partir do feedback contínuo.",
                afirmacao: "Sua abordagem é <b>ágil e iterativa</b>. Você aprende fazendo e se adapta com velocidade, como um verdadeiro artesão do código."
            }
        ]
    },
    {
        enunciado: "Como você enfrenta bugs ou gargalos de performance inesperados?",
        alternativas: [
            {
                texto: "Investigo metodicamente com logs, testes e ferramentas de profiling, buscando a causa raiz com precisão cirúrgica.",
                afirmacao: "<b>Analítico e metódico</b>, você trata cada bug como um quebra-cabeça a ser decifrado com excelência técnica."
            },
            {
                texto: "Consulto a comunidade, documentações e colegas, acelerando a solução com inteligência coletiva.",
                afirmacao: "Você é <b>colaborativo e conectado</b>, transformando a sabedoria da comunidade em seu maior ativo."
            }
        ]
    },
    {
        enunciado: "Qual aspecto você prioriza ao desenvolver uma nova feature?",
        alternativas: [
            {
                texto: "A qualidade do código, testes e manutenibilidade a longo prazo estão sempre em primeiro lugar.",
                afirmacao: "<b>Engenheiro de software</b> no DNA. Você constrói bases sólidas, pensando na saúde do projeto a longo prazo."
            },
            {
                texto: "A experiência do usuário e o valor entregue são meu norte. Código é ferramenta, não fim.",
                afirmacao: "Foco no <b>produto e no usuário</b>. Você entende que tecnologia existe para resolver problemas reais."
            }
        ]
    },
    {
        enunciado: "Diante de novas tecnologias, qual é sua postura?",
        alternativas: [
            {
                texto: "Aprofundo meu conhecimento no que já domino, buscando maestria antes de explorar novos horizontes.",
                afirmacao: "<b>Especialização</b> é sua força. Você prefere ser referência em seu nicho do que um generalista."
            },
            {
                texto: "Sou um eterno aprendiz. Adoto novas stacks com entusiasmo, sempre na fronteira da inovação.",
                afirmacao: "<b>Curiosidade insaciável</b> e adaptabilidade. Você é um explorador nato do ecossistema tech."
            }
        ]
    },
    {
        enunciado: "Como você prefere contribuir em um time de desenvolvimento?",
        alternativas: [
            {
                texto: "Atuo como referência técnica, revisando código e mentorando colegas em desafios complexos.",
                afirmacao: "Liderança <b>técnica e mentoria</b> são seu diferencial. Você eleva o nível do time ao seu redor."
            },
            {
                texto: "Gosto de atuar como facilitador, promovendo alinhamento e garantindo que todos estejam na mesma página.",
                afirmacao: "Você é o <b>elo de integração</b> do time, combinando habilidades técnicas com inteligência emocional."
            }
        ]
    },
    {
        enunciado: "Qual é sua visão sobre documentação e boas práticas?",
        alternativas: [
            {
                texto: "Acredito que código limpo e bem escrito é a melhor documentação. Nomes descritivos e simplicidade falam por si.",
                afirmacao: "<b>Pragmático e minimalista</b>, você valoriza a clareza do código acima de documentos extensos."
            },
            {
                texto: "Documentação detalhada é essencial. Facilita onboarding, manutenção e alinha expectativas de todo o time.",
                afirmacao: "<b>Comunicativo e organizado</b>, você entende que o conhecimento compartilhado é o que sustenta grandes projetos."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "🔍 CodeDNA — Perfil do Desenvolvedor";
    textoResultado.innerHTML = historiaFinal;
    caixaAlternativas.innerHTML = "";

    const botaoReiniciar = document.createElement("button");
    botaoReiniciar.textContent = "⟳ Refazer Análise";
    botaoReiniciar.style.marginTop = "20px";
    botaoReiniciar.addEventListener("click", reiniciarQuiz);
    caixaAlternativas.appendChild(botaoReiniciar);
}

function reiniciarQuiz() {
    atual = 0;
    historiaFinal = "";
    textoResultado.innerHTML = "";
    mostraPergunta();
}

mostraPergunta();