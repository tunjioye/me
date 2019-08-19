# Me

Quick Portfolio Bootstrap

Build a <a target="_blank" href="https://tunjioye.github.io/me">simple portfolio</a> like mine faster by editing default configuration and updating the markdown pages.

## 🚀 Quick start

1.  **Install Packages.**

    ```sh
    npm install
    ```

2.  **Start developing.**

    ```sh
    gatsby develop
    ```

3.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project<br />Plus 3 extra additions which are identified with comments.

    .
    ├── node_modules
    ├── me-md // contains markdown pages
    ├── src
    ├── static // for static files like your resume (PDF)
    ├── ...
    ├── me-config.js // ediatble configuration
    ├── ...
    └── README.md

1.  **`/me-md`**: This directory contains all of the markdown pages which can be edited.

2.  **`/static`**: This directory will contain all of the static files like your resume in PDF

3.  **`me-config.js`**: This is the main configuration file for the me project. Here you can edit or change several default behavior of the project

## 📄 Pages

Markdown for all pages can be found in **`/me-md`** folder in the root folder

1.  **`home.md`** for Home Page
2.  **`projects.md`** for Projects Page
3.  **`Resume`** treated as a file which can by configured in `me-config.js` rather than a page

## 🛠 Configurations

All configurations can be made by editing the **`me-config.js`** file in the root folder

#### Configuration Options

1. **`initials`** : serves as your logo
2. **`siteMetadata`** : contains information such as `title`, `siteUrl`, `description`, `author`
3.  **`resume`** : value can be either a file located in the `/static/` folder or a link to your resume
4.  **`contacts`** : contains `email` and social contact links
5.  **`pathPrefix`** : just leave it as `'/me'` for now

## 💫 Deployment

1. **Github Pages**

    ```sh
    npm run deploy:github
    ````

2. **Netlify**

   [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)
