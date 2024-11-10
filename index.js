alert("Question oyununa xoş gəlmişsiniz");

let startGame = confirm("Oyuna başlamaq istədiyinizə əminsiz ?");
let points = 0;

if (startGame) {
    let question1 = prompt("Üçbucağın bucaqlarının cəmi neçə dərəcədir?");

    if (question1 === "180") {
        points += 10;
    }
    let question2 = prompt("1 ilin içində neçə ay var?");
    if (question2 === "12") {
        points += 10;
    }
    let question3 = prompt("Dünyada ən çox danışılan dil hansıdır?");

    if (question3 === "ingilis") {
        points += 10;;
    }
    let question4 = prompt("Ən böyük tək rəqəm hansıdır?");

    if (question4 === "9") {
        points += 10;;
    }
    let question5 = prompt("Ayda neçə gün var?");

    if (question5 === "30") {
        points += 10;;
    }

    alert(`Oyun Sonu! Toplam xalınız: ${points}`);
} else {
    alert("Sizi yenə gözləyirik");
}
