import { createContext } from "react";

export const globalContextInit = {
  loginState: false,
};

interface StateType {
  loginState: boolean;
}

type ActionType = { type: "login" } | { type: "logout"; results: string };

export const globalReducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case "login":
      return { loginState: true };
    case "logout":
      return { loginState: false };
    default:
      throw new Error();
  }
};

export const GlobalContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
}>({
  state: globalContextInit,
  dispatch: () => undefined,
});