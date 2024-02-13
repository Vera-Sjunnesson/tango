import { create } from 'zustand';

const useEventStore = create((set) => ({
  eventList: null,
  errorMessage: null,
  loading: false,
  getEvents: async () => {
    try {
      set({ loading: true }); // Set loading to true before fetching
      const event_url = process.env.REACT_APP_EVENTLIST_URL;
      if (!event_url) {
        throw new Error('Failed to fetch event list');
      } else {
        const response = await fetch(event_url);
        const data = await response.json();
        set({ eventList: data, loading: false }); // Set loading to false after fetching
      }
    } catch (error) {
      set({ errorMessage: 'Failed to get event list', loading: false }); // Set loading to false on error
    }
  }
}));

export default useEventStore;
