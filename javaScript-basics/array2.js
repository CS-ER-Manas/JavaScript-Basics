const marvel_heros=["thor","ironman","captain America"]
const dc_heros=["flash","superMan","BatMan"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros[3]);

const newArr=marvel_heros.concat(dc_heros)
// console.log(newArr);

const newAotherArray=[...marvel_heros,...dc_heros]
// console.log(newAotherArray);

const NumberContainingArray=[1,2,[2,3,4],5,6,[7,8,[9,10]]]

// console.log(NumberContainingArray.flat(Infinity));
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));
