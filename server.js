const express = require('express')
const hbs = require('hbs')

const port = process.env.PORT || 3000

let app = express()
hbs.registerPartials(__dirname + '/views/partials')

hbs.registerHelper('getCurrentDate', () => new Date().getFullYear() )
hbs.registerHelper('screamIt', (text) => text.toUpperCase())

app.set('view engine', 'hbs')

app.use(express.static(__dirname + '/public'))

// app.use((req, res, next) => {
//   res.render('maintenance.hbs')
// })

app.get('/', (req, res) => {
  res.render('home.hbs', {
    welcomeMsg: 'Welcome to express!!!',
    content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis recusandae voluptatem cumque cupiditate tempora in fugiat mollitia eligendi dolorum pariatur!'
  })
  // res.send({
  //   name: 'Pavel',
  //   age: 31,
  //   likes: [
  //     'family',
  //     'bike',
  //     'swiming'
  //   ]
  // })
})

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    title: 'About Page'
  })
})

app.get('/bad', (req, res) => {
  res.send('PAge not found')
})

app.listen(port, () => {
  console.log(`Server is start on port ${port}`)
})