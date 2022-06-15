const path = require('path')

const express = require('express')

const rootDir = require('./util/path')
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const errorController = require('./controllers/error')

const app = express()

app.set('view engine', 'ejs')


app.use(express.urlencoded())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use(errorController.pageNotFound)


app.listen(3000)