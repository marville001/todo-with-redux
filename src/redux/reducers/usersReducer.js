
const initialState = {
    users: [],
}

const usersReducer = (state = initialState, action)=>{
    switch (action.type) {
        case "LOAD_USER":
            return {...state, users: [{id:1}]}
        default:
            return {...state}
    }

}


export default  usersReducer;