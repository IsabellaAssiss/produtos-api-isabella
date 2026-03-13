let produtos = []
let nextId = 1

function listar(req, res) {
    res.status(200).json(produtos)
}

function buscarPorId(req, res) {
    const id = parseInt(req.params.id)

    const produto = produtos.find(p => p.id === id)

    if (!produto) {
        return res.status(404).json({ erro: "Produto não encontrado" })
    }

    res.status(200).json(produto)
}

function criar(req, res) {}

function atualizar(req, res) {}

function remover(req, res) {}

module.exports = {
  listar,
  buscarPorId,
  criar,
  atualizar,
  remover
}