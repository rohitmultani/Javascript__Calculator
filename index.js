// sessionStorage("num");
let w=0;
let q,total,s2;
total=null;
sessionStorage.num=0;
sessionStorage.num1=0;
sessionStorage.operator=null;
function pr0()
{
    
    sessionStorage.num+=0;
    sessionStorage.num1+=0;
    q=sessionStorage.num;
    document.getElementById("display").innerHTML=q;
    // add();
    // w+=q;
}
function pr1()
{
    
    sessionStorage.num+=1;
    sessionStorage.num1+=1;
    q=sessionStorage.num;
    document.getElementById("display").innerHTML=q;
    // add();
   
}
function pr2()
{ 
    sessionStorage.num+=2;
    sessionStorage.num1+=2;
    q=sessionStorage.num;
document.getElementById("display").innerHTML=q;
// add();
}
function pr3()
{
    
    sessionStorage.num+=3;
    sessionStorage.num1+=3;
    q=sessionStorage.num;
    document.getElementById("display").innerHTML=q;
    // add();
}
function pr4()
{
    
    sessionStorage.num+=4;
    sessionStorage.num1+=4;
    q=sessionStorage.num;
    document.getElementById("display").innerHTML=q;
    // add();
}
function pr5()
{
    
    sessionStorage.num+=5;
    sessionStorage.num1+=5;
    q=sessionStorage.num;
    document.getElementById("display").innerHTML=q;
    // add();
}
function pr6()
{
    
    sessionStorage.num+=6;
    sessionStorage.num1+=6;
    q=sessionStorage.num;
    document.getElementById("display").innerHTML=q;
    // add();
}
function pr7()
{
    
    sessionStorage.num+=7;
    sessionStorage.num1+=7;
    q=sessionStorage.num;
    document.getElementById("display").innerHTML=q;
    // add();
}
function pr8()
{
    
    sessionStorage.num+=8;
    sessionStorage.num1+=8;
    q=sessionStorage.num;
    document.getElementById("display").innerHTML=q;
    // add();
}
function pr9()
{
    
    sessionStorage.num+=9;
    sessionStorage.num1+=9;
    q=sessionStorage.num;
    document.getElementById("display").innerHTML=q;
    // add();
}
function prdot()
{s2=sessionStorage.num1;
    
    if(q.endsWith("-")||q.endsWith("÷")||q.endsWith("*")||q.endsWith("%")){

    sessionStorage.num+="0.";
    sessionStorage.num1+="0.";
    q=sessionStorage.num;
    document.getElementById("display").innerHTML=q;
    }
   
    
  else  if(s2.includes(".")==1){
    
        window.alert("Invalid Format");
    }

    else{
        sessionStorage.num+=".";
        sessionStorage.num1+=".";
    q=sessionStorage.num;
    document.getElementById("display").innerHTML=q;
    }
}
function prpi()

{  
    
    sessionStorage.operator="+";
      if (total==null)
    {
        total=0;
    }
    num2=Number(sessionStorage.num1)
    total+=num2;

    if(q.endsWith("-")||q.endsWith("÷")||q.endsWith("*"))
    {
        last=q.length;
        
       qsub= q.substring(0,last-1);
        qsub+="+";
        q=qsub;
        sessionStorage.num=q;
        document.getElementById("display").innerHTML=q;
    }
    else if (q.endsWith("+"))
    {
        
        document.getElementById("display").innerHTML=q
    }
    else{
    sessionStorage.num+="+";
    q=sessionStorage.num;
    document.getElementById("display").innerHTML=q;
}
sessionStorage.num1=0;
}

function prmi()
{
    sessionStorage.operator="-";
    if (total==null)
    {
        total=0;
    }
    num2=Number(sessionStorage.num1)

     if(q.includes("-"))
     { 
    total=(total+num2);}
   else
   {
       total=Math.abs(total-num2);

   }
    if(q.endsWith("+")||q.endsWith("÷")||q.endsWith("*"))
    {
        last=q.length;
        
       qsub= q.substring(0,last-1);
        qsub+="-";
        q=qsub;
        sessionStorage.num=q;
        document.getElementById("display").innerHTML=q;
    }
    else if (q.endsWith("-"))
    {
        document.getElementById("display").innerHTML=q
    }
    else{
        sessionStorage.num+="-";
        sessionStorage.num1+="-";
        q=sessionStorage.num;
    document.getElementById("display").innerHTML=q;
    }
    sessionStorage.num1=0;
}

