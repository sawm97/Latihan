
var arrProduct = [
    { id: 1579581080923,category: 'Fast Food' , name: "Noodle", price: 3500, stock : 9, qty : 0, total : 0},
    { id: 1579581081130,category: 'Electronic' , name: "Headphone", price: 4300000, stock :8, qty : 0, total : 0},
    { id: 1579581081342,category: 'Cloth' , name: "Hoodie", price: 300000, stock :7, qty : 0, total : 0},
    { id: 1579581081577,category: 'Fruit' , name: "Apple", price: 10000, stock :8, qty : 0, total : 0}
];

var arrCategory = ["All", "Fast Food", "Electronic", "Cloth", "Fruit"];

var arrCart = []

var fnRenderList = (data, idx) => {
    var resProduct = data.map((obj) => {
        if(obj.id == idx){
            return `
                <tr>
                    <td>${obj.id}</td>
                    <td>${obj.category}</td>
                    <td><input id="nameEdit" type="text" value="${obj.name}"></td>
                    <td><input id="priceEdit" type="text" value="${obj.price}"></td>
                    <td><input id="stockEdit" type="text" value="${obj.stock}"></td>
                    <td>
                        <input disabled type="button" value="Add">
                    </td>
                    <td>
                        <input onclick="fnSave(${obj.id})" type="button" value="Save">
                    </td>
                    <td>
                        <input onclick="fnEditCancel()" type="button" value="Cancel">
                    </td>
                </tr>
            `
        } else {
            return `
                <tr>
                    <td>${obj.id}</td>
                    <td>${obj.category}</td>
                    <td>${obj.name}</td>
                    <td>${obj.price}</td>
                    <td>${obj.stock}</td>
                    <td>
                        <input onclick="fnAdd(${obj.id})" type="button" value="Add">
                    </td>
                    <td>
                        <input onclick="fnDelete(${obj.id})" type="button" value="Delete">
                    </td>
                    <td>
                        <input onclick="fnEditCancel(${obj.id})" type="button" value="Edit">
                    </td>
                </tr>
            `
        }
    })
    var resCategory = arrCategory.map((val) => {
        return `<option>${val}</option>`
    })
    document.getElementById('render').innerHTML = resProduct.join("")
    document.getElementById('catFilter').innerHTML = resCategory
    document.getElementById('catInput').innerHTML = resCategory
}

var fnRenderCart = () => {
    var listCart = arrCart.map((obj) => {
        return `
            <tr>
                <td>${obj.id}</td>
                <td>${obj.category}</td>
                <td>${obj.name}</td>
                <td>${obj.price}</td>
                <td>${obj.qty}</td>
                <td>
                    <input onclick="fnDeleteCart(${obj.id})" type="button" value="Delete">
                </td>
            </tr>
        `
    })
    document.getElementById("cart").innerHTML = listCart.join("")
}

var fnRenderFilter = (data) => {
    var resProduct = data.map((obj) => {
        return `
            <tr>
                <td>${obj.id}</td>
                <td>${obj.category}</td>
                <td>${obj.name}</td>
                <td>${obj.price}</td>
                <td>${obj.stock}</td>
                <td>
                    <input onclick="fnAddRender(${obj.id})" type="button" value="Add">
                </td>
                <td>
                    <input onclick="fnDelete(${obj.id})" type="button" value="Delete">
                </td>
                <td>
                    <input onclick="fnEditCancel(${obj.id})" type="button" value="Edit">
                </td>
            </tr>
        `
    })
    document.getElementById('render').innerHTML = resProduct.join("")
}
            
var fnInputData = () => {
    var name = document.getElementById("name").value
    var price = parseInt(document.getElementById("price").value)
    var stock = parseInt(document.getElementById("stock").value)
    var category = document.getElementById("catInput").value
    var time = new Date()
    arrProduct.push({
        id: time.getTime(),
        name : name,
        price: price,
        stock : stock,
        category: category,
        qty : 0
    })
    fnRenderList(arrProduct)
}

var fnFilterName = () => {
    var keyword = document.getElementById("keyword").value 
    var filterResult = arrProduct.filter((val) => {
        keyword = keyword.toLowerCase() 
        var prodName = val.name.toLowerCase() 
        return prodName.includes(keyword)
    })
    fnRenderFilter(filterResult)
}

var fnFilterPrice = () => {
    var min = document.getElementById('min').value
    var max = document.getElementById('max').value
    var filterResult = arrProduct
    if( !( min == "" || max == "" ) ){
        filterResult = arrProduct.filter((val) => {
            return val.price >= min && val.price <= max
        })
    } 
    fnRenderFilter(filterResult)
}

var fnFilterCategory = () => {
    var selected = document.getElementById("catFilter").value
    var filterResult = arrProduct
    if (selected != "All"){
        filterResult = arrProduct.filter((val) => {
            return val.category == selected
        })
    }
    fnRenderFilter(filterResult)
}

var fnDelete = (idx) => {
    arrProduct = arrProduct.filter((val) => {
        return val.id != idx
    })
    fnRenderList(arrProduct)
}

var fnEditCancel = (idx) => {
    fnRenderList(arrProduct, idx)
}

var fnSave = (idx) => {
    var name = document.getElementById("nameEdit").value
    var price = parseInt(document.getElementById("priceEdit").value)
    var stock = parseInt(document.getElementById("stockEdit").value)
    var foundIdx = arrProduct.find((val) => {return val.id == idx})
    foundIdx.name = name
    foundIdx.price = price
    foundIdx.stock = stock
    fnRenderList(arrProduct)
}

var fnDeleteCart = (idx) => {
    var selectedProduct = arrProduct.find((val) => {return val.id == idx})
    var change = selectedProduct.qty + selectedProduct.stock
    selectedProduct.stock = change
    selectedProduct.qty = 0
    arrCart = arrCart.filter((val) => {return val.id != idx})
    fnRenderCart()
    fnRenderList(arrProduct)
}


var fnAdd = (idx) => {
    var selectedProduct = arrProduct.find((val) => {return val.id == idx})
    if (selectedProduct.stock < 1){
        alert("stock habis!")
        return "disabled"
    }
    if (selectedProduct.qty == 0){
        selectedProduct.qty ++ 
        arrCart.push(selectedProduct)
    } else {
        selectedProduct.qty ++
    }
    selectedProduct.stock --
    fnRenderList(arrProduct)
    fnRenderCart()
}

var fnPayment = () => {
    for (var i = 0 ; i < arrCart.length ; i++){
        arrCart[i].total = arrCart[i].price * arrCart[i].qty
    }
    var listPayment = arrCart.map((val) => {
        return `
        <p>${val.id} || ${val.category} || ${val.name} || ${val.price} || ${val.qty} || ${val.total}</p>
        `
    })
    var subTotal = 0
    for (var i = 0 ; i < arrCart.length ; i++){
        subTotal += arrCart[i].total
    }
    var ppn = subTotal * 0.1
    var finalTotal = subTotal + ppn 
    document.getElementById("Payment").innerHTML = 
    listPayment.join("") + 
    `<h3>SubTotal : ${subTotal}</h3>` + 
    `<h3>PPN : ${ppn}</h3>` + 
    `<h3>Total : ${finalTotal}</h3>`
}

fnRenderList(arrProduct)