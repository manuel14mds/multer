import express from 'express'
import __dirname from './utils.js'
import { uploader } from './utils.js'
const app = express()

app.use(express.json())
app.use(express.static(__dirname + '/public'))

app.get('/',(req,res)=>{
    res.redirect('/');
})

app.post('/api/products', uploader.single('file'),(req,res)=>{
    console.log(req.body)
    if(!req.body) return res.send('no llego nada')
    res.send('EUREKAAAAA, llegó algo. Anda a ver!!!!!!!!!!!!')
})


app.listen(8080, ()=>console.log('running on 8080 port'))