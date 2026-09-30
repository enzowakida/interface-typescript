// Interface Base
export interface AnimalProps {
    nomePaciente: string;
    nomeTutor: string;
    pesoKG: number;
}

// Interface do Cachorro (Herda a base)
export interface CachorroProps extends AnimalProps {
    porte: string;
    precisaTosa: boolean;
}

// Interface do Gato (Herda a base)
export interface GatoProps extends AnimalProps {
    fivFelvTestado: boolean;
    isIndoor: boolean;
}