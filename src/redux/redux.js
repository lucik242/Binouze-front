import { combineReducers, createStore } from 'redux';

// actions.js
export const addToCart = product => ({
 type: 'ADD_TO_CART',
 product,
});

//export const getCart = () => ({
//type: 'GET_CART'
//});


// export const closeGeod = () => ({
//  type: 'CLOSE_GEOD',
// });

// reducers.js
export const productReducer = (state = { 
  products: [],
  //user: []
}, action) => {
//  const newState = Object.assign({
//   products: []
//  }, state);

 switch (action.type) {
   case 'ADD_TO_CART':
     state.products.push(action.product);
     return state;
    //case 'GET_CART':
      //return state
    // return {lol: action.product};
   // case 'CLOSE_GEOD':
   //  return {};
   default:
     return state;
 }};

export const reducers = combineReducers({
 productReducer,
});

// store.js
export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
 return store;
}

export const store = configureStore();