export const logger = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};

export const featuring = (store) => (next) => (actionInfo) => {
  const featured = [
    {
      name: 'Fedevs',
    },
    ...actionInfo.action.payload,
  ];
  const newAction = {
    ...actionInfo,
    action: { ...actionInfo.action, payload: featured },
  };
  next(newAction);
};
