
console.log("Inicio");

async function fetchData() {
  try {
    const userResponse = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user = await userResponse.json();
    console.log("Datos recibidos (user):", user);

    const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts?userId=1");
    const posts = await postsResponse.json();
    console.log("Datos recibidos (posts):", posts);

    const commentsResponse = await fetch("https://jsonplaceholder.typicode.com/comments?postId=1");
    const comments = await commentsResponse.json();
    console.log("Datos recibidos (comments):", comments);

    // Usar funciones de alto nivel combinadas
    // Agregar comentarios a los posts
    const postsWithComments = posts.map(post => {
      post.comments = comments.filter(comment => comment.postId === post.id);
      return post;
    });

    // Contar el número total de comentarios
    const totalComments = comments.reduce((acc, comment) => acc + 1, 0);
    console.log("Total de comentarios:", totalComments);

    // Filtrar posts con más de un comentario
    const postsWithMultipleComments = postsWithComments.filter(post => post.comments.length > 1);
    console.log("Posts con más de un comentario:", postsWithMultipleComments);

  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData();

console.log("Fin");