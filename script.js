const dataAraay = [
    {
        userId: 1,
        userName: 'სახელი 1',
        userLastName: 'გვარი 1',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 20,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 2,
        userName: 'სახელი 2',
        userLastName: 'გვარი 2',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 30,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 3,
        userName: 'სახელი 3',
        userLastName: 'გვარი 3',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 35,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 4,
        userName: 'სახელი 4',
        userLastName: 'გვარი 4',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 29,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 5,
        userName: 'სახელი 5',
        userLastName: 'გვარი 5',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 49,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 6,
        userName: 'სახელი 6',
        userLastName: 'გვარი 6',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 31,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 7,
        userName: 'სახელი 7',
        userLastName: 'გვარი 7',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 31,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
]

//another sphagetti

for (i=0; i<7; i++){
    let firstCard = dataAraay[i];


    if(i==0){
        console.log(firstCard["userId"]);
        console.log(firstCard["userName"]);
        console.log(firstCard["userLastName"]);
        console.log(firstCard["userImage"]);
        console.log(firstCard["userAge"]);
        console.log(firstCard["userAddresses"]);

        document.getElementById("imgIdo").src = firstCard["userImage"];
        document.getElementById("firstTxt").innerHTML = firstCard["userName"];
        document.getElementById("oneTxt").innerHTML = firstCard["userLastName"];
        document.getElementById("1txt").innerHTML = firstCard["userAge"] + " y/o";
        document.getElementById("o").innerHTML = firstCard["userAddresses"];
    }else if(i==1){
        document.getElementById("imgIdt").src = firstCard["userImage"];
        document.getElementById("secondTxt").innerHTML = firstCard["userName"];
        document.getElementById("twoTxt").innerHTML = firstCard["userLastName"];
        document.getElementById("2txt").innerHTML = firstCard["userAge"] + " y/o";
        document.getElementById("t").innerHTML = firstCard["userAddresses"];
    }else if(i==2){
        document.getElementById("imgIdth").src = firstCard["userImage"];
        document.getElementById("thirdTxt").innerHTML = firstCard["userName"];
        document.getElementById("threeTxt").innerHTML = firstCard["userLastName"];
        document.getElementById("3txt").innerHTML = firstCard["userAge"] + " y/o";
        document.getElementById("th").innerHTML = firstCard["userAddresses"];
    }else if(i==3){
        document.getElementById("imgIdf").src = firstCard["userImage"];
        document.getElementById("fourthTxt").innerHTML = firstCard["userName"];
        document.getElementById("fourTxt").innerHTML = firstCard["userLastName"];
        document.getElementById("4txt").innerHTML = firstCard["userAge"] + " y/o";
        document.getElementById("f").innerHTML = firstCard["userAddresses"];
    }else if(i==4){
        document.getElementById("imgIdfv").src = firstCard["userImage"];
        document.getElementById("fifthTxt").innerHTML = firstCard["userName"];
        document.getElementById("fiveTxt").innerHTML = firstCard["userLastName"];
        document.getElementById("5txt").innerHTML = firstCard["userAge"] + " y/o";
        document.getElementById("fv").innerHTML = firstCard["userAddresses"];
    }else if(i==5){
        document.getElementById("imgIds").src = firstCard["userImage"];
        document.getElementById("sixthTxt").innerHTML = firstCard["userName"];
        document.getElementById("sixTxt").innerHTML = firstCard["userLastName"];
        document.getElementById("6txt").innerHTML = firstCard["userAge"] + " y/o";
        document.getElementById("sx").innerHTML = firstCard["userAddresses"];
    }else if(i==6){
        document.getElementById("imgIdsv").src = firstCard["userImage"];
        document.getElementById("seventhTxt").innerHTML = firstCard["userName"];
        document.getElementById("sevenTxt").innerHTML = firstCard["userLastName"];
        document.getElementById("7txt").innerHTML = firstCard["userAge"] + " y/o";
        document.getElementById("sv").innerHTML = firstCard["userAddresses"];

    }

    
}
let a = true;

function change(card){
    let mainId = card.id

    

    let elem = document.getElementById(mainId);

    if(a == true){
        elem.classList.add("changing")
        a == false;
        console.log(a);
    }
    
}

function changeA(card){
    let mainId = card.id

    let elem = document.getElementById(mainId);
    

    if(a == false){
        elem.classList.add("normal")
        a == true;
        console.log(a);
    }
}