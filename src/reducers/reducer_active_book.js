//State argument is not applicable state, only the state
//this reducer is responsible for
export default function(state=null, action) {
  switch(action.type) {
    case 'BBOK_SELECTED':
     return action.payload;
  }
  return state;
}
