// input: Enter no. of series: 5
// output: 0+1+1+2+3 = 7
num=+prompt("enter a number:")
a=0,b=1,sum=0,res=""
for(i=1;i<=num;i++){
    if(i!=num){
        res+=a+"+"
    }
    else{
        res+=a+"="
    }
    sum+=a
    c=a+b
    a=b
    b=c
}
console.log(res+sum)



// WAP to print the sum of fib in the given number
// input: Enter a number: 4311
// output: 5

num=prompt("enter a number:")
sum=0
for(i of num){
    a=0,b=1
    while(a<i){
        c=a+b;
        a=b;
        b=c;
        if(a==i){
            sum+=Number(i);
            break;
        }
    }
}
console.log(sum)

//roman

num=prompt("enter roman here:")
i=0,sum=0
roman={
    "I":1,"V":5,"X":10,"C":100,"L":50,"D":500,"M":1000}
    while(i<num.length){
        x=num[i]
        y=num[i+1]
    if(i!=num.length-1){
        if(roman[x]>=roman[y]){
            sum=sum+roman[x]
        }
        else{
            sum+=roman[y]-roman[x]
            i++
        }
    }
    else{
        sum+=roman[x]
    }
    i++
    }
    console.log(sum)

