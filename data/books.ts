import { Book } from "@/@types/book";
import VQ_CONTOS from "@/assets/books/literarios/24_CONTOS.jpg";
import MORTE_VENEZA from "@/assets/books/literarios/A_MORTE_EM_VENEZA.jpg";
import ANGUSTIA_INSONIA from "@/assets/books/literarios/ANGUSTIA_INSONIA.jpg";
import CONTOS_1 from "@/assets/books/literarios/CONTOS_1.jpg";
import CONTOS_2 from "@/assets/books/literarios/CONTOS_2.jpg";
import CONTOS_3 from "@/assets/books/literarios/CONTOS_3.jpg";
import MACBETH from "@/assets/books/literarios/MACBETH.jpg";
import MADAMI_BOVARY from "@/assets/books/literarios/MADAMI_BOVARY.jpg";
import O_FIO_DA_NAVALHA from "@/assets/books/literarios/O_FIO_DA_NAVALHA.jpg";
import O_LEOPARDO from "@/assets/books/literarios/O_LEOPARDO.jpg";
import ROMEU_E_JULIETA from "@/assets/books/literarios/ROMEU_E_JULIETA.jpg";
import VENTOS_UIVANTES from "@/assets/books/literarios/VENTOS_UIVANTES.jpg";
import COMO_SER_UM_CONSERVADOR from "@/assets/books/nao-literarios/COMO_SER_UM_CONSERVADOR.jpg";
import ENSINANDO_INTELIGENCIA from "@/assets/books/nao-literarios/ENSINANDO_INTELIGENCIA.jpg";
import ESTIMULANDO_INTELIGENCIA from "@/assets/books/nao-literarios/ESTIMULANDO_INTELIGENCIA.jpg";
import FE_E_LIBERDADE from "@/assets/books/nao-literarios/FE_E_LIBERDADE.jpg";
import FILOSOFIA_DO_DIREITO from "@/assets/books/nao-literarios/FILOSOFIA_DO_DIREITO.jpg";
import METODOLOGIA_DA_ECONOMIA from "@/assets/books/nao-literarios/METODOLOGIA_DA_ECONOMIA.jpg";
import MISBEHAVING from "@/assets/books/nao-literarios/MISBEHAVING.jpg";
import NOVA_ORDEM from "@/assets/books/nao-literarios/NOVA_ORDEM.jpg";
import O_BRASIL_NA_FITA from "@/assets/books/nao-literarios/O_BRASIL_NA_FITA.jpg";
import O_TEMPO_E_EU from "@/assets/books/nao-literarios/O_TEMPO_E_EU.jpg";
import TEORIA_E_POLITICA from "@/assets/books/nao-literarios/TEORIA_E_POLITICA.jpg";

