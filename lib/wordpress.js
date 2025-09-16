import axios from "axios";

// Replace with your actual WordPress site URL
const WORDPRESS_API_URL = "https://iaserver2.com/euroelektra/wp-json/wp/v2";

/**
 * Get all blog posts from WordPress
 */
export async function getPosts() {
  try {
    const res = await axios.get(`${WORDPRESS_API_URL}/posts?_embed`);
    return res.data;
  } catch (err) {
    console.error("Error fetching posts:", err.message);
    return [];
  }
}

/**
 * Get a single post by slug
 */
export async function getPostBySlug(slug) {
  try {
    const res = await axios.get(
      `${WORDPRESS_API_URL}/posts?slug=${slug}&_embed`
    );
    return res.data.length > 0 ? res.data[0] : null;
  } catch (err) {
    console.error("Error fetching post by slug:", err.message);
    return null;
  }
}

/**
 * (Optional) Get custom projects from a CPT (if you have one in WordPress)
 */
export async function getProjects() {
  try {
    const res = await axios.get(`${WORDPRESS_API_URL}/projects?_embed`);
    return res.data;
  } catch (err) {
    console.warn("Projects not found:", err.message);
    return [];
  }
}

/**
 * (Optional) Get translations from a WP endpoint (if you’re using WPML/Polylang or ACF)
 */
export async function getTranslations() {
  try {
    const res = await axios.get(`${WORDPRESS_API_URL}/translations`);
    return res.data;
  } catch (err) {
    console.warn("Translations not found:", err.message);
    return {};
  }
}
