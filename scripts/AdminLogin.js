let button = document.getElementById("submit");
button.onclick = () => {
  let inputEmail = document.getElementById("email").value;
  let inputPass = document.getElementById("password").value;
  validate(inputEmail, inputPass);
  console.log(inputEmail, inputPass);
  console.log("gauri");
};

let sendData = async () => {
  const MailId = "g4ur131@gmail.com";
  let Pass = "g4131";
  let dataToSend = {
    MailId,
    Pass,
  };
  let promise = await fetch("https://bb-nwfw.onrender.com/admin", {
    method: "POST",
    body: JSON.stringify(dataToSend),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
const validate = async (mail, pass) => {
  let MailId;
  let Pass;
  let promise = await fetch("https://bb-nwfw.onrender.com/admin");
  let data = await promise.json();
  data.forEach((el) => {
    MailId = el.MailId;
    Pass = el.Pass;
  });
  let DetailsArrAdmin = [MailId, Pass];
  if (mail == MailId) {
    if (pass == Pass) {
      alert("login Sucessfull");
      sessionStorage.setItem("Admin-login", JSON.stringify(DetailsArrAdmin));
      textTospeech(" Happy to see you back Gauri")
      location.href = "./Admin.html";
    } else {
      alert("Invalid Password");
    }
  } else {
    alert("Invalid Email");
  }
};



let resetPass = document.getElementById("resetPassword");
resetPass.onclick = async () => {
  let inputEmail = window.prompt("Enter UserID");
  if (inputEmail == "g4ur131@gmail.com") {
    let inputPass = window.prompt("Enter New Password");
    if (inputPass == null) {
      return;
    }
    let dataToSend = {
      Pass: inputPass,
    };

    let res = await fetch (`https://bb-nwfw.onrender.com/admin/1`, {
      method: "PATCH",
      body: JSON.stringify(dataToSend),
      headers: {
        "Content-Type" : "application/json"
      }
    });

    res = await res.json();
    alert("Password Reset Successfull");
  } else {
    alert("Invalid UserID");
  }
};

let voices = window.speechSynthesis.getVoices();
function textTospeech (text) {
    let utternance = new SpeechSynthesisUtterance(text);
    utternance.voice = window.speechSynthesis.getVoices()[3] ;
    speechSynthesis.speak(utternance);
}