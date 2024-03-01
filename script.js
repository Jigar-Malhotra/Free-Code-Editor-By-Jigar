
let txt = document.querySelectorAll(".txt")
let iframe = document.getElementsByTagName("iframe")[0]
let run = document.querySelector("#run")
let reset = document.querySelector("#reset")

function produce() {
    let html = txt[0].value;
    let css = txt[1].value;
    let js = txt[2].value;

    iframe.contentDocument.body.innerHTML = html;
    iframe.contentDocument.head.innerHTML = `<style>${css}</style>`
    iframe.contentWindow.eval(`${js}`);
}

run.addEventListener("click", () => {
   produce();
})

reset.addEventListener("click", () => {
    txt.forEach(e => {
        e.value = ""
        produce();
    })
})
