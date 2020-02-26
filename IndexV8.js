var arrProduct = [
    { id: 1579581080923,category: 'Fast Food' , name: "Noodle", price: 3500, stock : 9, qty : 0, total : 0},
    { id: 1579581081130,category: 'Electronic' , name: "Headphone", price: 4300000, stock :8, qty : 0, total : 0},
    { id: 1579581081342,category: 'Cloth' , name: "Hoodie", price: 300000, stock :7, qty : 0, total : 0},
    { id: 1579581081577,category: 'Fruit' , name: "Apple", price: 10000, stock :8, qty : 0, total : 0}
];

var arrCategory = ["All", "Fast Food", "Electronic", "Cloth", "Fruit"];

var arrCart = []

arrProduct.sort()

// Render List
var funRenderList = (data, idx) => {
    // Mapping product
    var resProduct = data.map((obj) => {
        let SortNormal = (a , b) => {
            if (a.price < b.price){
                return -1
            } else if (b.price < a.price){
                return 1
            } else {
                return 0
            }
        }
        data.sort(SortNormal)
        // jika id product sama dengan idx
        if(obj.id == idx){
            // Textbox
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
                        <input onclick="funSave(${obj.id})" type="button" value="Save">
                    </td>
                    <td>
                        <input onclick="funEditCancel()" type="button" value="Cancel">
                    </td>
                </tr>
            `
        } else if (obj.qty > 0) {
            return `
                <tr>
                    <td>${obj.id}</td>
                    <td>${obj.category}</td>
                    <td>${obj.name}</td>
                    <td>${obj.price}</td>
                    <td>${obj.stock}</td>
                    <td>
                        <input onclick="funAdd(${obj.id})" type="button" value="Add">
                    </td>
                    <td>
                        <input disabled type="button" value="Delete">
                    </td>
                    <td>
                        <input onclick="funEditCancel(${obj.id})" type="button" value="Edit">
                    </td>
                </tr>
            `
        } else {
            // String
            return `
                <tr>
                    <td>${obj.id}</td>
                    <td>${obj.category}</td>
                    <td>${obj.name}</td>
                    <td>${obj.price}</td>
                    <td>${obj.stock}</td>
                    <td>
                        <input onclick="funAdd(${obj.id})" type="button" value="Add">
                    </td>
                    <td>
                        <input onclick="funDelete(${obj.id})" type="button" value="Delete">
                    </td>
                    <td>
                        <input onclick="funEditCancel(${obj.id})" type="button" value="Edit">
                    </td>
                </tr>
            `
        }
    })
    // Mapping category
    var resCategory = arrCategory.map((val) => {
        return `<option>${val}</option>`
    })
    // render product
    document.getElementById('render').innerHTML = resProduct.join("")
    // render category
    document.getElementById('catFilter').innerHTML = resCategory
    document.getElementById('catInput').innerHTML = resCategory
}

// Render Cart
var funRenderCart = () => {
    var listCart = arrCart.map((obj) => {
        return `
            <tr>
                <td>${obj.id}</td>
                <td>${obj.category}</td>
                <td>${obj.name}</td>
                <td>${obj.price}</td>
                <td>${obj.qty}</td>
                <td>
                    <input onclick="funDeleteCart(${obj.id})" type="button" value="Delete">
                </td>
            </tr>
        `
    })
    document.getElementById("cart").innerHTML = listCart.join("")
}

// Render Filter
var funRenderFilter = (data) => {
    var resProduct = data.map((obj) => {
        return `
            <tr>
                <td>${obj.id}</td>
                <td>${obj.category}</td>
                <td>${obj.name}</td>
                <td>${obj.price}</td>
                <td>${obj.stock}</td>
                <td>
                    <input onclick="funAddRender(${obj.id})" type="button" value="Add">
                </td>
                <td>
                    <input onclick="funDelete(${obj.id})" type="button" value="Delete">
                </td>
                <td>
                    <input onclick="funEditCancel(${obj.id})" type="button" value="Edit">
                </td>
            </tr>
        `
    })
    // render product
    document.getElementById('render').innerHTML = resProduct.join("")
}
            
// Input Data
var funInputData = () => {

    // Ambil data
    var name = document.getElementById("name").value
    var price = parseInt(document.getElementById("price").value)
    var stock = parseInt(document.getElementById("stock").value)
    var category = document.getElementById("catInput").value
    var time = new Date()
    
    // Push ke object
    arrProduct.push({
        id: time.getTime(),
        name : name,
        price: price,
        stock : stock,
        category: category,
        qty : 0
    })
    
    // Render product
    funRenderList(arrProduct)

}

// Filter Name
var funFilterName = () => {
    // Ambil data
    var keyword = document.getElementById("keyword").value // N
    // Filter data
    // val = { name: "Noodle", price: 3500, stock : 9}
    var filterResult = arrProduct.filter((val) => {
        // Mengecilkan input user
        keyword = keyword.toLowerCase() // n
        // Mengecilkan nama product
        var prodName = val.name.toLowerCase() // noodle
        // Return true atau false
        // noodle -> n
        return prodName.includes(keyword)
    })
    // Render data
    funRenderFilter(filterResult)
}

// Filter Price
var funFilterPrice = () => {
    // Ambil data
    var min = document.getElementById('min').value
    var max = document.getElementById('max').value
    var filterResult = arrProduct
    // Cek kedua textbox, apakah sudah terisi keduanya
    // Jika terisi keduanya, lakukan filter
    // Jika salah satu kosong, tidak lakukan filter
    if( !( min == "" || max == "" ) ){
        // filtering
        // val = { category: 'Fast Food', name: "Noodle"}
        filterResult = arrProduct.filter((val) => {
            return val.price >= min && val.price <= max
        })
    } 
    // Render data
    funRenderFilter(filterResult)
}

// Filter Category
var funFilterCategory = () => {
    // Ambil data
    var selected = document.getElementById("catFilter").value
    var filterResult = arrProduct
    // Filter data
    // selected = "All"
    // val = { category: 'Electronic' , name: "Headphone"}
    if (selected != "All"){
        filterResult = arrProduct.filter((val) => {
            return val.category == selected
        })
    }

    // Render data
    funRenderFilter(filterResult)
}

// Button Delete
var funDelete = (idx) => {

    // Delete berdasarkan id
    arrProduct = arrProduct.filter((val) => {
        return val.id != idx
    })
    
    // Render data
    funRenderList(arrProduct)
    
}

// Button Edit and Cancel
var funEditCancel = (idx) => {
    // Change to text box
    funRenderList(arrProduct, idx)
}

// Button Save
var funSave = (idx) => {
    // Ambil data
    var name = document.getElementById("nameEdit").value
    var price = parseInt(document.getElementById("priceEdit").value)
    var stock = parseInt(document.getElementById("stockEdit").value)

    // coba kode
    var foundIdx = arrProduct.find((val) => {return val.id == idx})

    foundIdx.name = name
    foundIdx.price = price
    foundIdx.stock = stock

    // Cari indexnya
    // var foundIdx = arrProduct.findIndex((val) => {
    //     return val.id == idx
    // })
    // // Replace data lama
    // arrProduct[foundIdx] = {
    //     ...arrProduct[foundIdx],
    //     name: name,
    //     price : price,
    //     stock: stock,
    // }

    // // Replace stock cart
    // if (arrCart != "") {
    // var selectedCart = arrCart.find((val) => {return val.id == idx})
    // selectedCart.stock = stock
    // }
    // Render data
    funRenderList(arrProduct)
}

// Button Delete Cart (OnWork)
var funDeleteCart = (idx) => {
    // Delete satu persatu
    // mengembalikan jumlah stock
    var selectedProduct = arrProduct.find((val) => {return val.id == idx})
    if (selectedProduct.qty > 0){
        selectedProduct.qty --
        selectedProduct.stock ++
    } 
    if (selectedProduct.qty == 0) {
        arrCart = arrCart.filter((val) => {
            return val.id != idx
        })
    } 

    // Delete sekaligus
    // var changeStock = selectedProduct.qty + selectedProduct.stock
    // selectedProduct.stock = changeStock
    // selectedProduct.qty = 0 
    // // Delete berdasarkan id
    // arrCart = arrCart.filter((val) => {
    //     return val.id != idx
    // })

    funRenderCart()
    funRenderList(arrProduct)
}

// Button Add
var funAdd = (idx) => {
    // temukan product terpilih
    var selectedProduct = arrProduct.find((val) => {return val.id == idx})
    if (selectedProduct.stock < 1){
        alert("stock habis!")
        return "disabled"
    }
    if (selectedProduct.qty == 0){
        // menambahkan jumlah quantity
        selectedProduct.qty ++ 
        // tambahkan product tersebut ke array Cart
        arrCart.push(selectedProduct)
    } else {
        selectedProduct.qty ++
    }
    // mengurangi stock dengan quantity
    selectedProduct.stock --
    // Disabled tombol delete
    var resProduct = 
    // render list
    funRenderList(arrProduct)
    // render cart
    funRenderCart()
}

// Button Add Render
var funAddRender = (idx) => {
    var selectedProduct = arrProduct.find((val) => {return val.id == idx})
    // var selectedCart = arrCart.find((val) => {return val.id == idx})
    if (selectedProduct.stock < 1){
        alert("stock habis!")
        return disabled
    }
    if (selectedProduct.qty == 0){
        selectedProduct.qty ++
        arrCart.push(selectedProduct)
    } else {
        selectedProduct.qty ++
    }
    selectedProduct.stock --
    funRenderCart()
    if (document.getElementById("keyword").value != ""){
        funFilterName()
    }
    if (document.getElementById("min").value != "" && document.getElementById("max").value !=""){
        funFilterPrice()
    }
    if (document.getElementById("catFilter").value != "All"){
        funFilterCategory()
    }
}

// Button Payment
var funPayment = () => {
    for (var i = 0 ; i < arrCart.length ; i++){
        arrCart[i].total = arrCart[i].price * arrCart[i].qty
    }
    // Ambil List Cart
    var listPayment = arrCart.map((val) => {
        return `
        <p>${val.id} || ${val.category} || ${val.name} || ${val.price} || ${val.qty} || ${val.total}</p>
        `
    })
    // Perhitungan
    var subTotal = 0
    for (var i = 0 ; i < arrCart.length ; i++){
        subTotal += arrCart[i].total
    }
    var ppn = subTotal * 0.1
    var finalTotal = subTotal + ppn 
    // Render Payment List
    document.getElementById("Payment").innerHTML = 
    listPayment.join("") + 
    `<h3>SubTotal : ${subTotal}</h3>` + 
    `<h3>PPN : ${ppn}</h3>` + 
    `<h3>Total : ${finalTotal}</h3>` +
    `<p>Kode Promo : <input type="text" id="promo" placeholder="Jika Ada"></p>` +
    `<p><input type="button" value="Promo" onclick="funPromo()"></p>`
}

// Kode Promo
var funPromo = () => {
    if(document.getElementById("promo").value == "PROMOGILA") {
        alert(`Selamat Anda mendapatkan potongan harga 10%!`)
        for (var i = 0 ; i < arrCart.length ; i++){
            arrCart[i].total = arrCart[i].price * arrCart[i].qty
        }
        // Ambil List Cart
        var listPayment = arrCart.map((val) => {
            return `
            <p>${val.id} || ${val.category} || ${val.name} || ${val.price} || ${val.qty} || ${val.total}</p>
            `
        })
        // Perhitungan
        var subTotal = 0
        for (var i = 0 ; i < arrCart.length ; i++){
            subTotal += arrCart[i].total
        }
        var ppn = subTotal * 0.1
        var finalTotal = subTotal + ppn
        var diskon = finalTotal * 0.1
        var diskonTotal = finalTotal - (diskon) 
        // Render Payment List
        document.getElementById("Payment").innerHTML = 
        listPayment.join("") + 
        `<h3>SubTotal : ${subTotal}</h3>` + 
        `<h3>PPN : ${ppn}</h3>` + 
        `<h3>Total : ${finalTotal}</h3>` +
        `<h3>Diskon 10% : -${diskon}</h3>` +
        `<h3>Setelah Diskon : ${diskonTotal}</h3>` +
        `<p>Kode Promo : <input type="text" id="promo" placeholder="Jika Ada"></p>` +
        `<p><input type="button" value="Promo" onclick="funPromo()"></p>`   
    } else {
        alert(`Maaf kode yang anda pakai salah`)
    }
}

funRenderList(arrProduct)





