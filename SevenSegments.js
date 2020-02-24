var fnClick = () => {
    var num = document.getElementById("angka").value
    
    var arrNum = num.split("")

    var ssRes = ""
 
    for (var i = 0 ; i < arrNum.length ; i++){
        if (arrNum[i] == 0){
            ssRes += "<td>&nbsp;_&nbsp;<br>|&nbsp;&nbsp;|<br>|_|</td>"
        }
        if (arrNum[i] == 1){
            ssRes += "<td>&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;|<br>&nbsp;&nbsp;|</td>"
        }
        if (arrNum[i] == 2){
            ssRes += "<td>&nbsp;_&nbsp;<br>&nbsp;_|<br>|_&nbsp;</td>"
        }
        if (arrNum[i] == 3){
            ssRes += "<td>&nbsp;_&nbsp;<br>&nbsp;_|<br>&nbsp;_|</td>"
        }
        if (arrNum[i] == 4){
            ssRes += "<td>&nbsp;&nbsp;&nbsp;<br>|_|<br>&nbsp;&nbsp;&nbsp;|</td>"
        }
        if (arrNum[i] == 5){
            ssRes += "<td>&nbsp;_&nbsp;<br>|_&nbsp;<br>&nbsp;_|</td>"
        }
        if (arrNum[i] == 6){
            ssRes += "<td>&nbsp;_&nbsp;<br>|_&nbsp;<br>|_|</td>"
        }
        if (arrNum[i] == 7){
            ssRes += "<td>&nbsp;_&nbsp;<br>&nbsp;&nbsp;&nbsp;|<br>&nbsp;&nbsp;&nbsp;|</td>"
        }
        if (arrNum[i] == 8){
            ssRes += "<td>&nbsp;_&nbsp;<br>|_|<br>|_|</td>"
        }
        if (arrNum[i] == 9){
            ssRes += "<td>&nbsp;_&nbsp;<br>|_|<br>&nbsp;_|</td>"
        }
    }

    document.getElementById("render").innerHTML = ssRes
}