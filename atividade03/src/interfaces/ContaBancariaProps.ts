// Interface base
export interface ContaBancariaProps {
    numeroConta: string;
    titular: string;
    saldo: number;
}

// Interface da Corrente
export interface CorrenteProps extends ContaBancariaProps {
    limiteChequeEspecial: number;
}

// Interface da Poupanca
export interface PoupancaProps extends ContaBancariaProps {
    taxaRendimentoMensal: number;
}