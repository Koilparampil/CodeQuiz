var Clearbtn = document.querySelector("#clearHighscores");
var goBack = document.querySelector("#goBack");
var listH = document.querySelector("#highscoreList");
var highScores=JSON.parse(localStorage.getItem('highScores'));
function populatePage(){
    var highScores=JSON.parse(localStorage.getItem('highScores'));
    console.log(highScores);
    var items=""
    for(var i in highScores){
      items += '<li>' + i+' -- '+highScores[i]+ '</li>'
    }
    listH.innerHTML=items;
}



populatePage();

Clearbtn.addEventListener('click',function(){
    localStorage.removeItem("highScores");
    populatePage();
})

goBack.addEventListener('click', function(){
    location.href='index.html'
});