function prm()
{
    sessionStorage.operator="*";
    if(q.includes("%"))
    {
    total=total;
    }
     else if(total==null)
    {
    console.log("hi")
        multi=1;
        num2=Number(sessionStorage.num1)
        multi*=num2;
        total=multi;
    }
  else{
    num2=Number(sessionStorage.num1)
    total*=num2;
    console.log(total);

  }

    
  
    if(q.endsWith("-")||q.endsWith("÷")||q.endsWith("+"))
    {
        last=q.length;
        
       qsub= q.substring(0,last-1);
        qsub+="*";
        q=qsub;
        sessionStorage.num=q;
        document.getElementById("display").innerHTML=q;
    }
    else if (q.endsWith("*"))
    {
        document.getElementById("display").innerHTML=q
    }
    else{
    sessionStorage.num+="*";
    q=sessionStorage.num;
    document.getElementById("display").innerHTML=q;
    }
    sessionStorage.num1=0;
}

function prd()
{
    sessionStorage.operator="÷";
    if(total==null)
    {
    console.log("hi")
        multi=1;
        num2=Number(sessionStorage.num1)
        multi=num2/multi;
        total=multi;
    }
    else{
        num2=Number(sessionStorage.num1)
        total/=num2;
    
      }
    
  
    
    if(q.endsWith("-")||q.endsWith("+")||q.endsWith("*"))
    {
        last=q.length;
        
       qsub= q.substring(0,last-1);
        qsub+="÷";
        q=qsub;
        sessionStorage.num=q;
        document.getElementById("display").innerHTML=q;
    }
    else if (q.endsWith("÷"))
    {
        window.alert("not")
        document.getElementById("display").innerHTML=q
    }
    else{
    sessionStorage.num+="÷  ";
    q=sessionStorage.num;
    document.getElementById("display").innerHTML=q;
    }
    sessionStorage.num1=0;
}
function prpe()
{
    sessionStorage.operator="%";
    if(total==null)
    {
    
        
        num2=Number(sessionStorage.num1)
        
        total=num2*0.01
    }
    else{
        num2=Number(sessionStorage.num1)
        total=total*0.01;
      }
      document.getElementById("displayTotal").innerHTML=total;
    if(q.endsWith("-")||q.endsWith("÷")||q.endsWith("*")||q.endsWith("%"))
    {
        window.alert("Invalid format");
    }
    else{
    sessionStorage.num+="% ";
    q=sessionStorage.num;
    document.getElementById("display").innerHTML=q;
    }
}
function back()
{
    last=q.length;
        
       qsub= q.substring(0,last-1);
        q=qsub;
        sessionStorage.num=q;
        document.getElementById("display").innerHTML=q;
        last=sessionStorage.num1.length;
        
       qsub= sessionStorage.num1.substring(0,last-1);
        sessionStorage.num1=qsub;
        
        
}

function prc()
{
    
    document.getElementById("display").innerHTML="";
    z=  document.getElementById("display").innerHTML;
    
    sessionStorage.num=0;
    sessionStorage.num1=0;
    sessionStorage.operator=null;
    w=0;
    total=null;
    document.getElementById("displayTotal").innerHTML="";
}
function change()
{
    if(q.endsWith("-")||q.endsWith("÷")||q.endsWith("*")||q.endsWith("%"))
    {
    sessionStorage.num+="(-"
    q=sessionStorage.num;
    document.getElementById("display").innerHTML=q;
    }
    else  if (q.includes("(-"))
{    test=q.length;
    console.log(q[test-1])
       qrep=q.replace("(-"," ");
        q=qrep;
        sessionStorage.num= q;
        document.getElementById("display").innerHTML=q;

    }
    else { 
            qadd="(-" + q;
            q=qadd;
            sessionStorage.num=q;
            document.getElementById("display").innerHTML=q;
    }
    
        
}

function add()
{
    //addition
    switch(sessionStorage.operator)
    {
case "+":
    num2=Number(sessionStorage.num1)
    total=total + num2;
    sessionStorage.num1=0;
    
    document.getElementById("displayTotal").innerHTML=total;
    document.getElementById("display").innerHTML=q;
   sessionStorage.num=total;
break;
case "-":
    // substraction
    num2=Number(sessionStorage.num1)
    total=total-num2;
    sessionStorage.num1=0;
    document.getElementById("displayTotal").innerHTML=total;
    sessionStorage.num=total;
    break;
case "*":
    //multiply;
    num2=Number(sessionStorage.num1);
    total*=num2;
    sessionStorage.num1=1;
    document.getElementById("displayTotal").innerHTML=total;
    sessionStorage.num=total;
break;
case "÷":
    //division
     num2=Number(sessionStorage.num1);
    total=total/num2;
    sessionStorage.num1=1;
    document.getElementById("displayTotal").innerHTML=total;
    sessionStorage.num=total;
    break;

    }
}
function hist()
{
    element=document.createElement('div')
    text=document.createTextNode('hello');
    element.innerHTML=`<div> lorem</div> `
    old=document.getElementsByClassName("i2");
    outer=document.getElementById("outer");
    extra=document.getElementById("extra");
    console.log(old)
    outer.replaceChild(extra,old);
}