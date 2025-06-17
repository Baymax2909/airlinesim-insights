chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.content === 'FlightDetails') {

            console.log('Flight details received');

            sendResponse({status: 'Data received!'});
        }

        return false;
    }
)