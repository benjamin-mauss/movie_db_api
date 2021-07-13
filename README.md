## What is it?
A simple project that uses node js, handlebars, bootstrap, jquery, axios and express to consume Movie DB's API and display a simple website.
Because I was running out of ideas, I didn't make something very interesting

## Setting up
With node js, git and npm installed, run the commands:
`git clone github.com/gato-louco-cv/movie_db_api`

`cd movie_db_api`

`npm install --save axios express express-handlebars`

Register to <a href="https://www.themoviedb.org/?language=pt-BR">themoviedb.org</a> and get your API key.
After that, replace your api key in `\routes\main.js`, in the 5º line:
`axios.defaults.headers.common['Authorization'] = "Bearer {PRIVATE}";`

Run `node app.js`

Access localhost:8000 in your browser.

https://user-images.githubusercontent.com/86640585/125498232-00c3a16d-ca4b-47d4-b9a7-23dd6a08815a.mp4
