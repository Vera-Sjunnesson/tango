export const SINGLE_EVENT_URL = (id) => {
  return process.env.REACT_APP_EVENTLIST_URL ? `${process.env.REACT_APP_EVENTLIST_URL}/${id}` : undefined;
};