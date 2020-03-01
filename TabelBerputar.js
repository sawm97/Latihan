var arrNum = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[0,0,0,0]]

var arrHor = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]

var arrVer = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]

var resProduct = ""

var fnRenderList = () => {
    for (var i = 0 ; i < arrNum.length ; i++){
        if (arrNum[i][0] == 0) {
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