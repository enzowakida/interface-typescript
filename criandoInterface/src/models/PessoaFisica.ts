import { PessoaFisicaProps } from "../interfaces/PessoaProps.js";

export class PessoaFisica<T extends PessoaFisicaProps = PessoaFisicaProps>{

    constructor(protected props: T) {}

    public get getCpf(): string { return this.props.cpf; }
    public get getNome(): string { return this.props.nome; }
    public get getTelefone(): string { return this.props.telefone; }
    public get getEmail(): string { return this.props.email; }
    public get getDataNascimento(): string { return this.props.dataNascimento; }

    public set setCpf(novoCpf: string) {
        if (novoCpf.trim().length === 0) {
            console.log("\n ERRO: O CPF não pode ser vazio!");
            return;
        }
        this.props.cpf = novoCpf;
    }

    public set setNome(novoNome: string) {
        if (novoNome.trim().length === 0) {
            console.log("\n ERRO: O nome não pode ser vazio!");
            return;
        }
        this.props.nome = novoNome;
    }

    public set setTelefone(novoTelefone: string) {
        if (novoTelefone.trim().length === 0) {
            console.log("\n ERRO: O telefone não pode ser vazio!");
            return;
        }
        this.props.telefone = novoTelefone;
    }

    public set setEmail(novoEmail: string) {
        if (novoEmail.trim().length === 0) {
            console.log("\n ERRO: O email não pode ser vazio!");
            return;
        }
        this.props.email = novoEmail;
    }

    public set setDataNascimento(novaDataNascimento: string) {
        if (novaDataNascimento.trim().length === 0) {
            console.log("\n ERRO: A data de nascimento não pode ser vazio!");
            return;
        }
        this.props.dataNascimento = novaDataNascimento;
    }
}