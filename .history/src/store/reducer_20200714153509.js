

function reducer(state = 'moren', action){
    switch(action.type){
        case 'getAname':
            return 'ANAME';
        case 'getBname':
            return 'BNAME';
        default :
            return state
    }
}

export default reducer