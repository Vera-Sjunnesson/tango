export const SINGLE_EVENT_URL = (id) => {
  return process.env.REACT_APP_SINGLE_EVENT_URL ? `${process.env.REACT_APP_SINGLE_EVENT_URL}/${id}` : undefined;
};

export const SINGLE_NEWS_ITEM_URL = (id) => {
  return process.env.REACT_APP_NEWS_LIST_URL ? `${process.env.REACT_APP_NEWS_LIST_URL}/${id}` : undefined;
};