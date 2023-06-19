const users = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_USER':
            return []
            break;
        case 'ADD_USER':
            const _id = Date.now().toString()
            return [
                ...state,
                {
                    _id: action._id,
                    name: action.name,
                    phone: action.phone,
                    sent: true
                }
            ]
            break;
    
        default:
            return state
            break;
    }
}

export default users
