let remark = document.querySelector(".remark");
let finalScore = document.querySelector(".score");
let username = document.querySelector(".username");

username.innerHTML = ` ${localStorage.getItem("username")}`;

let finalScorePercentage = localStorage.getItem("finalScore");
let maxQuestion = localStorage.getItem("maxQuestion");

if (finalScorePercentage <= 3 && finalScorePercentage > 1){
    remark.innerHTML = "Not bad"
} 
if (finalScorePercentage <= 1){
    remark.innerHTML = "Better up"
}

finalScore.innerHTML = `${(finalScorePercentage / maxQuestion) * 100}%`;