import { create } from 'zustand';
import { SINGLE_EVENT_URL } from '../utils/urls';

const useEventStore = create((set) => ({
  eventList: [],
  eventItem: {},
  errorMessage: null,
  loading: false,
  getEvents: async () => {
    try {
      set({ loading: true }); 
      const event_url = process.env.REACT_APP_EVENTLIST_URL;
      if (!event_url) {
        throw new Error('Failed to fetch event list');
      } else {
        const response = await fetch(event_url);
        const data = await response.json();
        set({ eventList: data, loading: false }); 
      }
    } catch (error) {
      set({ errorMessage: 'Failed to get event list', loading: false }); 
    }
  },
  getEventItem: async (id) => {
    try {
      set({ loading: true });
      if (id === undefined) {
        throw new Error('Event ID is undefined');
      }
      const event_item_url = SINGLE_EVENT_URL(id);
      if (!event_item_url) {
        throw new Error('Failed to fetch event details');
      } else {
        const response = await fetch(event_item_url);
        const data = await response.json();
        set({ eventItem: data, loading: false });
      }
    } catch (error) {
      set({ errorMessage: 'Failed to get event details', loading: false });
    }
  }
}));

export default useEventStore;
