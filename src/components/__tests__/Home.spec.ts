import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import HomeComponent from '@/components/HomeComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import CardItem from '@/components/CardItem.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import { createI18n } from 'vue-i18n';
import { fetchBooks } from '@/api/book';
import type { BookCollection } from '@/logic/types/books';

vi.mock('@/api/book', () => ({
  fetchBooks: vi.fn<() => Promise<BookCollection[]>>().mockResolvedValue([
    {
      id: 1,
      img: "https://raw.githubusercontent.com/rayanmarcus/books-fake-api/refs/heads/main/livros/1.jpg",
      title: "A Cultura do Jejum",
      author: "Luciano Subirá",
      page_count: 272,
      language: "Português",
      publisher: "Hagnos",
      publication_date: new Date("2022-06-01"),
      genre: "Religião",
      return_period: "15 dias",
      price: 49.90
    },
    {
      id: 2,
      img: "https://raw.githubusercontent.com/rayanmarcus/books-fake-api/refs/heads/main/livros/2.jpg",
      title: "O Agir Invisível de Deus",
      author: "Luciano Subirá",
      page_count: 187,
      language: "Português",
      publisher: "Orvalho",
      publication_date: new Date("2015-12-21"),
      genre: "Religião",
      return_period: "15 dias",
      price: 39.90
    },
    {
      id: 10,
      img: "https://raw.githubusercontent.com/rayanmarcus/books-fake-api/refs/heads/main/livros/10.jpg",
      title: "O Padrão Bitcoin",
      author: "Saifedean Ammous",
      page_count: 304,
      language: "Português",
      publisher: "LVM Editora",
      publication_date: new Date("2018-03-20"),
      genre: "Criptomoeda",
      return_period: "25 dias",
      price: 59.90
    },
    {
      id: 11,
      img: "https://raw.githubusercontent.com/rayanmarcus/books-fake-api/refs/heads/main/livros/11.jpg",
      title: "Bitcoin: A Moeda na Era Digital",
      author: "Fernando Ulrich",
      page_count: 256,
      language: "Português",
      publisher: "LVM Editora",
      publication_date: new Date("2014-11-01"),
      genre: "Criptomoeda",
      return_period: "25 dias",
      price: 49.90
    }
  ])
}));

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  messages: {
    en: {
      myRentBook: 'My Rent Book',
    },
  },
});

describe('HomeComponent', () => {
  it('should render loading image while books are being loaded', async () => {
    (fetchBooks as vi.Mock).mockResolvedValueOnce([]);

    const wrapper = mount(HomeComponent, {
      global: {
        plugins: [i18n],
      },
    });

    const loadingImage = wrapper.find('img[alt="Imagem de carregando"]');
    expect(loadingImage.exists()).toBe(true);
  });

  it('should render CardItem component with books data when loading is complete', async () => {
    const mockBooksData: BookCollection[] = [
      {
        id: 10,
        img: "https://raw.githubusercontent.com/rayanmarcus/books-fake-api/refs/heads/main/livros/10.jpg",
        title: "O Padrão Bitcoin",
        author: "Saifedean Ammous",
        page_count: 304,
        language: "Português",
        publisher: "LVM Editora",
        publication_date: new Date("2018-03-20"),
        genre: "Criptomoeda",
        return_period: "25 dias",
        price: 59.90
      },
      {
        id: 11,
        img: "https://raw.githubusercontent.com/rayanmarcus/books-fake-api/refs/heads/main/livros/11.jpg",
        title: "Bitcoin: A Moeda na Era Digital",
        author: "Fernando Ulrich",
        page_count: 256,
        language: "Português",
        publisher: "LVM Editora",
        publication_date: new Date("2014-11-01"),
        genre: "Criptomoeda",
        return_period: "25 dias",
        price: 49.90
      }
    ];
    (fetchBooks as vi.Mock).mockResolvedValueOnce(mockBooksData);

    const wrapper = mount(HomeComponent, {
      global: {
        plugins: [i18n],
      },
    });

    await wrapper.vm.$nextTick();

    const cardItemComponent = wrapper.findComponent(CardItem);
    expect(cardItemComponent.exists()).toBe(true);

    await wrapper.vm.$nextTick();
    expect(cardItemComponent.props('books')).toEqual(mockBooksData);
  });

  it('should render HeaderComponent and FooterComponent', () => {
    const wrapper = mount(HomeComponent, {
      global: {
        plugins: [i18n],
      },
    });

    const headerComponent = wrapper.findComponent(HeaderComponent);
    const footerComponent = wrapper.findComponent(FooterComponent);

    expect(headerComponent.exists()).toBe(true);
    expect(footerComponent.exists()).toBe(true);
  });
});
