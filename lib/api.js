export async function getPosts() {
  const res = await fetch(
    `${process.env.WORDPRESS_API_URL}/wp-json/wp/v2/posts`
  );
  return res.json();
}

export async function getPost(slug) {
  const res = await fetch(
    `${process.env.WORDPRESS_API_URL}/wp-json/wp/v2/posts?slug=${slug}`
  );
  const posts = await res.json();
  return posts[0];
}
