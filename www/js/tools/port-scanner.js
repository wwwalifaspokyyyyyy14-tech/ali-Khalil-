
const PortScanner = {
  async scanLocal() {
    const ports = [80, 443, 8080, 3000, 3306, 5432];
    const results = [];

    for (const port of ports) {
      try {
        const response = await fetch(
          `http://127.0.0.1:${port}`,
          { mode: "no-cors", signal: AbortSignal.timeout(1200) }
        );

        results.push({
          port,
          status: "تم إرسال طلب HTTP"
        });
      } catch {
        results.push({
          port,
          status: "لم يتم الاتصال"
        });
      }
    }

    return results;
  }
};

window.PortScanner = PortScanner;
