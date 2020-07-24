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
                }, 90000)
                // Cały cykl się powtarza co 60 sekund
            }, 120000);
            // Po 5 sekundach od wejścia pierwszy raz na stronę
        }, 5000);

        // Sztukówka
    } else if (window.location.href.includes("ReportSection84c9ccb8aff1a90475c5")) {
        setTimeout(() => {
            const tab = document.querySelectorAll('div[role=tab]');
            setInterval(() => {

                tab[5].click();
                document.querySelector('button.refresh').click();

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
        }, 5000);
        //Akcyza
    } else if (window.location.href.includes("ReportSection7817c8af9e009298779b")) {
        setTimeout(() => {
            const tab = document.querySelectorAll('div[role=tab]');
            setInterval(() => {

                tab[2].click();
                document.querySelector('button.refresh').click();

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
        }, 5000);

        //Chłodnia 
    } else if (window.location.href.includes("ReportSectionc2c587df6985409de992")) {
        setTimeout(() => {
            const tab = document.querySelectorAll('div[role=tab]');
            setInterval(() => {

                tab[3].click();
                document.querySelector('button.refresh').click();

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
        }, 5000);

        //Mroźnia
    } else if (window.location.href.includes("ReportSection1d4a751bb7383daab4d1")) {
        setTimeout(() => {
            const tab = document.querySelectorAll('div[role=tab]');
            setInterval(() => {

                tab[4].click();
                document.querySelector('button.refresh').click();

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
        }, 5000);
    } else if (window.location.href.includes("ReportSection5b4758204d6098675a94")) {
        setTimeout(() => {
            const tab = document.querySelectorAll('div[role=tab]');
            setInterval(() => {

                tab[0].click();
                document.querySelector('button.refresh').click();

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
    setInterval(() => {
        // Przeładowanie strony razem z cache
        window.location.reload(true);
        // Co 30 minut
    }, 600000)
}