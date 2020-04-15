/*menu-change-color*/

window.addEventListener("scroll", function (e) {
  let nav = document.getElementById("nav");
  if (
    document.documentElement.scrollTop ||
    document.body.scrollTop > window.innerHeight
  ) {
    nav.classList.add("bcg-white-menu");
  } else {
    nav.classList.remove("bcg-white-menu");
  }
});

/*hamburgermenu*/

const button = document.getElementById("brg");
button.addEventListener("click", (event) => {
  const info = document.getElementById("info");
  if (info.style.display == "none") {
    info.style.display = "block";
  } else {
    info.style.display = "none";
  }
});

/*dropdown*/

const down = document.getElementById("down");
down.addEventListener("click", (event) => {
  const info = document.getElementById("wrap");
  if (wrap.style.display == "none") {
    wrap.style.display = "block";
  } else {
    wrap.style.display = "none";
  }
});

/*form - validation*/

function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  const name = form.querySelector("input[name=name]").value;
  const surname = form.querySelector("input[name=surname]").value;
  const email = form.querySelector("input[name=email]").value;
  const mobile = form.querySelector("input[name=phone]").value;
  const sel1 = document.getElementById("locality-dropdown").selectedOptions[0]
    .value;
  const sel2 = document.getElementById("locality-dropdown2").selectedOptions[0]
    .value;

  var nameErr = true;
  var emailErr = true;
  var surnameErr = true;
  var mobileErr = true;
  var sel1Err = true;
  var sel2Err = true;

  // Validate name
  if (name == "") {
    printError("nameErr", "Please enter your name");
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(name) === false) {
      printError("nameErr", "Please enter a valid name");
    } else {
      printError("nameErr", "");
      nameErr = false;
    }
  }

  if (surname == "") {
    printError("surnameErr", "Please enter your surname");
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(surname) === false) {
      printError("surnameErr", "Please enter a valid surname");
    } else {
      printError("surnameErr", "");
      surnameErr = false;
    }
  }

  // Validate email address
  if (email == "") {
    printError("emailErr", "Please enter your email address");
  } else {
    // Regular expression for basic email validation
    var regex = /^\S+@\S+\.\S+$/;
    if (regex.test(email) === false) {
      printError("emailErr", "Please enter a valid email address");
    } else {
      printError("emailErr", "");
      emailErr = false;
    }
  }

  // Validate mobile number
  if (mobile == "") {
    printError("mobileErr", "Please enter your mobile number");
  } else {
    var regex = /^[1-9]\d{9}$/;
    if (regex.test(mobile) === false) {
      printError("mobileErr", "Please enter a valid 10 digit mobile number");
    } else {
      printError("mobileErr", "");
      mobileErr = false;
    }
  }

  //validate select1

  if (sel1 == "Select one element") {
    printError("sel1Err", "Please select");
  } else {
    printError("sel1Err", "");
    sel1Err = false;
  }

  //validate select2

  if (sel2 == "Select one element") {
    printError("sel2Err", "Please select");
  } else {
    printError("sel2Err", "");
    sel2Err = false;
  }

  // Prevent the form from being submitted if there are any errors
  if (
    (nameErr || emailErr || mobileErr || surnameErr || sel2Err || sel1Err) ==
    true
  ) {
    e.preventDefault();
    return false;
  }
});

//api - select

let dropdown = document.getElementById("locality-dropdown");
dropdown.length = 0;

let defaultOption = document.createElement("option");
defaultOption.text = "Select one element";

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

const url = "https://my-json-server.typicode.com/ulatowskap/demo/movies";

//first select

fetch(url)
  .then(function (response) {
    if (response.status !== 200) {
      console.warn(
        "Looks like there was a problem. Status Code: " + response.status
      );
      return;
    }

    // Examine the text in the response
    response.json().then(function (data) {
      let option;

      for (let i = 0; i < data.length; i++) {
        option = document.createElement("option");
        option.text = data[i].title;
        option.value = data[i].title;
        dropdown.add(option);
      }
    });
  })
  .catch(function (err) {
    console.error("Fetch Error -", err);
  });

//second select
let dropdown2 = document.getElementById("locality-dropdown2");
dropdown2.length = 0;

let defaultOption2 = document.createElement("option");
defaultOption2.text = "Select one element";

dropdown2.add(defaultOption2);
dropdown2.selectedIndex = 0;

const url2 = "https://my-json-server.typicode.com/ulatowskap/demo/projects";

fetch(url2)
  .then(function (response) {
    if (response.status !== 200) {
      console.warn(
        "Looks like there was a problem. Status Code: " + response.status
      );
      return;
    }

    // Examine the text in the response
    response.json().then(function (data) {
      let option;

      for (let i = 0; i < data.length; i++) {
        option = document.createElement("option");
        option.text = data[i].body;
        option.value = data[i].body;
        dropdown2.add(option);
      }
    });
  })
  .catch(function (err) {
    console.error("Fetch Error -", err);
  });
