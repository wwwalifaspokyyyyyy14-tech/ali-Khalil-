const NetworkTools = {
  async connectionInfo() {
    const info = {
      online: navigator.onLine,
      type: navigator.connection?.effectiveType || "غير متاح",
      downlink: navigator.connection?.downlink || "غير متاح",
      rtt: navigator.connection?.rtt || "غير متاح"
    };

    return info;
  },

  async analyzeURL(value) {
    try {
      const url = new URL(value);

      return {
        valid: true,
        protocol: url.protocol,
        domain: url.hostname,
        secure: url.protocol === "https:",
        credentials: Boolean(url.username || url.password)
      };
    } catch {
      return { valid: false };
    }
  }
};

window.NetworkTools = NetworkTools;
