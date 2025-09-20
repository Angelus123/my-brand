
let url = window.location.href;
var id = url.substring(url.lastIndexOf('?') + 1);
try {
    let newData = JSON.parse(sessionStorage.data).data.user;
    const dashboard =
      newData.role === "admin"
        ? `<a href="dashboard.html" style="color:rgb(91, 167, 238); padding:5px 10px;">DASHBOARD</a>`
        : "dashboard";
    document.getElementById(
      "auth-section"
    ).innerHTML = `${dashboard}<i style="color:rgb(91, 167, 238); padding:0px 10px;">${newData.name}</i><br><a href="#myLoginForm"><button
    style="color:rgb(91, 167, 238); padding:5px 10px;"
    onclick="openLogout()">LOGOUT</button></a>`;
  } catch {
    document.getElementById(
      "auth-section"
    ).innerHTML = `<a href="#myLoginForm"><button
    style="border-radius: 20px; border: 2px rgb(5, 96, 231) solid; width:100px; margin-right: 5px;"
    onclick="openLoginForm()">LOGIN</button></a>
  
  
  <a href="#mySignUpForm"><button
    style="border-radius: 20px; border: 2px rgb(0, 110, 255) solid; width:100px; background-color: rgb(0, 102, 255); color: white;"
    onclick="openSignUpForm()">SIGN UP</button></a>`;
  }

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
    location.href = `blog.html?${id}`;
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
  function myToasterfunction(successfully) {
    var x = document.getElementById("snackbar");
    x.className = "show";
    x.innerHTML = `${successfully}`;
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 5000);
  }
function readMore(id) {
    location.href = `blog.html?${id}`
    let image = ""
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
                
                // Add some text to the new cells:
                
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

function readMore(id) {
    let commentMargin = "80vh";
    let options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
    };
    try{

    } catch{

    }
    fetch(`https://vila-brand.herokuapp.com/api/v1/blogs/${id}`, options)
        .then((response) => response.json())
        .then((response) => {
            commentMargin ="30px"
            console.log(commentMargin)
            document.getElementById("footer").innerHTML=`
                <div class="footer" style="margin-top:${commentMargin}; bottom: 0; top: 100vh;">
                <p>
                    © Copyright
                    Designed by IZERE Ange Felix
                </p>
                <div>
                    Social Media
                </div>
                </div>
    `
            let res = response.Article;
            const form = document.getElementById("readMore");
            form.style.display = "block";
            const blogDate = document.querySelector(".blog-date");
            const commentNumber = document.querySelector(".comment-num");
            // commentNumber.innerHTML = commentNum;

            // blogDate.innerHTML = date;
            document.getElementById(
                "readmore-image"
            ).innerHTML = `<img src=${res.imagesUrl} alt="Blog" height=400px width=70%>`;
            document.getElementById("readmore-title").innerHTML = `${res.title}`;
            document.getElementById("comment-id").setAttribute("value", `${res._id}`);
            document.getElementById("readmore-article").innerHTML = `${res.article}`;
            res.comments.forEach((comment) => {
                var table = document.getElementById("myCommentTable");

                // Create an empty <tr> element and add it to the 1st position of the table:
                var row = table.insertRow(1);

                // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
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
                                
                            </div>`
                            console.log( JSON.parse(sessionStorage.data).data.user.role==="admin")
                if( JSON.parse(sessionStorage.data).data.user.role==="admin"){

                    cell2.innerHTML = `<div>
                        <button onclick = 'deleteData()',"blogs")> 
                            DELETE 
                        </button>
                    </div>`
                    
                }
                else if((user === JSON.parse(sessionStorage.data).data.user.name.charAt(0))){
                    cell2.innerHTML = `<div>
                    <button onclick = deleteData(),"blogs")> 
                        DELETE 
                   </button>
                   <a style = "color: blue" href="#myBlogEditForm"<button onclick=openBlogEditForm()> EDIT</button></a>
                    </div>`

                } else{
                    cell2.innerHTML = `<div>
                        <button onclick = dreportData(),"blogs")> 
                            Report 
                        </button>
                    </div>`

                }
               
            })
        }).catch(err => {
            })
        ;
    

    // location.href = "#readMore";
}
readMore(id);
if(JSON.parse(sessionStorage.getItem("data"))){
} else{
    openLoginForm()   
}

const formComment = document.querySelector(".comment-form");
formComment.addEventListener("submit", (e) => {
    e.preventDefault();
    let user = ""
    let token = ""
    let commentInfo = {};
    
    if(JSON.parse(sessionStorage.getItem("data"))){
        user = JSON.parse(sessionStorage.getItem("data"))  
        token = JSON.parse(sessionStorage.getItem("data")).token;
        commentInfo.comment = formComment.comment.value;
        commentInfo.name = user.data.user.name;
        commentInfo.email = user.data.user.email;
    } else{  
            
    }
    let options = {
        method: "PUT",
        headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(commentInfo),
    };
    fetch(
            `https://vila-brand.herokuapp.com/api/v1/blogs/${formComment._id.value}/comment`,
            options
        )
        .then( async(comments) => {
            formComment.comment.value = "";
             await myToasterfunction("Thank you, comment sent...");
             setTimeout(function () {
                location.reload();
              }, 5000);
        })
        .catch((error) => {
        });
});

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
  const userInfo = {};
  userInfo.email = formLogin.email.value;
  userInfo.password = formLogin.password.value;
  signIn("https://vila-brand.herokuapp.com/api/v1/login", userInfo).then((data) => {
    console.log("token:", data.token); // JSON data parsed by `data.json()` call
    // Set Item
    sessionStorage.setItem("data", JSON.stringify(data));

    let newData = JSON.parse(sessionStorage.data);
    // console.log("role:", newData.data.user.role);
    if (newData.data.user.role === "admin") {
      location.href = `blog.html?${id}`;
    } else {
      location.href = `blog.html?${id}`;
    }
  });
});
const formSignup = document.querySelector(".form-container-signup");
formSignup.addEventListener("submit", (e) => {
  e.preventDefault();
  const userInfo = {};

  (userInfo.name = formSignup.phone.value),
    (userInfo.email = formSignup.email.value),
    (userInfo.phone = formSignup.phone.value),
    (userInfo.confirmpassword = formSignup.confirmpassword.value),
    (userInfo.password = formSignup.password.value),
    (userInfo.name = formSignup.name.value),
    signUp("https://vila-brand.herokuapp.com/api/v1/signup", userInfo).then((data) => {
      sessionStorage.setItem("data", JSON.stringify(data));
      let newData = JSON.parse(sessionStorage.data);
      location.href = "index.html";
    });
});