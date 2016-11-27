var app = new Vue({
    el: '#card',
    data: {
        img: 'http://c7.nrostatic.com/sites/default/files/uploaded/donald-trump-bankruptcy-lies-r.jpg',
        items: [
            { label: 'Price', value: '10.000 €', selected: false },
            { label: 'Mileage', value: '100.000 KM', selected: false },
            { label: 'Registration', value: '01.10.2010', selected: false },
            { label: 'Power', value: '100 kW / 140 HP', selected: false },
            { label: 'Displacement', value: '3799', selected: false }
        ]
    },
    methods: {
        toggleSelected: function(item) {
            this.items.forEach(function (item) {
                item.selected = false;
            });

            item.selected = !item.selected;
        }
    }
});