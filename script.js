function getTicket() {
    return new Promise((resolve, reject) => {
        console.log('Получение ticket')
        setTimeout(function () {
            let success = true; // успешное выполнение запроса
            if (success) {
                resolve({ id: 1, name: 'Alice', surname: 'Fisher', flightClass: 'econom', seat: '26A' })
            } else {
                reject('Ошибка получения ticket');
            }
        }, 1000);
    })
}
function getBooking(ticket) {
    return new Promise((resolve, reject) => {
        console.log('Получение booking')
        setTimeout(function () {
            let success = true; // успешное выполнение запроса
            if (success) {
                resolve([
                    { id: 9, ticket_id: ticket.id, hotel:'MosPolytech Resort', room: 81, name: ticket.name, surname: ticket.surname, 
                        flightClass: ticket.flightClass, seat: ticket.seat },
                ])
            } else {
                reject('Ошибка получения booking');
            }
        }, 1000);
    })
}
function getVisa(booking) {
    return new Promise((resolve, reject) => {
        console.log('Получение visa')
        setTimeout(function () {
            let success = true; // успешное выполнение запроса
            if (success) {
                resolve([
                    { id: 123, visa_name: 'schengen'},
                    {name: booking.name, surname: booking.surname}, 
                    {flightClass: booking.flightClass, flightSeat: booking.seat},
                    {hotel: booking.hotel, hotelRoom:booking.room },
                ])
            } else {
                reject('Ошибка получения visa');
            }
        }, 1000);
    })
}

let resultVisa = [];
let promiseGetTicket = getTicket()
    .then(ticket => getBooking(ticket))
    .then(booking => {
        Promise.all(
            booking.map(booking => getVisa(booking))
        ).then(visa => console.log(visa));
    })
    .catch(err => console.error(err));
