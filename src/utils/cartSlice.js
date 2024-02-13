import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //vanlina(older)Redux=> DONT MUTATE STATE,returning is mandatory
      //const  newState = [...state];
      //newState.items.push(action.payload)
      //return newState
      //mutating the state here

      //reduxToolkit uses immer bts
      //We have to mutate the state

      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      //console.log(current(state));
      //state.items.length = 0; //state=[]

      //RTK -either Mutate the existing state or return a new state
      return { items: [] }; //this new object will be replaced inside orignalState=[] ,it will modify the orignal value/state and pass this thing
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
