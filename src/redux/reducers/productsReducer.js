const initialState = {
    products: [],
    name: "Product Listing",
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            return {
                ...state,
                products: [...state.products, action.product],
            };

        default:
            return state;
    }
};

export default productsReducer;
