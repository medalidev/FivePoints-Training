for (let i=0; i<10; i++){
    console.log(i);
}

let j=0;
while(j<10){
    console.log(j);
    j++;
}

let k=0;
do{
    console.log(k);
    k++;
}while(k<10)

let p=0;
while(p<10){
    if(p==5){
        p++;
        continue;
    }
    console.log(p);
    p++;
}

let t=0;
while(t<10){
    if(t==5){
        break;
    }
    console.log(t);
    t++;
}