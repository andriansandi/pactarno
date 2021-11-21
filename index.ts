import express from 'express'
import { PrismaClient } from '@prisma/client'
import nunjucks from 'nunjucks'

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

app.get('/', async (req, res) => {
    res.render('index.html', {
        title: process.env.APP_NAME + ' | Home'
    })
})

// Booting the server
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
})