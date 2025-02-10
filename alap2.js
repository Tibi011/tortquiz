let sz=""
let szamlalo=0
let helys=0
let osszes=0
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
        //console.log(i+" "+j)
        sz+=` 
        <img 
            id="${szamlalo}"onmouseover="szegelyRajzol(this.id)" 
            onmouseleave="szegelyLevesz(this.id)" onclick="nagyit(this.id)" 
            src="${szamlalo}.jpg" alt="" style="width:100px;margin:5px;border:2px solid white">`
        szamlalo++
    }
    sz+=`<br>`
}
document.getElementById("kepekHelye").innerHTML=sz

let megoldas=""
let aktualisSorszam=-1
let elozo=-1

function nagyit(id){
    //alert(id)
    aktualisSorszam=id
    if (elozo!=-1){
        document.getElementById(elozo).style.border="0px solid black"
        document.getElementById(elozo).style.filter="invert(0%)"
    }
    document.getElementById(id).style.border="2px solid black"    
    document.getElementById(id).style.filter="invert(100%)"
    elozo=id
    document.getElementById("nagyKep").innerHTML=`
    <img src="${id}.jpg" alt="" style="width:640px">`


    megoldas=nevekTomb[id].megoldas
    let keveres=[]
    keveres.push(nevekTomb[id].megoldas)
    keveres.push(nevekTomb[id].tipp1)
    keveres.push(nevekTomb[id].tipp2)
    keveres.push(nevekTomb[id].tipp3)
    console.log(keveres)
    for (let i = 0; i < 100; i++) {
        let rSzam1=Math.floor(Math.random() *4)
        let rSzam2=Math.floor(Math.random() *4)
        let csere=keveres[rSzam1]
        keveres[rSzam1]=keveres[rSzam2]
        keveres[rSzam2]=csere
        //console.log(keveres)


    }




    document.getElementById("ki").innerHTML=
        `Ki ez a híres személyiség?<br>
        <button onclick="gombKattint('${keveres[0]}')">${keveres[0]}</button>
        <button onclick="gombKattint('${keveres[1]}')">${keveres[1]}</button>
        <button onclick="gombKattint('${keveres[2]}')">${keveres[2]}</button>
        <button onclick="gombKattint('${keveres[3]}')">${keveres[3]}</button>
    `
}

function szegelyRajzol(id){
    document.getElementById(id).style.border="2px solid blue"
}

function szegelyLevesz(id){
    document.getElementById(id).style.border="2px solid white"
}
function gombKattint(aktualisFelirat)
    {
    //alert(aktualisFelirat)
    osszes++
    if (megoldas==aktualisFelirat) {
        alert("Helyes válasz!!") 
        helys++
        if(aktualisSorszam==nevekTomb.length-1)
            aktualisSorszam=0
        else
            aktualisSorszam++

    }
    else
        alert("Rossz válasz!!")

    document.getElementById("pontHelye").innerHTML=`Pontok: ${helys}/${osszes}  ${Math.round(100*helys/osszes,0)}%`
    //alert(aktualisSorszam)
    nagyit(aktualisSorszam)
}




const nevekTomb = [
    {
        "megoldas": "Mátyás Király",
        "tipp1": "Lajos Király",
        "tipp2": "IV. Béla",
        "tipp3": "II. András",
    },
    {
        "megoldas": "Rózsa",
        "tipp1": "Tulipán",
        "tipp2": "Irisz",
        "tipp3": "Százszorszép",
    },
    {
        "megoldas": "Kossuth Lajos",
        "tipp1": "Petőfi Sándor",
        "tipp2": "Móricz Zsigmond",
        "tipp3": "Jókai Mór",
    },
    {
        "megoldas": "Széchényi István",
        "tipp1": "Deák Ferenc",
        "tipp2": "Eötvös József",
        "tipp3": "Kossuth Lajos",
    },
    {
        "megoldas": "Majoros Péter",
        "tipp1": "Mátyás Király",
        "tipp2": "IV. Béla",
        "tipp3": "II. András",
    },
    {
        "megoldas": "Orbán Viktor",
        "tipp1": "Móricz Zsigmond",
        "tipp2": "Gyurcsány Feren",
        "tipp3": "Petőfi Sándor",
    },
    {
        "megoldas": "Gyurcsány Ferenc",
        "tipp1": "Jókai Mór",
        "tipp2": "Móricz Zsigmond",
        "tipp3": "Kossuth Lajos",
    },
    {
        "megoldas": "Liszt Ferenc",
        "tipp1": "Széchényi István",
        "tipp2": "Kossuth Lajos",
        "tipp3": "Eötvös József",
    },
    {
        "megoldas": "Hitler",
        "tipp1": "Radnóti Miklós",
        "tipp2": "Petőfi Sándor",
        "tipp3": "József Attila",
    },
    {
        "megoldas": "Pénzes Tibor",
        "tipp1": "Hitler",
        "tipp2": "Petőfi Sándor",
        "tipp3": "Váci Mihály",
    },
    {
        "megoldas": "Elon Musk",
        "tipp1": "Hitler",
        "tipp2": "Váci Mihály",
        "tipp3": "Petőfi Sándor",
    },
    {
        "megoldas": "Arany János",
        "tipp1": "Háború",
        "tipp2": "Szabadság",
        "tipp3": "Szeretet",
    }
];
