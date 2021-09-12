const initialState = {
  movies: [],
  searchTerm: '',
  page: 1
}

export default (state = initialState, action) => {
  switch(action.type) {
    case "FAKE_GET_MOVIES":
      return {
        ...state,
        movies: ["just a joke"]
      };
    case "GET_MOVIES":
      return {
        ...state,
        movies: [...state.movies, ...action.payload]
      }
    case "UPDATE_SEARCH_TERM":
      return {
        ...state,
        searchTerm: action.payload
      }
    case "UPDATE_PAGE_INDEX":
      return {
        ...state,
        page: action.payload
      }
    case "CLEAR_MOVIES_LIST":
      return {
        ...state,
        movies: []
      }
    default:
      return state
    }
}