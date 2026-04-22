import markdownIt from 'markdown-it';
import bienvenidaRaw from '../assets/posts/bienvenida.md?raw';

const md = new markdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

// Remove YAML frontmatter from markdown
function stripFrontmatter(markdown) {
  const match = markdown.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (match) {
    return match[2];
  }
  return markdown;
}

// Load and render markdown
export async function loadMarkdown() {
  try {
    // Strip YAML frontmatter and render markdown
    const cleanContent = stripFrontmatter(bienvenidaRaw);
    return md.render(cleanContent);
  } catch (error) {
    console.error('Error loading markdown:', error);
    return '<p>Error cargando el contenido</p>';
  }
}
