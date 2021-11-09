const express = require('express')
const app = express()
const axios = require('axios').default;

app.get('/', (req, res) => {

    let data = axios.get('https://api.binance.com/api/v3/ticker/price')
        .then(function (response) {
            data = response
            console.log(`result : ${JSON.stringify(data.data)}`)
            res.send(data.data)
        })
})

app.listen(8080, () => {
    console.log(`Serveur à l'écoute`)
})