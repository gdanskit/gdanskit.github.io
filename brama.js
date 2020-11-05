
  setInterval(() => {
    const refreshBtns = document.querySelectorAll('button.quick-action-button.ng-star-inserted');
    setTimeout(() => {
    refreshBtns[0].click();
    refreshBtns[2].click();
    refreshBtns[4].click();
    refreshBtns[6].click();}, 5000)
  }, 300000);
