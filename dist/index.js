export default {
    getConfig: function () {
        return {
            theme: "dark"
        };
    },
    getCurrentDateTime: function () {
        var d = new Date();
        return d.toLocaleDateString() + " " + d.toLocaleTimeString();
    }
};
