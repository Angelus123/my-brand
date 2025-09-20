// let newData = 0;
// try {
//   let newData = JSON.parse(sessionStorage.data).data.user;
//   const dashboard =
//     newData.role === "admin"
//       ? `<a href="dashboard.html" style="color:rgb(91, 167, 238); padding:5px 10px;">DASHBOARD</a>`
//       : "dashboard";
//   document.getElementById(
//     "auth-section"
//   ).innerHTML = `${dashboard}<i style="color:rgb(91, 167, 238); padding:0px 10px;">${newData.name}</i><br><a href="#myLoginForm"><button
//   style="color:rgb(91, 167, 238); padding:5px 10px;"
//   onclick="openLogout()">LOGOUT</button></a>`;
// } catch {
//   document.getElementById(
//     "auth-section"
//   ).innerHTML = `<a href="#myLoginForm"><button
//   style="border-radius: 20px; border: 2px rgb(5, 96, 231) solid; width:100px; margin-right: 5px;"
//   onclick="openLoginForm()">LOGIN</button></a>
// <a href="#mySignUpForm"><button
//   style="border-radius: 20px; border: 2px rgb(0, 110, 255) solid; width:100px; background-color: rgb(0, 102, 255); color: white;"
//   onclick="openSignUpForm()">SIGN UP</button></a>`;
// }
function timeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}

function openLogout() {
  sessionStorage.clear();
  location.href = "index.html";
}

function openLoginForm() {
  document.getElementById("myLoginForm").style.display = "block";
}

function closeLoginForm() {
  document.getElementById("myLoginForm").style.display = "none";
}

function openSignUpForm() {
  document.getElementById("mySignUpForm").style.display = "block";
}

function closeSignUpForm() {
  document.getElementById("mySignUpForm").style.display = "none";
}

function openReadMoreForm() {
  document.getElementById("readMore").style.display = "block";
  location.href = "#readMore";
}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

const formComment = document.querySelector(".comment-form");
const spinner = document.querySelector(".lds-ring");
const percent = document.querySelector("#percent");

const firebaseConfig = {
  apiKey: "AIzaSyBWPkObUFhbBsDWm9C4tUuRFedoXhR5LIg",
  authDomain: "my-brand-6d710.firebaseapp.com",
  projectId: "my-brand-6d710",
  storageBucket: "my-brand-6d710.appspot.com",
  messagingSenderId: "290071395795",
  appId: "1:290071395795:web:a2681620feeec77c908326",
};
const app = firebase.initializeApp(firebaseConfig);

async function signIn(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });

  return response.json();
}
// Singup implementation:
async function signUp(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
const formLogin = document.querySelector(".form-container-login");

formLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  spinner.style.display = "inline-block";
  const userInfo = {};
  userInfo.email = formLogin.email.value;
  userInfo.password = formLogin.password.value;
  signIn("https://vila-brand.herokuapp.com/api/v1/login", userInfo).then((data) => {
    if(data.status === "success"){
      setTimeout(function () {
        myToasterfunction("Welcome"+ data.data.user.name);
      }, 5000);
      
    }else{
      myToasterfunction(`<b style="color: red">${data.message}</b>`)
    }
    myToasterfunction("Invalid Password or Email")
try{
    sessionStorage.setItem("data", JSON.stringify(data));
    spinner.style.display = "none";
    myToasterfunction("Invalid Password or Email")
    let newData = JSON.parse(sessionStorage.data);
 if(newData.data){
    if (newData.data.user.role === "admin") {
      myToasterfunction("Invalid Password or Email")
      location.href = "dashboard.html";
    } else {
      spinner.style.display = "none";
      myToasterfunction("Invalid Password or Email")
      location.href = "index.html";
    }}
  }catch(error){
    spinner.style.display = "none";
    myToasterfunction("Invalid Password or Email")
  }
  })
  .catch((err) => {
    spinner.style.display = "none";
  });
});
const spinnerUp = document.querySelector(".lds-ring-up");
const formSignup = document.querySelector(".form-container-signup");
formSignup.addEventListener("submit", (e) => {
  e.preventDefault();
  spinnerUp.style.display = "inline-block";
  const userInfo = {};
  (userInfo.name = formSignup.phone.value),
    (userInfo.email = formSignup.email.value),
    (userInfo.phone = formSignup.phone.value),
    (userInfo.confirmpassword = formSignup.confirmpassword.value),
    (userInfo.password = formSignup.password.value),
    (userInfo.name = formSignup.name.value),
    signUp("https://vila-brand.herokuapp.com/api/v1/signup", userInfo).then((data) => {
    if(data.status=== "success") {
      sessionStorage.setItem("data", JSON.stringify(data));
      let newData = JSON.parse(sessionStorage.data)
      spinnerUp.style.display = "none";;
      myToasterfunction("Welcome "+ data.data.user.name)
      location.href = "index.html";
    }
    else{
      spinnerUp.style.display = "none";
      myToasterfunction(`<i style="color: red">${data.message}</i>`)
    }
    
    });
});
function readMore(id, title, article, image, date, commentNum) {
  location.href=`blog.html?${id}`
  const blogDate = document.querySelector(".blog-date");
  const commentNumber = document.querySelector(".comment-num");
  commentNumber.innerHTML = commentNum;
  blogDate.innerHTML = date;
  let options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  };

  fetch(`https://vila-brand.herokuapp.com/api/v1/blogs/${id}`, options)
    .then((response) => response.json())
    .then((response) => {
      const form = document.getElementById("readMore");
      form.style.display = "block";

      response.Article.comments.forEach((comment) => {
        var table = document.getElementById("myCommentTable");

        // Create an empty <tr> element and add it to the 1st position of the table:
        var row = table.insertRow(1);

        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
        var cell1 = row.insertCell(0);
        let user = "user";
        if (comment.name) {
          user = comment.name;
        }
        user = user.charAt(0);
        // Add some text to the new cells:
        cell1.innerHTML = `<div style = "display:flex; background-color: #F5F8FC">
                              <div style = "background-color: rgb(41, 65, 85);
                                            border-radius: 50%;
                                            padding: 5px;
                                            color: #FFF;
                                            font-size: 36px;
                                            width: fit-content;
                                            margin: 5px; 
                                            height: fit-content" >
                                            ${user}
                              </div>
                              <div style = "padding: 20px;
                                            width: fit-content;
                                            border-radius:10px;
                                            margin: 20px; 
                                            background-color: #F5F8FC ">
                                            ${comment.comment} 
                              </div>
                                </div>`;
      });
    });
  document.getElementById(
    "readmore-image"
  ).innerHTML = `<img src=${image} alt="Blog" height=400px width=70%>`;
  document.getElementById("readmore-title").innerHTML = `${title}`;
  document.getElementById("comment-id").setAttribute("value", `${id}`);
  document.getElementById("readmore-article").innerHTML = `${article}`;
  location.href = "#readMore";
}
function myToasterfunction(successfully) {
  var x = document.getElementById("snackbar");
  x.className = "show";
  x.innerHTML = `${successfully}`;
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 5000);
}
function errorToasterfunction(successfully) {
  var x = document.getElementById("errorsnackbar");
  x.className = "show";
  x.innerHTML = `${successfully}`;
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 5000);
}
function errorToasterfunction(successfully) {
  var x = document.getElementById("snackbar");
  x.className = "show";
  x.innerHTML = `${successfully}`;
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 5000);
}
//----------Send Message Section-----------------------------------
const formMessage = document.querySelector(".form-container-message");
let userData = JSON.parse(sessionStorage.getItem("data"));
try{
if (userData.data) {
  formMessage.name.value = userData.data.user.name;
  formMessage.email.value = userData.data.user.email;
}
}
catch(error){

}

