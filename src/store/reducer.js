
function reducer(state={name:'wenming'}, action) {
  switch (action.type) {
    case 'getAname':
      return Object.assign({}, state, { aname: 'amy' });;
    case 'getBname':
      return 'BNAME';
    default:
      return state
  }
}

export default reducer