let btn = document.getElementById('btn');
let output = document.getElementById('output');

let italianBtn = document.getElementById('italian-btn');
let italianOutput = document.getElementById('italian-output');

let quotes = [
    '"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.” – Winston Churchill', 
    '“Don’t Let Yesterday Take Up Too Much Of Today.” – Will Rogers',
    '“You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.” – Unknown',
    '“It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.” – Inspirational Quote By Vince Lombardi',
    '“If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.” – Steve Jobs',
    '“People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.” – Rob Siltanen',
    '“Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.” – Og Mandino',
    '“Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That’s The Classic Entrepreneur.” – Mohnish Pabrai',
    '“We May Encounter Many Defeats But We Must Not Be Defeated.” – Maya Angelou',
    '“Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.” – Johann Wolfgang Von Goethe','Queste misure possono essere utilizzate in circostanze straordinarie che rappresentano una grave minaccia per la sicurezza o la salute pubblica.',
];



let italianSentences = [
    'Ciao! Come stai?', 
    'Mi piace molto il cibo italiano.'
    ,
    'Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough. Og Mandino',
    'Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That’s The Classic Entrepreneur.',
    'We May Encounter Many Defeats But We Must Not Be Defeated. Maya Angelou',
    'Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do. Johann Wolfgang Von Goethe','Queste misure possono essere utilizzate in circostanze straordinarie che rappresentano una grave minaccia per la sicurezza o la salute pubblica.',
];

btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})


italianBtn.addEventListener('click', function(){
    var randomItalianSentence = italianSentences[Math.floor(Math.random() * italianSentences.length)];
    italianOutput.innerHTML = randomItalianSentence;
});





