function reducer(state = {value: ''}, action) {
    switch (action.type) {
        case "GETTVALUE":
            return {
                value: action.value
            };

        case "GETABLEROOMS" :
            return {
                value: action.value
            }
    }

    return state;
}

module.exports = reducer;