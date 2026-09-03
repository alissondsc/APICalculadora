import express from 'express'

const app = express()
app.use(express.json())

app.get("/api/mensagem/:msn", (req, res) => {
    const  msn = string (req.params.msn)
  res.send({message: 'temos as operações: somar, subtrair, multiplicar, dividir, pontenciação e raiz quadrada.'})
})

app.post("/api/somar", (req, res) => {
    const  num1 = req.body.num1
    const  num2 = req.body.num2
  res.send({message: num1 + num2})
})

app.post("/api/mult", (req, res) => {
    const num1 = (req.params.num1)
    const num2 = (req.params.num1)
    res.send({menssage: num1*num2})
})

app.post("/api/subtrair", (req, res) => {
    const  num1 = req.body.num1
    const  num2 = req.body.num2
  res.send({message: num1 - num2})
})

app.post("/api/div", (req, res) => {
    const  num1 = req.body.num1
    const  num2 = req.body.num2
  res.send({message: num1 / num2})
})

app.post("/api/potencia", (req, res) => {
    const  num1 = req.body.num1
    const  num2 = req.body.num2
  res.send({message: num1 ** num2})
})

app.post("/api/raiz", (req, res) => {
    const  num1 = req.body.num1
    const  num2 = req.body.num2
  res.send({message: num1 **(1/2)})
})

app.listen(3000, () => {
  console.log("servidor na porta 3000")
})