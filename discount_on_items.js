let price=[250,645,300,900,50];
let newprice=[];
let discount=0.1;
for(let i=0;i<price.length;i++){
   newprice[i]=price[i]-(price[i]*discount);
    console.log(`New Price ${newprice[i]}`);
}