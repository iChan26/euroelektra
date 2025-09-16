// lib/wordpress.js
import axios from "axios";

const WORDPRESS_API_URL = "https://iaserver2.com/euroelektra/wp-json/wp/v2";

export async function getPosts() {
  try {
    const res = await axios.get(`${WORDPRESS_API_URL}/posts`);
    return res.data;
  } catch (err) {
    console.error("Error fetching posts:", err);
    return [];
  }
}

export async function getProjects() {
  return []; // you can extend later
}

export async function getTranslations() {
  return {}; // you can extend later
}
