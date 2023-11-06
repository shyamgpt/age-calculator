

const btnEl = document.getElementById("btn");

const birthdayEl = document.getElementById("birthday");

const resultEl = document.getElementById("result");

function calculateAge(){
    // console.log("clicked");

    const birthdayValue = birthdayEl.value;
    console.log(birthdayValue);

    if(birthdayValue === ""){
        alert("please enter your birthdate");
    } else {
        const age = getAge(birthdayValue);
        console.log(age);

        resultEl.innerText = `Your age is ${age} ${age>1 ? "Years" : "Year"} old`;
    }

    function getAge(birthdayValue){
        const currentDate = new Date();
        const birthdayDate = new Date(birthdayValue);
        const age = currentDate.getFullYear() - birthdayDate.getFullYear();
        return age;


    }
}

btnEl.addEventListener("click", calculateAge);




