import { ADD, DELETE, COMPLETE } from "./actionType";

export const add = (text) => {
  const action = {
    type: ADD,
    text: text
  }
  console.log('Add', action)
  return action
}

export const deleted = (id) => {
  const action = {
    type: DELETE,
    id: id
  }
  console.log('deleted', action)
  return action
}

export const complete = (id) => {
  const action = {
    type: COMPLETE,
    id
  }
  console.log('deleted', action)
  return action
}