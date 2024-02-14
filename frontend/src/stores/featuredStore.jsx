import { create } from 'zustand';
import FeaturedImg1 from '../assets/images/R00_6554_d.jpg'
import FeaturedImg2 from '../assets/images/S02_4517_c_d_BW.png'
import FeaturedImg3 from '../assets/images/C05_0020_d.jpg'

const useFeaturedStore = create((set) => ({
  featuredList: [],
  errorMessage: null,
  loading: false,
  getFeaturedList: async () => {
    try {
      set({ loading: true }); // Set loading to true before fetching
      const featured_url = process.env.REACT_APP_FEATURED_LIST_URL;
      if (!featured_url) {
        throw new Error('Failed to fetch featured list');
      } else {
        const response = await fetch(featured_url);
        const data = await response.json();

        const images = [
          FeaturedImg1,
          FeaturedImg2,
          FeaturedImg3,
          FeaturedImg1,
          FeaturedImg2,
          FeaturedImg3
        ];
        const combinedDataWithImages = data.map((item, index) => {
          return {
            ...item,
            image: images[index % images.length]
          };
        });

        set({ featuredList: combinedDataWithImages }); 
      }
    } catch (error) {
      set({ errorMessage: 'Failed to get featured list' });
    } finally {
      setTimeout(() => set({ loading: false }), 700);
    }
  }
}));

export default useFeaturedStore;
