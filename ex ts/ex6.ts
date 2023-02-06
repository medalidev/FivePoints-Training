function intervalle(s:number):string{
    let ch:string;
    if (s<=3 && s>=1){
        ch="dans l'intervalle"
    }else 
    ch="n'est pas dans l'intervalle"
    return(ch)
}
let s= Number (prompt("un nombre"))
alert(intervalle(s))