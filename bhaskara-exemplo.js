function dividir(num, den) {
    return num / den;
}

function bhaskara (a,b,c,callbackDividir) { 
    const x=b*(-1)+Math.sqrt(b**2-4*a*c) 
    const total = callbackDividir (x,(2*a)) 
    return total 
} 

const total = bhaskara(1, -5, 6, dividir); 

console.log("O resultado é: "+ total) 
  