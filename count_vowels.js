function countVowels(string){
    let count=0;
    for(let c of string){
        if(c=='a'|| c=='e'|| c=='i'||c=='o'|| c=='u'|| c=='A'||c=='E'||c=='I'|| c=='O' ||c=='U'){
            console.log(c);
            count++;
        }
    }
    console.log(count);
}
let string=countVowels("HIMANSHU");