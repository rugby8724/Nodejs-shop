const path = require('path')

const express = require('express')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express()

app.use(express.urlencoded())
app.use(express.json())

app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', 'page-not-found.html'))
})


app.listen(3000)