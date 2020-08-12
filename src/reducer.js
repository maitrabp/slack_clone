export const initialState = {
    user: null,
};

export const actionTypes = {
    SET_USER: "SET_USER",
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type){
        case actionTypes.SET_USER: /*when we get an action of this type, we want to return a current state, and also modify the user and make it so that it's action.user*/
            return {
                ...state,
                user: action.user
            };
            default: 
                return state; /*if we havent account for a specific action, return the state*/   
    }
};

export default reducer;