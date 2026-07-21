(function () {
  const toastEl = document.getElementById("toast");
  let toastTimer;

  function showToast(message) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2800);
  }

  document.querySelectorAll("[data-toast]").forEach((btn) => {
    btn.addEventListener("click", () => showToast(btn.getAttribute("data-toast")));
  });

  // Calendar (demo month: June 2026 — Mon start)
  const calGrid = document.getElementById("cal-grid");
  if (calGrid) {
    const available = new Set([11, 18, 24, 27]);
    let selected = null;
    const hint = document.getElementById("booking-hint");
    const bookBtn = document.getElementById("book-btn");

    // June 2026 starts on Monday
    const daysInMonth = 30;
    const startOffset = 0;

    for (let i = 0; i < startOffset; i++) {
      const empty = document.createElement("span");
      calGrid.appendChild(empty);
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "cal-day";
      btn.textContent = String(d);
      if (!available.has(d)) {
        btn.disabled = true;
      } else {
        btn.addEventListener("click", () => {
          calGrid.querySelectorAll(".cal-day.selected").forEach((el) => el.classList.remove("selected"));
          btn.classList.add("selected");
          selected = d;
          if (hint) hint.textContent = `Valt: ${d} juni — lediga tider: 07:00, 12:00, 18:00`;
        });
      }
      calGrid.appendChild(btn);
    }

    if (bookBtn) {
      bookBtn.addEventListener("click", () => {
        if (!selected) {
          showToast("Välj ett datum först.");
          return;
        }
        showToast(`Bokning sparad för ${selected} juni (demo — ingen riktig bokning ännu).`);
      });
    }
  }

  // Star rating + local reviews
  const starInput = document.getElementById("star-input");
  const submitReview = document.getElementById("submit-review");
  const reviewText = document.getElementById("review-text");
  const reviewsList = document.getElementById("reviews-list");
  let rating = 0;

  if (starInput) {
    const buttons = [...starInput.querySelectorAll(".star-btn")];
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        rating = Number(btn.dataset.star);
        buttons.forEach((b) => {
          b.classList.toggle("on", Number(b.dataset.star) <= rating);
        });
      });
    });
  }

  if (submitReview && reviewsList) {
    submitReview.addEventListener("click", () => {
      const text = (reviewText?.value || "").trim();
      if (!rating) {
        showToast("Välj antal stjärnor.");
        return;
      }
      if (!text) {
        showToast("Skriv en kort recension.");
        return;
      }

      const stars = "★".repeat(rating) + "☆".repeat(5 - rating);
      const article = document.createElement("article");
      article.className = "review";
      article.innerHTML = `
        <div class="stars" aria-label="${rating} of 5 stars">${stars}</div>
        <p class="review-quote">${escapeHtml(text)}</p>
        <p class="review-author">— Du</p>
      `;
      reviewsList.prepend(article);
      if (reviewText) reviewText.value = "";
      rating = 0;
      starInput?.querySelectorAll(".star-btn").forEach((b) => b.classList.remove("on"));
      showToast("Tack! Din recension visas nu (demo).");
    });
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
})();
