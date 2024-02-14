export const SINGLE_EVENT_URL = (id) => {
  return process.env.REACT_APP_SINGLE_EVENT_URL ? `${process.env.REACT_APP_SINGLE_EVENT_URL}/${id}` : undefined;
};

export const SINGLE_NEWS_ITEM_URL = (id) => {
  return process.env.REACT_APP_SINGLE_NEWS_ITEM_URL ? `${process.env.REACT_APP_SINGLE_NEWS_ITEM_URL}/${id}` : undefined;
};

export const SINGLE_VENUE_ITEM_URL = (id) => {
  return process.env.REACT_APP_SINGLE_VENUE_URL ? `${process.env.REACT_APP_SINGLE_VENUE_URL}/${id}` : undefined;
};