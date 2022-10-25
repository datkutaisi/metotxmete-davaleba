// var arr=[7, 12, 6, 9, 16];
// for(var i=0; i<arr.length; i++){
//     document.write(arr[i]+" ");
// }

// var mas=[15,53,22,198,10,28,16,70,33,951];
// for(var i=0; i<mas.length; i++){
//     if(mas[i]%2!=0){
//         document.write(mas[i]+" ");
//     }
// }



var strSum=prompt ("შეიყვანეთ თანხა",)
function display(){
    strSum;
}

function res(){
    display();
    if(strSum<20){
        document.write("იაფი"); 
    }
    else if(strSum>20 && strSum<50){
        document.write("საშუალო"); 
    }
    else{
        document.write("ძვირი"); 
    }

}

res();