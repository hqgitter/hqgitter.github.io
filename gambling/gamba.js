function randomBall(){
    return Math.floor(Math.random() * 49 + 1);
}


function logger(funwords){
    let log = document.getElementById("logger");

    let list = document.createElement("li");
    list.innerText = funwords;
    log.appendChild(list);

    if (log.children.length > 16) {
        log.removeChild(log.childNodes[0]);
    }
    log.scrollTop = log.scrollHeight;
}

function winningNumbers() {
    let winningNums = [];
    for (let i = 0; i < 6; i++){
        let ball = 0;
        do {
            ball = randomBall();
        } while (winningNums.includes(ball));
        winningNums.push(ball);
    }
    return winningNums;
}

function checkTicket(winningTicket, yourTicket){
    var wincount = [];
    for (let i = 0; i < 6; i++){
        if (winningTicket.includes(yourTicket[i])){
            wincount.push(yourTicket[i]);
        }
    }
    return wincount;
}

const max = 6;
const startingMoney = 3000000000;
const OGjackpot = 1000000;

var jackpot = OGjackpot;
var clicks = startingMoney;
var lastClicked = clicks;

var days = 0;
var years = 0;
function gamble(){
    let selected = Array.from(document.querySelectorAll("#ticketCheck:checked"));
    let output = document.getElementById("output");
    if (selected.length != max) {
        //kill yourself
        output.innerHTML = "You didn't select enough numbers!";
    }
    else {
        let winTicket = winningNumbers();
        //let winTicket = [1,2,3,4,5,6];
        let myTicket = Array.from(selected, (x) => x.parentElement.name );
        console.log(myTicket);
        let prize= checkTicket(winTicket,myTicket);
        let finalwords = "";
        let prizetext = "";
        let earnings = 0;
        switch(prize.length){
            case 5:
                prizetext += prize[4].toString() + ", ";
                earnings += jackpot * 0.055 - 50;
            case 4:
                prizetext += prize[3].toString() + ", ";
                earnings += 40;
            case 3:
                prizetext += prize[0].toString() + ", "
                 + prize[1].toString() + ", "
                 + prize[2].toString() + ".";
                earnings += 10;

                let profit = clicks - lastClicked + earnings;
                clicks += earnings;
                lastClicked = clicks;
                logger("You earned " + earnings.toString() + " from " + prizetext + " Profits: " + profit.toString() + ". Total money earned: " +
                (clicks - startingMoney) + "."
                );
                break;

            case 6:
                finalwords = "Jackpot!!!";
                clicks += jackpot;
                logger("You got the Jackpot!");
                if (toggle)
                    toggleInterval();
                break;
            default:
                finalwords = "Aww dang it!";

        }

        finalwords += "\nWin Ticket: \n";
        winTicket.forEach( (x) => {
            finalwords += x.toString() + ", ";
        }  );

        output.innerHTML = finalwords;
        clicks -= 1;
        //jackpot += 1 * 0.54
        document.getElementById("count").innerHTML = "$" + clicks.toString();
        document.getElementById("jackpot").innerHTML = "$" + jackpot.toFixed(2);

        days += 1;
        if (days % 365 == 0) {
            days = 0;
            years += 1;
        }
        document.getElementById("days").innerHTML = (years > 0 ? years.toString() + " years, " : "") + days.toString() + " days of drawing.";

    }

}


function isChecked(){
    let selected = Array.from(document.querySelectorAll("#ticketCheck:checked"));
    if (selected.length > max){
        return false;
    }
    return true;
}

function createTicketList(){
    var ticket = document.getElementById("Ticket");
    for (let i = 1; i <= 49; i++){
        let label = document.createElement("label");
        label.innerHTML = i.toString();
        label.name = i;
        label.className = "helldiver";
        let input = document.createElement("input");
        input.type = "checkbox";
        input.name = "ticket";
        input.id = "ticketCheck";

        input.onclick = isChecked;
        label.appendChild(input);
        ticket.appendChild(label);
    }
}




var interval;
var toggle = false;
function toggleInterval(){
    toggle = !toggle;
    if (toggle){
        interval = setInterval(gamble,10);
        
    }
    else {
        clearInterval(interval);
    }
}
