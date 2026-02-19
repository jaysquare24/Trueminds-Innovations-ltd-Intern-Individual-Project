
export const initialState = {
   items:[],
   totalAmount: 0
};


export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":{

          const existingItem = state.items.find(item => item.id === action.payload.id)

          let updatedItems;

          if(existingItem){
                updatedItems = state.items.map(item => item.id === action.payload.id
                    ? {...item, quantity: item.quantity + action.payload.quantity}
                    : item
                );
            }
            else{
                updatedItems = [...state.items, {...action.payload}];
            }
                
          const updatedTotal = updatedItems.reduce((sum, item) => sum + item.price*item.quantity, 0);

          return {
            items: updatedItems,
            totalAmount: updatedTotal
          };
        }

        case "REMOVE_FROM_CART":{
            const updatedItems = state.items.filter(item => item.id !== action.payload.id);
            
            const updatedTotal = updatedItems.reduce((sum, item) => sum + item.price*item.quantity, 0);

            return {
                items : updatedItems,
                totalAmount: updatedTotal
            }
        }

        case "INCREMENT":{
            const updatedItems = state.items.map((item) =>
                item.id === action.payload
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );

            const updatedTotal = updatedItems.reduce(
                (total, item) => total + item.price * item.quantity,
                0
            );

            return {
                items: updatedItems,
                totalAmount: updatedTotal
            };
        }

        case "DECREMENT": {
            const updatedItems = state.items
                .map((item) =>
                item.id === action.payload
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
                )
                .filter((item) => item.quantity > 0
            );

            const updatedTotal = updatedItems.reduce(
                (total, item) => total + item.price * item.quantity,
                0
            );

            return {
                items: updatedItems,
                totalAmount: updatedTotal
            };
        }

        case "CLEAR_CART":
        return initialState;

        default:
        return state;
    
    };
};