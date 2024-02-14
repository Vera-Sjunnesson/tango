import { create } from 'zustand';
import { SINGLE_VENUE_ITEM_URL } from '../utils/urls';

const useVenueStore = create((set) => ({
  venueItem: {},
  errorMessage: null,
  loading: false,
  getVenueItem: async (venueid) => {
    try {
      set({ loading: true });
      if (venueid === undefined) {
        throw new Error('Venue item ID is undefined');
      }
      const venue_item_url = SINGLE_VENUE_ITEM_URL(venueid);
      if (!venue_item_url) {
        throw new Error('Failed to fetch venue details');
      } else {
        const response = await fetch(venue_item_url);
        const data = await response.json();
        set({ venueItem: data });
      }
    } catch (error) {
      set({ errorMessage: error });
    } finally {
      set({ loading: false });
    }
  }
}));

export default useVenueStore;
