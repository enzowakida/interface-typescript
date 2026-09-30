import { Dispositivo } from "./Dispositivo.js";
import { TermostatoProps } from "../interfaces/DispositivoProps.js";

// Passamos TermostatoProps para o Generic da classe mãe
export class Termostato extends Dispositivo<TermostatoProps>{

    constructor(props: TermostatoProps) {
        super(props); // Repassa o objeto inteiro para a mãe de uma vez só
    }

    public get getTemperaturaAtual(): number { return this.props.temperaturaAtual; }
    public get getTemperaturaAlvo(): number { return this.props.temperaturaAlvo; }

    public set setTemperaturaAtual(novaTemperaturaAtual: number) {
        if (novaTemperaturaAtual == 0) {
            console.log("\n ERRO: O campo não pode ser vazio!");
            return;
        }
        this.props.temperaturaAtual = novaTemperaturaAtual;
    }

    public set setTemperaturaAlvo(novaTemperaturaAlvo: number) {
        if (novaTemperaturaAlvo == 0) {
            console.log("\n ERRO: O campo não pode ser vazio!");
            return;
        }
        this.props.temperaturaAlvo = novaTemperaturaAlvo;
    }
}