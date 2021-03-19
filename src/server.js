// importando dependencia express
const express = require("express")
const server = express()

// pegar banco de dados
const db = require("./database/db")

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

    db.run(query, values, afterInsertDate)

})

// rota search-results
server.get("/search", (req, res) => {

    const search = req.query.search

    if(search == "") {
        // pesquisa vazia
        return res.render("search-results.html", {total: 0})
    }

    // pegar os dados do banco de dados
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows) {
        if(err) {
            return console.log(err)
        }
        //console.log("Aqui estão seus registros: ")
        //console.log(rows)

        const total = rows.length

        // mostrar a página html com os dados do banco de dados
        return res.render("search-results.html", {places: rows, total: total})
    })
 })

// ligar o servidor
server.listen(3000)