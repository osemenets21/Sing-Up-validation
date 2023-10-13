const getS = (selector) => document.querySelector(selector);

let NameRegExp = /^[a-zA-Z]{1,20}$/;
let emailRegExp =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let passwordRegExp = /^\w{8,15}$/;

let testName;
let testLastName;
let testEmail;
let testPassword;

getS(".firstName").oninput = function () {
  testName = NameRegExp.test(getS(".firstName").value);

  if (getS(".firstName").value != "") {
    if (testName) {
      this.style.border = "2px solid green";
      this.style.borderRadius = "5px";
      getS(".firstCheck").classList.remove("hidden");
      getS(".firstXmark").classList.add("hidden");
    } else {
      this.style.border = "2px solid red";
      this.style.borderRadius = "5px";
      getS(".firstCheck").classList.add("hidden");
      getS(".firstXmark").classList.remove("hidden");
    }
  } else {
    this.style.border = "2px solid gray";
    this.style.borderRadius = "5px";
    getS(".firstCheck").classList.add("hidden");
    getS(".firstXmark").classList.add("hidden");
  }
 
};

getS(".lastName").oninput = function () {
  testLastName = NameRegExp.test(getS(".lastName").value);

  if (getS(".lastName").value != "") {
    if (testLastName) {
      this.style.border = "2px solid green";
      this.style.borderRadius = "5px";
      getS(".secondCheck").classList.remove("hidden");
      getS(".secondXmark").classList.add("hidden");
    } else {
      this.style.border = "2px solid red";
      this.style.borderRadius = "5px";
      getS(".secondCheck").classList.add("hidden");
      getS(".secondXmark").classList.remove("hidden");
    }
  } else {
    this.style.border = "2px solid gray";
    this.style.borderRadius = "5px";
    getS(".secondCheck").classList.add("hidden");
    getS(".secondXmark").classList.add("hidden");
  }
};

getS(".email").oninput = function () {
  testEmail = emailRegExp.test(getS(".email").value);
  if (getS(".email").value != "") {
    if (testEmail) {
      this.style.border = "2px solid green";
      this.style.borderRadius = "5px";
      getS(".thirdCheck").classList.remove("hidden");
      getS(".thirdXmark").classList.add("hidden");
    } else {
      this.style.border = "2px solid red";
      this.style.borderRadius = "5px";
      getS(".thirdCheck").classList.add("hidden");
      getS(".thirdXmark").classList.remove("hidden");
    }
  } else {
    this.style.border = "2px solid gray";
    this.style.borderRadius = "5px";
    getS(".thirdCheck").classList.add("hidden");
    getS(".thirdXmark").classList.add("hidden");
  }
};

getS(".password").oninput = function () {
  testPassword = passwordRegExp.test(getS(".password").value);

  if (getS(".password").value != "") {
    if (testPassword) {
      this.style.border = "2px solid green";
      this.style.borderRadius = "5px";
      getS(".fourthCheck").classList.remove("hidden");
      getS(".fourthXmark").classList.add("hidden");
    } else {
      this.style.border = "2px solid red";
      this.style.borderRadius = "5px";
      getS(".fourthCheck").classList.add("hidden");
      getS(".fourthXmark").classList.remove("hidden");
    }
  } else {
    this.style.border = "2px solid gray";
    this.style.borderRadius = "5px";
    getS(".fourthCheck").classList.add("hidden");
    getS(".fourthXmark").classList.add("hidden");
  }
};

// The start of the event of locking/unlocking the SignUp button

getS("#checkbox").addEventListener("click", () => {
  if (event.target.checked) {
    getS(".submit").removeAttribute("disabled");
    getS(".submit").style.backgroundColor = "rgb(75, 151, 239)";
    getS(".submit").style.cursor = "pointer";
  } else {
    getS(".submit").setAttribute("disabled", "true");
    getS(".submit").style.backgroundColor = "rgb(227, 227, 227)";
    getS(".submit").style.cursor = "auto";
  }
});

// The end of the event of locking/unlocking the SignUp button

getS(".submit").onclick = function () {
  if(testName){
    if(testLastName){
      if(testEmail){
        if(testPassword){
          getS(".successRegisteration").classList.remove("hidden");
          getS(".gasket").classList.remove("hidden");
        }
      }
    }
  }
  event.preventDefault();
}
