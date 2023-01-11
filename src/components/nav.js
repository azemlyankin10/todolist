import { el } from "redom";
import { statList } from "./stats";

export const NavBar = el('nav.navbar.bg-info.mb-5.py-1', 
  el('.container-fluid', 
    [
      el('span.navbar-brand.mb-0.fs-2', 'Todolist'),
      statList
    ]  
  )
)