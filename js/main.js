const btn = document.querySelectorAll('button');
const screen = document.querySelector('.calculation-section')
let screenValue="";
btn.forEach(el=>{
    el.addEventListener('click',(e)=>{
        console.log(e.target.value);
        // if(e.target.value=='clear'){
        //     screen.value='';
        // }else{
        //     screen.value+=e.target.value;
        // }
        let buttonValue = e.target.value;

        switch(buttonValue){
            case "clear":
                screenValue="";
                screen.value=screenValue;
                break;
            case "backSlash":
                screenValue = screenValue.slice(0,-1);
                screen.value = screenValue;
                break;
            case "=":
                screen.value = eval(screenValue);
                screenValue = '';
                break;
            default:
                if(isNaN(+(buttonValue)) && isNaN(+(screenValue))){
                    if(isNaN(screenValue.slice(-1))){
                        return;
                    }
                }
                screenValue+=buttonValue;
                screen.value=screenValue;
        }
    })
})


// case "=":
//                 screenValue = eval(screenValue);
//                 screen.value = screenValue??"";
//                 break;
//             default:
//                 if(screenValue==undefined){
//                    screenValue='';
//                    screenValue+=buttonValue;
//                 }else{
//                     screenValue+=buttonValue;
//                 }
//                 screen.value=screenValue;