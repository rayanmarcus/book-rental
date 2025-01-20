import axiosInstance from '@/logic/services/axios';
import type { BookCollection } from '@/logic/types/books';

export const fetchBooks = async (): Promise<BookCollection[]> => {
  try {
    const response = await axiosInstance.get('');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar livros:', error);
    throw error;
  }
};
