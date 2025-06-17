class ExtractServerData {

    /**
     * Extracts the server name from the current URL.
     * Naming schema from AirlineSim is; "serverName.airlinesim.aero"
     * @returns {string}
     */
    static getServerName() {
        const hostname = window.location.hostname;
        return hostname.split(".")[0];
    }

}