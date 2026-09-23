import { VeiculoProps } from "../interfaces/VeiculoProps.js";

export class Veiculo<T extends VeiculoProps = VeiculoProps>{

    constructor(protected props: T) {}

    public get getMarca(): string { return this.props.marca; }
    public get getModelo(): string { return this.props.modelo; }
    public get getAno(): number { return this.props.ano; }

    public set setMarca(novoMarca: string) {
        if (novoMarca.trim().length === 0) {
            console.log("\n ERRO: A marca não pode ser vazia!");
            return;
        }
        this.props.marca = novoMarca;
    }

    public set setModelo(novoModelo: string) {
        if (novoModelo.trim().length === 0) {
            console.log("\n ERRO: O Modelo não pode ser vazio!");
            return;
        }
        this.props.modelo = novoModelo;
    }

    public set setAno(novoAno: number) {
        if (novoAno == 0) {
            console.log("\n ERRO: O ano do veiculo não pode ser vazio!");
            return;
        }
        this.props.ano = novoAno;
    }
}
