import express from  'express';


var room = []

const createRoom = (roomobj) => {
    room = [...roomobj]
}



export {createRoom}