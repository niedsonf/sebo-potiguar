import { StaticImageData } from "next/image";

export interface Book {
    id: number;
    title: string;
    author: string;
    image: StaticImageData;
    seller: string;
    genre: string;
    rating: 'Novo' | 'Usado';
}