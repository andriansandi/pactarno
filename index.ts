import express from 'express'
import { PrismaClient } from '@prisma/client'

// Initialize Express
const app = express()
const PORT = 8000

// Initialize Prisma
const prisma = new PrismaClient()

app.get('/', async (req, res) => {
    await prisma.user.create({
        data: {
            name: 'Sandi',
            email: 'andrian.sandi@gmail.com',
            jobTitle: 'Technical Lead',
            posts: {
                create: { title: 'Hello World'}
            },
            profile: {
                create: { bio: 'I like turtles' }
            }
        }
    })

    const allUsers = await prisma.user.findMany({
        include: {
            posts: true,
            profile: true
        }
    })

    res.status(200).json(allUsers)
})

// Booting the server
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
})