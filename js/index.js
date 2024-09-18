document.getElementsByTagName('html')[0].setAttribute('data-theme','light')
document.getElementById('log').addEventListener('click',function(event)
{
    event.preventDefault();
   
    if (document.getElementById('i-2').value==='1234') {
       window.location.href='/home.html';

    }
    else
    {
        alert('wrong email or pin');
    }
})