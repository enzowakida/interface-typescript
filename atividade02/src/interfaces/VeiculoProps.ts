export interface VeiculoProps {
    marca: string;
    modelo: string;
    ano: number;
}

// Interface do Carro (Herda a base)
export interface CarroProps extends VeiculoProps {
    quantidadeDePortas: number;
}

// Interface da Moto (Herda a base)
export interface MotoProps extends VeiculoProps {
    cilindradas: number;
}