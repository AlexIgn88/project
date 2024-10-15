import { v4 as uuidv4 } from "uuid";

export default (store) => (next) => (action) => {
  const { generateId, ...rest } = action;
  if (!generateId) {
    next(rest);
  } else {
    const { payload } = action;
    const { id, ...restPayload } = payload;
    next({
      ...rest,
      payload: {
        ...restPayload,
        id: uuidv4(),
      },
    });
  }
};
