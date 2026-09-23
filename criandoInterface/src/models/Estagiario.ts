import { EstagiarioProps } from "../interfaces/PessoaProps.js";
import { PessoaFisica } from "./PessoaFisica.js";

// Passamos EstagiarioProps para o Generic da classe mãe
export class Estagiario extends PessoaFisica<EstagiarioProps>{
    constructor(props: EstagiarioProps) {
        super(props);
    }

    public get getInstituicaoEnsino(): string { return this.props.instituicaoEnsino; }
    public get getBolsaAuxilio(): number { return this.props.bolsaAuxilio; }

    public set setInstiuicaoEnsino(novaInstituicaoEnsino: string) {
        if (novaInstituicaoEnsino.trim().length === 0) {
            console.log("\n ERRO: A instituicao de ensino não pode ser vazia!");
            return;
        }
        this.props.instituicaoEnsino = novaInstituicaoEnsino;
    }

    public set setBolsaAuxilio(novaBolsaAuxilio: number) {
        if (novaBolsaAuxilio == 0) {
            console.log("\n ERRO: A bolsa de auxilio não pode ser vazia!");
            return;
        }
        this.props.bolsaAuxilio = novaBolsaAuxilio;
    }
}