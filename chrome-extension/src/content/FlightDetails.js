class FlightDetails {

    constructor() {
        // Initialize only
    }

    init() {

    }

}

chrome.runtime.sendMessage(
    {
        content: 'FlightDetails'
    },
    function (response) {
        console.log('Response from background:', response);
    }
)