formMessage.addEventListener("submit", (e) => {
  e.preventDefault();
  let messages = {};
  messages.name = formMessage.name.value;
  messages.email = formMessage.email.value;
  messages.message = formMessage.message.value;
  console.log(messages.message)
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(messages),
  };
  fetch("https://vila-brand.herokuapp.com/api/v1/messages", options)
    .then((message) => {
      myToasterfunction("Message Sent...");
      formMessage.name.value = "";
      formMessage.email.value = "";
      formMessage.message.value = "";
      location.reload();
    })
    .catch((error) => {
      errorToasterfunction("Message Not Sent Try again...");
      location.reload();
    });
});
//----------End Send Message Section-----------------------------------
//----------start Send blog Section-----------------------------------
let options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
};

fetch("https://vila-brand.herokuapp.com/api/v1/blogs", options)
  .then((response) => response.json())
  .then((response) => {
    response.data.articles.forEach(function (rowdata) {
      let commentNum = rowdata.comments.length;
      let d = rowdata.createdAt.substring(0, 10);
      let d1 = new Date(rowdata.createdAt);
      let d2 = timeSince(d1.getTime());
      // Find a <table> element with id="myTable":
      var table = document.getElementById("myBlogTable");

      // Create an empty <tr> element and add it to the 1st position of the table:
      var row = table.insertRow(1);

      // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
      var cell1 = row.insertCell(0);

      // Add some text to the new cells:
      cell1.innerHTML = `
                    <div class="blog-info">
                    <img src="${rowdata.imagesUrl}" alt="" srcset=""
                      class="blog-img">
                    <h2>${rowdata.title}</h2>
                    
                    <button class="read-more" onclick="readMore('${rowdata._id}','${rowdata.title}','${rowdata.article}','${rowdata.imagesUrl}', '${d} ${d2}','${commentNum}')">Read more</button>
                    <span class="blog-date">${d} ${d2} </span>
                    <div class="options">
                      <span><img src="./images/assets/icon/comments.png" alt="" style="height: 25px ; width: 35px"
                          srcset=""></span> <span style="color:brown; margin-left:-50px">${commentNum}</span>
                      <span><img src="./images/assets/icon/like.png" alt="" style="height: 25px ; width: 35px" srcset=""></span>
                      <span><img src="./images/assets/icon/unlike.png" alt="" style="height: 25px ; width: 35px" srcset=""></span>
                      <span><img src="./images/assets/icon/share.png" alt="" style="height: 25px ; width: 35px" srcset=""></span>
                    </div>
                  </div>`;
    });
  });