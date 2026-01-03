# Uliboooo's Portfolio

[https://about.uliboooo.dev/](https://about.uliboooo.dev/)

## Features

- **About Me**: Introduction and bio.
- **Repositories**: Showcase of GitHub projects.
- **Articles**: Links to external articles (Zenn, Note).
- **Blogs**: Integrated blog system using pure JavaScript. No Ruby/Jekyll required.

## How to Add a Blog Post

1.  Create a new markdown file in the `posts` directory.
2.  Name the file using the format `YYYY-MM-DD-title.md` (e.g., `2026-01-04-my-awesome-post.md`).
3.  **Important:** Add YAML Front Matter at the top of the file to define the title, date, and description:

    ```yaml
    ---
    title: "My Awesome Post"
    date: 2026-01-04
    description: "A short summary of the post that appears in the list."
    ---
    ```

4.  Write your content in Markdown below the second `---`.
5.  Commit and push to GitHub.

## Local Development

Since this is a pure static site (HTML/CSS/JS), you can run it with any static file server.

1.  **Start a local server**:
    *   **Python (Recommended)**: `python3 -m http.server 8080`
    *   Node: `npx http-server`
    *   VS Code: "Live Server" extension.

2.  **Open in Browser**: `http://localhost:8080`

### How the Blog System Works

1.  **Storage**: Posts are simple Markdown files in the `posts/` folder.
2.  **Listing**: `index.html` fetches the list of posts.
    *   **Locally**: It attempts to read the `posts/` directory directly (works with Python's simple server).
    *   **Production**: It uses the GitHub API to fetch the file list from the repository.
3.  **Rendering**: It fetches the content of each post to extract the metadata (Title, Description) for the list view.
4.  **Viewing**: `blog.html` fetches the raw Markdown and renders it to HTML using `marked.js`.