export const getBackgroundAndSymbol = (type) => {
  switch (type) {
    case 'milonga':
      return ['#ef9d4d', 'M'];
    case 'practica':
      return ['#edc343', 'P'];
    case 'class':
      return ['#80b3bb', 'C'];
    case 'festival':
      return ['#eea484', 'F'];
    default:
      return ['#fef0c8', 'A'];
  }
};