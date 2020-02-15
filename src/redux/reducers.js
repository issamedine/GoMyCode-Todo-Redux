import { ADD, DELETE, COMPLETE } from './actionType'

const reminders = (state = [], action) => {
    
    if (action.type === ADD){
        state = [ ...state, {text: action.text, isComplete:false, id: Math.random()} ];
        return state;
    } 
    
    else if (action.type === DELETE){
        state = state.filter(remind => remind.id !== action.id);
        return state;
    }
    
    else if (action.type === COMPLETE) {
        state = state.map(el=> el.id === action.id ?{...el, isComplete: !el.isComplete}: el);
        return state;
    }
    else {
        return state;
    }
    
}

export default reminders


