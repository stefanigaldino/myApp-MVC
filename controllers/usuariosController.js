const usuariosController = {
    index: (req, res) => {
        return res.send('Estou exibindo essa mensagem atraves do controller!');
    }
}

module.exports = usuariosController;