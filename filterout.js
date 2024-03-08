//we creating an array full of student marks and we filtering out student with 90+ marks
let marks=[78,79,99,76,89,96,94,90,34,68];
let arr=[];
let end=0;
     function i(values){ 
        if(values>=90){
           arr[end]=values;
           end++;
        }
    }
marks.forEach(i);
console.log(`The filtered out array is ${arr}`);
console.log(arr);

