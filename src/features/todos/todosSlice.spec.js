import todosReducer from "./todosSlice";

test('Toggles a todo based on todo id', () => {
    const initialState = [{id: 0, text: 'test todo', completed: false}]
    
    const action = { type: 'todos/todoToggled', payload: 0}
    const result = todosReducer(state, action)
    expect(result[0].completed).toBe(true)
})