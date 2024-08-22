const length = document.getElementById('length');
const upper = document.getElementById('uppercase');
const lower = document.getElementById('lowercase');
const number = document.getElementById('numbers');
const symbol = document.getElementById('symbols');

function generate(){
    let checked_length = 0;
    let arr1=[upper,lower, number,symbol];
    arr1.map((item)=> item.checked && (checked_length += 1));

    if (length.value > 20) {
        alert("Password Length must be less than 20")
    } else if (checked_length < 2) {
        alert("Please checked atleast two fields")
    }
    else{
        let result = '';
        let characters = '';
        const arr2 = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz','0123456789','!@#$%^&*()'];

        for (let i = 0; i < 4; i++) {
            if (arr1[i].checked) {
                characters+=arr2[i];
            }
        }   
        let counter = 0;
        while (counter < length.value) {
          result += characters.charAt(Math.floor(Math.random() * characters.length));
          counter += 1;
        }
        document.getElementById('password').value = result;
    }
}

function copyClip() {
    let password_value = document.getElementById('password').value;
    const coped = document.getElementById('coped');
    if (password_value.length > 0) {
        window.navigator.clipboard.writeText(password_value);
        coped.innerHTML='You Have Copied'+' '+password_value;
        // alert('coped text value is:' + " " + password_value);
        coped.className='show';
        setTimeout(()=>{coped.className=coped.className.replace('show','');},3000);
    }
}

// document.addEventListener('click',function (e) {
//     console.log(e.pageX);
//     console.log(e.pageY);
//     console.log(e.target.offsetLeft);
//     console.log(e.target.offsetTop);
    
    
// });


const buttons = document.querySelectorAll('button');

buttons.forEach(btn =>{
    btn.addEventListener('click',function(e){
        const x = e.pageX;
        const y = e.pageY;
        
        // const btnleft = e.target.offsetLeft;
        // const btntop = e.target.offsetTop;
        
        // const xIndex = x - btnleft; 
        // const yIndex = y - btntop;

        // console.log(x);
        // console.log(y);
        
        // console.log(xIndex);
        // console.log(yIndex);
        
        
         // const circle = document.createElement('span');
        // circle.classList.add('circle');
        // circle.style.top=
        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;

        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';
        // circle.style.width = e.target.offsetWidth/2 + 'px'
        // circle.style.height = e.target.offsetHeight/2 + 'px'
// console.log(e.target.offsetHeight, e.target.offsetWidth);


        this.appendChild(circle);

        setTimeout(() => circle.remove(), 1000);
    })
})