import { v4 as uuidv4 } from "uuid";
import { selectUsers } from "../selectors";

export default (store) => (next) => (action) => {
  const { provideUserId, ...rest } = action;
  if (!provideUserId) {
    next(rest);
  } else {
    const { payload } = action;
    const { userId, userName, ...restPayload } = payload;

    const user = selectUsers(store.getState())[userId];
    next({
      ...rest,
      payload: {
        ...restPayload,
        userId: user ? user.id : uuidv4(),
        userName: user ? user.name : userName,
      },
    });
  }
};
