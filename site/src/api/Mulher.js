import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:5000/'
})

export async function novoHeroi (nome, poder, voa){

    const resposta = await api.post('/heroi' , {
        nome: nome,
        poder: poder,
        voa: voa
    })

return resposta.data;
}

export async function ver () {
    const resposta = await api.get ('/heroi');
    return resposta.data;
}