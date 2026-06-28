function calculate(operator){

    let num1 = Number(document.getElementById("num1").value);

    let num2 = Number(document.getElementById("num2").value);

    if(document.getElementById("num1").value==="" || document.getElementById("num2").value===""){

        document.getElementById("result").innerHTML="Please enter both numbers.";

        return;

    }

    let answer;

    switch(operator){

        case "+":
            answer=num1+num2;
            break;

        case "-":
            answer=num1-num2;
            break;

        case "*":
            answer=num1*num2;
            break;

        case "/":

            if(num2===0){

                document.getElementById("result").innerHTML="Cannot divide by zero.";

                return;

            }

            answer=num1/num2;
            break;

    }

    document.getElementById("result").innerHTML="Result: "+answer;

}

function clearFields(){

    document.getElementById("num1").value="";

    document.getElementById("num2").value="";

    document.getElementById("result").innerHTML="Result: 0";

}