function reducer(state = {rooms:[]}, action) {
    switch (action.type) {
        case "GETTVALUE":
            return {
                rooms: ''
            };

        case '' :
            return {
                rooms: action.value,

            }
    }
    console.log(action.value);
    return state;
}

module.exports = reducer;