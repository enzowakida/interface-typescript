import { ContaBancaria } from "./ContaBancaria.js";
import { PoupancaProps } from "../interfaces/ContaBancariaProps.js";

// Passamos PoupancaProps para o Generic da classe mãe
export class Poupanca extends ContaBancaria<PoupancaProps>{

    constructor(props: PoupancaProps) {
        super(props);
    }

    public get getTaxaRendimentoMensal(): number { return this.props.taxaRendimentoMensal; }

    public set setTaxaRendimentoMensal(novoTaxaRendimentoMensal: number) {
        this.props.taxaRendimentoMensal = novoTaxaRendimentoMensal;
    }
}