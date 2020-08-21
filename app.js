let quotes = [
  {
    "quote": "Chuck Norris once gave Mike Tyson a black eye.",
    "author": "Chuck Norris"
       },

  {
    "quote": "What's the difference between Santa Claus and Chuck Norris's tears? More people believe in Santa Claus.",
    "author": "Chuck Norris"
       },

  {
    "quote": "Chuck Norris once ate a rubix cube and shit th all spark. Chuck norris once had sex with a mermaid and that's how micheal phelps was born.",
    "author": "Chuck Norris"
       }, {
    "quote": "Chuck Norris is the 'n' in 'nth degree'.",
    "author": "Chuck Norris"
       }, {
    "quote": "Chuck Norris created the All-Spark.",
    "author": "Chuck Norris"
       }, {
    "quote": "Chuck Norris ate Hannibal Lecter`s liver. With some fava beans, and a nice keg of beer.",
    "author": "Chuck Norris"
      }, {
    "quote": "Chuck Norris played Doom in the Nightmare level, without being hit. All of them.",
    "author": "Chuck Norris"
      }, {
    "quote": "Chuck Norris won the Thanksgiving Day Giant Pumpkin contest by weighing in only one of his testicles.",
    "author": "Chuck Norris"
      },{
    "quote": "The big bang theory: Chuck Norris winning a arm wrestle with godd",
    "author": "Chuck Norris"
      }, {
    "quote": "Chuck Norris is the man that shot Liberty Valance and JR",
    "author": "Chuck Norris"
      }, {
    "quote": "Chuck Norris is blacker than black.",
    "author": "Chuck Norris"
      },  {
    "quote": "Chuck Norris is so fast he can punch himself in the back the head",
    "author": "Chuck Norris"
      }, {
    "quote": "Chuck Norris invented KFC's 11 herbs and spices, but people did not know about the 12th ingredient:FEAR",
    "author": "Chuck Norris"
       }, {
    "quote": "It takes Chuck Norris 10 minutes to watch 60 minutes.",
    "author": "Chuck Norris"
      }, {
    "quote": "Whenever Chuck Norris gets deja vu, people come back to life.",
    "author": "Chuck Norris"
      }, {
    "quote": "An elephant never forgets Chuck Norris.",
    "author": "Chuck Norris"
      },  {
   "quote": "Chuck Norris sneezed twice--Hiroshima and Nagasaki were no more.",
   "author": "Chuck Norris"
      },  {
   "quote": "By adding only a few herbs & spices, Chuck Norris makes a delightful vinegar tea.",
   "author": "Chuck Norris"
      }, {
    "quote": "The automobile air bag was originally a failed invention to try and soften a blow from a Chuck Norris roundhouse kick.",
    "author": "Chuck Norris"
       }, {
    "quote": "Arnold was elected for governor of California because Chuck Norris voted for him.",
    "author": "Chuck Norris"
       }, {
    "quote": "Chuck Norris isn't a human being, he's a human doing.",
    "author": "Chuck Norris"
      }, {
    "quote": "Superman is able to leap tall buidings in a single bound. Chuck Norris is able to tell them to get the hell out of his way.",
    "author": "Chuck Norris"
      }, {
    "quote": "Chuck Norris doesn't eat vegetables, because they don't beg for mercy.",
    "author": "Chuck Norris"
      }, {
    "quote": "When Medusa stared at Chuck Norris SHE turned to stone.",
    "author": "Chuck Norris"
      }, {
    "quote": "The day after Chuck Norris was born, his afterbirth enlisted as a Navy Seal.",
    "author": "Chuck Norris"
      }, {
    "quote": "No woman can say no to Chuck Norris, because the only person who can deny Chuck Norris is Chuck Norris.",
    "author": "Chuck Norris"
      }, {
    "quote": "Chuck Norris invented dark matter to fool scientists!",
    "author": "Chuck Norris"
       },
                                                      
                                              
                                 
]                                 

                              
                    
  //variables
  const btn = document.getElementById("btn");
  const quote = document.getElementById("quote"); 
  const author = document.getElementById("author");               
        
//event listener


btn.addEventListener('click' , getQuote);


const colorRandomizer = () => {
  const myColors = ['#3498db', '#2ecc71', '#9b59b6', '#e74c3c', '#f1c40f'] //array of colors
  const randomNum = Math.floor((Math.random()*myColors.length)); //generate random number

  const randomColor = myColors[randomNum];
  // modify bg and txt color with my random color
  // get the DOM element
  const bg = document.querySelector('.randomBgColor')
  // set the css attribute on it
  bg.setAttribute('style', `background-color: ${randomColor}`);

}

function getQuote () {
  let number = Math.floor(Math.random() * quotes.length)

  quote.innerHTML = '<span>"</span>' + quotes[number].quote + '<span>"</span>';
  author.innerHTML = '<span>💥</span>' + quotes[number].author; 
  colorRandomizer(); 
}



  

  
 

  
  
  

  

 
 
  

 

  
  











































