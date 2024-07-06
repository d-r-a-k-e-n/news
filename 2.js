fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => {
    const list = document.querySelector(".posts-list");
    json.forEach((item, index) => {
      // creating element
      const post = document.createElement("li");
      const postIndex = document.createElement("span");
      const postTitle = document.createElement("h4");
      const postText = document.createElement("p");
      const postReadMoreLink = document.createElement("a");

      // adding class
      post.classList.add("posts-list-item");
      postIndex.classList.add("post-index");
      postTitle.classList.add("post-title");
      postText.classList.add("post-text");
      postReadMoreLink.classList.add("post-link");

      // updating content
      postIndex.innerHTML = index + 1;
      postTitle.innerHTML = item.title;
      postText.innerHTML = item.body;
      postReadMoreLink.innerHTML = "Read more";

      //inserting item into the list
      post.append(postIndex, postTitle, postText, postReadMoreLink);
      list.appendChild(post);
    });
  });

// здійснити http - запит на сервіс jsonplaseholder,
// щоб отримати масив зі 100 постів. Вивести на екран
// їх у вигляді стилізованого списку новин.
