// Form submit for new blog post
// const articleContainer = document.getElementById("blog-posts-container");
// const postForm = document.getElementById("new-post-form");

// postForm.addEventListener("submit", function (event) {

//   event.preventDefault();

//   let blogTitle = document.getElementById("blog-title");
//   let post = document.getElementById("blog-words");

//   let articleImg = document.createElement("img");
//   articleImg.setAttribute('src', 'images/blog-2.jpg');
//   articleImg.setAttribute('class', 'blog-img');
//   let artDiv = document.createElement("div");
//   artDiv.setAttribute('class', 'blog-text');
//   let articleTitle = document.createElement("h3");
//   articleTitle.innerHTML = blogTitle.value;
//   console.log(articleTitle);
//   let articleContent = document.createElement("p");
//   articleContent.innerHTML = post.value;
//   console.log(articleContent);

//   let newArticle = document.createElement('article');
//   newArticle.appendChild(articleImg);
//   newArticle.appendChild(artDiv);
//   artDiv.appendChild(articleTitle);
//   artDiv.appendChild(articleContent);
//   articleContainer.insertBefore(newArticle, articleContainer.firstChild);

//   alert("Thank you. The form information has been received.");
//   blogTitle.value = '';
//   post.value = '';

// });
