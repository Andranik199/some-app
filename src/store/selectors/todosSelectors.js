import { createSelector } from "@reduxjs/toolkit";

const TodosSelector = (store) => store.todos

export const selectAllTodos = createSelector(TodosSelector, (state) => state.items)
export const selectTodosIsPending = createSelector(TodosSelector, state => state.isPending)