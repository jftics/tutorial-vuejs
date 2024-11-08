

export const sesionSetService= (key, value)=>{
    sessionStorage.setItem(key, value)
}
export const sesionGetService= (key)=>{
    sessionStorage.getItem(key)
}
