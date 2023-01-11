import { el, mount } from "redom"
import { getElementsFromStorage } from "./functions/api"
import { createListElement } from "./listElement"

export const mainList = el('ul.list-group.col-md-7')

export const createList = () => {
  mainList.innerHTML = ""
  const tasks = getElementsFromStorage()
  tasks.forEach(element => {
    const li = createListElement(element)
    
    mount(mainList, li)
  })
}

createList()
