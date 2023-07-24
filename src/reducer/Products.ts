import { produce } from "immer";
const initialState = {
    products: [],
    loading: false,
    error: ""
} as { products: any[], loading: boolean, error: string };
export const productReducer = (state = initialState, action: any) => {
    return produce(state, state => {
        switch (action.type) {
            case "product/fetching":
                state.loading = true;
                break;
            case "product/fetchingSuccess":
                state.products = action.payload;
                state.loading = false
                break;
            case "product/fetchingFailed":
                state.error = action.payload;
                break;
            case "product/fetchingFinally":
                state.loading = false;
                break;
            
            case "product/addProduct":
                state.products.push(action.payload);
                break;
            case "product/updateProduct":
                const product = action.payload;
                
                state.products = state.products.map((item: any) => item.id === product.id ? product : item);
                break;
            case "product/deleteProduct":
                const id = action.payload;
                state.products = state.products.filter((item: any) => item.id !== id);
                break;
            default:
                return state;
        }
    })

}