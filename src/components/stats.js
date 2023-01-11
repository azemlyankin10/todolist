import { el, setChildren } from "redom"
import { getElementsFromStorage } from "./functions/api"

export const statList = el('ul.list-group.list-group-horizontal')

export const updateStat = () => {
  const storage = getElementsFromStorage()
  const important = storage.filter(a => a.importanted)
  const completed = storage.filter(a => a.completed)
  let left = storage.length - completed.length
  left < 0 ? left = 0 : left

  setChildren(statList, [
    el('li.list-group-item', `left: ${left}`),
    el('li.list-group-item', `important: ${important.length}`),
    el('li.list-group-item', `completed: ${completed.length}`),
    el('li.list-group-item', `all: ${storage.length}`),
  ])
}

updateStat()