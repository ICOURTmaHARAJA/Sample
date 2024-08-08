function valid()
{
    c1=document.getElementsByClassName("skills");
    er=document.getElementById("er1");
    cot=0;
    for(i=0;i<c1.length;i++)
    {
        if(c1[i].checked==true)
        {
        cot=cot+1;
        }
    }
    if(cot<2)
    {
        er.innerHTML="Please select atleast two";
        return false;
    }
    else
    {
        er.innerHTML="";
    }
    G=document.getElementsByName("gender");
    er1=document.getElementById("er2");
    if(G[0].checked==false && G[1].checked==false)
    {
        er1.innerText="Please choose your gender";
        return false;
    }
    else
    {
        er1.innerText="";
    }
    v2=document.getElementById("sel");
    e3=document.getElementById("er3");
    sel=v2.selectedIndex;
    if(sel==0)
    {
        e3.innerText="Please select your deparment";
        return false;
    }
    else
    {
        e3.innerText="";
    }
    v3=document.getElementById("pin");
    e4=document.getElementById("er4");
    chck=/^[0-9]{6}$/;
    if(chck.test(v3.value)==false)
    {
        e4.innerHTML="it contain only six digits";
        return false;
    }
    else{
        e4.innerHTML="";
    }
    v6=document.getElementById("da");
    er7=document.getElementById("er7");
    if(v6.value=="")
    {
        er7.innerHTML="Select your DOB";
        return false;
    }
    else
    {
        er7.innerHTML="";
    }
    v4=document.getElementById("aa");
    e5=document.getElementById("er5");
    chck=/^[0-9]{12}$/;
    if(chck.test(v4.value)==false)
    {
        e5.innerHTML="it contain only Twelve digits";
        return false;
    }
    else{
        e5.innerHTML="";
    }
    v5=document.getElementById("pa");
    e6=document.getElementById("er6");
    chc=/^[A-Z]{5}[0-9]{4}[A-Z]{5}$/;
    if(chc.test(v5.value)==false)
    {
        e6.innerHTML="incorrect id";
        return false;
    }
    else{
        e6.innerHTML="";
    }
}

//Its working
