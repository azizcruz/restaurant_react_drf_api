import reducers from "./../store/reducers"

// test if data is coming to the reducer.
test('reducers', () => {
  let state;
  state = reducers({data:[],isLoading:true}, {type:'ADD_DATA',fetched_data:[{id:41,name:'Soup',price:'1.00',is_available:false},{id:42,name:'Chicken',price:'3.99',is_available:true},{id:43,name:'Meat',price:'4.66',is_available:true},{id:44,name:'Cake',price:'2.67',is_available:true},{id:45,name:'Pasta',price:'3.10',is_available:false},{id:46,name:'Pizza',price:'3.50',is_available:true}],isLoading:false});
  expect(state).toEqual({data:[{id:41,name:'Soup',price:'1.00',is_available:false},{id:42,name:'Chicken',price:'3.99',is_available:true},{id:43,name:'Meat',price:'4.66',is_available:true},{id:44,name:'Cake',price:'2.67',is_available:true},{id:45,name:'Pasta',price:'3.10',is_available:false},{id:46,name:'Pizza',price:'3.50',is_available:true}],isLoading:false});
});