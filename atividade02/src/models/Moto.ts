import { Veiculo } from "./Veiculo.js";
import { MotoProps } from "../interfaces/VeiculoProps.js";

// Passamos ClienteProps para o Generic da classe mãe
export class Moto extends Veiculo<MotoProps>{

    constructor(props: MotoProps) {
        super(props); // Repassa o objeto inteiro para a mãe de uma vez só
    }

    public get getCilindradas(): number { return this.props.cilindradas; }

    public set setCilindradas(novaCilindradas: number) {
        if (novaCilindradas == 0) {
            console.log("\n ERRO: O campo não pode ser vazio!")
            return;
        }
        this.props.cilindradas = novaCilindradas;
    }
}