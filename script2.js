let secretno=document.querySelector('.secretno')
let hint=document.querySelector('.hint')
let btn = document.querySelector('.check')
var count =0;

num=Math.trunc(Math.random()*25)+1
console.log(num)

secretno.textContent=num
console.log(secretno);


btn.onclick = function () {

    function showhint(start,end){
        hint.textContent=`between ${start} and ${end}`
    }

    count++;
    document.querySelector('.clicks').textContent=`${count} click`

    if(count==2){

        if(num<=10){
            let start = Math.trunc(Math.random()*num)+1;
            let end = start+14;
            showhint(start,end)
        }
        else if(num<=15 && num>10){
            // let diff = (num+15)-25;
            // let s = num-diff;
            let start =  Math.trunc(Math.random()*10)+1;
            let end= start+14;
            showhint(start,end)
        }
        else{
            // let diff = (num+15)-25
            // let s = num-diff
            let diff2= (num-15)+1
            const start = Math.floor(Math.random() * (11 - diff2+1 )) + diff2;
            let end= start+14; 
            showhint(start,end)
        }
        
    }
    else if(count==3){
        if(num<=10){
            start = Math.trunc(Math.random()*num)+1;
            end = start+9;
            showhint(start,end)

        }
        else if(num<=15 && num>=11){
            diff = (num-10)+1
            start = Math.trunc(Math.random()*diff)+1;
            end= start+9
            showhint(start,end)

        }
        else{
            diff = (num-10)+1
            // max =15 min=diff
            start= Math.floor(Math.random() * (15 - diff + 1)) + diff;
            end=start+9
            showhint(start,end)



        }
    }
    else if(count==4){
        if(num<=5 && num>=1){
            start= start = Math.trunc(Math.random()*num)+1;
            end=start+4
            showhint(start,end)
        }
        else if(num<=10 && num>=6){
            diff = (num-5)+1;
            start= Math.floor(Math.random() * (num - diff + 1)) + diff;
            end=start+4;
            showhint(start,end)

        }
        else if(num<=15 && num>=11){
            diff = (num-5)+1;
            start= Math.floor(Math.random() * (num - diff + 1)) + diff;
            end=start+4;
            showhint(start,end)

        }
        else if(num<=20 && num>=16){
            diff = (num-5)+1;
            start= Math.floor(Math.random() * (num - diff + 1)) + diff;
            end=start+4;
            showhint(start,end)

        }
        else{
            diff = (num-5)+1;
            start= Math.floor(Math.random() * (21 - diff + 1)) + diff;  
            end=start+4;
            showhint(start,end)
        }
    }


}









