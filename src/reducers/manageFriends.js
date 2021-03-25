const initialState = {
    friends: []
}

export function manageFriends(state = initialState, action){
    switch(action.type) {
        case  'ADD_FRIEND':
            let newFriend = action.friend
            return {
                friends: [...state.friends, newFriend]
            }
        case 'REMOVE_FRIEND':
            let oldFriendIndex = state.friends.findIndex(friend => friend.id === action.id)

            return {
                friends: [...state.friends.slice(0, oldFriendIndex), ...state.friends.slice(oldFriendIndex + 1)]
            }
        default:
            return state; 
    }
}
