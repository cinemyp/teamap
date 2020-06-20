ymaps.ready(init);

var marks = [
    [
        1,
        55.75955707,
        37.583077,
        "Китчай",
        "м. Баррикадная, ул. Баррикадная, д. 2\/1, стр. 1",
        "Пн-Вс с 10:00 до 22:00",
        "https:\/\/kitchai.ru\/"
    ],
    [
        2,
        55.82854107,
        37.491341,
        "Чайные львы",
        "м. Балтийская, Ленинградское шоссе, д. 28, к. 1",
        "Пн-Вс с 12:00 до 21:00",
        "http:\/\/tealions.ru\/"
    ],
    [
        3,
        55.73555557,
        37.6240315,
        "Нитка",
        "м. Полянка, ул. Большая Ордынка 46, стр. 3",
        "Пн-Вс с 12:00 до 21:00",
        "https:\/\/nitkatea.com\/"
    ],
    [
        4,
        55.71211207,
        37.6205545,
        "Мой чай",
        "м. Тульская, ул. Мытная, д. 74",
        "Пн-Вс с 10:00 до 00:00",
        "https:\/\/moychay.ru\/"
    ],
    [
        5,
        55.77155007,
        37.6061905,
        "Мой чай",
        "м. Пушкинская, ул. Малая Дмитровка, д. 24\/2, стр.2",
        "Пн-Вс с 10:00 до 00:00",
        "https:\/\/moychay.ru\/"
    ],
    [
        6,
        55.76345757,
        37.6360235,
        "Мой чай",
        "м. Чистые Пруды, ул. Мясницкая, д. 24\\7, стр.2",
        "Пн-Вс с 10:00 до 00:00",
        "https:\/\/moychay.ru\/"
    ],
    [
        7,
        55.77375307,
        37.6825205,
        "Мой чай",
        "м. Бауманская, ул. Бакунинская, д. 14, к. 1",
        "Пн-Вс с 11:30 до 22:00",
        "https:\/\/moychay.ru\/"
    ],
    [
        8,
        55.62556707,
        37.6122905,
        "Мой чай",
        "м. Южная, ул. Кировоградская, д. 9, к. 1",
        "Пн-Вс с 11:00 до 22:00",
        "https:\/\/moychay.ru\/"
    ],
    [
        9,
        55.77488707,
        37.6224325,
        "Дом чая",
        "м. Цветной бульвар, ул. Троицкая, д. 7\/1, стр. 1",
        "Пн-Вс с 13:00 до 21:00",
        "https:\/\/dom-chaya.ru\/"
    ],
    [
        10,
        55.68265057,
        37.6619135,
        "Сэр Пуэр",
        "м. Коломенская, просп. Андропова, д. 22",
        "Пн-Вс с 10:00 до 21:00",
        "https:\/\/sirpuer.com\/"
    ],
    [
        11,
        55.70837407,
        37.6254055,
        "Сэр Пуэр",
        "м. Тульская, Холодильный переулок,.д. 3",
        "Пн-Вс с 10:00 до 21:00",
        "https:\/\/sirpuer.com\/"
    ],
    [
        12,
        55.76024107,
        37.611347,
        "Чайная высота",
        "м. Охотный ряд, ул. Тверская, д. 6, стр. 1",
        "Пн-Вс с 12:00 до 21:00",
        "https:\/\/cha108.ru\/"
    ],
    [
        13,
        55.76772157,
        37.565973,
        "Души не чаю",
        "м. Улица 1905 года, ул. Климашкина, д. 21",
        "Пн-Вс с 12:00 до 21:00",
        "https:\/\/dushinechaju.ru\/"
    ],
    [
        14,
        55.77796007,
        37.6330685,
        "Чайная тайга",
        "м. Проспект Мира, просп. Мира, д. 26, стр. 1",
        "Пн-Вс с 10:00 до 22:00",
        "https:\/\/taigatea.ru\/"
    ],
    [
        15,
        55.76093007,
        37.6356015,
        "Чайных дел мастерская",
        "м. Лубянка, Армянский перeулок, д. 3-5, стр. 10 ",
        "Пн-Вс с 12:00 до 24:00",
        "https:\/\/teaworks.ru\/"
    ]
];

function init() {

    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.76, 37.64],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 11
    }, { autoFitToViewport: 'always' });
    var places = new ymaps.GeoObjectCollection({}, { preset: 'islands#darkGreenDotIcon' });


    for (var i = 0; i < marks.length; i++) {
        parseShopList(marks[i], places);
    }

    myMap.geoObjects.add(places);

    places.events.add('click', function(e) {
        console.log(e.get('target').properties._data);
        onShopClick(e.get('target').properties._data);
    });

    places.each(function(item) {
        addShopToList(item.properties._data.balloonContentHeader);
    });

}

function onShopClick(data) {
    $(".shops").hide();
    $('#shop-img').attr('src', 'img/moichai1.jpg')
    $('.shop-content .title').html('<h1>' + data.balloonContentHeader + '</h1>')
    $('.shop-content .places').html('<p>' + data.balloonContentBody + '</p><p>' + data.balloonContentFooter + '</p>');
    //('.shop').prepend('<img src="img/moichai1.jpg">')

}
var names = [];

function addShopToList(name) {
    if (names.find(function(item) { return item == name; })) {
        console.log();
        return;
    }
    $(".shops-list").append("<li><h2>" + name + "</h2></li>");
    names.push(name);
}

function parseShopList(shopArr, places) {
    for (var i = 0; i < shopArr.length; i++) {
        //var shop = {
        //    id: shopArr[0],
        //    coords: shopArr[1],
        //    title: shopArr[2],
        //    address: shopArr[3],
        //    time: shopArr[4],
        //    link: shopArr[5]
        //}
        console.log(typeof(shopArr[1]));
        var myPlaceMark = new ymaps.Placemark([shopArr[1], shopArr[2]], {
            balloonContentHeader: shopArr[3],
            balloonContentBody: shopArr[4],
            balloonContentFooter: shopArr[5],
            hintContent: shopArr[3]
        });
        places.add(myPlaceMark);
    }
}

function back() {
    $(".shops").show();
    $(".shop-content").hide();
}