var unfollow = "global";
var final = "global";
var link =[];
var proWindow = [];
proWindow.length=0;
link.length=1;
var ids = document.querySelectorAll('.-utLf');
for(let i=0;ids.length;i++){
    link.push('https://www.instagram.com/'+ids[i].innerText);
    console.log(link[i]);
    proWindow[i]= window.open(link[i],'_blank')
}


for(let i=0;i<ids.length;i++){
    unfollow = proWindow[i].document.querySelector('button._8A5w5');
    unfollow.click();
    final = proWindow[i].document.querySelector('.a001W');
    final.click();
}
