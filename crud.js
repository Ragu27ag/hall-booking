
// let room = []
// let book = []
let room = [{
    seats: "3",
    amenities: ["swimming pool", "AC", "restaurent"],
    Pricehr: "1000",
    roomid: "1",
    status: "booked"
},
{
    seats: "5",
    amenities: ["swimming pool", "AC", "restaurent"],
    Pricehr: "10000",
    roomid: "3",
    status: "notbooked"
},
{
    seats: "50",
    amenities: ["swimming pool", "AC", "restaurent"],
    Pricehr: "10000",
    roomid: "2",
    status: "booked"
}
]
let book = [{
    custname: "AGR",
    date: "06.07.2023",
    starttime: "12:00PM",
    endtime: "12:00PM",
    roomid: "1",
    bookingid:'1',
    bookingdate:'05.07.2023',
    bookingstatus:'confirmed'
},
{
    custname: "Ragu",
    date: "24.07.2023",
    starttime: "12:00PM",
    endtime: "12:00PM",
    roomid: "2",
    bookingid:'2',
    bookingdate:'05.07.2023',
    bookingstatus:'confirmed'
},
{
    custname: "Ragu",
    date: "25.07.2023",
    starttime: "3:00PM",
    endtime: "12:00PM",
    roomid: "2",
    bookingid:'7',
    bookingdate:'05.07.2023',
    bookingstatus:'not-confirmed'
}]



const readRoom = () =>
    (JSON.stringify(room))

const readBook = () =>
    (JSON.stringify(book))


const createRoom = (roomobj) => {
    room.push(roomobj)
}

const roomBooking = (bookRoom) => {
    book.push(bookRoom)
}

const roomDetails = () => {
    var d = {}
    var finaldata = []
    var roomdata = []
    for (var i = 0; i < room.length; i++) {
        roomdata[i] = book.map((obj) => {

            if (obj.roomid === room[i].roomid) {

                return (
                    d = {
                        'id': room[i].roomid,
                        'status': room[i].status,
                        'name': obj.custname,
                        'date': obj.date,
                        'starttime': obj.starttime,
                        'endtime': obj.endtime
                    }
                )

            }



        })

    }
    for(var k = 0; k < roomdata.length;k++){
        for(var j = 0 ; j < roomdata[k].length;j++){
            if(roomdata[k][j] !== undefined){
                finaldata.push(roomdata[k][j])
            }
        }
      
    }

   


    return (JSON.stringify(finaldata))

}

const cusDetails = () => {
    var e = {}
    var cusfinaldata = []
    var cusdata = []
    for (var i = 0; i < room.length; i++) {
        cusdata[i] = book.map((obj) => {

            if (obj.roomid === room[i].roomid) {

                return (
                    e = {
                        'id': room[i].roomid,

                        'name': obj.custname,
                        'date': obj.date,
                        'starttime': obj.starttime,
                        'endtime': obj.endtime
                    }
                )

            }



        })


    }

    for(var k = 0; k < cusdata.length;k++){
        for(var j = 0 ; j < cusdata[k].length;j++){
            if(cusdata[k][j] !== undefined){
                cusfinaldata.push(cusdata[k][j])
            }
        }
      
    }




    return (JSON.stringify(cusfinaldata))

}

const countCus = (name) => {
        const count = book.filter(({custname}) => custname === name);
        
        return ({...count ,count : count.length})
}



export { createRoom, readRoom, roomBooking, readBook, roomDetails, cusDetails,countCus }




// [
//     [
//         {
//             "id": "1",
//             "status": "booked",
//             "name": "AGR",
//             "date": "06.07.2023",
//             "starttime": "12:00PM",
//             "endtime": "12:00PM"
//         },
//         null
//     ],
//     [
//         null,
//         null
//     ],
//     [
//         null,
//         {
//             "id": "2",
//             "status": "booked",
//             "name": "Ragu",
//             "date": "06.07.2023",
//             "starttime": "12:00PM",
//             "endtime": "12:00PM"
//         }
//     ]
// ]