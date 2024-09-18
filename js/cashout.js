document.getElementById('co').addEventListener('click',function(event)
{
    event.preventDefault();
 

    
 
    if (document.getElementById('piu').value==='1234') {
        let amount=document.getElementById('amou').value;
        let exp=document.getElementById('va').innerText;
        
let sum=parseFloat(exp)-parseFloat(amount);
document.getElementById('va').innerText=sum;
document.getElementById('amou').value="";
    }
    else
    {
        alert('wrong pin');
    }
})