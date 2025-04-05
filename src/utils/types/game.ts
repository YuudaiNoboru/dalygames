export interface GameProps{
    id: number;
    title: string;
    description: string;
    image_url: string;
    platforms: string[];
    categories: string[];
    release: string;
}

export interface CardGameProps {
    data: GameProps
}

export interface LabelProps {
    name: string;
}

export interface PropsParams {
    params: {
        id: string;
    }
}