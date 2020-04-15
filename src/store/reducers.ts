const initialState = {
  visible: false,
  num: 10
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'show':
      return { ...state, visible: true }
    case 'close':
      return { ...state, visible: false }
    case 'add':
      return { ...state, num: state.num + 1 }
    default:
      return { ...state }
  }
}

export default reducer
