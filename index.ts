import httpErrors from 'http-errors'
import express from 'express'
import path from 'path'
import { PrismaClient } from '@prisma/client'
import nunjucks from 'nunjucks'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'

// Initialize Express
const app = express()
const PORT = process.env.PORT

// Initialize Prisma
const prisma = new PrismaClient()

// Configure Nunjucks
let views = nunjucks.configure(['views/'], {
    autoescape: true,
    express: app
})

// Setup express
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', async (req, res) => {
    res.render('index.html', {
        title: process.env.APP_NAME + ' | Home'
    })
})

// Booting the server
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
})