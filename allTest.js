window.onload = () => {
    // Brama Power BI
    if (window.location.href === "https://app.powerbi.com/groups/me/list/datasets") {
        // Pobranie wszystkich buttonów z klasą refreshNow
        setInterval(() => {
            const refreshBtns = document.querySelectorAll("button.refreshNow");
            // Wykonanie clicka na każdym pobranym przycisku
            for (const refreshBtn of refreshBtns) {
                refreshBtn.click();
            }
            // Co 5 minut
        }, 300000);
        // Raporty FOOD - w przypadku zmiany raportu przez analityka należy podmienić końcówkę adresów OBU raportów.
    } else if (window.location.href.includes("ReportSectione895c1142160cc56ce23") || window.location.href.includes('ReportSection13788903743ec64ca747')) {
        setTimeout(() => {
            // Pobranie wszystkich zakładek 
            const tab = document.querySelectorAll('div[role=tab]');
            setInterval(() => {
                // Kliknięcie pierwszej zakładki
                tab[0].click();
                document.querySelector('button.refresh').click();
                setTimeout(() => {
                    // Kliknięcie drugiej zakładki
                    tab[1].click();
                    // Co 30 sekund
                }, 30000)
                // Cały cykl się powtarza co 60 sekund
            }, 60000);
            // Po 5 sekundach od wejścia pierwszy raz na stronę
        }, 5000);
        // Pozostałe raporty - akcyza, sztuki, chłodnia, mroźnia, folia, dostawy mg, dostawy ch
    } else {
        setTimeout(() => {
            const refresh = setInterval(() => {
                // Pobranie przycisku odświeżającego i jego kliknięcie
                document.querySelector('button.refresh').click();
                // Cały cykl się powtarza co 60 sekund
            }, 60000);
            // Po 5 sekundach od wejścia pierwszy raz na stronę
        }, 5000);
    }
    setInterval(() => {
        // Przeładowanie strony razem z cache
        window.location.reload(true);
        // Co 30 minut
    }, 600000)
}