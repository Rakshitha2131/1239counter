let a = document.getElementById("num")
function decre()
{
    
    let previous = a.textContent;
    let updated = parseInt(previous)-1; 
    if(updated<0)
    {
        a.style.color = "red";
    }
    else if(updated>0)
    {
        a.style.color = "green";
    }
    else 
    {
        a.style.color = "black";
    }
    a.textContent = updated;

}
function incre()
{
    
    let previous = a.textContent;
    let updated = parseInt(previous)+1; 
    if(updated<0)
    {
        a.style.color = "red";
    }
    else if(updated>0)
    {
        a.style.color = "green";
    }
    else 
    {
        a.style.color = "black";
    }
    a.textContent = updated;

}
function reset()
{
    a.textContent = 0;
    a.style.color = "black";
}