document.getElementById("subbtn").addEventListener('click', function(){

    const numofdice = document.getElementById("inputbox").value;
    const diceresult = document.getElementById("diceresult");
    const diceimg = document.getElementById("diceimg");

    const values = [];
    const imges = [];

    for(let i = 0 ; i < numofdice ; i++ ){
        const value = Math.floor(Math.random() * 6 ) + 1 ;
        values.push(value);
        imges.push(`<img src = "img/${value}.png" alt = "Dice ${value}" " >`);
    }

    diceresult.textContent = `dice: ${values.join(", ")}`;
    diceimg.innerHTML = imges.join(" ");


})