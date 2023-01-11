import { el, mount } from "redom"
import { getElementsFromStorage } from "./functions/api"
import { createListElement } from "./listElement"

export const importantList = el('ul.list-group.my-2')

export const createImportantList = () => {
  importantList.innerHTML = ""
  const tasks = getElementsFromStorage()
  tasks.filter(element => element.importanted).forEach(element => {
    const li = createListElement(element, false)
    
    mount(importantList, li)
  })
}

createImportantList()
