let newData = 0;
try {
  let newData = JSON.parse(sessionStorage.data).data.user;
  document.getElementById("email").innerHTML = newData.name;
} catch {
  location.href = "index.html";
}

const formLogout = () => {
  sessionStorage.clear();
  location.href = "index.html";
};

function openBlogForm() {
  document.getElementById("myBlogForm").style.display = "block";
}

function openBlogEditForm(id) {
  let token = JSON.parse(sessionStorage.getItem("data")).token;
  let updateOptions = {
    method: "PATCH",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json;charset=utf-8",
    },
  };
  let optionsget = {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  };

  fetch(`https://vila-brand.herokuapp.com/api/v1/blogs/${id}`, optionsget)
    .then((response) => response.json())
    .then((response) => {

      document.getElementById("myBlogEditForm").style.display = "block";
      document.getElementById(
        "pic"
      ).innerHTML = `<img src=${response.Article.imagesUrl} alt="Blog" height=150px width=200px>`;
      document.getElementById("blog-edit-id").setAttribute("value", `${id}`);
      document
        .getElementById("title-edit-field")
        .setAttribute("value", `${response.Article.title}`);
      document.getElementById("blog-edit-field").value =
        response.Article.article;
    });
  fetch(`https://vila-brand.herokuapp.com/api/v1/blogs/${id}`, updateOptions)
    .then((response) => {})
    .catch((error) => {});
}

function closeBlogEditForm() {
  document.getElementById("myBlogEditForm").style.display = "none";
}

function closeBlogForm() {
  document.getElementById("myBlogForm").style.display = "none";
}

function openMessageForm() {
  document.getElementById("myMessageForm").style.display = "block";
}

function closeMessageForm() {
  document.getElementById("myMessageForm").style.display = "none";
}

function closeLoginForm() {
  document.getElementById("myBlogForm").style.display = "none";
}

const firebaseConfig = {
  apiKey: "AIzaSyBWPkObUFhbBsDWm9C4tUuRFedoXhR5LIg",
  authDomain: "my-brand-6d710.firebaseapp.com",
  projectId: "my-brand-6d710",
  storageBucket: "my-brand-6d710.appspot.com",
  messagingSenderId: "290071395795",
  appId: "1:290071395795:web:a2681620feeec77c908326",
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const deleteData = (id, collection) => {
  let token = JSON.parse(sessionStorage.getItem("data")).token;
  let deleteOptions = {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json;charset=utf-8",
    },
  };
  let conf = false;
  conf = confirm(`Are you sure, You want to delete data from ${collection}`);
  if (conf) {
    fetch(`https://vila-brand.herokuapp.com/api/v1/${collection}/${id}`, deleteOptions)
      .then((response) => {
        myToasterfunction("Successfully Deleted...");
        if (collection === "message") {
          location.reload();
        } else {
          location.reload();
        }
      })
      .catch((error) => {});
  } else {}
};

const data = [];
let options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
};

fetch("https://vila-brand.herokuapp.com/api/v1/blogs", options)
  .then((response) => response.json())
  .then((response) =>
    response.data.articles.map((rowdata) => {
      var table = document.getElementById("myTable");
      var row = table.insertRow(1);
      // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      // Add some text to the new cells:
      cell1.innerHTML = `<img src="${rowdata.imagesUrl}" height="100px" width="100px">`;
      cell2.innerHTML = `${rowdata.title}`;
      cell3.innerHTML = `${rowdata.article}`;
      cell4.innerHTML = `<button style ="background-color: red; cursor:pointer; padding:10px; border-radius:10px; color: #fff" onclick = deleteData('${rowdata._id}',"blogs")> 
                                              DELETE 
                                             </button>
                                             <a style ="background-color: #067; cursor:pointer; padding:10px; border-radius:10px; color: #fff" href="#myBlogEditForm"<button onclick=openBlogEditForm('${rowdata._id}')> EDIT</button></a>`;
    })
  )
  .catch((error) => {});

