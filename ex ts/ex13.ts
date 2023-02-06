function plusgrands(){
    let T : number[]=[]
    T[0]= Number(prompt("entrer le nombre numéro 0"));
    let i=0
    while (T[i]!=0){
        i++;
        T[i] =Number(prompt("entrer le nombre numéro "+ i));
    }
    let max = T[0]
    let pos = 0
    
        for(let i=1; i<T.length; i++){
    
            if (T[i]>max){
                max=T[i] 
                pos=i
            } 
        }
        console.log(T);
        
        alert("le plus grand de ces nombres est "+max)
        console.log("le plus grand de ces nombres est "+max)
        alert("C'était le nombre numéro "+pos)
        console.log("C'était le nombre numéro "+pos)
    }
    plusgrands()
     