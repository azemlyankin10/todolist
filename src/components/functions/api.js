import { nanoid } from "nanoid"

const KEY = 'tasks'

export const addToStorage = (text) => {
  try {
    const task = {
      id: nanoid(),
      text,
      completed: false,
      importanted: false,
      time: Date()
    }
    const storage = JSON.parse(localStorage.getItem(KEY))
    storage 
    ? localStorage.setItem(KEY, JSON.stringify(storage.concat(task)))
    : localStorage.setItem(KEY, JSON.stringify([task]))
    
    return task
  } catch (error) {
    console.log(error)
  }
} 

export const getElementsFromStorage = () => {
  try {
    return localStorage.getItem(KEY) ? JSON.parse(localStorage.getItem(KEY)) : [];
  } catch (error) {
    console.log(error)
  }
}

export const changeElementInStorage = (id, type) => {
  try {
    const storage = JSON.parse(localStorage.getItem(KEY))
    const element = storage.find(el => el.id === id)
    element[type] = !element[type]
    localStorage.setItem(KEY, JSON.stringify(storage))
    return true
  } catch (error) {
    console.log(error)
  }
}

export const deleteElementInStorage = (id) => {
  try {
    const storage = JSON.parse(localStorage.getItem(KEY))
    const newStorage = storage.filter(el => el.id !== id)
    localStorage.setItem(KEY, JSON.stringify(newStorage))
    return true
  } catch (error) {
    console.log(error)
  }
}