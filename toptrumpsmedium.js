// CONSTANTS DECLARED //
const attriclass = document.getElementsByClassName("attri")[0];
const infoboxs = document.getElementById("infobox");
const infoboxs2 = document.getElementById("infobox2");
const infoboxs3 = document.getElementById("infobox3");
const attackbutton = document.getElementById("attri1");
const defensebutton = document.getElementById("attri2");
const evilbutton = document.getElementById("attri3");
const personalitybutton = document.getElementById("attri4");
const weightbutton = document.getElementById("attri5");
const cardinfo = document.getElementById("pokeinfo");

const delay = ms => new Promise(res => setTimeout(res, ms));
let deck = [
    {card: "Bulbasaur",attack: 3, defense: 90, evil: 3, weight: 5, personality: 145},
    {card: "Lizardo", attack: 6, defense: 87, evil: 6, weight: 10, personality: 140},
    {card: "Squirtle",attack: 9, defense: 84, evil: 9,weight: 15, personality: 135},
    {card: "Wartortle", attack: 12, defense: 81, evil: 12, weight: 20,personality: 130},
    {card: "Blastoise",attack: 15, defense: 78, evil: 15, weight: 25, personality: 125},
    {card: "weedle", attack: 18, defense: 75, evil: 18, weight: 30, personality: 120},
    {card: "Metapod",attack: 21, defense: 72, evil: 21, weight: 35, personality: 115},
    {card: "Beedril", attack: 24, defense: 69, evil: 24, weight: 40, personality: 110},
    {card: "Pigeot",attack: 27, defense: 66, evil: 27, weight: 45, personality: 105},
    {card: "Koratta", attack: 30, defense: 63, evil: 30, weight: 50, personality: 100},
    {card: "Ratticate",attack: 33, defense: 60, evil: 33, weight: 55, personality: 98},
    {card: "Ekans", attack: 36, defense: 57, evil: 36, weight: 60, personality: 95},
    {card: "Sandshrew",attack: 39, defense: 54, evil: 39, weight: 65, personality: 90},
    {card: "Nidorina", attack: 42, defense: 51, evil: 41, weight: 70, personality: 85},
    {card: "Sandslash",attack: 45, defense: 48, evil: 44, weight: 75, personality: 80},
    {card: "Clefairy", attack: 48, defense: 45, evil: 47, weight: 80, personality: 75},
    {card: "Pikachu",attack: 51, defense: 42, evil: 50, weight: 90, personality: 70},
    {card: "Paras", attack: 54, defense: 39, evil: 53, weight: 95, personality: 65},
    {card: "Parisect",attack: 57, defense: 36, evil: 56, weight: 100, personality: 60},
    {card: "Dugtrio", attack: 60, defense: 33, evil: 59, weight: 105, personality: 55},
    {card: "Charizard",attack: 63, defense: 30, evil: 68, weight: 110, personality: 50},
    {card: "Persian", attack: 66, defense: 27, evil: 75, weight: 115, personality: 45},
    {card: "Mankey",attack: 69, defense: 24, evil: 80, weight: 120, personality: 40},
    {card: "Golem", attack: 72, defense: 21, evil: 82, weight: 125, personality: 35},
    {card: "Rhydon",attack: 75, defense: 18, evil: 90, weight: 130, personality: 30},
    {card: "Cubone", attack: 78, defense: 15, evil: 92, weight: 135, personality: 25},
    {card: "Gengar",attack: 81, defense: 12, evil: 95, weight: 140, personality: 20},
    {card: "Haunter", attack: 84, defense: 9, evil: 100, weight: 150, personality: 15},
    {card: "Seel",attack: 87, defense: 6, evil: 101, weight: 155, personality: 10},
    {card: "Mega Slowbro", attack: 90, defense: 3, evil: 110, weight: 160, personality: 5},
]
let winSize = deck.length;


// CLASS FOR PLAYERS

