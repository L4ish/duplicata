import recebe = require('readline-sync')
import { RemoveDuplicata } from './src/model/RemoveDuplicata'

export function main() {

    const duplicata = new RemoveDuplicata() //instancia a classe de forma vazia.

    while (true) {
        let entrada = recebe.question('Insira um valor de letra ou numero, ou aperte ENTER para sair: ')
        if (entrada === '') { 
            break
        }
        let busca = duplicata.retorna
        busca.push(entrada)
        duplicata.inseri = busca

    }
    duplicata.removeDuplicados() 
    console.log('Dados armazenados: ', duplicata.retorna)
}

main()




