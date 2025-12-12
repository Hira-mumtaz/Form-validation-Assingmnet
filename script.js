const myform = document.getElementById("myform");
const name=document.getElementById("name");
const email=document.getElementById("email");
const country=document.getElementById("country");
const city=document.getElementById("city");
const phoneNumber=document.getElementById("phoneNumber");

// const error = document.getElementById("error");

const nameerror = document.getElementById("nameerror");
const emailerror = document.getElementById("emailerror");
const countryerror = document.getElementById("countryerror");
const cityerror = document.getElementById("cityerror");
const phoneNumbererror = document.getElementById("phoneNumbererror");


myform.addEventListener("submit", function(e) {
    e.preventDefault();

// Saare previous messages clear kar do
nameerror.innerText="";
emailerror.innerText="";
countryerror.innerText="";
cityerror.innerText="";
phoneNumbererror.innerText = "";

     let errors = [];

    let nameValue=name.value;
    let emailValue=email.value;
    let countryValue= country.value;
    let cityValue= city.value;
    let phoneNumberValue= phoneNumber.value;
    

    // Name check
    if (nameValue === "") {
        nameerror.innerText = "Please enter your name!";
        nameerror.style.color = "red";
        errors.push("name");
        
    }

    // Email check
    if (emailValue === "") {
        emailerror.innerText = "Please enter your email!";
       emailerror.style.color = "red";
        errors.push("emailInvalid");
       
    } else {
        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailValue.match(emailPattern)) {
            emailerror.innerText = "Please enter a valid email!";
            emailerror.style.color = "red";
            errors.push("emailInvalid");

        }
    }
      // Country check
    if (countryValue === "") {
        countryerror.innerText = "Please enter your country!";
        countryerror.style.color = "red";
        errors.push("name");
        
    }

     // City check
    if (cityValue === "") {
        cityerror.innerText = "Please enter your city!";
        cityerror.style.color = "red";
        errors.push("name");
        
    }

    
     // PhoneNumber check
    if (phoneNumberValue === "") {
        phoneNumbererror.innerText = "Please enter your phone number!";
        phoneNumbererror.style.color = "red";
        errors.push("name");
        
    }
     if (errors.length === 0) {
        myform.submit(); // submitted.html open ho jayega
    }

});
