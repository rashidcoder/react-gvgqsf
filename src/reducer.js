export const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.data];
    default:
      break;
  }
};
