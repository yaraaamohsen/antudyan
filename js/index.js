var listOfQuotes=[
    {
        quote: "“Be yourself; everyone else is already taken.”",
        author: "--Oscar Wilde",
    },
    {
        quote: "“So many books, so little time.”",
        author: "--Frank Zappa",
    },
    {
        quote: "“A room without books is like a body without a soul.”",
        author: "--Marcus Tullius Cicero",
    },
    {
        quote: "“You only live once, but if you do it right, once is enough”",
        author: "--Mae West",
    },
    {
        quote: "“Be the change that you wish to see in the world.",
        author: "--Mahatma Gandhi",
    }, 
    {
        quote: "“If you tell the truth, you don't have to remember anything.”",
        author: "--Mark Twain",
    }, 
    {
        quote: "“A friend is someone who knows all about you and still loves you.”",
        author: "--Elbert Hubbard",
    }, 
    {
        quote: "“I am so clever that sometimes I don't understand a single word of what I am saying.”",
        author: "--Oscar Wilde",
    },
]

function newQuote(){
    var randomNumber = parseInt(Math.random() * listOfQuotes.length);
    console.log(randomNumber);
    document.getElementById("quoteSentence").innerHTML =`${listOfQuotes[randomNumber].quote}`;
    document.getElementById("quoteAuthor").innerHTML = `${listOfQuotes[randomNumber].author}`;
}