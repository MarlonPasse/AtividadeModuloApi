export class Produto{
    id:number = 0;
    produto: string = "";
    descrição: string = "";
    foto: string = "";
    preço: number = 0;

    constructor(id: number, produto: string, descrição: string, foto: string, preço: number) {
        this.id = id;
        this.produto = produto;
        this.descrição = descrição;
        this.foto = foto;
        this.preço = preço;
    }
}