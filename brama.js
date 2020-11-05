
  setInterval(() => {
    const refreshBtns = document.querySelectorAll('button.quick-action-button.ng-star-inserted');
    for(let i = 0; i <= 6; i+=2) {
        refreshBtns[i].click();
    }
  }, 30000);
