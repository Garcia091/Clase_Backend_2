const {Router} = require('express')
const router = Router()


router.get('/',(req,res)=>{
    res.send('Hola Clase')
})

router.get('/user/:id', function (req, res) {
    res.send(`<h3>1*${req.params.id} = ${1*Number(req.params.id)}</h3>\n
              <h3>2*${req.params.id} = ${2*Number(req.params.id)}</h3>\n
              <h3>3*${req.params.id} = ${3*Number(req.params.id)}</h3>\n
              <h3>4*${req.params.id} = ${4*Number(req.params.id)}</h3>\n
              <h3>5*${req.params.id} = ${5*Number(req.params.id)}</h3>\n
              <h3>6*${req.params.id} = ${6*Number(req.params.id)}</h3>\n
              <h3>7*${req.params.id} = ${7*Number(req.params.id)}</h3>\n
              <h3>8*${req.params.id} = ${8*Number(req.params.id)}</h3>\n
              <h3>9*${req.params.id} = ${9*Number(req.params.id)}</h3>\n
              <h3>10*${req.params.id} = ${10*Number(req.params.id)}</h3>\n`)
  })

// Metodos HTTP

router.get('/user',(req,res)=>{
    res.send('Petición Get')
})

router.post('/user',(req,res)=>{
    console.log(req.body.tabla)
    res.send(`<h3>1*${req.body.tabla} = ${1*Number(req.body.tabla)}</h3>\n
              <h3>2*${req.body.tabla} = ${2*Number(req.body.tabla)}</h3>\n
              <h3>3*${req.body.tabla} = ${3*Number(req.body.tabla)}</h3>\n
              <h3>4*${req.body.tabla} = ${4*Number(req.body.tabla)}</h3>\n
              <h3>5*${req.body.tabla} = ${5*Number(req.body.tabla)}</h3>\n
              <h3>6*${req.body.tabla} = ${6*Number(req.body.tabla)}</h3>\n
              <h3>7*${req.body.tabla} = ${7*Number(req.body.tabla)}</h3>\n
              <h3>8*${req.body.tabla} = ${8*Number(req.body.tabla)}</h3>\n
              <h3>9*${req.body.tabla} = ${9*Number(req.body.tabla)}</h3>\n
              <h3>10*${req.body.tabla} = ${10*Number(req.body.tabla)}</h3>\n`)
})

router.put('/user',(req,res)=>{
    res.send('Update request')
})

router.delete('/user',(req,res)=>{
    res.send('Delete request')
})


module.exports = router;