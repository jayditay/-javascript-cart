a = 0;
pizza.onclick = () => {
    a =a +300;

}
BERGER.onclick = () => {
    a = a+200;

}
MOMOS.onclick = () => {
    a = a+190;

}
DAHIBADHE.onclick = () => {
    a = a + 90;

}
bill.onclick = () => {
    p.innerHTML="bill is "+a;


    
}
select.onchange=function(){
    c =select.value;
    

}
select.onclick= () => {
    if(c=='5%')
    {
        d=(5/100)*a;
    }
    if(c=='7.5%')
    {
        d=(7.5/100)*a;
    }
    if(c=='10%')
    {
        d=(10/100)*a;
    }
    b=a+d;
    p2.innerHTML="tax is"+d;
    p3.innerHTML="net price is "+b;
     
}

