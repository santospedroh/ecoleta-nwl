// importando dependencia express
const express = require("express")
const server = express()

// host - port
const port = 8000
const host = "0.0.0.0"

// pegar banco de dados
const con = require("./database/db")

// configurando pasta publica
server.use(express.static("public"))

// habilitar o uso do re.body na aplicação
server.use(express.urlencoded({ extended: true }))

// utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

// configurar caminhos da aplicação (Rotas)
// página inicial
// req : Requisição
// res : Resposta

// rota index
server.get("/", (req, res) => {
    //res.send("Cheguei aqui") -- Hello World
    return res.render("index.html")
})

// rota create-point
server.get("/create-point", (req, res) => {

    //req.query: Query string da URL
    //return res.render("create-point.html")
    return res.render("create-point.html")   

})
// rota save-point
server.post("/save-point", (req, res) => {
    
    //req.body: O corpo do form
    // console.log(req.body)

    //inserir dados no banco de dados
    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `
    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertDate(err) {
        if(err) {
            console.log(err)
            return res.send("Erro no cadastro!")
        }

        console.log("Cadastrado com sucesso")
        console.log(this)

        return res.render("create-point.html", {saved: true})
    }

    //db.run(query, values, afterInsertDate)
    con.query(query, values, afterInsertDate)

})

// rota search-results
server.get("/search", (req, res) => {

    const search = req.query.search

    if(search == "") {
        // pesquisa vazia
        return res.render("search-results.html", {total: 0})
    }

    // pegar os dados do banco de dados
    con.query(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (err, result) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }
        console.log("Aqui estão seus registros: ")
        console.log(result)

        const total = result.length

        // mostrar a página html com os dados do banco de dados
        return res.render("search-results.html", {places: result, total: total})
    })

 })

// ligar o servidor
server.listen(port, host)
console.log(`Running on http://${host}:${port}`)