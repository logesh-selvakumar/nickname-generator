document.getElementById('random').addEventListener('click', getRandomName);
document.getElementById('all').addEventListener('click', getAllNames);

let nameArray;
fetch("words.txt").then((rawData) => rawData.text()).then((data) => nameArray = data.split("\r\n"));

function getAllNames()
{
    document.getElementById('name').innerHTML = '';
    let inputValue = document.getElementById('firstNameInput').value;
    let inputVal = document.getElementById('lastNameInput').value;
    for (i=0; i<nameArray.length; i++)
    {
        document.getElementById('name').innerHTML += inputValue + ` "${nameArray[i]}" `+  inputVal + '<br>';
    }   
}

function getRandomName()
{
    let inputValue = document.getElementById('firstNameInput').value;
    let inputVal = document.getElementById('lastNameInput').value;
    let randomArray = nameArray[Math.floor(Math.random() * nameArray.length)]; 
    document.getElementById('name').innerHTML = inputValue + ` "${randomArray}" ` + inputVal;
}