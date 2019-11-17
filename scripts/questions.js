console.log("js is connected!");

// Timer
var timeEl = document.querySelector("#timer");
var secondsLeft = 120;

function time() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Timer:" + secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

function sendMessage() {
  timeEl.textContent = " Time's Up!";
}

time();

// Questions Array -- 2 minutes = 120 seconds 120/15 = 8 questions

var questionsHawaii = [
{ // 1
        title: "Who was the last monarch to rule the Kingdom of Hawaii?",
        choices: ["Kamehameha V" , "Kapi'olani" , "Kalakaua" , "Lili'uokalani"],
        answer: "Lili'uokalani"
    },
{ // 2
        title: "Honolulu is the capital of the Hawaiian Islands, an archipelago made up of eight islands. On which of the islands is Honolulu located?",
        choices: ["Kauai" , "Hawai'i" , "O'ahu" , "Maui"],
        answer: "O'ahu"
    },
{ // 3
        title: "What year did Hawaii become a U.S. state?",
        choices: ["2000" , "1959" , "1893" , "1865"],
        answer: "1959"
    },
{ // 4
        title: "What year did the United States overthrow the Hawaiian monarchy?",
        choices: ["2000" , "1959" , "1895" , "1865"],
        answer: "1893"
    },
{ // 5
        title: "Hawaii is home to the only royal palace on American soil. What is the name of this palace?",
        choices: ["Waikiki Palace" , "Ka'ala Palace" , "'Iolani Palace" , "Lili'oukalani Palace"],
        answer: "'Iolani Palace"
    },
{ // 6
        title: "How many letters are there in the Hawaiian alphabet?",
        choices: ["13" , "26" , "67" , "2,500"],
        answer: "13"
    },
{ // 7
        title: "Hawaii is part of Polynesia, a group of archipelagos in the Pacific Ocean that share common cultural and linguistic traits. Which of the following islands is NOT part of Polynesia?",
        choices: ["New Zealand" , "Cook Islands" , "Samoa" , "Natuna Islands"],
        answer: "Natuna Islands"
},
{ // 8
        title: "Because it is made up of volcanic islands, mountains (home to dormant and active volcanos) shape much of the Hawaiian landscape. What is the highest point of elevation in the entire archipelago?",
        choices: ["Mauna Kea" , "Wai'anae" , "Denali" , "Haleakala"],
        answer: "Mauna Kea"  
    }
];
