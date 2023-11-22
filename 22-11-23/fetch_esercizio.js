import products from "./mock.json" assert { type: "json"};

//Esercizio 1 dato il mock di partenza, stampa in console la lista dei prodotti;
console.log(products.productsList);


//Esercizio 2 dato il mock di partenza, stampa in console il terzo oggetto della lista dei prodotti, cioé le cuffie...
const thirdItem = products.productsList.filter((item, index) => index ===2);
console.log(thirdItem[0]);

//Esercizio 3 dato il mock di partenza, stampa in consolela lista dei prodotti che costano meno di 200 euro
const itemLess200Euro = products.productsList.filter(products => products.price < 200);
if (itemLess200Euro.length > 0){
    console.log(itemLess200Euro);
}
else {
    console.log("Non ci sono prodotto a meno di 200€")
}


//Esercizio 4 dato il mock di partenza, stampa in console il prodotto con id 8, (ATTENZIONE:come oggetto non come lista)
const itemsIdEight = products.productsList.filter(products => products.id === 8);
console.log(itemsIdEight);

//Esercizio 5 dato il mock di partenza, stampa in console solo i nomi dei prodotti presenti nel mock
const itemName = products.productsList.map(products => products.name);
console.log(itemName);