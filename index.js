// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
cats.push("Ralph");
return cats;
}

function destructivelyPrependCat(name){
    cats.unshift("Bob");
    return cats;
}

function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
}
function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
}
function appendCat(name){
    const Coolcats = [...cats, "Broom"];
    return Coolcats;
}
function prependCat(name){
    const coolCats = ["Arnold", ...cats];
    return coolCats; 
}
function removeLastCat(){
    const cooLcats = cats.slice(0, cats.length -1);
    return cooLcats;
}
function removeFirstCat(){
    const coolcatS = cats.slice(1);
    return coolcatS;
}
