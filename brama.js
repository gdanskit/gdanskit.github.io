setInterval(() => {
    const refreshBtns = document.querySelectorAll('button.actionPanelButton.refreshButton.mat-focus-indicator.mat-button.mat-button-base.ng-star-inserted')
    for (let i = 0; i <= 3; i++) {
        if(i !== 1) {
        refreshBtns[i].click();
        }
        
}
}, 300000);
