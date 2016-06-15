import { START_DISCOVERY, STOP_DISCOVERY, DISCOVERY_FAILURE, START_CONNECT, CONNECT_SUCCESS,
              CONNECT_FAILURE, DISCONNECT, START_MEASURE, MEASURE_DONE } from '../constants/bpCircle';

const initialState = {
  status: 'disconnect',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START_DISCOVERY:
      return {
        ...state,
        status: 'searching',
      };
    case DISCOVERY_FAILURE:
      return {
        ...state,
        status: 'search_failure',
      };
    case STOP_DISCOVERY:
      return {
        ...state,
        status: 'disconnect',
      };
    case START_CONNECT:
      return {
        ...state,
        status: 'connecting',
      };
    case CONNECT_SUCCESS:
      return {
        ...state,
        status: 'ready',
        device: action.device
      };
    case CONNECT_FAILURE:
      return {
        ...state,
        status: 'connect_failure',
      };
    case DISCONNECT:
      return {
        ...state,
        status: 'disconnect'
      };
    case START_MEASURE:
      return {
        ...state,
        status: 'measuring',
        measureValue: action.measureValue
      };
    case MEASURE_DONE:
      return {
        ...state,
        status: 'measureDone',
        measureValue: action.measureValue
      }
    default:
      return state;
  }
}
