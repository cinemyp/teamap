ymaps.ready(init);

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

    var myPlaceMark = new ymaps.Placemark([55.78572606893448, 37.5989145], {
        balloonContentHeader: 'Чайная Каста',
        balloonContentBody: 'ул. Палиха, 7-9к2',
        balloonContentFooter: '12.00 - 21.00',
        hintContent: "Чайная Каста"
    });
    var myPlaceMark1 = new ymaps.Placemark([55.7715500689577, 37.60619049999994], {
        balloonContentHeader: 'Мойчай.ру',
        balloonContentBody: 'м. Пушкинская, ул. Малая Дмитровка, д. 24/2 стр.2',
        balloonContentFooter: '10.00 - 00.00',
        hintContent: "Мойчай.ру"
    });
    var myPlaceMark2 = new ymaps.Placemark([55.77375306896333, 37.68252049999995], {
        balloonContentHeader: 'Мойчай.ру',
        balloonContentBody: 'м. Бауманская, ул. Бакунинская, д. 14',
        balloonContentFooter: '11.30 - 22.00',
        hintContent: "Мойчай.ру"
    });
    var myPlaceMark3 = new ymaps.Placemark([55.763457568966686, 37.636023499999936], {
        balloonContentHeader: 'Мойчай.ру',
        balloonContentBody: 'м. Чистые Пруды, ул. Мясницкая, д. 24/7, стр.2',
        balloonContentFooter: '10.00 - 00.00',
        hintContent: "Мойчай.ру"
    });
    var myPlaceMark4 = new ymaps.Placemark([55.7121120690433, 37.62055449999994], {
        balloonContentHeader: 'Мойчай.ру',
        balloonContentBody: 'М. Тульская, ул. Мытная, 74, Даниловский рынок',
        balloonContentFooter: '8.00 - 21.00',
        hintContent: "Мойчай.ру"
    });
    var myPlaceMark5 = new ymaps.Placemark([55.62556706911858, 37.612290499999986], {
        balloonContentHeader: 'Мойчай.ру',
        balloonContentBody: 'М. Тульская, ул. Мытная, 74, Даниловский рынок',
        balloonContentFooter: '11.00 - 22.00',
        hintContent: "Мойчай.ру"
    });
    places.add(myPlaceMark);
    places.add(myPlaceMark1);
    places.add(myPlaceMark2);
    places.add(myPlaceMark3);
    places.add(myPlaceMark4);
    places.add(myPlaceMark5);
    myMap.geoObjects.add(places);
}