import { NETWORK_ACTIVITY_COMPLETETD, NETWORK_ACTIVITY_STARTED } from "./Types";

interface IActivityState {
  inProgress: boolean;
  list: string[];
}

const initialState: IActivityState = { inProgress: false, list: [] };

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case NETWORK_ACTIVITY_STARTED: {
      const newState = { ...state, list: [...state.list, action.key] };
      return {
        ...state,
        ...newState,
        inProgress: !!newState.list.length,
      };
    }
    case NETWORK_ACTIVITY_COMPLETETD: {
      const newState = {
        ...state,
        list: state.list.filter((apiKey: string) => apiKey !== action.key),
      };
      return {
        ...state,
        ...newState,
        inProgress: !!newState.list.length,
      };
    }
    default: {
      return state;
    }
  }
}
