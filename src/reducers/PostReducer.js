/**
 * post reducer
 */
import  {ADD_POST, VIEW_POST} from "../actions/types";

const INITIAL_STATE = {
    posts: [{
        title: '',
        description : '',
        imageUrl : ''
    }]
};

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
        case ADD_POST:
            return { ...state };
        case VIEW_POST:
            return { ...state  };
    }

    return state;
}
