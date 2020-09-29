export const addTodoAction = todo => ({
        type : "ADD_TODO",
        payload : todo
})

export const toggleTodoaction = todoId => ({
    type : "TOGGLE_TODO",
    payload : todoId
})

export const deleteTodoaction = todoId => ({
    type : "DELETE_TODO",
    payload : todoId
})

const intialState = {todos: [], todoIds: []}

const todoReducer = (state = intialState, action) => {
    switch(action.type){
        case "ADD_TODO":
            return{...state, todos: [...state.todos, action.payload]}

        case "TOGGLE_TODO":
            return{...state, todoIds: [...state.todoIds, action.payload]}

        case "DELETE_TODO":
            return{...state, todoIds: [...state.todoIds, action.payload]}

        default:
            return state
    }

}

export default todoReducer