export const formatDate = (inputDate) => {
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };
  const date = new Date(inputDate);
  const formattedDate = date.toLocaleDateString('sv-SE', options);
  const [weekday, day, month] = formattedDate.split(' ');
  return `${weekday}, ${day} ${month}`;
};

export const formatTime = (inputDate) => {
  const options = {
    hour: 'numeric',
    minute: 'numeric'
  };
  const date = new Date(inputDate);
  const formattedTime = date.toLocaleTimeString('sv-SE', options);
  const [hour, minutes] = formattedTime.split(':');
  return `${hour}:${minutes}`;
};