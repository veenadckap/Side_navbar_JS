
let div = document.createElement("div");
div.id = 'error'


let div1 = document.createElement("div")
div1.id = 'error1'

let div2 = document.createElement("div")
div2.id = 'error2'

let h = document.createElement("h3")
h.innerText = 'Page not found'
h.id = 'head'
div2.append(h)
div1.append(div2)
div.append(div1)
document.body.append(div)

let p = document.createElement("p")
p.id = 'para'
p.innerText = "Looks like you've followed a broken link or entered a URL that doesn't exist on this site"
div2.appendChild(p)

let nav = document.createElement("a")
nav.id = 'anchor'
nav.setAttribute("href", "http://127.0.0.1:5501/index.html")
nav.innerText = "< Back to our site"
div2.appendChild(nav)
let row = document.createElement("hr")
div2.append(row)
row.className = 'line'

let p1 = document.createElement("p")
p1.id = 'para1'
p1.innerHTML = "if this is your site,and you weren't expecting a 404 for this path,please visit Netlify's<span>'page not found'support guide</span> for troubleshooting tips"
div2.append(p1)

function change(){
  let  g=document.getElementById("error")
       g.style.display='block'
}