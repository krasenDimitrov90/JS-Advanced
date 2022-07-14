function destinationList(destinations, sortCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination,
            this.price = Number(price),
            this.status = status
        }
    }

    let destinationsList = destinations.map(x => {
        return new Ticket(...(x.split('|')))
    })

    switch (sortCriteria) {
        case 'destination':
            destinationsList.sort((a, b) => a.destination.localeCompare(b.destination))
            break;
        case 'price':
            destinationsList.sort((a, b) => a.price - b.price)
            break;
        case 'status':
            destinationsList.sort((a, b) => a.status.localeCompare(b.status))
            break
    }
    return destinationsList;
}

destinationList(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status'

)