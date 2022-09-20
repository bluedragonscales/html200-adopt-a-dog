// Form submit for new blog post
const articleContainer = document.getElementById("blog-posts-container");
const postSubmitButton = document.getElementById("blog-submit");


postSubmitButton.addEventListener('click', function(ev) {
    ev.preventDefault();

    // Creating the new article body.
    const newArticle = document.createElement('article');

    // Creating and structuring the image element for the article.
    const newImg = document.createElement('img');
    newImg.setAttribute('src', 'images/blog-2.jpg');
    newImg.setAttribute('class', 'blog-img');
    newArticle.appendChild(newImg);

    // Creating the div inside of the article.
    const artDiv = document.createElement('div');
    artDiv.setAttribute('class', 'blog-text');

    // Adding the title inside of the div and taking the created title from the form and putting it into the new article.
    const blogTitle = document.createElement('h3');
    let postTitle = document.getElementById('blog-title');
    blogTitle.textContent = postTitle.value;
    artDiv.appendChild(blogTitle);
    
    // Adding the blog post inside of the div and taking the created words from the form and putting it into the new article.
    const blogPost = document.createElement('p');
    let mainPost = document.getElementById('blog-words');
    blogPost.textContent = mainPost.value;
    artDiv.appendChild(blogPost);

    // Appending the whole div onto the new article.
    newArticle.appendChild(artDiv);

    // Attaching the new article to the whole article container.
    articleContainer.appendChild(newArticle);

    // Wiping clean the inputs for the blog post form.
    postTitle.value = '';
    mainPost.value = '';
});