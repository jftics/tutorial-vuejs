

export const vHighlight3 = {
    mounted: (el)=>{
        el.style.background = "cyan"
    }
}

export function highlight(el, bindings){
    console.log("...",bindings)
    el.style.background=bindings.value.color

}