export class RemoveDuplicata {

    private _duplicata : (number | string) []

    constructor (duplicata?: (number | string)[]) { //a ? significa que o parâmetro pode ser opcional
        this._duplicata = duplicata || []
    }

    public get retorna(): (number | string)[] {
        return this._duplicata
    }

    public set inseri(duplicata: (number | string)[]) {
        this._duplicata = duplicata
    }


    public removeDuplicados(): void {
         let resultado: Array<number | string> = []
        for (let percorre of this._duplicata) {
            if (!resultado.includes(percorre)) {
                resultado.push(percorre)
            }
        }
        
        this._duplicata = resultado

    }
}