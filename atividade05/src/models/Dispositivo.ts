import { DispositivoProps } from "../interfaces/DispositivoProps.js";

// A classe recebe o Generic <T> para entender as propriedades das classes filhas
export class Dispositivo<T extends DispositivoProps= DispositivoProps> {

    // O 'protected' permite que as filhas enxerguem o objeto 'props'
    constructor(protected props: T) {}

    public get getIdLocal(): string { return this.props.idLocal; }
    public get getNomeLocal(): string { return this.props.nomeLocal; }
    public get getIsLigado(): boolean { return this.props.isLigado; }

    public set setIdLocal(novoIdLocal: string) {
        if (novoIdLocal.trim().length === 0) {
            console.log("\n ERRO: O ID local não pode ser vazio!");
            return;
        }
        this.props.idLocal = novoIdLocal;
    }

    public set setNomeLocal(novoNomeLocal: string) {
        if (novoNomeLocal.trim().length === 0) {
            console.log("\n ERRO: O nome do local não pode ser vazio!");
            return;
        }
        this.props.nomeLocal = novoNomeLocal;
    }

    public set setIsLigado(novoIsLigado: boolean) {
        if (novoIsLigado === true) {
            console.log("\n ERRO: A condição de estar ligado não pode ser vazio!");
            return;
        }
        this.props.isLigado = novoIsLigado;
    }
}