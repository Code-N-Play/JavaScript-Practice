
const to_fahrenheit_radio = document.getElementById("to_fahrenheit");
const to_Celsius_radio = document.getElementById("to_Celsius");
let temp ;

document.getElementById("subbtn").addEventListener('click',function(){
    temp = document.getElementById("input").value;

    if(to_fahrenheit_radio.checked){
        let fahrenheit = (temp * 9/5) + 32 ; 
        document.getElementById("pera").textContent = `${temp} Celsius is Equal to ${fahrenheit} Fahrenheit`;
    }

    else if(to_Celsius_radio.checked){
        let celsius = (temp - 32) * 5/9 ;
        document.getElementById("pera").textContent = `${temp} fahrenheit is Equal to ${celsius} Celsius`;
    }
})