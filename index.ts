import express from 'express'
import { PrismaClient } from '@prisma/client'

// Initialize Express
const app = express()
const PORT = process.env.PORT

// Initialize Prisma
const prisma = new PrismaClient()

app.get('/', async (req, res) => {
    res.send('Express + Typescript Server')
})

// Booting the server
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
})