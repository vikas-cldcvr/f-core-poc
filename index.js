export default {
  getConfig() {
    return {
      theme: "dark",
    };
  },
  getCurrentDateTime() {
    const d = new Date();

    return d.toLocaleDateString() + " " + d.toLocaleTimeString();
  },
};
