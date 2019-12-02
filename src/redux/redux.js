import { combineReducers, createStore } from 'redux';

// actions.js
export const addToCart = product => ({
 type: 'ADD_TO_CART',
 product,
});

export const deleteFromCart = product => ({
  type: 'DELETE_FROM_CART',
  product,
});



// reducers.js
export const productReducer = (state = { 
  products: [],
  //user: []
}, action) => {
  console.log(action);


 switch (action.type) {
   case 'ADD_TO_CART':
     state.products.push(action.product);
     return state;
  case 'DELETE_FROM_CART':
    console.log(action)
     const cardId = action.product._id;
     console.log(cardId)
     let lol = state.products.filter(card => {
       console.log(card.id)
       return card._id !== cardId
      })
     console.log(lol)
     state.products = lol
     return state;
     
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