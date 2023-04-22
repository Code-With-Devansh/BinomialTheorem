let a = document.getElementById('a')
let b = document.getElementById('b')
let power = document.getElementById('power')
let Expand = document.getElementById('Expand')
let result = document.getElementById('result')

const coeffient = (n, r)=>{
    let fac = (n)=>{
        let f = 1
        for(let i = 1; i<=n; i++){
            f*=i
        }
        return f
    }
    let s = 1
    for(let i = 0; i<r; i++){
        s*=(n-i)
    }
    return s/fac(r)
}
const expand = (power)=>{
    let res = []
    for (let r = 0; r <= power; r++) {
        let c = coeffient(power, r) 
        let a = power-r
        let b = r
        res.push({c, a, b})
    }
    return res
}
class num{
    constructor(c, pa, pb, a, b){
        this.c = c
        this.p = {
            a:pa,
            b:pb
        }
        this.v ={
            a:a,
            b:b
        }
    }
}
const superscript = (x)=>{
    return `<span class="text-base absolute pt-0">${x}</span>`
}
Expand.addEventListener('click', ()=>{
    let powers = expand(Number.parseInt(power.value))
    let res = powers.map((val)=>{
        return new num(val.c, val.a, val.b, a.value, b.value)
    })
    result.classList.remove('hidden')
    str = ''
    for(let i = 0; i<res.length; i++){
        let val = res[i]
        str += (val.c == 1?"":val.c)
        str+= (val.p.a == 0?"":val.v.a)
        str+=(val.p.a>1?superscript(val.p.a)+"&nbsp;&nbsp;":'')
        str+= (val.p.b == 0?"":val.v.b)
        str+=(val.p.b>1?superscript(val.p.b)+"&nbsp;&nbsp;":'')
        str+=(i+1==res.length?"":'+')
    }
    result.innerHTML = str
})