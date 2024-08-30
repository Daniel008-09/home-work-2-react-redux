const ADD_CAR = 'ADD_CAR';
const INCREMENT_NUM = 'INCREMENT_NUM';
const DECREMENT_NUM = 'DECREMENT_NUM';
const INCREMENT_NUM_BY_5 = 'INCREMENT_NUM_BY_5';
const DECREMENT_NUM_BY_5 = 'DECREMENT_NUM_BY_5';

const initState = {
    num: 0,
    cars: [
        {
            model: "BMW",
            year: 2017
        },
        {
            model: "Honda",
            year: 2015
        },
        {
            model: "Audi",
            year: 2010
        },
        {
            model: "Toyota",
            year: 2020
        },
        {
            model: "Mercedes",
            year: 2016
        }
    ]
};

export default (state = initState, action) => {
    switch (action.type) {
        case ADD_CAR: {
            return {
                cars: [
                    action.newCar,
                    ...state.cars
                ],
                ...state
            };
        }

        case INCREMENT_NUM: {
            return {
                ...state,
                num: Math.min(state.num + 1, 15)
            };
        }

        case DECREMENT_NUM: {
            return {
                ...state,
                num: Math.max(state.num - 1, 0)
            };
        }

        case INCREMENT_NUM_BY_5: {
            return {
                ...state,
                num: Math.min(state.num + 5, 15)
            };
        }

        case DECREMENT_NUM_BY_5: {
            return {
                ...state,
                num: Math.max(state.num - 5, 0)
            };
        }

        default:
            return state;
    }
};

// Action Creators
export const addCar = () => {
    return (dispatch) => {
        dispatch({
            type: ADD_CAR,
            newCar: {
                model: 'Nissan GTR R35',
                year: 2015,
            }
        });
    };
};

export const incrementNum = () => {
    return (dispatch) => {
        dispatch({ type: INCREMENT_NUM });
    };
};

export const decrementNum = () => {
    return (dispatch) => {
        dispatch({ type: DECREMENT_NUM });
    };
};

// New action creators for +5 and -5
export const incrementNumBy5 = () => {
    return (dispatch) => {
        dispatch({ type: INCREMENT_NUM_BY_5 });
    };
};

export const decrementNumBy5 = () => {
    return (dispatch) => {
        dispatch({ type: DECREMENT_NUM_BY_5 });
    };
};
