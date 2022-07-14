var cleave = new Cleave('.credit', {
    creditCard: true,
    onCreditCardTypeChanged: function (type) {
    }
});

var cleave = new Cleave('.phone', {
    phone: true,
    phoneRegionCode: '{country}'
});

var cleave = new Cleave('.date', {
    date: true,
    delimiter: '-',
    datePattern: ['Y', 'm', 'd']
});