let countdownInterval;
  
  function startCountdown() {
    const targetDate = new Date(document.getElementById("datetime").value).getTime();

    if (isNaN(targetDate)) {
      alert("Please select a valid date and time.");
      return;
    }

    countdownInterval = setInterval(function() {
      const currentDate = new Date().getTime();
      const timeDifference = targetDate - currentDate;

      if (timeDifference <= 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "Countdown completed!";
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        
        document.getElementById("countdown").innerHTML = `
        <div class="countdown-item">${days}d</div>
        <div class="countdown-item">${hours}h</div>
        <div class="countdown-item">${minutes}m</div>
        <div class="countdown-item">${seconds}s
        `;

      }
    }, 1000);
  }