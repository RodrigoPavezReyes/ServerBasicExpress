const express = require (`express`)

const app = express()
const PORT = 8080

//MIDDLEWARES

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//ENDPOINT

const frase = "Creando servidor con express y peticiones GET, POST, PUT, DELETE"

//Devolver frase completa
app.get(`/api/frase`, (req,res)=>{
    res.json({frase})
})

//Devolver una letra por la posicion indicada en numeros del parametro de la url

app.get('/api/palabras/:pos',(req,res)=>{

        const numberParams = parseInt(req.params.pos)

        if(isNaN(numberParams)){
            res.status(400).json({error: "El parametro no es un número"})
        }else{
            arrayPalabras = frase.split(" ")

            if(numberParams<0 || numberParams>arrayPalabras.length){
                res.status(400).json({error:"Fuera del parametro"})
            }else{
                const palabra = arrayPalabras[numberParams-1]
                res.json({palabra})
            }
        }
})




app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))

