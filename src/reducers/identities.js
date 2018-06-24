const identities = (state = [], action) => {
    switch (action.type) {
        case 'CHANGE_IDENTITY':
            return [ -1 ]
        default:
            return [0,1,2]
    }
}
export default identities;