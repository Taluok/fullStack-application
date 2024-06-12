import mongoose from 'mongoose';

const hotelSchema = new mongoose.Schema({
    // Campo para el nombre del hotel
    hotelName: {
        type: String,
        required: true
    },
    // Campo para el tipo de hotel
    hotelType: {
        type: String,
        required: true
    },
    // Campo para la ciudad del hotel
    city: {
        type: String,
        required: true
    },
    // Campo para la dirección del hotel
    address: {
        type: String,
        required: true
    },
    // Campo para la distancia del hotel
    distance: {
        type: Number,
        required: true
    },
    // Campo para las fotos del hotel
    photos: {
        type: [String],
    },
    // Campo para la descripción del hotel
    hotelDescription: {
        type: String,
        required: true
    },
    // Campo para la calificación del hotel
    rating: {
        type: Number,
        min: 0,
        max: 5,
        required: true
    },
    // Campo para los tipos de habitaciones del hotel
    roomTypes: {
        type: [String],
    },
    // Campo para el precio más barato del hotel
    cheapestPrice: {
        type: Number,
        required: true,
        min: 0
    },
    // Campo para indicar si el hotel es destacado
    isFeatured: {
        type: Boolean,
        default: false
    }
});

// Modelo de hotel
const Hotel = mongoose.model('Hotel', hotelSchema);

export default Hotel;