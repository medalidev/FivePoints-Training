let a= Number(prompt("donner un réel"))
let n: Number
do{
     n= Number(prompt("donner un entier positif "));
}while(n<0);
let puiss=1
for(let j=0; j<n; j++){
puiss=puiss*a
}
console.log(puiss);
alert(puiss);

