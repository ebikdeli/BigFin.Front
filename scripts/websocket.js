const apple = document.querySelector('.apple-price');
const bitcoin = document.querySelector('.bitcoin-price');


const socket = new WebSocket('wss://ws.finnhub.io?token=c26pfh2ad3i8b33nvh7g');

// Connection opened -> Subscribe
socket.addEventListener('open', function (event) {
    socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'AAPL'}))
    socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'BINANCE:BTCUSDT'}))
    socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'IC MARKETS:1'}))
});

// Listen for messages
socket.addEventListener('message', function (event) {
    // console.log('Message from server ', event.data);
    rawData = JSON.parse(event.data)
    // console.log(rawData['data']);
    rawData['data'].forEach(elem => {
        // console.log(elem);
        if (elem['s'] == 'BINANCE:BTCUSDT'){
            bitcoin.innerHTML = elem['p'];
        }
        else if(elem['s'] == 'APPLE'){
            apple.innerHTML = elem['p'];
        }
    })
    // console.log(rawData['data'][0]['p']);
    // apple.innerHTML = rawData['data'][0]['p']
});

// Unsubscribe
var unsubscribe = function(symbol) {
    socket.send(JSON.stringify({'type':'unsubscribe','symbol': symbol}))
}
