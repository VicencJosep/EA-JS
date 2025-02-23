console.log("Inicio");

async function fetchData() {
  try {
    const userResponse = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user = await userResponse.json();
    console.log("Datos recibidos (user):", user);

    const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts?userId=1");
    const posts = await postsResponse.json();
    console.log("Datos recibidos (posts):", posts);

    const commentsResponse = await fetch("https://jsonplaceholder.typicode.com/comments");
    const comments = await commentsResponse.json();
    //console.log("Datos recibidos (comments):", comments);

    
    // Agregar comentarios a los posts con id par
    const postsWithComments = posts
      .filter(post => post.id % 2 === 0) 
      .map(post => {
        post.comments = comments.filter(comment => comment.postId === post.id);
        return post;
      });

    console.log("Posts con id par y sus comentarios:", JSON.stringify(postsWithComments, null, 2));

   
    const postsWithMultipleComments = postsWithComments.filter(post => post.comments.length > 3);
 
    const countPostsWithMultipleComments = postsWithMultipleComments.reduce((acc, post) => acc + 1, 0);
    console.log("Número de posts cin id par y con más de tres comentarios:", countPostsWithMultipleComments);

    // Contar el número total de comentarios
    const totalComments = comments.reduce((acc, comment) => acc + 1, 0);
    console.log("Total de comentarios:", totalComments);

  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData();



