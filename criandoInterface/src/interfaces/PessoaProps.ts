export interface PessoaFisicaProps {
    cpf: string;
    nome: string;
    telefone: string;
    email: string;
    dataNascimento: string;
}

// Interface do Cliente (Herda a base)
export interface ClienteProps extends PessoaFisicaProps {
    clienteDesde: string;
}

export interface FuncionarioProps extends PessoaFisicaProps {
    registro: string;
    carteiraTrabalho: string;
    pis: string;
}

export interface EstagiarioProps extends PessoaFisicaProps {
    instituicaoEnsino: string;
    bolsaAuxilio: number;
}