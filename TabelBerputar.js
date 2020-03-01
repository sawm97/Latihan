var arrNum = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[0,0,0,0]]

var arrHor = [[],[],[],[],[]]

var arrVer = [[],[],[],[],[]]

var resProduct = ""

var i = 0

var j = 0

var fnRenderList = () => {
    for (var i = 0 ; i < arrNum.length ; i++){
        if (arrNum[i][0] == 0) {
            for (var j = 0 ; j < arrNum[i].length ; j++) {
                arrHor[i].push (arrNum[i][j])
            }
            arrVer[0].push (0)
            arrVer[1].push (0)
            arrVer[2].push (0)
            arrVer[3].push (0)
            arrVer[4].push (0)
            resProduct += `
                <tr>
                    <td><input type="button" value="sort"></td>
                    <td><input type="button" value="sort"></td>
                    <td><input type="button" value="sort"></td>
                    <td><input type="button" value="sort"></td>
                    <td></td>
                </tr>
            `
        } else {
            for (var j = 0 ; j < arrNum[i].length ; j++) {
                arrHor[i].push (arrNum[i][j])
            }
            arrVer[0].push (arrNum[i][0])
            arrVer[1].push (arrNum[i][1])
            arrVer[2].push (arrNum[i][2])
            arrVer[3].push (arrNum[i][3])
            arrVer[4].push (0)
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
    }
    document.getElementById("render").innerHTML = resProduct
}

fnRenderList()