import express from 'express'
const app = express()
app.use(express.json())


app.get('/', (_, res) => {
    return res.status(200).json({ message: 'Running' })
})


app.listen(3000, () => {
    console.log('server running')
})