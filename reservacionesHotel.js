/*DÍA 15
En este desafío deberás crear un sistema de administración para un hotel.

El objetivo de este ejercicio es utilizar closures para implementar la lógica de una función (hotelSystem) que administre un hotel. La función recibirá un parámetro rooms, definirá el número total de habitaciones.

El closure debe retornar las siguientes funciones:

searchReservation(id): esta función permitirá buscar una reservación por su ID. En caso de no encontrarla, se retornará un error con el mensaje "La reservación no fue encontrada".

getSortReservations(): esta función nos devolverá una copia de las reservaciones sin modificar el array original ordenando las reservaciones por fecha de check-in de manera ascendente.

addReservation(reservation): esta función se usará para agregar una nueva reservación. Debe asegurarse de que la habitación solicitada esté disponible para las fechas de check-in y check-out. En caso de que esté reservada, se retornará un error con el mensaje "La habitación no está disponible".

removeReservation(id): esta función eliminará la reservación correspondiente al ID recibido y la retornará. En caso de que la reservación no exista, se retornará un error con el mensaje "La reservación que se busca remover no existe".

getReservations(): esta función nos devolverá todas las reservaciones.

getAvailableRooms(checkIn, checkOut): esta función recibirá dos parámetros, checkIn y checkOut con formato "dd/mm". La función debe devolver las habitaciones disponibles para las fechas dadas.

El formato que recibirás para las reservaciones será el siguiente:

id: un identificador único
name: El nombre de quien agenda
checkIn: Fecha de llegada
checkOut: Fecha de salida
roomNumber: La habitación solicitada
Ejemplo 1:

Input:

const hotel = hotelSystem(10);

// Agregar una nueva reservación
hotel.addReservation({
  id: 1,
  name: "John Doe",
  checkIn: "01/01",
  checkOut: "02/01",
  roomNumber: 1,
});

hotel.getReservations();

Output:
[
  {
    id: 1,
    name: "John Doe",
    checkIn: "01/01",
    checkOut: "02/01",
    roomNumber: 1,
  }
]

Ejemplo 2:

Input:

const hotel = hotelSystem(10);

hotel.addReservation({
  id: 1,
  name: "John Doe",
  checkIn: "01/01",
  checkOut: "02/01",
  roomNumber: 1,
});

hotel.addReservation({
  id: 2,
  name: "Pepe Doe",
  checkIn: "01/01",
  checkOut: "02/01",
  roomNumber: 7,
});

// Buscar una resevación hecha
hotel.searchReservation(2);

Output:
{
  id: 2,
  name: "Pepe Doe",
  checkIn: "01/01",
  checkOut: "02/01",
  roomNumber: 7,
}

Ejemplo 3:

Input:

const hotel = hotelSystem(10);

hotel.addReservation({
  id: 1,
  name: "John Doe",
  checkIn: "01/01",
  checkOut: "02/01",
  roomNumber: 1,
});

hotel.addReservation({
  id: 2,
  name: "Pepe Doe",
  checkIn: "01/01",
  checkOut: "10/01",
  roomNumber: 9,
});

// Buscamos habitaciones disponibles entre el 01 y el 05 del primer mes
hotel.getAvailableRooms("01/01", "05/01")

Output:

[2, 3, 4, 5, 6, 7, 8, 10]
*/

export function hotelSystem(rooms) {
  const reserv = [];
  return {
    searchReservation: id => {
      const res = reserv.find(reserve => reserve.id === id);
      if (res) return res;
      else throw new Error("La reservación no fue encontrada");
    },
    getSortReservations: () => {
      return [...reserv].sort((reserve1, reserve2) => {
        if (reserve1.checkIn > reserve2.checkIn) return 1;
        if (reserve1.checkIn < reserve2.checkIn) return -1;
        if (reserve1.checkIn === reserve2.checkIn) return 0;
      });
    },
    addReservation: reservation => {
      if (reservation.checkIn > reservation.checkOut) {
        throw new Error("La fecha de llegada no puede ser después de la salida");
      }
      const isRoomReserved = reserv.filter(reserve =>
        reserve.checkIn <= reservation.checkOut &&
        reserve.checkOut >= reservation.checkIn
      ).some(reserve =>
        reserve.roomNumber === reservation.roomNumber
      );
      if (isRoomReserved) throw new Error("La habitación no está disponible");
      reserv.push(reservation);
      return "Reservación registrada exitosamente";
    },
    removeReservation: id => {
      const index = reserv.findIndex(reserve => reserve.id === id);
      if (index === -1) throw new Error("La reservación que se busca remover no existe");
      return reserv.splice(index, 1)[0];
    },
    getReservations: () => reserv,
    getAvailableRooms: (checkIn, checkOut) => {
      const availableRooms = [];
      let index = 0;
      for (let i = 0; i < rooms; i++) {
        availableRooms[i] = i + 1;
      }
      reserv.filter(reserve =>
        reserve.checkIn <= checkOut &&
        reserve.checkOut >= checkIn
      ).forEach(reserve => {
        index = availableRooms.findIndex(num => reserve.roomNumber === num);
        if (index != -1) availableRooms.splice(index, 1);
      });
      return availableRooms;
    }
  }
}
