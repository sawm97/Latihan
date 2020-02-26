
    // ## MARKET V7.0

// - App tidak lagi hanya menjual buah, melainkan menjual tiga product lainnya, sehingga kini app akan menjual empat macam product, yaitu :
//     1. Makanan Cepat Saji (FastFood)
//         - Properties : category, name, price, stock, expired, qty, total
//     2. Pakaian (Cloth)
//         - Properties : category, name, price, stock, size, qty, total
//     3. Elektronik (Electronic)
//         - Properties : category, name, price, stock, warranty,  qty, total
//     4. Buah (Fruit)
//         - Properties : category, name, price, stock, sugarLvl, qty, total
// - Kini user boleh memilih untuk product apa saja yang ingin dibeli, tidak harus semua
// - Ketika user ingin belanja dengan product yang sama, qty akhir akan di akumulasi dengan qty sebelumnya.
// - Ketika user memilih untuk membeli sejumlah qty tertentu, stock akan berkurang
// - Contoh Apel ada 5, ketika belanja pertama membeli 2 maka tinggal 3, belanja berikutnya tidak bisa membeli apel lebih dari 3.

alert (`Welcome to TOSERBA!\nHappy Shopping!`)

// let fastFood   = [{name : 'Noodle', price: 20000, stock: 8, expired : 2020, qty : 0, total: 0}]
// let Cloth    = [{name : 'Hoodie', price: 15000, stock: 7, size: 'L', qty : 0, total: 0}]
// let Electronic = [{name : 'Headphone', price: 20000, stock: 8, warranty : 'Yes', qty : 0, total: 0}]
// let Fruits     = [{name : 'Apple', price: 10000, stock: 5, sugarLvl: 'High', qty : 0, total: 0}] 
class Market {
    constructor (_category, _name, _price, _stock) {
        this.category = _category
        this.name     = _name
        this.price    = _price
        this.stock    = _stock
    }
}

class FastFood extends Market {
    constructor (_category, _name, _price, _stock, _expired, _qty, _total) {
        super (_category, _name, _price, _stock)
        this.expired = _expired
        this.qty      = _qty
        this.total    = _total
    }
}

class Cloth extends Market {
    constructor (_category, _name, _price, _stock, _size, _qty, _total) {
        super (_category, _name, _price, _stock)
        this.size = _size
        this.qty      = _qty
        this.total    = _total
    }
}
class Electronic extends Market {
    constructor (_category, _name, _price, _stock, _warranty, _qty, _total) {
        super (_category, _name, _price, _stock)
        this.warranty = _warranty
        this.qty      = _qty
        this.total    = _total
    }
}
class Fruit extends Market {
    constructor (_category, _name, _price, _stock, _sugarlvl, _qty, _total) {
        super (_category, _name, _price, _stock)
        this.sugarLvl = _sugarlvl
        this.qty      = _qty
        this.total    = _total
    }
}



let products = [
    {category: 1, name : 'Noodle', price: 20000, stock: 8, expired : 2020, qty : 0, total: 0},
    {category: 2, name : 'Hoodie', price: 15000, stock: 7, size: 'L', qty : 0, total: 0},
    {category: 3, name : 'Headphone', price: 20000, stock: 8, warranty : 'Yes', qty : 0, total: 0},
    {category: 4, name : 'Apel', price: 10000, stock: 5, sugarLvl: 'High', qty : 0, total: 0},
]

let totalPrice = 0

function listAppear() {
    var listProduct = '';

    if (products.length > 0) {
        for (var i = 0; i < products.length; i++) {
            if (products[i].category == 1) {
                listProduct += `${i + 1}. ${products[i].name} | Stock : ${products[i].stock} ` +
                    `| Harga : ${products[i].price.toLocaleString()} | Expired : ${products[i].expired}\n`;
            }
            if (products[i].category == 2) {
                listProduct += `${i + 1}. ${products[i].name} | Stock : ${products[i].stock} ` +
                    `| Harga : ${products[i].price.toLocaleString()} | Size : ${products[i].size}\n`;
            }
            if (products[i].category == 3) {
                listProduct += `${i + 1}. ${products[i].name} | Stock : ${products[i].stock} ` +
                    `| Harga : ${products[i].price.toLocaleString()} | Warranty : ${products[i].warranty}\n`;
            }
            if (products[i].category == 4) {
                listProduct += `${i + 1}. ${products[i].name} | Stock : ${products[i].stock} ` +
                    `| Harga : ${products[i].price.toLocaleString()} | Sugar Level : ${products[i].sugarLvl}\n`;
            }
            // listProduct += `${i + 1}. ${products[i].name} | Stock : ${products[i].stock} | Harga : ${products[i].price.toLocaleString()}\n`;
        }
        return `PRODUCT LIST\n` + listProduct;
    }
    return 'PRODUCT LIST\n\n empty';
}

