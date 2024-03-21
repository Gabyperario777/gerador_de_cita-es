const quotes = [
    {
        quote: "A única maneira de fazer um ótimo trabalho é amar o que você faz.",
        source: "Steve Jobs"
    },
    {
        quote: "Acredite que você pode e você está no meio do caminho.",
        source: "Theodore Roosevelt"
    },
    {
        quote: "Uma vida sem reflexão não vale a pena ser vivida.",
        source: "Sócrates"
    },
    {
        quote: "Penso, logo existo.",
        source: "Decartes"
    },
    {
        quote: "Ser feliz sem motivo é a mais autêntica forma de felicidade.",
        source: "Carlos Drummond de Andrade"
    },
    {

        quote: "Viver é a coisa mais rara do mundo. A maioria das pessoas apenas existe.",
        source: "Oscar Wilde"
    },
    {

        quote: "Tão bom morrer de amor! E continuar vivendo...",
        source: "Mario Quintana"
    },
    {
        quote: "Tenho em mim todos os sonhos do mundo.",
        source: "Fernando Pessoa"
    },
    {
        quote: "O verdadeiro amor nunca se desgasta. Quanto mais se dá mais se tem.",
        source: "Antoine de Saint-Exupéry"
    },
    {
        quote: "A maior glória de viver não está em nunca cair, mas em nos levantar toda vez que caímos.",
        source: "Nelson Mandela"
    },
    {
        quote: "A maneira de começar é parar de falar e começar a fazer.",
        source: "Walt Disney"
    },
    {
        quote: "Lembre-se sempre de que você é absolutamente único. Assim como todos os outros.",
        source: "Margaret Mead"
    },
    {
        quote: "As melhores e mais belas coisas do mundo não podem ser vistas nem tocadas – devem ser sentidas com o coração.",
        source: "Helen Keller"
    },
    {
        quote: "É durante nossos momentos mais sombrios que devemos nos concentrar para ver a luz.",
        source: "Aristóteles"
    },
    {
        quote: "Quem está feliz também fará os outros felizes.",
        source: "Anne Frank"
    },
    {
        quote: "Defeitos não fazem mal, quando há vontade e poder de corrigi-los.",
        source: "Machado de Assis"
    },
    {
        quote: "O mundo precisa de atitudes, não de opiniões. Opinião nenhuma mata fome ou cura doença.",
        source: "Angelina Jolie"
    },
    {
        quote: "O melhor lugar do mundo é aqui e agora.",
        source: "Gilberto Gil"
    },
    {
        quote: "Acordar cedo e planejar metas para cada dia vivenciado é desafiar e ter autoconfiança.",
        source: "Kurt Cobain"
    },
    {
         quote: "Existe algo mais importante que a lógica: a imaginação. Se a ideia é boa, jogue a lógica pela janela.",
        source: "Alfred Hitchcock"
    }
];

const quote = document.getElementById("quote");
const source = document.getElementById("source");
const newQuoteButton = document.getElementById("new-quote");

newQuoteButton.addEventListener("click", function() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quote.textContent = randomQuote.quote;
    source.textContent = randomQuote.source;
});