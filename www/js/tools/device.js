const DeviceTools = {
  getInfo() {
    return {
      platform: navigator.platform,
      language: navigator.language,
      online: navigator.onLine,
      screen: `${screen.width}x${screen.height}`,
      browser: navigator.userAgent,
      cores: navigator.hardwareConcurrency || "غير متاح",
      memory: navigator.deviceMemory || "غير متاح"
    };
  }
};

window.DeviceTools = DeviceTools;
