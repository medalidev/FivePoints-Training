let scht=0;
let T1=[5,8,9,6,5,7,1,5]
let T2=[8,6,9,1,5]
for(let i=0; i<T1.length; i++){
    for(let j=0; j<T2.length; j++){
        scht=scht+T1[i]+T2[j]
    }
}
console.log(scht);