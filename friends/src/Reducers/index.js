import 

const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    friendsSaved: false,
    savingFriends: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    friends: [],
    error: null
};

export const friendReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_FRIENDS:
            return {...state, fetchingFriends: true};
        default: 
            return state;
    }
};