//Blog Manage button--------------------------------------------------
function manageBlog() {
  document.getElementById("manage-blog").style.backgroundColor =
    "rgb(39, 52, 80)";
  document.getElementById("manage-message").style.backgroundColor = "#1a1919";
  document.getElementById("working-space-blog").style.display = "block";
  document.getElementById("working-space-message").style.display = "none";
}

const formUpdateBlog = document.querySelector(".form-edit-blog");
formUpdateBlog.addEventListener("submit", (e) => {
  e.preventDefault();
  let blogInfo = {};
  blogInfo.title = formUpdateBlog.title.value;
  blogInfo.article = formUpdateBlog.article.value;
  let id = formUpdateBlog.id.value;

  const blog__imgurl = document.getElementById("photo-edit").files[0];
 
  const imageName = blog__imgurl.name;
  const blogRef = app.storage().ref(`Images/${imageName}`);
  const uploadTask = blogRef.put(blog__imgurl);
  const BlogText = document.querySelector(".blog-text");
  const percent = document.querySelector("#edit-percent");
  const doneWBlog = document.querySelector("#done-w-blog");
  spinner.style.display = "block";

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      if (progress <= 99) {
        document.getElementById("photo").value = "";
        document.getElementById("blog-title").value = "";
        document.getElementById("blog-text").value = "";
        percent.innerHTML = `${Math.trunc(progress)}%`;
        percent.style.marginLeft = "48%";
        spinnerup.style.display = "inline-block";
      } else if (progress == 100) {
        percent.style.display = "none";
        spinnerup.style.display = "none";
        doneWBlog.innerHTML = `<span>Upload</span> 100% <img src="https://firebasestorage.googleapis.com/v0/b/my-brand-6d710.appspot.com/o/Images%2F240_F_163742074_xXiKIiQ75jdQDULESQql7Y1f5uS0XIMK.jpg?alt=media&token=a1b3a41a-0f4c-48d7-8d32-28615167e01f" height="40px" width="40px" style="border-radius:40%">`;

        myToasterfunction(" Image Uploaded...");
        setTimeout(function () {
          doneWBlog.innerHTML = `<span>Upload</span> 100% <img src="https://firebasestorage.googleapis.com/v0/b/my-brand-6d710.appspot.com/o/Images%2F240_F_163742074_xXiKIiQ75jdQDULESQql7Y1f5uS0XIMK.jpg?alt=media&token=a1b3a41a-0f4c-48d7-8d32-28615167e01f" height="40px" width="40px" style="border-radius:40%">`;
        }, 2000);
      } else {
        percent.style.display = "none";
        spinner.style.display = "none";
      }
      switch (snapshot.state) {
        case firebase.storage.TaskState.paused:
          break;
        case firebase.storage.TaskState.running:
      }
    },
    (error) => {},
    () => {
      uploadTask.snapshot.ref.getDownloadURL().then((downloadedImage) => {
        setTimeout(function () {
          document.getElementById(
            "pic"
          ).innerHTML = `<img src=${downloadedImage} alt="Blog" height=150px width=200px>`;
        }, 2000);

        blogInfo.imagesUrl = downloadedImage;
        let token = JSON.parse(sessionStorage.getItem("data")).token;
        let options = {
          method: "PATCH",
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(blogInfo),
        };
        fetch(`https://vila-brand.herokuapp.com/api/v1/blogs/${id}`, options)
          .then((blogs) => {
            myToasterfunction(" Blog Updated successfully...");
            location.reload();
          })
          .catch((error) => {
            myToasterfunction(" Blog fail to be Updated, Please try again...");
            // location.reload();
          });
      });
    }
  );
});

