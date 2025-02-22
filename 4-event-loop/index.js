const fetch = require('node-fetch');

console.log("Inicio");

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => response.json())
  .then(data => console.log("Datos recibidos:", data));

  let user = data;

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => console.log("Datos recibidos:", data));

let posts = data;

fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
  .then(response => response.json())
  .then(data => console.log("Datos recibidos:", data));

let comments = data;

//usar funciones de alto nivel combinadas; map, filter, reduce
user.posts = posts.map(post => {
  post.comments = comments.filter(comment => comment.postId === post.id);
  return post;
});

comments.filter(comment => comment.postId === 1);  

console.log("Fin");