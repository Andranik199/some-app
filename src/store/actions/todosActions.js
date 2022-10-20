import { setIsPending, setTodos  } from '../reducers/todos'

const delay = (timeout) => {
    return new Promise((res) => {
        setTimeout(() => res(), timeout)
    })
}
export const getTodos = () => async (dispatch) => {
    dispatch(setIsPending(true))
    await delay(5000)
    const todos = JSON.parse(localStorage.getItem('todos')) || []
    dispatch(setTodos(todos))
    dispatch(setIsPending(false))
}