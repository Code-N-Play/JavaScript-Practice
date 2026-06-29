let age;

document.getElementById("submit").addEventListener('click' , function(){
    age = document.getElementById("input").value

    if (age < 18)
        {document.getElementById("pera").textContent = `your age is ${age} but only 18+ are eligible`}

    else if (age == 18 )
        {document.getElementById("pera").textContent = `hey you are 18 it means you are adult now..`}

    else{
        document.getElementById("pera").textContent = `you are older then 18........`
    }
    
    
});