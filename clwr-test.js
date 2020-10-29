const pickReports =
  "https://app.powerbi.com/groups/me/reports/f0c1daa3-aa9e-4891-8809-37b7df3bc0b1/";
const foodSection1 = "ReportSectione895c1142160cc56ce23";
const foodSection2 = "ReportSection13788903743ec64ca747";
const akcSection = "ReportSection7817c8af9e009298779b";
const fsSection = "ReportSection84c9ccb8aff1a90475c5";

const shipmentsReports =
  "https://app.powerbi.com/groups/me/reports/8538cb68-2992-4f66-8883-da340cd48cb3/";
const shipmentsMG = "ReportSection";

const shippingsReports =
  "https://app.powerbi.com/groups/me/reports/c320aa5b-17b6-4714-b231-5f7d96899629/";
const embarkationReport = "ReportSection5b4758204d6098675a94";

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
        window.location.href.includes(akcSection) ||
        window.location.href.includes(pickCovidInfo_PL) ||
        window.location.href.includes(pickCovidInfo_UA)
      ) {
        return;
      } else {
        window.location = pickReports + akcSection;
      }
    }

    if (config.shippings) {
      if (
        window.location.href.includes(embarkationReport)
      ) {
        return;
      } else {
        window.location = shippingsReports + embarkationReport;
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
    const tab = document.querySelectorAll("div[role=tab]");
    setInterval(() => {
      // Kliknięcie pierwszej zakładki
      tab[0].click();
      document.querySelector("button.refresh").click();
      setTimeout(() => {
        // Kliknięcie drugiej zakładki
        tab[1].click();
        // Co 30 sekund
      }, 30000);
      setTimeout(() => {
        // Kliknięcie drugiej zakładki
        tab[7].click();
        // Co 30 sekund
      }, 60000);
      setTimeout(() => {
        // Kliknięcie drugiej zakładki
        tab[8].click();
        // Co 30 sekund
      }, 90000);
      // Cały cykl się powtarza co 60 sekund
    }, 120000);
    // Po 5 sekundach od wejścia pierwszy raz na stronę
  }, 5000);
} else if (
  window.location.href === shipmentsReports + shipmentsMG
) {
  setTimeout(() => {
    // Pobranie wszystkich zakładek
    const tab = document.querySelectorAll("div[role=tab]");
    setInterval(() => {
      // Kliknięcie pierwszej zakładki
      tab[0].click();
      document.querySelector("button.refresh").click();
      setTimeout(() => {
        // Kliknięcie drugiej zakładki
        null;
        // Co 30 sekund
      }, 30000);
      setTimeout(() => {
        // Kliknięcie drugiej zakładki
        null;
        // Co 30 sekund
      }, 60000);
      // Cały cykl się powtarza co 60 sekund
    }, 90000);
    // Po 5 sekundach od wejścia pierwszy raz na stronę
  }, 5000);
} else if (window.location.href.includes(fsSection)) {
  setTimeout(() => {
    const tab = document.querySelectorAll("div[role=tab]");
    console.log('git');

    setInterval(() => {
      tab[3].click();
      document.querySelector("button.refresh").click();
      // Cały cykl się powtarza co 90 sekund
    }, 90000);
    // Po 5 sekundach od wejścia pierwszy raz na stronę
  }, 5000);
} else if (window.location.href.includes(akcSection)) {
  setTimeout(() => {
    const tab = document.querySelectorAll("div[role=tab]");
    setInterval(() => {
      tab[2].click();
      document.querySelector("button.refresh").click();

      setTimeout(() => {
        // Kliknięcie drugiej zakładki
        tab[7].click();
        // Co 30 sekund
      }, 30000);
      setTimeout(() => {
        // Kliknięcie drugiej zakładki
        tab[8].click();
        // Co 30 sekund
      }, 60000);
      // Cały cykl się powtarza co 90 sekund
    }, 90000);
    // Po 5 sekundach od wejścia pierwszy raz na stronę
  }, 15000);

  //Chłodnia
} else if (window.location.href.includes(embarkationReport)) {
  setTimeout(() => {
    const tab = document.querySelectorAll("div[role=tab]");
    setInterval(() => {
      tab[0].click();
      document.querySelector("button.refresh").click();

      setTimeout(() => {
        // Kliknięcie drugiej zakładki
        tab[2].click();
        // Co 30 sekund
      }, 30000);
      setTimeout(() => {
        // Kliknięcie drugiej zakładki
        tab[3].click();
        // Co 30 sekund
      }, 60000);
      // Cały cykl się powtarza co 90 sekund
    }, 90000);
    // Po 5 sekundach od wejścia pierwszy raz na stronę
  }, 5000);
}