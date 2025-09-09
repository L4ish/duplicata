export class RmDuplicata {

    private _duplicata : number[]

    constructor (duplicata: number[]) {
        this._duplicata = duplicata
    }

    public get duplicata() {
        return this._duplicata
    }

    public set duplicata(duplicata: number[]) {
        this._duplicata = this.duplicata
    }


    public removeDuplicados() {
         let resultado: number[] = []
        for (let percorre of this.duplicata) {
            if (!resultado.includes(percorre)) {
                resultado.push(percorre)
            }
        }

        this._duplicata = resultado

    }
}