window.onload = () => {
  console.log('brama');
  setInterval(() => {
    const refreshBtns = document.querySelectorAll("button.refreshNow");
    // Wykonanie clicka na kaĹźdym pobranym przycisku
    for (const refreshBtn of refreshBtns) {
      refreshBtn.click();
    }
    // Co 5 minut
  }, 300000);
};
