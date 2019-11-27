const ADD_TO_CART = 'ADD_TO_CART'
const DELETE_FROM_CART = 'DELETE_FROM_CART'
const DELETE_ALL_FROM_CART = 'DELETE_ALL_FROM_CART'


function addToCart(dispatch, item) {
 dispatch({
  type: ADD_TO_CART,
  item: item
 });
}

// module.export =  addToCart

module.exports = {
 addToCart: addToCart
};

// export const deleteFromCart = item => ({
//  type: DELETE_FROM_CART,
//  item
// });

// export const deleteALlFromCart = item => ({
//  type: DELETE_ALL_FROM_CART,
//  item
// });