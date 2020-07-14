function reducer(state = 'moren', action){
    switch(action.type){
        case 'getAname':
            return 'ANAME';
            break;
        case 'getBname':
            return 'BNAME';
            break;
        default :
            return state
    }
}

export default reducer