class Player {
    constructor(name) {
    this._name = name
    this._playerDeck = [
    ] 
}
name() {     
    return this._name
}
start() {    //START - starts game and calls shuffle function
    infoboxs.style.visibility = "visible"
    infoboxs2.style.visibility = "visible"
    infoboxs3.style.visibility = "visible"
    playerOne.shuffle(deck)
    
}
shuffle(a) { //SHUFFLE - Shuffles,Splits, and divides the 'deck' array.
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        this._playerDeck = deck.splice(0, Math.ceil(winSize / 2));
        playerTwo._playerDeck = deck
        console.log(playerOne._playerDeck)
        console.log(playerTwo._playerDeck)
        playerOne.selectType()
    } 
textwait = async (yo) => { 
    await delay(4000);
    document.getElementById("infotext").innerHTML = yo
    }
selectType = async (yo) => { 
    attriclass.style.visibility = "visible"
    attackbutton.addEventListener("click",() => {
        this.power()
    })
    defensebutton.addEventListener("click",() => {
        this.defense()
    })
    evilbutton.addEventListener("click",() => {
        this.evil()
    })
    personalitybutton.addEventListener("click",() => {
        this.personality()
    })
    weightbutton.addEventListener("click",() => {
        this.weight()
    })
    await delay(2000);
    cardinfo.innerHTML = `${this._playerDeck[0].card}<br><br>Power: ${this._playerDeck[0].attack}<br>Defense: ${this._playerDeck[0].defense}<br>Evil: ${this._playerDeck[0].evil}<br>Weight: ${this._playerDeck[0].weight}<br>Personality: ${this._playerDeck[0].personality}`
    infoboxs.innerHTML =(`${this._name} it's your turn.\n What Attribute do you choose?`)
    infoboxs2.innerHTML = (`${playerOne._name} <br> ${playerOne._playerDeck.length} `)
    infoboxs3.innerHTML = (`${playerTwo._name} <br> ${playerTwo._playerDeck.length} `)

    


}
power() {     //TURN - Informs players who's turn it is and who wins based on a single variable of attack.
    if (playerOne._playerDeck[0].attack > playerTwo._playerDeck[0].attack) {
        playerOne._playerDeck.push(playerTwo._playerDeck[0])
        playerTwo._playerDeck.shift();
        playerOne._playerDeck.push(playerOne._playerDeck[0])
        playerOne._playerDeck.shift()
        infoboxs.innerHTML = (`${playerOne._name} wins, they take ${playerTwo._name}'s card and put it to the bottom of their deck. ${playerOne._name} has ${playerOne._playerDeck.length} cards, and ${playerTwo._name} has ${playerTwo._playerDeck.length}! `)
        if(playerOne._playerDeck.length < winSize) {
            playerOne.selectType()
        }
        else if (playerOne._playerDeck.length >= winSize) {
            infoboxs.innerHTML = (`${playerOne.name()} Wins!`)
    }
}
    else if (playerOne._playerDeck[0].attack < playerTwo._playerDeck[0].attack) {
        playerTwo._playerDeck.push(playerOne._playerDeck[0])
        playerOne._playerDeck.shift();
        playerTwo._playerDeck.push(playerTwo._playerDeck[0])
        playerTwo._playerDeck.shift()
        infoboxs.innerHTML = (`${playerTwo._name} wins, they take ${playerOne._name}'s card and put it to the bottom of their deck. ${playerTwo._name} has ${playerTwo._playerDeck.length} cards, and ${playerOne._name} has ${playerOne._playerDeck.length}! ! `)
        if(playerTwo._playerDeck.length < winSize) {
            playerTwo.selectType()
        }
        else if (playerTwo._playerDeck.length >= winSize) {
            infoboxs.innerHTML = ("infotext").innerHTML(`${playerTwo.name()} Wins!`)
    }      
    } 
}  
defense() {     //TURN - Informs players who's turn it is and who wins based on a single variable of attack.
    if (playerOne._playerDeck[0].defense > playerTwo._playerDeck[0].defense) {
        playerOne._playerDeck.push(playerTwo._playerDeck[0])
        playerTwo._playerDeck.shift();
        playerOne._playerDeck.push(playerOne._playerDeck[0])
        playerOne._playerDeck.shift()
        infoboxs.innerHTML =`${playerOne._name} wins, they take ${playerTwo._name}'s card and put it to the bottom of their deck. ${playerOne._name} has ${playerOne._playerDeck.length} cards, and ${playerTwo._name} has ${playerTwo._playerDeck.length}! `
        if(playerOne._playerDeck.length < winSize) {
            playerOne.selectType()
        }
        else if (playerOne._playerDeck.length >= winSize) {
            infoboxs.innerHTML =(`${playerOne.name()} Wins!`)
    }
    }
    else if (playerOne._playerDeck[0].defense < playerTwo._playerDeck[0].defense) {
        playerTwo._playerDeck.push(playerOne._playerDeck[0])
        playerOne._playerDeck.shift();
        playerTwo._playerDeck.push(playerTwo._playerDeck[0])
        playerTwo._playerDeck.shift()
        infoboxs.innerHTML =`${playerTwo._name} wins, they take ${playerOne._name}'s card and put it to the bottom of their deck. ${playerTwo._name} has ${playerTwo._playerDeck.length} cards, and ${playerOne._name} has ${playerOne._playerDeck.length}! ! `
        if(playerTwo._playerDeck.length < winSize) {
            playerTwo.selectType()
        }
        else if (playerTwo._playerDeck.length >= winSize) {
            infoboxs.innerHTML =`${playerTwo.name()} Wins!`
        }
    } 
}       
evil() {     //TURN - Informs players who's turn it is and who wins based on a single variable of attack.
    if (playerOne._playerDeck[0].evil < playerTwo._playerDeck[0].evil) {
        playerOne._playerDeck.push(playerTwo._playerDeck[0])
        playerTwo._playerDeck.shift();
        playerOne._playerDeck.push(playerOne._playerDeck[0])
        playerOne._playerDeck.shift()
        infoboxs.innerHTML =`${playerOne._name} wins as their card is less Evil! They take ${playerTwo._name}'s card and put it to the bottom of their deck. ${playerOne._name} has ${playerOne._playerDeck.length} cards, and ${playerTwo._name} has ${playerTwo._playerDeck.length}! `
        
        if(playerOne._playerDeck.length < winSize) {
            playerOne.selectType()
        }
        else if (playerOne._playerDeck.length >= winSize) {
            infoboxs.innerHTML =`${playerOne.name()} Wins!`
    }
}
    else if (playerOne._playerDeck[0].evil > playerTwo._playerDeck[0].evil) {
        playerTwo._playerDeck.push(playerOne._playerDeck[0])
        playerOne._playerDeck.shift();
        playerTwo._playerDeck.push(playerTwo._playerDeck[0])
        playerTwo._playerDeck.shift()
        infoboxs.innerHTML =`${playerTwo._name} wins as their card is less Evil! They take ${playerOne._name}'s card and put it to the bottom of their deck. ${playerTwo._name} has ${playerTwo._playerDeck.length} cards, and ${playerOne._name} has ${playerOne._playerDeck.length}! ! `
        if(playerTwo._playerDeck.length < winSize) {
            playerTwo.selectType()
        }
        else if (playerTwo._playerDeck.length >= winSize) {
            infoboxs.innerHTML =`${playerTwo.name()} Wins!`
        }
    } 
}
weight() {     //TURN - Informs players who's turn it is and who wins based on a single variable of attack.
    if (playerOne._playerDeck[0].weight > playerTwo._playerDeck[0].weight) {
        playerOne._playerDeck.push(playerTwo._playerDeck[0])
        playerTwo._playerDeck.shift();
        playerOne._playerDeck.push(playerOne._playerDeck[0])
        playerOne._playerDeck.shift()
        infoboxs.innerHTML =`${playerOne._name} wins, they take ${playerTwo._name}'s card and put it to the bottom of their deck. ${playerOne._name} has ${playerOne._playerDeck.length} cards, and ${playerTwo._name} has ${playerTwo._playerDeck.length}! `
        if(playerOne._playerDeck.length < winSize) {
            playerOne.selectType()
        }
        else if (playerOne._playerDeck.length >= winSize) {
            infoboxs.innerHTML =`${playerOne.name()} Wins!`
    }
}
    else if (playerOne._playerDeck[0].weight < playerTwo._playerDeck[0].weight) {
        playerTwo._playerDeck.push(playerOne._playerDeck[0])
        playerOne._playerDeck.shift();
        playerTwo._playerDeck.push(playerTwo._playerDeck[0])
        playerTwo._playerDeck.shift()
        infoboxs.innerHTML =`${playerTwo._name} wins, they take ${playerOne._name}'s card and put it to the bottom of their deck. ${playerTwo._name} has ${playerTwo._playerDeck.length} cards, and ${playerOne._name} has ${playerOne._playerDeck.length}! ! `
        if(playerTwo._playerDeck.length < winSize) {
            playerTwo.selectType()
        }
        else if (playerTwo._playerDeck.length >= winSize) {
            infoboxs.innerHTML =`${playerTwo.name()} Wins!`
        }
    }
}
personality() {     //TURN - Informs players who's turn it is and who wins based on a single variable of attack.
    if (playerOne._playerDeck[0].personality > playerTwo._playerDeck[0].personality) {
        playerOne._playerDeck.push(playerTwo._playerDeck[0])
        playerTwo._playerDeck.shift();
        playerOne._playerDeck.push(playerOne._playerDeck[0])
        playerOne._playerDeck.shift()
        infoboxs.innerHTML =`${playerOne._name} wins, they take ${playerTwo._name}'s card and put it to the bottom of their deck. ${playerOne._name} has ${playerOne._playerDeck.length} cards, and ${playerTwo._name} has ${playerTwo._playerDeck.length}! `
        if(playerOne._playerDeck.length < winSize) {
            playerOne.selectType()
        }
        else if (playerOne._playerDeck.length >= winSize) {
            infoboxs.innerHTML =`${playerOne.name()} Wins!`
    }
}
    else if (playerOne._playerDeck[0].personality < playerTwo._playerDeck[0].personality) {
        playerTwo._playerDeck.push(playerOne._playerDeck[0])
        playerOne._playerDeck.shift();
        playerTwo._playerDeck.push(playerTwo._playerDeck[0])
        playerTwo._playerDeck.shift()
        infoboxs.innerHTML =`${playerTwo._name} wins, they take ${playerOne._name}'s card and put it to the bottom of their deck. ${playerTwo._name} has ${playerTwo._playerDeck.length} cards, and ${playerOne._name} has ${playerOne._playerDeck.length}! ! `
        if(playerTwo._playerDeck.length < winSize) {
            playerTwo.selectType()
        }
        else if (playerTwo._playerDeck.length >= winSize) {
            infoboxs.innerHTML =`${playerTwo.name()} Wins!`
            }
        }             
    } 
namechange(change) {
    this._name = change
    console.log(this._name)
    }
} 
//Creation of classes for each player
const playerOne = new Player ("p1")
const playerTwo = new Player ("p2")

//Method to change name for each player via input and Runnig Start Function
const input = document.getElementById("input");
const input2 = document.getElementById("input2")
const button =document.getElementById("submit")
const playerchange =document.getElementsByClassName("nameinput")

button.addEventListener("click",() => {
    playerOne.namechange(input.value)
    playerTwo.namechange(input2.value)
    input.value = ""
    input2.value = ""
    input2.style.visibility = "hidden"
    input.style.visibility = "hidden"
    button.style.visibility = "hidden"
    playerOne.start()
})


















