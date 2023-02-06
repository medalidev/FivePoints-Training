function nom(d: string, b: string, c: string): string{
    let ch:string;
    if ((d.charCodeAt(0))<(b.charCodeAt(0)) && (b.charCodeAt(0))<(c.charCodeAt(0))){
        ch="rangés dans l'ordre alphabétique";
    }else 
    ch="non rangés dans l'ordre alphabétique";
    return(ch)
}
let d= String (prompt('nom 1'))
let b= String (prompt('nom 2'))
let c= String (prompt('nom 3'))
alert(nom(d,b,c))