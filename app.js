let percentage;
document.getElementById("grade").onclick = function(){
    percentage = document.getElementById("percentageSearch").value;

    percentage =Number(percentage);
    if( percentage === 100){
    title = "Congratulations! You have come to the Top Position"
}   else if( percentage <= 99 && percentage >= 90){
    title = "Congratulations! You have Achived A+1"
 }  else if( percentage <= 89 && percentage >= 70){
    title = "Congratulations! You have Achived A Grade"
}   else if( percentage <= 69 && percentage >= 60){
    title = "Congratulations! You have Achived B Grade"
}   else if( percentage <= 59 && percentage >= 50){
    title = "Congratulations! You have Achived C Grade"
}   else if( percentage <= 49 && percentage >= 40){
    title = "Congratulations! You have passed"
}   else if( percentage <= 39 && percentage >= 30){
    title = "Congratulations! You are promoted"
}   else if( percentage <= 29 && percentage >= 20){
    title = " Failed! please pay attention to your studies"
}   else if( percentage <= 19 && percentage >= 1){
    title = " Failed! Need do very Hard Work"
}

    document.querySelector('#title').innerHTML = title
    // document.querySelector('#explanation').innerHTML = explanation


}





