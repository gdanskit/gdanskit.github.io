window.onload = () => {
  // Brama Power BI
  if (
    window.location.href === "https://app.powerbi.com/groups/me/list/datasets"
  ) {
    // Pobranie wszystkich buttonĂłw z klasÄ refreshNow
    setInterval(() => {
      const refreshBtns = document.querySelectorAll("button.refreshNow");
      // Wykonanie clicka na kaĹźdym pobranym przycisku
      for (const refreshBtn of refreshBtns) {
        refreshBtn.click();
      }
      // Co 5 minut
    }, 300000);
    // Raporty FOOD - w przypadku zmiany raportu przez analityka naleĹźy podmieniÄ koĹcĂłwkÄ adresĂłw OBU raportĂłw.
  } else if (
    window.location.href.includes("ReportSectione895c1142160cc56ce23") ||
    window.location.href.includes("ReportSection13788903743ec64ca747") ||
    window.location.href.includes("ReportSection89185ba5c51b6b8b80ea") ||
    window.location.href.includes("ReportSection7441e49f704a0b24e85a")
  ) {
    setTimeout(() => {
      // Pobranie wszystkich zakĹadek
      const tab = document.querySelectorAll("div[role=tab]");
      setInterval(() => {
        // KlikniÄcie pierwszej zakĹadki
        tab[0].click();
        document.querySelector("button.refresh").click();
        setTimeout(() => {
          // KlikniÄcie drugiej zakĹadki
          tab[1].click();
          // Co 30 sekund
        }, 30000);
        setTimeout(() => {
          // KlikniÄcie drugiej zakĹadki
          tab[7].click();
          // Co 30 sekund
        }, 60000);
        setTimeout(() => {
          // KlikniÄcie drugiej zakĹadki
          tab[8].click();
          // Co 30 sekund
        }, 90000);
        // CaĹy cykl siÄ powtarza co 60 sekund
      }, 120000);
      // Po 5 sekundach od wejĹcia pierwszy raz na stronÄ
    }, 5000);

    // SztukĂłwka
  } else if (
    window.location.href.includes("ReportSection84c9ccb8aff1a90475c5")
  ) {
    setTimeout(() => {
      const tab = document.querySelectorAll("div[role=tab]");
      setInterval(() => {
        tab[5].click();
        document.querySelector("button.refresh").click();

        setTimeout(() => {
          // KlikniÄcie drugiej zakĹadki
          tab[7].click();
          // Co 30 sekund
        }, 30000);
        setTimeout(() => {
          // KlikniÄcie drugiej zakĹadki
          tab[8].click();
          // Co 30 sekund
        }, 60000);
        // CaĹy cykl siÄ powtarza co 90 sekund
      }, 90000);
      // Po 5 sekundach od wejĹcia pierwszy raz na stronÄ
    }, 5000);
    //Akcyza
  } else if (
    window.location.href.includes("ReportSection7817c8af9e009298779b")
  ) {
    setTimeout(() => {
      const tab = document.querySelectorAll("div[role=tab]");
      setInterval(() => {
        tab[2].click();
        document.querySelector("button.refresh").click();

        setTimeout(() => {
          // KlikniÄcie drugiej zakĹadki
          tab[7].click();
          // Co 30 sekund
        }, 30000);
        setTimeout(() => {
          // KlikniÄcie drugiej zakĹadki
          tab[8].click();
          // Co 30 sekund
        }, 60000);
        // CaĹy cykl siÄ powtarza co 90 sekund
      }, 90000);
      // Po 5 sekundach od wejĹcia pierwszy raz na stronÄ
    }, 5000);

    //ChĹodnia
  } else if (
    window.location.href.includes("ReportSectionc2c587df6985409de992")
  ) {
    setTimeout(() => {
      const tab = document.querySelectorAll("div[role=tab]");
      setInterval(() => {
        tab[3].click();
        document.querySelector("button.refresh").click();

        setTimeout(() => {
          // KlikniÄcie drugiej zakĹadki
          tab[7].click();
          // Co 30 sekund
        }, 30000);
        setTimeout(() => {
          // KlikniÄcie drugiej zakĹadki
          tab[8].click();
          // Co 30 sekund
        }, 60000);
        // CaĹy cykl siÄ powtarza co 90 sekund
      }, 90000);
      // Po 5 sekundach od wejĹcia pierwszy raz na stronÄ
    }, 5000);

    //MroĹşnia
  } else if (
    window.location.href.includes("ReportSection1d4a751bb7383daab4d1")
  ) {
    setTimeout(() => {
      const tab = document.querySelectorAll("div[role=tab]");
      setInterval(() => {
        tab[4].click();
        document.querySelector("button.refresh").click();

        setTimeout(() => {
          // KlikniÄcie drugiej zakĹadki
          tab[7].click();
          // Co 30 sekund
        }, 30000);
        setTimeout(() => {
          // KlikniÄcie drugiej zakĹadki
          tab[8].click();
          // Co 30 sekund
        }, 60000);
        // CaĹy cykl siÄ powtarza co 90 sekund
      }, 90000);
      // Po 5 sekundach od wejĹcia pierwszy raz na stronÄ
    }, 5000);
  } else if (
    window.location.href.includes("ReportSection5b4758204d6098675a94")
  ) {
    setTimeout(() => {
      const tab = document.querySelectorAll("div[role=tab]");
      setInterval(() => {
        tab[0].click();
        document.querySelector("button.refresh").click();

        setTimeout(() => {
          // KlikniÄcie drugiej zakĹadki
          tab[2].click();
          // Co 30 sekund
        }, 30000);
        setTimeout(() => {
          // KlikniÄcie drugiej zakĹadki
          tab[3].click();
          // Co 30 sekund
        }, 60000);
        // CaĹy cykl siÄ powtarza co 90 sekund
      }, 90000);
      // Po 5 sekundach od wejĹcia pierwszy raz na stronÄ
    }, 5000);
  }
  setInterval(() => {
    // PrzeĹadowanie strony razem z cache
    window.location.reload(true);
    // Co 30 minut
  }, 600000);
};
