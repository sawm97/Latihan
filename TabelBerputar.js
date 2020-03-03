var arrNum = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]

var arrHor = [[],[],[],[]]

var arrVer = [[],[],[],[]]

var resProduct = ""

var i = 0

var j = 0

var k = 0

var fnRenderList = () => {
    for (i = 0 ; i < arrNum.length ; i++){
            for (j = 0 ; j < arrNum[i].length ; j++) {
                arrHor[i].push (arrNum[i][j])
            }
            for (k = 0 ; k < arrNum[i].length ; k++){
                arrVer[k].push (arrNum[i][k])
            }
            resProduct += `
                <tr>
                    <td><center>${arrNum[i][0]}</center></td>
                    <td><center>${arrNum[i][1]}</center></td>
                    <td><center>${arrNum[i][2]}</center></td>
                    <td><center>${arrNum[i][3]}</center></td>
                    <td><input type="button" value="sort"></td>
                </tr>
            `
    }
    document.getElementById("render").innerHTML = resProduct
}

var fnPutar = () => {
    document.querySelector()
}

fnRenderList()