const checkbox = document.getElementById("checkbox")
const name1 = document.getElementById("name1")
const name2 = document.getElementById("name2")
const name3 = document.getElementById("name3")
const submitbtn = document.getElementById("submitbtn")
const checkedresult = document.getElementById("checkedresult")
const personresult = document.getElementById("personresult")

submitbtn.addEventListener('click' , function(){

    if(checkbox.checked){
        checkedresult.textContent = `check box is checked` ;
    }
    else{
        checkedresult.textContent = `check box is not checked`;
    }


    if (name1.checked){
        personresult.textContent = `hey Chunnu`;
    }
    else if(name2.checked){
        personresult.textContent = `hey Munnu`;
    }
    else if(name3.checked){
        personresult.textContent = `hey Chhunnu`;
    }
    else {
        personresult.textContent = `no one is selected`;
    }
})