function dtlAppear(){
    var detailStr = ''

        for(var i = 0 ; i < products.length ; i++){
            detailStr += `${products[i].name} : ${products[i].qty} x ${products[i].price} = ${products[i].total}\n`
        }

    return detailStr
}

do {
    // Main Menu
    var mainMenu = parseInt(prompt(
        `Welcome to TOSERBA!\n\n` +
        `1. Product List\n` +
        `2. Add Product\n` +
        `3. Delete Product\n` +
        `4. Buy Product\n` +
        `5. Exit\n\n` +
        `Choose a number :\n\n`
        )
        )
        
        switch (mainMenu) {
            
            case 1: // Product List
            alert(listAppear())
            var repeat = confirm(`Back to main menu?`)
            break;
            
            case 2: // Adding Product
            var selectCategory = parseInt(prompt(
                `Select Category :\n\n` +
                `1. Fast Food\n\n` +
                `2. Cloth\n\n` +
                `3. Electronic\n\n` +
                `4. Fruit\n\n`
                )
            )
                
            var productName = prompt('Please input the product :')
            var productPrice = parseInt(prompt('Please input the price :'))
            var productStock = parseInt(prompt('Please input the stock :'))

            if (selectCategory == 1) {
                var expired = prompt(`Please input the expire year :`)
                var newFastfood = new FastFood (
                    selectCategory, productName, productPrice, productStock, expired, 0, 0
                    )
                products.push (newFastfood)
            }

            else if (selectCategory == 2) {
                var size = prompt(`Please input the size :`)
                var newCloth = new Cloth (
                    selectCategory, productName, productPrice, productStock, size, 0, 0
                    )
                products.push (newCloth)
            }

            else if (selectCategory == 3) {
                var warranty = prompt(`Is this thing has a warranty? (Yes/No):`)
                var newElectronic = new Electronic (
                    selectCategory, productName, productPrice, productStock, warranty, 0, 0
                    )
                products.push (newElectronic)
            }

            else if (selectCategory == 4) {
                var sugarlvl = prompt(`Please input the sugar level :`)
                var newFruit = new Fruit (
                    selectCategory, productName, productPrice, productStock, sugarlvl, 0, 0
                    )
                products.push (newFruit)
            }

            // console.log(productName)
            // console.log(productPrice)
            // console.log(productStock)
            // console.log(expired)

            alert (listAppear())
            var repeat = true
            break;

            case 3: // Deleting Product
            var selected = parseInt(
                prompt(
                `Choose the product you want to delete (number):\n\n` + listAppear()
                )
            ) - 1

            products.splice(selected, 1)

            alert (listAppear())
            var repeat = true
            break;

            case 4: // Shopping
            do {
                var idProduct = prompt(
                    `Choose the product you want to buy (number):\n\n` + listAppear()
                ) - 1
                
                var qtyBuy = parseInt(
                    prompt(
                        `How much ${products[idProduct].name} do you want?`
                    )
                )

                if (qtyBuy > products[idProduct].stock) {
                    alert (`Input error, products stock : ${products[idProduct].stock}`)
                    var again = true
                }

                else {
                    products[idProduct].qty   += qtyBuy
                    products[idProduct].stock -= qtyBuy
                }

                var again = confirm(`Wanna buy anything else?`)

            } while (again)

            for (var i = 0 ; i < products.length ; i++) {
                if (products[i].qty > 0) {
                    products[i].total = products[i].price * products[i].qty
                    totalPrice += products[i].total
                }
            }

            alert(
                `Shopping List \n\n` + dtlAppear() + `\n` +
                `Total : Rp. ` + totalPrice.toLocaleString()
            )

            var moneyCon

            do {
                var money = prompt(`Input amount of money :`)

                if (money < totalPrice) {
                    var margin = money - totalPrice
                    alert(`Input error, still need Rp. ${margin.toLocaleString()}`)
                    moneyCon = true
                }

                else if (money > totalPrice) {
                    var margin = money - totalPrice
                    alert(`Thank you, here's your change! ${margin.toLocaleString()}`)
                    moneyCon = false
                }

                else {
                    alert(`Thank you!`)
                    moneyCon = false
                }
            } while (moneyCon)
            break;

            case 5: // Exit
            var repeat = !confirm(`Do you wanna exit?`)
            break;

            default:
            var repeat = true
            break;
    }
} while (repeat)