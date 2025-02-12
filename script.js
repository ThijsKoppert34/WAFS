const hand = document.querySelector(".hand");
const button = document.querySelector(".zwaaiKnop");
const avatar = document.querySelector(".avatar")

// Zorgt er voor dat er bij een click op de button 2 acties gebeuren
button.addEventListener("click", () => {
    hand.classList.toggle("zwaaiToggle"); // 'toggle' de animatie zwaaiToggle
    avatar.classList.toggle("knipOog"); // 'toggle' de animatie knipOog
});

const bergen = document.querySelectorAll(".bergen article img");
const tekstBergen = document.querySelectorAll(".bergen article p");


// forEach betekend elk element in de array
bergen.forEach((berg, i) => {
    let bergOpen = false;
    berg.addEventListener("click", () => {
        if (bergOpen) {
            tekstBergen[i].style.display = 'none';
            bergOpen = false
        } else {
            tekstBergen[i].style.display = 'block';
            bergOpen = true
        }
        berg.classList.toggle("openBerg");
        console.log("bergOpen", bergOpen)
        console.log(tekstBergen[i])
    })
})

const zon = document.querySelector(".zon")
const body = document.querySelector("body")

zon.addEventListener("click", () => {
    body.classList.add("donkereModus");
})

const maan = document.querySelector(".maan")

maan.addEventListener("click", () => {
    body.classList.remove("donkereModus");
})

let res = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Lisse?unitGroup=metric&key=CVQHPRN97XSS6XF3DAEWDAQ8J&contentType=json')
let json = await res.json()

console.log(json)

const tempEl = document.querySelector('.temp')
const temp = json.currentConditions.temp.toFixed(1)
tempEl.innerHTML = `Huidige temperatuur: <span>${temp}°</span> in ${json.address}`

function temperatuurUpdate() {
    zon.setAttribute('data-temp', json.currentConditions.temp.toFixed(1));
    maan.setAttribute('gevoel-temp', json.currentConditions.feelslike.toFixed(1));
};

const gevTemp = document.querySelector('.gevoelTemp')
const gevoelTemp = json.currentConditions.feelslike.toFixed(1)
gevTemp.innerHTML = `Maar het voelt aan als: <span>${gevoelTemp}°</span>`

setInterval(temperatuurUpdate, 1000);

function updateTime() {
    // Haal de huidige tijd op in de Amsterdamse tijdzone
    const options = {
        timeZone: 'Europe/Amsterdam',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    const amsterdamTime = new Intl.DateTimeFormat('nl-NL', options).format(new Date());

    // Plaats de tijd in een HTML-element met id="tijd"
    document.getElementById("tijd").innerText = `${amsterdamTime}`;
}

// Voer de functie direct uit en update elke seconde
updateTime();
setInterval(updateTime, 1000);

// Bron voor de tijd: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

const raketKnop = document.querySelector('.raket')

raketKnop.addEventListener("click", () => {
    raketKnop.classList.add('animate')
    setTimeout(() => {
        raketKnop.classList.remove('animate')
    }, 2000)
})