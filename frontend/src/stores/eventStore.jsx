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
        set({ eventList: data }); 
      }
    } catch (error) {
      set({ errorMessage: 'Failed to get event list'}); 
    } finally {
      setTimeout(() => set({ loading: false }), 500);
    }
  },
  filterEvents: async (category) => {
    set((state) => ({
      ...state,
      eventList: state.eventList.filter((eventItem) => eventItem.type === category),
    }));
  },
  filterAndLimitEvents: async (category, eventIdToRemove) => {
    set((state) => {
      const filteredEvents = state.eventList.filter((eventItem) => eventItem.type === category);
      
      const filteredEventsWithoutCurrent = filteredEvents.filter((eventItem) => eventItem.id !== eventIdToRemove);
      
      const limitedEvents = filteredEventsWithoutCurrent.slice(0, 5);
      return {
        ...state,
        eventList: limitedEvents,
      };
    });
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
        set({ eventItem: data });
      }
    } catch (error) {
      set({ errorMessage: 'Failed to get event details' });
    } finally {
      set({ loading: false });
    }
  }
}));

export default useEventStore;