const formAddBlog = document.querySelector(".form-add-blog");
formAddBlog.addEventListener("submit", (e) => {
  e.preventDefault();
  let blogInfo = {};
  blogInfo.title = formAddBlog.title.value;
  blogInfo.article = formAddBlog.article.value;
  blogInfo.article = formAddBlog.article.value;

  const blog__imgurl = document.getElementById("photo").files[0];
  const imageName = blog__imgurl.name;
  const blogRef = app.storage().ref(`Images/${imageName}`);
  const uploadTask = blogRef.put(blog__imgurl);
  const BlogText = document.querySelector(".blog-text");
  const spinner = document.querySelector(".lds-ring");
  const percent = document.querySelector("#percent");
  const doneWBlog = document.querySelector("#done-w-blog");
  spinner.style.display = "block";

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      if (progress <= 99) {
        document.getElementById("photo").value = "";
        document.getElementById("blog-title").value = "";
        document.getElementById("blog-text").value = "";
        percent.innerHTML = `${Math.trunc(progress)}%`;
        percent.style.marginLeft = "48%";
        spinner.style.display = "inline-block";
      } else if (progress == 100) {
        percent.style.display = "none";
        spinner.style.display = "none";
        doneWBlog.innerHTML = `<span>Upload</span> 100% <img src="https://firebasestorage.googleapis.com/v0/b/my-brand-6d710.appspot.com/o/Images%2F240_F_163742074_xXiKIiQ75jdQDULESQql7Y1f5uS0XIMK.jpg?alt=media&token=a1b3a41a-0f4c-48d7-8d32-28615167e01f" height="40px" width="40px" style="border-radius:40%">`;

        myToasterfunction("Successfully Created...");
        setTimeout(function () {
          doneWBlog.innerHTML = `<span>Upload</span> 100% <img src="https://firebasestorage.googleapis.com/v0/b/my-brand-6d710.appspot.com/o/Images%2F240_F_163742074_xXiKIiQ75jdQDULESQql7Y1f5uS0XIMK.jpg?alt=media&token=a1b3a41a-0f4c-48d7-8d32-28615167e01f" height="40px" width="40px" style="border-radius:40%">`;
        }, 2000);
      } else {
        percent.style.display = "none";
        spinner.style.display = "none";
      }
      switch (snapshot.state) {
        case firebase.storage.TaskState.paused:
          break;
        case firebase.storage.TaskState.running:
      }
    },
    (error) => {},
    () => {
      uploadTask.snapshot.ref.getDownloadURL().then((downloadedImage) => {
        blogInfo.imagesUrl = downloadedImage;
        let token = JSON.parse(sessionStorage.getItem("data")).token;
        let options = {
          method: "POST",
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(blogInfo),
        };
        fetch("https://vila-brand.herokuapp.com/api/v1/blogs", options)
          .then((blogs) => {
            // location.reload();
          })
          .catch((error) => {
            // location.reload();
          });
      });
    }
  );
});

function myToasterfunction(successfully) {
  var x = document.getElementById("snackbar");
  x.className = "show";
  x.innerHTML = `${successfully}`;
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 4000);
}

const formEditBlog = document.querySelector(".form-edit-blog");
formEditBlog.addEventListener("submit", (e) => {
  e.preventDefault();
});

//manage messages

fetch("https://vila-brand.herokuapp.com/api/v1/messages", options)
  .then((response) => response.json())
  .then((response) => {
    response.data.message.map((rowdata) => {
      var table = document.getElementById("myTableMessage");
      var row = table.insertRow(1);
      // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      cell1.innerHTML = `${rowdata.name}`;
      cell2.innerHTML = `${rowdata.message}`;
      cell3.innerHTML = `<button style ="background-color: red; cursor:pointer; padding:10px; border-radius:10px; color: #fff"onclick = deleteData('${rowdata._id}',"messages")> 
                                            DELETE 
                                           </button>`;
    });
  })
  .catch((error) => {}); {}

//Message Manage button-----------------------------------------------
function manageMessage() {
  document.getElementById("manage-blog").style.backgroundColor = "#1a1919";
  document.getElementById("manage-message").style.backgroundColor =
    "rgb(39, 52, 80)";
  document.getElementById("working-space-blog").style.display = "none";
  document.getElementById("working-space-message").style.display = "block";
}