document.getElementById('cin').addEventListener('click',function()
{
    document.getElementById('div-1').classList.remove('hidden');
    document.getElementById('div-2').classList.add('hidden');

})
document.getElementById('cout').addEventListener('click',function()
{
    document.getElementById('div-1').classList.add('hidden');
    document.getElementById('div-2').classList.remove('hidden');

})