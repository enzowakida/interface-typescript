import { Veiculo } from "./Veiculo.js";
import { CarroProps } from "../interfaces/VeiculoProps.js";

// Passamos CarroProps para o Generic da classe mãe
export class Carro extends Veiculo<CarroProps>{

    constructor(props: CarroProps) {
        super(props);
    }

    public get getQuantidadeDePortas(): number { return this.props.quantidadeDePortas; }

    public set setQuantidadeDePortas(novaQuantidadeDePortas: number) {
        this.props.quantidadeDePortas = novaQuantidadeDePortas;
    }
}