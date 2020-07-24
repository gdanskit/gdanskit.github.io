let expander = document.querySelectorAll('button.switcher');
expander[3].click();

function refresh() {
    const refreshBtn = document.querySelector("button.refresh");
    refreshBtn.click();
};

var report = document.querySelectorAll('li.navPaneListItem');



setInterval(function(){
    var time = new Date();
    var currentHour = time.getHours();
    var currentSeconds = time.getSeconds();
    const tab = document.querySelectorAll('div.section.dynamic.thumbnail-container.ui-draggable.ui-draggable-handle.ui-droppable');

    function switchTab0() {
        tab[0].click();
    }
    
    function switchTab1() {
        tab[1].click();
    }

    if (currentSeconds >= 0 && currentSeconds <= 29) {
        if (report[1].classList[1] == 'selected') {
            return;
        } else {
            report[1].click();
        }
     }
    if (currentSeconds >= 30 && currentSeconds <= 59) {
        if (report[3].classList[1] == 'selected') {
            if (currentSeconds >= 30 && currentSeconds <= 44) {
                switchTab0();
            }
            else if (currentSeconds >= 45 && currentSeconds <= 59) {
                switchTab1();
            }
        } else {
            report[3].click();
        }
    }
}, 1000);


setInterval(function(){
    refresh();
}, 10000);
    
            