
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
    status: "booked"
}
]
let book = [{
    custname: "AGR",
    date: "06.07.2023",
    starttime: "12:00PM",
    endtime: "12:00PM",
    roomid: "1"
},
{
    custname: "AGR",
    date: "06.07.2023",
    starttime: "12:00PM",
    endtime: "12:00PM",
    roomid: "4"
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

    var a = []
    for (var i = 0; i < room.length; i++) {
        a[i] = book.map((obj) => {

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



    return (JSON.stringify(a))

}

const cusDetails = () => {
    var e = {}

    var f = []
    for (var i = 0; i < room.length; i++) {
        f[i] = book.map((obj) => {

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



    return (JSON.stringify(f))

}



export { createRoom, readRoom, roomBooking, readBook, roomDetails,cusDetails }