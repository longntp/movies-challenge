import axios from 'axios';
import { debounce } from 'lodash';

const apiKey = 'ee412a3a';

export const updateSearchTerm = text => {
  return dispatch => {
    dispatch({ type: "UPDATE_SEARCH_TERM", payload: text })
  }
}

export const clearMoviesList = () => {
  return {
    type: 'CLEAR_MOVIES_LIST'
  }
}

const debounceLoadMore = debounce((page, searchTerm, dispatch) => {
  axios.get("https://www.omdbapi.com/", {
    params: {
      type: 'movie',
      s: searchTerm,
      apiKey,
      page
    }
  }).then((response) => {
    const { data } = response;
    if (!data.Error) {
      dispatch({ type: "GET_MOVIES", payload: data.Search });
      dispatch({ type: "UPDATE_PAGE_INDEX", payload: page })
    }
  })
}, 200);

export const loadMoreMovies = () => {
  return (dispatch, getState) => {
    const { page, searchTerm } = getState();
    debounceLoadMore(page + 1, searchTerm, dispatch);
  }
}

export const getMovies = () => {
  return (dispatch, getState) => {
    const { searchTerm } = getState();
    axios.get("https://www.omdbapi.com/", {
      params: {
        type: 'movie',
        s: searchTerm,
        apiKey,
        page: 1
      }
    }).then(({ data }) => {
      dispatch({ type: "GET_MOVIES", payload: data.Search })
    })
  }
}

export const getDetailMovie = id => {
  return dispatch => {
    axios.get("https://www.omdbapi.com/", {
      params: {
        type: 'movie',
        apiKey,
        i: id
      }
    }).then((response) => {
      const { data } = response;
      dispatch({ type: "GET_DETAIL_MOVIE", payload: data })
    })
  }
}

export const clearDetailState = () => {
  return {
    type: "CLEAR_DETAIL_PAGE"
  }
}