import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    myRentBook: 'My Rented Book',
    by: 'by',
    numberOfPages: "Number of pages",
    language: "Language",
    publisher: "Publisher",
    publicationDate: "Publication date",
    genre: "Genre",
    returnDeadline: "Return deadline",
    damagePolicy: "Any damage to the book during the rental period will incur a fine",
    rentBook: "Rent book",
    bookImage: "Book image",
    almostThere: "...Almost there",
    socialNetworks: "Social networks",
    back: "Back",
    bookRentedSuccess: "Book rented successfully"
  },
  pt: {
    myRentBook: 'Meu Livro Alugado',
    by: 'por',
    numberOfPages: "Número de páginas",
    language: "Idioma",
    publisher: "Editora",
    publicationDate: "Data de publicação",
    genre: "Gênero",
    returnDeadline: "Prazo para devolução",
    damagePolicy: "Qualquer dano ao livro durante o período de locação será cobrado uma multa",
    rentBook: "Alugar livro",
    bookImage: "Imagem do livro",
    almostThere: "...Falta pouco",
    socialNetworks: "Redes sociais",
    back: "Voltar",
    bookRentedSuccess: "Livro alugado com sucesso"
  },
};

const i18n = createI18n({
  legacy: false,
  locale: 'pt-br',
  fallbackLocale: 'en',
  messages,
});

export default i18n;
