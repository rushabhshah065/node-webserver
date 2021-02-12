const path = require('path')
const express = require('express')
const hbs = require('hbs')
const {
    ppid
} = require('process')

const app = express()

// Define path for express config
const viewsPath = path.join(__dirname, '../template/views')
const partialsPath = path.join(__dirname, '../template/partials')

const publicdirectorypath = path.join(__dirname, '../public')

// setup handle bars and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

// set up static directory
app.use(express.static(publicdirectorypath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Rushbh Shah'
    })
})

app.get('/help', (req, res) => {
    res.send([{
            name: 'Rushabh Shh',
            age: '27'
        },
        {
            name: 'Rushabh Shh a',
            age: '27'
        }
    ])
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Rushabh'
    })
})

app.get('/weather', (req, res) => {
    res.send('Hey rushbh Shah!! This is weather page!!')
})

app.get('/products', (req, res) => {
    console.log(req.query.search)
    if (!req.query.search) {
        return res.send({
            error: 'Search term not provided'
        })

    }

    res.send({
        products: []
    })

})

app.get('*', (req, res) => {
    res.send('my 404 page!')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})