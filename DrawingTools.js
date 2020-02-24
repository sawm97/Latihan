var fnDraw = () => {
    var pick = document.getElementById("jenis").value
    var n = document.getElementById("ukuran").value
    var m = document.getElementById("ukuran").value
    var space = "   "
    switch (pick) {
        case "1" :
        var stars = ''
        for(var i = 0 ; i < n ; i++){
            for(var j = 0 ; j < n ; j++){
                    stars += '&nbsp;*&nbsp;'
                }
            stars += '<br>'
        }
        break;

        case "2" :
        var stars = ''
        for(var i = 0 ; i < n ; i++){
            for(var j = 0 ; j < i + 1 ; j++){
                    stars += '&nbsp;*&nbsp;'
                }
            stars += '<br>'
        }
        break ;

        case "3" :
        var stars = ''
        for ( i = 0 ; i <= m ; i++){
            for ( k = 0 ; k < n ; k++){
                stars += "&nbsp;&nbsp;&nbsp;&nbsp;"
            }
            for ( j = 0 ; j < i ; j++){
                stars += "&nbsp;*&nbsp;"
            }
            n--
            stars += "<br>"
        }
        break ;

        default :
        break ;
    }
    // if (pick == 1){
    //     var stars = ''
    //     for(var i = 0 ; i < n ; i++){
    //         for(var j = 0 ; j < n ; j++){
    //                 stars += ' * '
    //             }
    //         stars += '<br>'
    //     }
    // } else if (pick == 2){
    //     var stars = ''
    //     for(var i = 0 ; i < n ; i++){
    //         for(var j = 0 ; j < i + 1 ; j++){
    //                 stars += ' * '
    //             }
    //         stars += '<br>'
    //     }
    // } else {
    //     var stars = ''
    //     for ( i = 0 ; i <= m ; i++){

    //         for ( k = 0 ; k < n ; k++){
    //             stars += "   "
    //         }
        
    //         for ( j = 0 ; j < i ; j++){
    //             stars += " * "
    //         }
            
    //         n--
    //         stars += "<br>"
    //     }
    // }
    document.getElementById("render").innerHTML = stars
    console.log (pick)
    console.log (n)
}

