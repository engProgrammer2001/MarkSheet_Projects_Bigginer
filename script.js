
function printSum(){
    var Student_name = document.getElementById("std").value;
    var Hindi = parseInt(document.getElementById("sub1").value) ;
    var English = parseInt(document.getElementById("sub2").value);
    var Maths = parseInt(document.getElementById("sub3").value);
    var Science = parseInt(document.getElementById("sub4").value);
    if (Hindi > 100 || English>100 || Maths>100 || Science>100){
        alert("Wrong Input")
    }
    else if(Student_name == '' || Hindi == '' || English== '' || Maths =='' || Science == ''){
        alert("Please! Enter Value In Every Fields")
    }
    else{
        var  total = 400;
        var sum = (Hindi+English+Maths+Science);
        var Average = (Hindi+English+Maths+Science)/4;
        var percent = (sum*100)/total;
        alert(Student_name + " Total Marks is: " + sum +" & Average is: "+Average +" & Total Percenteages is: "+percent);
    }
}