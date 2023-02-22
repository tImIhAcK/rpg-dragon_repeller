let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ['stick'];

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const text = document.getElementById('text');
const xpText = document.getElementById('xpText');
const healthText = document.getElementById('healthText');
const goldText = document.getElementById('goldText');
const monsterStats = document.getElementById('monsterStats');
const monsterNameText = document.getElementById('monsterNameText');
const monsterHealtText = document.getElementById('monsterHealtText');

//initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick =  fightDragon;


function goStore() { //Go Store function
    button1.innerHTML = 'Buy 10 health (10 gold)';
    button2.innerHTML = 'Buy weapon (30 gold)';
    button3.innerHTML = 'Go to town square';

    // change click function for the button
    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button3.onclick = goTown;
    text.innerText = 'You enter the store.'
};

function goCave(){ //Go cave function
    console.log('Going to cave')
};

function fightDragon(){ //fight dragon function
    console.log('Fighting dragon')
};


function buyHealth(){ //buy health function
    console.log('Buy health')
}

function buyWeapon() { //buy weapon function
    console.log('Buying weapon');
}

function goTown() {
    button1.innerHTML = 'Go to store';
    button2.innerHTML = 'Go to cave';
    button3.innerHTML = 'Fight dragon';

    // change click function for the button
    button1.onclick = goStore;
    button2.onclick = goCave;
    button3.onclick = fightDragon;
    text.innerText = 'You are in the town square. YOu see a sign that saya "store".'
}