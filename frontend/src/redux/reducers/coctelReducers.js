const initialState = {
    cocteles: [],
    success: true,
  };
  
  const coctelReducer = (state = initialState, action) => {
    switch (action.type) {
      case "LOAD_DRINK":
        return {
          ...state,
          cocteles: action.payload,
        };
        default:
          return state;
    }
  };
  export default coctelReducer;