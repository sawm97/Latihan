var arrNum = [[1,2,3,4,0],[5,6,7,8,0],[9,10,11,12,0],[13,14,15,16,0],[0,0,0,0,0]]

var arrHor = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]

var arrVer = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]

var fnRenderList = (data) => {
    var resProduct = data.map((obj) => {
        if (obj[0] == 0){
            return `<tr>
                <td><input type="button" value="sort"></td>
                <td><input type="button" value="sort"></td>
                <td><input type="button" value="sort"></td>
                <td><input type="button" value="sort"></td>
                <td></td>
            </tr>`
        } else {
            return `<tr>
                <td><center>${obj[0]}</center></td>
                <td><center>${obj[1]}</center></td>
                <td><center>${obj[2]}</center></td>
                <td><center>${obj[3]}</center></td>
                <td><input type="button" value="sort"></td>
            </tr>`
        }
    })
    document.getElementById("render").innerHTML = resProduct.join("")
}

fnRenderList(arrNum)