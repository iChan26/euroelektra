import axios from "axios";

// Use env variable for flexibility (recommended)
const WP_API_URL =
  process.env.NEXT_PUBLIC_WORDPRESS_API_URL ||
  "https://iaserver2.com/euroelektra/wp-json";

/**
 * Fetch data from WordPress REST API
 * @param {string} endpoint - API endpoint (e.g. "/wp/v2/posts")
 */
export async function fetchFromWP(endpoint) {
  try {
    const res = await axios.get(`${WP_API_URL}${endpoint}`);
    return res.data;
  } catch (err) {
    console.error(" WordPress API error:", err.message);
    return null;
  }
}

/**
 * Example: Get blog posts
 */
export async function getPosts(limit = 3) {
  return fetchFromWP(`/wp/v2/posts?per_page=${limit}&_embed`);
}

/**
 * Example: Get projects (custom post type)
 */
export async function getProjects(limit = 6) {
  return fetchFromWP(`/wp/v2/projects?per_page=${limit}`);
}

/**
 * Example: Get translations (ACF options page)
 */
export async function getTranslations() {
  return fetchFromWP(`/acf/v3/options/options`);
}
