const inputCep = document.querySelector('#cep')
const inputRua = document.querySelector('#rua')
const inputComplemento = document.querySelector('#complemento')
const inputBairro = document.querySelector('#bairro')
const inputUF = document.querySelector('#UF')
const BASE_URL = 'https://brasilapi.com.br/api'

inputCep.addEventListener('keyup', async event => {
    if (inputCep.value.length  < 8) {
        return;
    }
    const response = await fetch(`${BASE_URL}/cep/v1/${inputCep.value}`, {
        method: 'GET'
    })
    const responseContent = await response.json()
    // console.log(responseContent)
    const {street, neighborhood, state} = responseContent
    inputRua.value = street
    inputBairro.value = neighborhood
    inputUF.value = state
})