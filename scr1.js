async function getTicket(id, name, surname, seat, class1, ticket) { //ункция всегда возвращает промис
    return new Promise((resolve, reject) => {
        console.log('Tickets');
        setTimeout(function () {
            let success = true; 
            if (success){
                resolve({ id: 1, name: 'Татьяна', surname:'Недосекина', seat: '2А', class1: 'econom'});
            }
            else{
                reject('Ticket ERROR');
                let success = true; 
            }
        }, 0);
    
    })
  
}

async function getBooking(ticket) {
    return new Promise((resolve, reject) => {
        console.log('Booking');
        setTimeout(function () {
            let success = true; 
            if (success)
                resolve({ id: 2, name: 'Татьяна', surname:'Недосекина', room: 7})
            else
                reject('Booking ERROR');
        },1000);
    })
}


async function getVisa(booking) {
    return new Promise((resolve, reject) => {
        console.log('Visa');
        setTimeout(function () {
            let success = true; 
            if (success)
                resolve({ id: 3, name: 'Татьяна', surname:'Недосекина', ticket_id: 1, booking_id: 2 })
            else
                reject('Visa ERROR');
        }, 1000);
    })
}

(async function main() {//функция для самого объекта
    try {    
    let ticket = await  getTicket(); //await заставляет ждать до тех пор, пока промис справа от await не выполнится
    let booking = await getBooking();
    let visa =  await getVisa();
        console.log('Visa voucher:');
        console.log(visa)}
    catch(err) {
        console.error(err);}
    finally {}
}) ();