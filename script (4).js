function compute() {
    var principal = document.getElementById('principal').value;
    var rate = document.getElementById('rate').value;
    var years = document.getElementById('years').value;
    var year = new Date().getFullYear()+parseInt(years);
    var interest = principal * years * rate /100;
    
    if(principal == undefined || principal <= 0)
  {
        alert("Enter a Positive Number");
        document.getElementById("principal").focus();
        return
    }
    else
    {
        // Display the result in the span result section with the calculated values
        var Ftext = "For a deposit amount of <mark>" + principal +",</mark><br>";
        var Stext = "@ Interest Rate of <mark>"+ rate +" %,</mark><br>";
        var Ttext = "for <mark>"+ years +"year(s),</mark><br>"
        var Fotext="You will receive an amount of <mark>" +interest + ",</mark><br>"
        var Fitext ="in the year <mark>"+year +"</mark>";

        document.getElementById("result").innerHTML=Ftext+Stext+Ttext+Fotext+Fitext;
    } 
}

function updateRate() 
{
    var ratevalue = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=ratevalue;
}