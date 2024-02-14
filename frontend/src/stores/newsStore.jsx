import { create } from 'zustand';
import { SINGLE_NEWS_ITEM_URL } from '../utils/urls';

const useNewsStore = create((set) => ({
  newsList: [],
  newsItem: {},
  errorMessage: null,
  loading: false,
  getNewsList: async () => {
    try {
      set({ loading: true });
      const news_url = process.env.REACT_APP_NEWS_LIST_URL;
      if (!news_url) {
        throw new Error('Failed to fetch news list');
      } else {
        const response = await fetch(news_url);
        const data = await response.json();
        set({ newsList: data });
      }
    } catch (error) {
      set({ errorMessage: 'Failed to get news list' });
    } finally {
      set({ loading: false });
    }
  },
  getNewsItem: async (id) => {
    try {
      set({ loading: true });
      if (id === undefined) {
        throw new Error('News item ID is undefined');
      }
      const news_item_url = SINGLE_NEWS_ITEM_URL(id);
      if (!news_item_url) {
        throw new Error('Failed to fetch event details');
      } else {
        const response = await fetch(news_item_url);
        const data = await response.json();
        set({ newsItem: data });
      }
    } catch (error) {
      set({ errorMessage: 'Failed to get news item details' });
    } finally {
      set({ loading: false });
    }
  }
}));

export default useNewsStore;
