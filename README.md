# Clean Blog Ghost theme

A ghost theme based on [Clean Blog](https://github.com/BlackrockDigital/startbootstrap-clean-blog) by StartBootstrap. The theme has been adapted to Ghost and customized for my [personal website](https://mtaberna.com)

# Preview

[![Clean Blog Preview](https://raw.githubusercontent.com/BeatPlus/clean-blog-ghost-theme/master/static/screenshot.png)](https://raw.githubusercontent.com/BeatPlus/clean-blog-ghost-theme/master/static/screenshot.png)

**[View Live Preview](https://mtaberna.com)**

# File structure

**The main files are:**

- `default.hbs` - The main template file
- `index.hbs` - Used for the home page
- `post.hbs` - Used for individual posts
- `page.hbs` - Used for individual pages
- `tag.hbs` - Used for tag archives
- `author.hbs` - Used for author archives
- `assets\less` - Less style files
- `assets\js` - Javascript files
- `assets\builtp` - Gulp bundled files

# Development

Styles and Javascripts are compiled using Gulp. You'll need [Node](https://nodejs.org/), [Yarn](https://yarnpkg.com/) and [Gulp](https://gulpjs.com) installed globally. After that, from the theme's root directory:

```bash
# Install
yarn

# Run build & watch for changes
$ yarn dev
```

Now you can edit `/assets/css/` and `/assets/js/` files, which will be compiled to `/assets/built/` automatically. Files with *.min.* in the filename will be copied unprocessed.

The `zip` Gulp task packages the theme files into `dist/<theme-name>.zip`, which you can then upload to your site.

```bash
yarn zip
```

# Deployment

The `main` branch has pre-configured deployment with Github actions. 💡 The action expects that you already have a working Ghost install running at least v2.25.5.

1. Fork this project

2. Generate a set of Ghost Admin API credentials, by configuring a new Custom Integration in Ghost Admin&raquo;Integrations. 

3. On GitHub, navigate to your theme repository&raquo;Settings&raquo;Secrets. Create a secret called `GHOST_ADMIN_API_URL` containing the API URL and another called `GHOST_ADMIN_API_KEY` containing the Admin API Key. Both must be copied exactly from Ghost Admin&raquo;Integrations.

4. Every commit will now be automatically deployed to your ghost site. 


# Gulp Features Used

- Autoprefixer - Don't worry about writing browser prefixes of any kind, it's all done automatically with support for the latest 2 major versions of every browser.
- Uglify - To minify CSS and JS 
- Variables - Simple pure CSS variables



# Copyright & License

Copyright (c) Manuel Taberna - Released under the [MIT license](LICENSE).
