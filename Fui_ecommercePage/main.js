$(document).ready(function(){
    $('#open-cat1').on('click', function(){
        let html = '';
        html += '<section class="container content-section">';
        html += '<h2 class="section-header">SNEAKERS</h2>';
        html += '<div class="shop-item">';
        html += '<span class="shop-item-title">Air Max Plus III</span>';
        html += '</br>';
        html += '<img class="categorypic5" src="pictures/shoes/air max plus III/air-max-plus-iii-pic1.jpg">';
        html += '</br>';
        html += '<div class="description">Nice whites</div>';
        html += '<div class="shop-item-details">';
        html += '<span class="shop-item-price">Gh250.00</span>';
        html += '<button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>';
        html += '</div>';
        html += '</div>';
        html += '<div class="shop-item">';
        html += '<span class="shop-item-title">Airforce 1</span>';
        html += '<img class="categorypic5" src="pictures/shoes/airforce1/air-force-1-pic1.jpg">';
        html += '<div class="description">Great for running</div>';
        html += '<div class="shop-item-details">';
        html += '<span class="shop-item-price">Gh270</span>';
        html += '<button class="btn btn-primary shop-item-button"type="button">ADD TO CART</button>';
        html += '</div>';
        html += '</div>';
        html += '<div class="shop-item">';
        html += '<span class="shop-item-title">Jordan Max Aura</span>';
        html += '<img class="categorypic5" src="pictures/shoes/jordan max aura/jordan-max-aura-pic1.jpg">';
        html += '<div class="description">Feel your feet</div>';
        html += '<div class="shop-item-details">';
        html += '<span class="shop-item-price">$489.00</span>';
        html += '<button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>'
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '</section>';

        $('#list').append(html);
    });
});

$(document).ready(function(){
    $('#open-cat2').on('click', function(){
        let html = '';
        html += '<section class="container content-section">'
        html += '<h2 class="section-header">HOODIES</h2>'
        html += '<div class="shop-items">'
        html += '<div class="shop-item">'
        html += '<span class="shop-item-title">Jordan Flight Hoodie</span>'
        html += '<img class="categorypic6" src="pictures/Hoodies/Jordan flight Hoodie/jordan-flight-hoodie-pic1.jpg">'
        html += '<div class="description">Comfortable</div>'
        html += '<div class="shop-item-details">'
        html +=  '<span class="shop-item-price">Gh200.00</span>'
        html +=  '<button class="btn btn-secondary" type="button">ADD TO CART</button>'
        html += '</div>'
        html += '</div>'
        html += '<div class="shop-item">'
        html += '<span class="shop-item-title">Nike ACG Hoodie</span>'
        html += '<img class="categorypic6" src="pictures/Hoodies/nike acg hoodie/nike-acg-hoodie-pic1.jpg">'
        html += '<div class="description">Smooth on skin</div>'
        html += '<div class="shop-item-details">'
        html += '<span class="shop-item-price">Gh150.00</span>'
        html += '<button class="btn btn-secondary" type="button">ADD TO CART</button>'
        html += '</div>'
        html += '</div>'
        html += '<div class="shop-item">'
        html += '<span class="shop-item-title">Nike Swoosh Hoodie</span>'
        html += '<img class="categorypic6" src="pictures/Hoodies/nike swoosh hoodie/nike-swoosh-hoodie-pic1.jpg">'
        html += '<div class="description">Hav the extra feel of warmth</div>'
        html += '<div class="shop-item-details">'
        html += '<span class="shop-item-price">Gh180.00</span>'
        html += '<button class="btn btn-secondary" type="button">ADD TO CART</button>'
        html += '</div>'
        html += '</div>'
        html += '</div>'
        html += '</section>'
        
        $('#list2').append(html);
    });
});

$(document).ready(function(){
    $('#open-cat3').on('click', function(){
        let html = '';
        html += '<section class="container content-section">'
        html += '<h2 class="section-header">JERSEYS</h2>'
        html += '<div class="shop-items">'
        html += '<div class="shop-item">'
        html += '<span class="shop-item-title">England Jersey</span>'
        html += '<img class="categorypic7" src="pictures/Jerseys/england jersey/england-pic1.jpg">'
        html += '<div class="description">Authentic England Jersey</div>'
        html += '<div class="shop-item-details">'
        html +=  '<span class="shop-item-price">Gh100.00</span>'
        html +=  '<button class="btn btn-success" type="button">ADD TO CART</button>'
        html += '</div>'
        html += '</div>'
        html += '<div class="shop-item">'
        html += '<span class="shop-item-title">Paris Saint Germain Jersey</span>'
        html += '<img class="categorypic7" src="pictures/Jerseys/psg jersey/psg pic1.jpg">'
        html += '<div class="description">Authentic PSG jersey</div>'
        html += '<div class="shop-item-details">'
        html += '<span class="shop-item-price">Gh120.00</span>'
        html += '<button class="btn btn-success" type="button">ADD TO CART</button>'
        html += '</div>'
        html += '</div>'
        html += '<div class="shop-item">'
        html += '<span class="shop-item-title">Spurs Jersey</span>'
        html += '<img class="categorypic7" src="pictures/Jerseys/spurs-jersey/spurs-jersey-pic1.jpg">'
        html += '<div class="description">Authentic spurs Jersey</div>'
        html += '<div class="shop-item-details">'
        html += '<span class="shop-item-price">Gh100.00</span>'
        html += '<button class="btn btn-success" type="button">ADD TO CART</button>'
        html += '</div>'
        html += '</div>'
        html += '</div>'
        html += '</section>'
        
        $('#list3').append(html);
    });
});

var myIndex = 0;
iteration1();

function iteration1(){
    var i;
    var x = document.getElementsByClassName("cat-pic1");
    for(i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if(myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(iteration1, 2000);
}

var myIndex2 = 0;
iteration1b();

function iteration1b(){
    var i;
    var x = document.getElementsByClassName("cat-pic2");
    for(i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex2++;
    if(myIndex2 > x.length) {myIndex2 = 1}
    x[myIndex2-1].style.display = "block";
    setTimeout(iteration1b, 2000);
}

var myIndex3 = 0;
iteration1c();

function iteration1c(){
    var i;
    var x = document.getElementsByClassName("cat-pic3");
    for(i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex3++;
    if(myIndex3 > x.length) {myIndex3 = 1}
    x[myIndex3-1].style.display = "block";
    setTimeout(iteration1c, 2000);
}