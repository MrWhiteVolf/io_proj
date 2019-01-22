//import './ExportController.js';

var flag1;
var flag2;
var flag3;

var aCoeff;
var bCoeff;
var cCoeff;

var solution;


function changeCoeffs(a, b ,c ) {
    aCoeff = a;
    bCoeff = b;
    cCoeff = c;
}

function saveSolution (sol){
    solution = sol;
};

function checkCoeffs(a,b,c) {
    if(a || a === 0.0){
        flag1 = true;
        document.getElementById("a").style.background = '#b4ef8b';
        document.getElementById("a").style.color = '#3d8e41';
    }
    else {
        flag1=false;
        document.getElementById("a").style.background = '#e05557';
        document.getElementById("a").style.color = 'white';
    }
    if(b || b === 0.0)
    {
        flag2 = true;
        document.getElementById("b").style.background = '#b4ef8b';
        document.getElementById("b").style.color = '#3d8e41';
    }
    else {
        flag2=false;
        document.getElementById("b").style.background = '#e05557';
        document.getElementById("b").style.color = 'white';
    }
    if(c || c === 0.0)
    {
        flag3 = true;
        document.getElementById("c").style.background = '#b4ef8b';
        document.getElementById("c").style.color = '#3d8e41';
    }
    else {
        flag3=false;
        document.getElementById("c").style.background = '#e05557';
        document.getElementById("c").style.color = 'white';
    }
    if(flag1 && flag2 && flag3)
    {
        return true;
    }
    else {
        alert("Błąd! Nie podałeś co najmniej jednego współczynnika, albo podałeś go w złym formacie!");
        return false;
    }

}

function show_results(a,b,c)
{
    changeCoeffs(a,b,c);
    if (checkCoeffs(a,b,c))
    {
        if(a == 0.0)
        {
            if(b == 0.0)
            {
                if(c == 0.0)
                {
                    var x = "Równanie tożsamościowe";
                    saveSolution(x);
                    document.getElementById("results").innerHTML = x;
                }
                else
                {
                    var x = "Równanie sprzeczne";
                    saveSolution(x);
                    document.getElementById("results").innerHTML = x;
                }
            }
            else {
                var x = "x0 = " + (-c/b);
                saveSolution(x);
                document.getElementById("results").innerHTML = x;
            }
        }
        else {
            var delta = b*b - 4*a*c;
            if(delta < 0) {
                var x = "x1 = " + (-b/(2*a)).toFixed(2) + " + " + (Math.sqrt(Math.abs(delta))/2*a).toFixed(2) + "i " +
                    "x2 = " + (-b/(2*a)).toFixed(2) + " - " + (Math.sqrt(Math.abs(delta))/2*a).toFixed(2) + "i";
                saveSolution(x);
                document.getElementById("results").innerHTML = x;
            }
            else if (delta === 0.0) {
                var x = "x1 = " + (-b/(2*a)) + "x2 = " + (-b/(2*a));
                saveSolution(x);
                document.getElementById("results").innerHTML = x;
            }
            else {
                var x = "x1 = " + (-b + Math.sqrt(delta)/(2*a)).toFixed(5) + " x2 = " + (-b - Math.sqrt(delta)/(2*a)).toFixed(5);
                saveSolution(x);
                document.getElementById("results").innerHTML = x;
            }
        }

    }
    else {
        document.getElementById("results").innerHTML = "&nbsp";
    }
    //document.getElementById("demo").innerHTML = aCoeff;

}