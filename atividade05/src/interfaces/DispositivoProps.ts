// Interface Base
export interface DispositivoProps {
    idLocal: string;
    nomeLocal: string;
    isLigado: boolean;
}

// Interface da Lampada Inteligente (Herda a base)
export interface LampadaInteligenteProps extends DispositivoProps {
    corHexadecimal: string;
    nivelBrilho: number;
}

// Interface do Termostato (Herda a base)
export interface TermostatoProps extends DispositivoProps {
    temperaturaAtual: number;
    temperaturaAlvo: number;
}