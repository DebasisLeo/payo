document.getElementsByTagName('html')[0].setAttribute('data-theme','light')

document.getElementById('ci').addEventListener('click',function(event)
{
    event.preventDefault();
    
    let amount=document.getElementById('amo').value;
    let exp=document.getElementById('va').innerText;
    if (document.getElementById('pi').value==='1234') {
        let amount=document.getElementById('amo').value;
        let exp=document.getElementById('va').innerText;
let sum=parseFloat(amount)+parseFloat(exp);
document.getElementById('va').innerText=sum;
document.getElementById('amo').value="";
    }
    else
    {
        alert('wrong pin');
    }
})


