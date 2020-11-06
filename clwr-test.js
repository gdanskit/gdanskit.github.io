const pickReports =
  "https://app.powerbi.com/groups/me/reports/f0c1daa3-aa9e-4891-8809-37b7df3bc0b1/";
const foodSection1 = "ReportSectione895c1142160cc56ce23";
const foodSection2 = "ReportSection13788903743ec64ca747";
const akcSection = "ReportSection7817c8af9e009298779b";
const fsSection = "ReportSection84c9ccb8aff1a90475c5";

const shipmentsReports =
  "https://app.powerbi.com/groups/me/reports/8538cb68-2992-4f66-8883-da340cd48cb3/";
const shipmentsMG = "ReportSection3a36623f6ea27584e358";

const checkTime = () => {
  const currentHour = new Date().getHours();
  return currentHour;
};

setInterval(() => {
  if (checkTime() >= 6 && checkTime() <= 14) {
    if (config.shipmentsMG) {
      if (
        window.location.href === shipmentsReports + shipmentsMG 
      ) {
        return;
      } else {
        window.location = shipmentsReports + shipmentsMG;
      }
    }
  }

  if (checkTime() >= 15 || checkTime() <= 5) {
    if (config.food) {
      if (
        window.location.href.includes(foodSection1) ||
        window.location.href.includes(foodSection2) 
      ) {
        return;
      } else {
        window.location = pickReports + foodSection1;
      }
    }

    if (config.fs) {
      if (
        window.location.href.includes(fsSection) 
      ) {
        return;
      } else {
        window.location = pickReports + fsSection;
      }
    }

    if (config.akc) {
      if (
        window.location.href.includes(akcSection) 
      ) {
        return;
      } else {
        window.location = pickReports + akcSection;
      }
    }
  }
}, 60000);

if (
  window.location.href.includes(foodSection1) ||
  window.location.href.includes(foodSection2)
) {
  setTimeout(() => {
    // Pobranie wszystkich zakładek
    const tab = document.querySelectorAll("div.itemRow.pbi-focus-outline");
    setInterval(() => {
      // Kliknięcie pierwszej zakładki
      tab[0].click();
      document.querySelector("button#reportAppBarRefreshBtn").click();
      setTimeout(() => {
        // Kliknięcie drugiej zakładki
        tab[1].click();
        // Co 30 sekund
      }, 45000);
      // Cały cykl się powtarza co 60 sekund
    }, 90000);
    // Po 5 sekundach od wejścia pierwszy raz na stronę
  }, 5000);
} else if (
  window.location.href === shipmentsReports + shipmentsMG 
) {
  setTimeout(() => {
    // Pobranie wszystkich zakładek
    const tab = document.querySelectorAll("div.itemRow.pbi-focus-outline");
    setInterval(() => {
      // Kliknięcie pierwszej zakładki
      tab[0].click();
      document.querySelector("button#reportAppBarRefreshBtn").click();
      // Cały cykl się powtarza co 60 sekund
    }, 90000);
    // Po 5 sekundach od wejścia pierwszy raz na stronę
  }, 5000);
} else if (window.location.href.includes(fsSection)) {
  setTimeout(() => {
    const tab = document.querySelectorAll("div.itemRow.pbi-focus-outline");

    setInterval(() => {
      tab[3].click();
      document.querySelector("button#reportAppBarRefreshBtn").click();

      // Cały cykl się powtarza co 90 sekund
    }, 90000);
    // Po 5 sekundach od wejścia pierwszy raz na stronę
  }, 5000);
} else if (window.location.href.includes(akcSection)) {
  setTimeout(() => {
    const tab = document.querySelectorAll("div.itemRow.pbi-focus-outline");
    setInterval(() => {
      tab[2].click();
      document.querySelector("button#reportAppBarRefreshBtn").click();

      // Cały cykl się powtarza co 90 sekund
    }, 90000);
    // Po 5 sekundach od wejścia pierwszy raz na stronę
  }, 5000);
}
