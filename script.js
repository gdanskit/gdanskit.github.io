const pickReports =
  "https://app.powerbi.com/groups/me/reports/713d3a2f-dd9a-4fbc-b272-3141fb67b93f/";
const foodSection1 = "ReportSectione895c1142160cc56ce23";
const foodSection2 = "ReportSection13788903743ec64ca747";
const akcSection = "ReportSection7817c8af9e009298779b";
const chSection = "ReportSectionc2c587df6985409de992";
const mrSection = "ReportSection1d4a751bb7383daab4d1";
const fsSection = "ReportSection84c9ccb8aff1a90475c5";
const pickCovidInfo_PL = "ReportSection7441e49f704a0b24e85a";
const pickCovidInfo_UA = "ReportSection89185ba5c51b6b8b80ea";

const shipmentsReports =
  "https://app.powerbi.com/groups/me/reports/ff580e87-f9d2-410a-8f68-ee28593b93ab/";
const shipmentsMG = "ReportSection";
const shipmentsCH = "ReportSectionc3dd0d18cd4c8a636250";
const shipmentCovidInfo_PL = "ReportSection6fd1415e2068042d3b28";
const shipmentCovidInfo_UA = "ReportSection6392120b100130bec981";

const shippingsReports =
  "https://app.powerbi.com/groups/me/reports/c320aa5b-17b6-4714-b231-5f7d96899629/";
const embarkationReport = "ReportSection5b4758204d6098675a94";
const shippingsCovidInfo_PL = "ReportSection15702083ade0c20401dd";
const shippingsCovidInfo_UA = "ReportSectione42e65caa621347242e2";

const checkTime = () => {
  const currentHour = new Date().getHours();
  return currentHour;
};

const isLogged = () => {
    
    if (window.location.href.includes("login.microsoftonline.com")) {
        setTimeout(() => {
            const loginBtn = document.querySelectorAll(".table-cell.text-left.content");
            loginBtn[0].click();
            
        }, 5000)
        setTimeout(() => {
            const passBtn = document.querySelector("#idSIButton9");
            passBtn.click();
        }, 10000)
    }
}

window.onload = isLogged();

setInterval(() => {
  if (checkTime() >= 6 && checkTime() <= 14) {
    if (config.shipmentsMG) {
      if (
        window.location.href === shipmentsReports + shipmentsMG ||
        window.location.href.includes(shipmentCovidInfo_PL) ||
        window.location.href.includes(shipmentCovidInfo_UA)
      ) {
        return;
      } else {
        window.location = shipmentsReports + shipmentsMG;
      }
    }

    if (config.shipmentsCH) {
      if (
        window.location.href.includes(shipmentsCH) ||
        window.location.href.includes(shipmentCovidInfo_PL) ||
        window.location.href.includes(shipmentCovidInfo_UA)
      ) {
        return;
      } else {
        window.location = shipmentsReports + shipmentsCH;
      }
    }
  }

  if (checkTime() >= 15 || checkTime() <= 5) {
    if (config.food) {
      if (
        window.location.href.includes(foodSection1) ||
        window.location.href.includes(foodSection2) ||
        window.location.href.includes(pickCovidInfo_PL) ||
        window.location.href.includes(pickCovidInfo_UA)
      ) {
        return;
      } else {
        window.location = pickReports + foodSection1;
      }
    }

    if (config.fs) {
      if (
        window.location.href.includes(fsSection) ||
        window.location.href.includes(pickCovidInfo_PL) ||
        window.location.href.includes(pickCovidInfo_UA)
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

    if (config.ch) {
      if (
        window.location.href.includes(chSection) ||
        window.location.href.includes(pickCovidInfo_PL) ||
        window.location.href.includes(pickCovidInfo_UA)
      ) {
        return;
      } else {
        window.location = pickReports + chSection;
      }
    }
    if (config.mr) {
      if (
        window.location.href.includes(mrSection) ||
        window.location.href.includes(pickCovidInfo_PL) ||
        window.location.href.includes(pickCovidInfo_UA)
      ) {
        return;
      } else {
        window.location = pickReports + mrSection;
      }
    }
    if (config.shippings) {
      if (
        window.location.href.includes(embarkationReport) ||
        window.location.href.includes(shippingsCovidInfo_PL) ||
        window.location.href.includes(shippingsCovidInfo_UA)
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
  window.location.href === shipmentsReports + shipmentsMG ||
  window.location.href.includes(shipmentCovidInfo_PL) ||
  window.location.href.includes(shipmentCovidInfo_UA)
) {
  setTimeout(() => {
    // Pobranie wszystkich zakładek
    const tab = document.querySelectorAll("div.itemRow.pbi-focus-outline");
    setInterval(() => {
      // Kliknięcie pierwszej zakładki
      tab[0].click();
      document.querySelector("button#reportAppBarRefreshBtn").click();
      // Cały cykl się powtarza co 60 sekund
    }, 60000);
    // Po 5 sekundach od wejścia pierwszy raz na stronę
  }, 5000);
} else if (window.location.href.includes(fsSection)) {
  setTimeout(() => {
    const tab = document.querySelectorAll("div.itemRow.pbi-focus-outline");

    setInterval(() => {
      tab[5].click();
      document.querySelector("button#reportAppBarRefreshBtn").click();

      // Cały cykl się powtarza co 90 sekund
    }, 60000);
    // Po 5 sekundach od wejścia pierwszy raz na stronę
  }, 5000);
} else if (window.location.href.includes(akcSection)) {
  setTimeout(() => {
    const tab = document.querySelectorAll("div.itemRow.pbi-focus-outline");
    setInterval(() => {
      tab[2].click();
      document.querySelector("button#reportAppBarRefreshBtn").click();
      // Cały cykl się powtarza co 90 sekund
    }, 60000);
    // Po 5 sekundach od wejścia pierwszy raz na stronę
  }, 5000);

  //Chłodnia
} else if (window.location.href.includes(chSection)) {
  setTimeout(() => {
    const tab = document.querySelectorAll("div.itemRow.pbi-focus-outline");
    setInterval(() => {
      document.querySelector("button#reportAppBarRefreshBtn").click();

      // Cały cykl się powtarza co 90 sekund
    }, 60000);
    // Po 5 sekundach od wejścia pierwszy raz na stronę
  }, 5000);

  //Mroźnia
} else if (window.location.href.includes(mrSection)) {
  setTimeout(() => {
    const tab = document.querySelectorAll("div.itemRow.pbi-focus-outline");
    setInterval(() => {
      tab[4].click();
      document.querySelector("button#reportAppBarRefreshBtn").click();

      // Cały cykl się powtarza co 90 sekund
    }, 60000);
    // Po 5 sekundach od wejścia pierwszy raz na stronę
  }, 5000);
} else if (window.location.href.includes(embarkationReport)) {
  setTimeout(() => {
    const tab = document.querySelectorAll("div.itemRow.pbi-focus-outline");
    setInterval(() => {
      tab[0].click();
      document.querySelector("button#reportAppBarRefreshBtn").click();

      // Cały cykl się powtarza co 90 sekund
    }, 60000);
    // Po 5 sekundach od wejścia pierwszy raz na stronę
  }, 5000);
}
