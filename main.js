document.getElementById('random').addEventListener('click', getRandomName);
document.getElementById('all').addEventListener('click', getAllNames);

let nameArray = ["The Joker", "The Genius", "The Cutie", "Cheesy", "Sweaty", "The Flash"];

let randomArray = nameArray[Math.floor(Math.random() * nameArray.length)];

function firstNameValue()
{
    let inputValue = document.getElementById('firstNameInput').value;
    document.getElementById('fname1').innerHTML = inputValue;
    document.getElementById('fname2').innerHTML = inputValue;
    document.getElementById('fname3').innerHTML = inputValue;
    document.getElementById('fname4').innerHTML = inputValue;
    document.getElementById('fname5').innerHTML = inputValue;
    document.getElementById('fname6').innerHTML = inputValue; 
}

function lastNameValue()
{
    let inputValue = document.getElementById('lastNameInput').value;
    document.getElementById('lname1').innerHTML = inputValue;
    document.getElementById('lname2').innerHTML = inputValue;
    document.getElementById('lname3').innerHTML = inputValue;
    document.getElementById('lname4').innerHTML = inputValue;
    document.getElementById('lname5').innerHTML = inputValue;
    document.getElementById('lname6').innerHTML = inputValue; 
    
}

function getRandomName()
{
    let inputValue = document.getElementById('firstNameInput').value;
    document.getElementById('fname1').innerHTML = inputValue;
    document.getElementById('name1').innerHTML = `"${randomArray}"`;
    let inputVal = document.getElementById('lastNameInput').value;
    document.getElementById('lname1').innerHTML = inputVal;
}

function getAllNames()
{
    firstNameValue();
    document.getElementById('name1').innerHTML = `"${nameArray[0]}"`;
    document.getElementById('name2').innerHTML = `"${nameArray[1]}"`;
    document.getElementById('name3').innerHTML = `"${nameArray[2]}"`;
    document.getElementById('name4').innerHTML = `"${nameArray[3]}"`;
    document.getElementById('name5').innerHTML = `"${nameArray[4]}"`;
    document.getElementById('name6').innerHTML = `"${nameArray[5]}"`;
    lastNameValue();
}












