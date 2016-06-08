export default {
  core:(state = {counter: 1}, action) => {
          switch(action.type){
            case 'ADD': return {
              ...state ,
              counter: state.counter+1,
          }
            default: return state
          }
        }
}