export const Books: Book[] = [
    {
        id: 1,
        image: VQ_CONTOS,
        title: "24 contos de F. Scott Fitzgerald",
        author: "F. Scott Fitzgerald",
        genre: "Literário",
        rating: "Usado",
        seller: "Afonso",
    },
    {
        id: 2,
        image: MORTE_VENEZA,
        title: "A morte em Veneza",
        author: "Thomas Mann",
        genre: "Literário",
        rating: "Usado",
        seller: "Afonso",
    },
    {
        id: 3,
        image: ANGUSTIA_INSONIA,
        title: "Angústia",
        author: "Graciliano Ramos",
        genre: "Literário",
        rating: "Usado",
        seller: "Afonso",
    },
    {
        id: 4,
        image: ANGUSTIA_INSONIA,
        title: "Insônia",
        author: "Graciliano Ramos",
        genre: "Literário",
        rating: "Usado",
        seller: "Afonso",
    },
    {
        id: 5,
        image: CONTOS_1,
        title: "Contos - Volume 1",
        author: "Ernest Hemingway",
        genre: "Literário",
        rating: "Usado",
        seller: "Afonso",
    },
    {
        id: 6,
        image: CONTOS_2,
        title: "Contos - Volume 2",
        author: "Ernest Hemingway",
        genre: "Literário",
        rating: "Usado",
        seller: "Afonso",
    },
    {
        id: 7,
        image: CONTOS_3,
        title: "Contos - Volume 3",
        author: "Ernest Hemingway",
        genre: "Literário",
        rating: "Usado",
        seller: "Afonso",
    },
    {
        id: 8,
        image: MACBETH,
        title: "MACBETH",
        author: "William Shakespeare",
        genre: "Literário",
        rating: "Usado",
        seller: "Afonso",
    },
    {
        id: 9,
        image: MADAMI_BOVARY,
        title: "Madami Bonary",
        author: "Flaubert",
        genre: "Literário",
        rating: "Usado",
        seller: "Afonso",
    },
    {
        id: 10,
        image: O_FIO_DA_NAVALHA,
        title: "O Fio da Navalha",
        author: "W. Somerset Maugham",
        genre: "Literário",
        rating: "Usado",
        seller: "Afonso",
    },
    {
        id: 11,
        image: O_LEOPARDO,
        title: "O Leopardo",
        author: "Giuseppe Tomasi di Lampedusa",
        genre: "Literário",
        rating: "Usado",
        seller: "Afonso",
    },
    {
        id: 12,
        image: ROMEU_E_JULIETA,
        title: "Romeu e Julieta",
        author: "William Shakespeare",
        genre: "Literário",
        rating: "Usado",
        seller: "Afonso",
    },
    {
        id: 13,
        image: VENTOS_UIVANTES,
        title: "O Morro dos Ventos Uivantes",
        author: "Emily Brontë",
        genre: "Literário",
        rating: "Usado",
        seller: "Afonso",
    },
    {
        id: 14,
        image: COMO_SER_UM_CONSERVADOR,
        title: "Como ser um conservador",
        author: "Roger Scruton",
        genre: "Não Literário",
        rating: "Usado",
        seller: "Afonso",
    },
    {
        id: 15,
        image: ENSINANDO_INTELIGENCIA,
        title: "Ensinando Inteligência",
        author: "Pierluigi Piazzi",
        genre: "Não Literário",
        rating: "Usado",
        seller: "Afonso",
    },
    {
        id: 16,
        image: ESTIMULANDO_INTELIGENCIA,
        title: "Estimulando Inteligência",
        author: "Pierluigi Piazzi",
        genre: "Não Literário",
        rating: "Usado",
        seller: "Afonso",
    },
    {
        id: 17,
        image: FE_E_LIBERDADE,
        title: "Fé e Liberdade",
        author: "Alejandro A. Chafuen",
        genre: "Não Literário",
        rating: "Usado",
        seller: "Afonso",
    },
    {
        id: 18,
        image: FILOSOFIA_DO_DIREITO,
        title: "Filosofia do Direito",
        author: "Paulo Dourado de Gusmão",
        genre: "Não Literário",
        rating: "Usado",
        seller: "Afonso",
    },
    {
        id: 19,
        image: METODOLOGIA_DA_ECONOMIA,
        title: "Metodologia da Economia",
        author: "Mark Blaug",
        genre: "Não Literário",
        rating: "Usado",
        seller: "Afonso",
    },
    {
        id: 20,
        image: MISBEHAVING,
        title: "MISBEHAVING",
        author: "Richard H. Thaler",
        genre: "Não Literário",
        rating: "Usado",
        seller: "Afonso",
    },
    {
        id: 21,
        image: NOVA_ORDEM,
        title: "A Nova Ordem Internacional e a 3ª Revolução Industrial",
        author: "",
        genre: "Não Literário",
        rating: "Usado",
        seller: "Afonso",
    },
    {
        id: 22,
        image: O_BRASIL_NA_FITA,
        title: "O Brasil na Fita",
        author: "Ricardo Molina",
        genre: "Não Literário",
        rating: "Usado",
        seller: "Afonso",
    },
    {
        id: 23,
        image: O_TEMPO_E_EU,
        title: "O Tempo e Eu",
        author: "Luís da Câmara Cascudo",
        genre: "Não Literário",
        rating: "Usado",
        seller: "Afonso",
    },
    {
        id: 24,
        image: TEORIA_E_POLITICA,
        title: "Teoria e política do desenvolvimento econômico",
        author: "Celso Furtado",
        genre: "Não Literário",
        rating: "Usado",
        seller: "Afonso",
    },
    
]