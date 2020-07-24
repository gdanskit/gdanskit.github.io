import { pickReports, shipmentsReports, shippingsReports } from "./reports.js";

class PowerBI {
  constructor(area, type) {
    this.area = area;
    this.type = type;
  }

  checkTime() {
    const currentHour = new Date().getHours();
    return currentHour;
  }

  showReport() {
    const currentHour = this.checkTime();

    if (currentHour >= 6 && currentHour <= 14) {
      if (
        window.location.href ===
          shipmentsReports.main + shipmentsReports[this.area] ||
        window.location.href.includes(shipmentsReports.covidPL) ||
        window.location.href.includes(shipmentsReports.covidUA)
      ) {
        return;
      } else {
        window.location = shipmentsReports.main + shipmentsReports[this.area];
      }
    }
  }
}

const test = new PowerBI("mg", "food");
test.showReport();
