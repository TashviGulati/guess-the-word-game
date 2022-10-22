player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";
player1_score = 0;
player2_score = 0;
document.getElementById("player1_score").innerHTML = player1_score + ":";
document.getElementById("player2_score").innerHTML = player2_score + ":";
document.getElementById("player_question").innerHTML = "question turn:" + player1_name;
document.getElementById("player_answer").innerHTML = "answer turn:" + player2_name;

function send() {
    getWord = document.getElementById("word").value;
    word = getWord.toLowerCase();

    character1 = word.charAt(1);
    character2 = word.charAt(Math.floor(word.length / 2));
    character3 = word.charAt(word.length - 1);

    char1 = word.replace(character1, "_");
    char2 = char1.replace(character2, "_");
    char3 = char2.replace(character3, "_");

    question_word = "<h4 id='word_display'> Q. " + char3 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";


}
questionTurn = "player1";
answerTurn = "player2";
function check() {
    getAnswer = document.getElementById("input_check_box").value
    answer = getAnswer.toLowerCase();
    if (answer == word) {
        if (answerTurn == "player1") {
            player1_score = player1_score + 1
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else {
            player2_score = player2_score + 1
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if (questionTurn == "player1") {
        questionTurn = "player2";
        document.getElementById("player_question").innerHTML = "question turn-" + player2_name;
    }
    else {
        questionTurn = "player1";
        document.getElementById("player_question").innerHTML = "question turn-" + player1_name;
    }
    if (answerTurn == "player1") {
        answerTurn = "player2";
        document.getElementById("player_answer").innerHTML = "answer turn-" + player2_name;
    }
    else {
        answerTurn = "player1";
        document.getElementById("player_answer").innerHTML = "answer turn-" + player1_name;
    }

}
