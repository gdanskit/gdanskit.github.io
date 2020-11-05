setInterval(() => {
    const refreshBtns = document.querySelectorAll('button.actionPanelButton.refreshButton.mat-focus-indicator.mat-button.mat-button-base.ng-star-inserted')
    for (let i = 0; i < 4; i++) {
        refreshBtns[i].click();
}
}, 30000);
