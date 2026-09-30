import { Animal } from "./Animal.js";
import { GatoProps } from "../interfaces/AnimalProps.js";

// Passamos GatoProps para o Generic da classe mãe
export class Gato extends Animal<GatoProps>{

    constructor(props: GatoProps) {
        super(props); // Repassa o objeto inteiro para a mãe de uma vez só
    }

    public get getFivFelvTestado(): boolean { return this.props.fivFelvTestado; }
    public get getIsIndoor(): boolean { return this.props.isIndoor; }

    public set setFivFelvTestado(novoFivFelvTestado: boolean) {
        if (novoFivFelvTestado === null) {
            console.log("\n ERRO: O campo não pode ser vazio!");
            return;
        }
        this.props.fivFelvTestado = novoFivFelvTestado;
    }

    public set setIsIndoor(novoIsIndoor: boolean) {
        if (novoIsIndoor === null) {
            console.log("\n ERRO: O campo não pode ser vazio!");
            return;
        }
        this.props.isIndoor = novoIsIndoor;
    }
}