const textElement = document.getElementById("typing-text");
const phrase = "PRODUCT DESIGNER";
let index = 0;

function type() {
  if (index < phrase.length) {
    textElement.textContent += phrase.charAt(index);
    index++;
    // 200ms delay between letters
    setTimeout(type, 200);
  } else {
    // Entire phrase complete, wait 800ms before restarting
    setTimeout(() => {
      textElement.textContent = "";
      index = 0;
      type();
    }, 800);
  }
}

// Initialize the typing effect
document.addEventListener("DOMContentLoaded", () => {
  type();
});
const caseStudies = {
  letterboxd: `
  <h2 class="modal-title">Letterboxd Audit</h2>
  <p class="modal-hook">Letterboxd's whole identity is 'your taste, your lists' — editing one is the worst flow in the app.</p>
  <p class="modal-flow-title">Six taps to edit a list. Two of them can silently erase your edit.</p>

  <div class="flow-step">
    <div class="flow-step-title">Tap "Lists" in main nav</div>
    <div class="flow-step-sub">Shows public lists, not yours</div>
  </div>
  <div class="flow-connector"></div>

  <div class="flow-step">
    <div class="flow-step-title">Go to Profile → Lists tab</div>
    <div class="flow-step-sub">Your actual lists live here</div>
  </div>
  <div class="flow-connector"></div>

  <div class="flow-step">
    <div class="flow-step-title">Open list, tap overflow menu</div>
    <div class="flow-step-sub">Edit is buried in kebab menu</div>
  </div>
  <div class="flow-connector"></div>

  <div class="flow-step">
    <div class="flow-step-title">Tap "edit entries…" text</div>
    <div class="flow-step-sub">No button styling or icon</div>
  </div>
  <div class="flow-connector"></div>

  <div class="flow-step critical">
    <div class="flow-step-title">Select film, tap first tick</div>
    <div class="flow-step-sub">Looks done — it isn't</div>
  </div>
  <div class="flow-connector"></div>

  <div class="flow-step critical">
    <div class="flow-step-title">Back out, tap second tick</div>
    <div class="flow-step-sub">The real save — never explained</div>
  </div>
  <div class="flow-connector"></div>

  <div class="flow-step critical">
    <div class="flow-step-title">Skip step 6 → edit vanishes silently</div>
  </div>

  <div class="flow-legend">
    <span><span class="legend-dot"></span>Step in the flow</span>
    <span><span class="legend-dot critical"></span>Critical failure point</span>
  </div>

  <p class="modal-synthesis">The two critical steps compound each other — a false "done" signal, then a save the user never knows exists. This isn't a bug fix. It's a decision about what "adding to a list" actually means, designed as one committed moment instead of a patchwork of screens.</p>

  <a class="modal-cta" href="https://theproductdissect.substack.com/p/letterboxd-said-your-lists-your-taste" target="_blank">Read full article →</a>
`,
  gora: `<h2 class="modal-title">GORA Reservation Flow Audit</h2>
  <p class="modal-hook">Japan's largest golf booking platform — audited for the one flow that directly drives or kills revenue: the reservation path.</p>

  <p class="modal-context">Expert walkthrough as a first-time user, evaluated against Nielsen's heuristics — focused on Recognition over Recall, Flexibility & Efficiency, Match to Real World, and Consistency.</p>

  <div class="modal-section-label">Key findings</div>

  <div class="finding-card">
    <div class="finding-header">
      <div class="finding-title">3-month calendar, no legend, duration split across fields</div>
      <span class="severity-badge severity-critical">Critical</span>
    </div>
    <div class="finding-heuristic">Nielsen #6 — Recognition over Recall</div>
    <div class="finding-suggestion">The very first interaction on the flow forces users to mentally decode day columns and colour codes before any value is delivered.</div>
  </div>

  <div class="finding-card">
    <div class="finding-header">
      <div class="finding-title">Price filter uses ¥1,000-step dropdown — while results page already has a slider</div>
      <span class="severity-badge severity-critical">Critical</span>
    </div>
    <div class="finding-heuristic">Nielsen #4 — Consistency and standards</div>
    <div class="finding-suggestion">Users get the worse version of the same filter before searching, then the better version after — a jarring, untrustworthy inconsistency.</div>
  </div>

  <div class="finding-card">
    <div class="finding-header">
      <div class="finding-title">Course detail page shows no price without further clicking</div>
      <span class="severity-badge severity-critical">Critical</span>
    </div>
    <div class="finding-heuristic">Nielsen #6 — Recognition over Recall</div>
    <div class="finding-suggestion">Price is a top-two decision factor. Hiding it forces users to remember a number or click away, increasing drop-off risk either way.</div>
  </div>

  <div class="finding-card">
    <div class="finding-header">
      <div class="finding-title">Unexplained golf jargon throughout course details</div>
      <span class="severity-badge severity-moderate">Moderate</span>
    </div>
    <div class="finding-heuristic">Nielsen #2 — Match between system and real world</div>
    <div class="finding-suggestion">Terms like "Dracon" and "Niapin" with no glossary or tooltip exclude the beginner audience GORA is trying to grow into.</div>
  </div>

  <div class="finding-card">
    <div class="finding-header">
      <div class="finding-title">Static prefecture checkbox list, no search or GPS</div>
      <span class="severity-badge severity-moderate">Moderate</span>
    </div>
    <div class="finding-heuristic">Nielsen #7 — Flexibility and efficiency of use</div>
    <div class="finding-suggestion">Slows down experienced users and fully blocks new or international users unfamiliar with Japanese prefecture names.</div>
  </div>

  <div class="finding-card">
    <div class="finding-header">
      <div class="finding-title">Rate toggle defaults to "Male" with no explanation</div>
      <span class="severity-badge severity-cosmetic">Cosmetic–Moderate</span>
    </div>
    <div class="finding-heuristic">Nielsen #4 — Consistency and standards</div>
    <div class="finding-suggestion">The default is minor — the real problem is zero explanation for why gender affects pricing at all.</div>
  </div>

  <div class="callout-box">
    The course detail page is optimised for a returning, experienced male golfer. GORA's stated mission — expanding across the whole golf ecosystem, including beginners — is directly undermined by this page. A segmented Beginner View / Experienced View toggle could serve both without sacrificing depth.
  </div>

  <p class="modal-synthesis">Three structural changes would meaningfully cut drop-off: <strong>one unified date picker</strong> instead of a 3-field puzzle, <strong>surfaced pricing</strong> on the course detail page without extra clicks, and <strong>consistent filter patterns</strong> between the search form and results sidebar. None of these are cosmetic — each sits at a point where a new or casual user is likely to abandon the booking.</p>
`,
  ticket: `
  <h2 class="modal-title">Movie Ticket Audit & Redesign</h2>
  <p class="modal-hook">A UX audit of District and BookMyShow's ticket screens — why the thing you check most is the thing they show you least.</p>

  <p class="modal-context">Seat numbers in a tiny font, prices you get reminded of every time you check your seat, and QR codes that dominate a screen you only scan once. Both apps got the one-time use case right and the repeated one wrong.</p>

  <div class="modal-flow-title">A ticket has one job — but it changes by moment</div>

  <div class="priority-row">
    <div class="priority-card">
      <div class="priority-moment">At the door</div>
      <div class="priority-focus">QR code</div>
    </div>
    <div class="priority-card">
      <div class="priority-moment">In the dark, finding your row</div>
      <div class="priority-focus">Seat number</div>
    </div>
    <div class="priority-card">
      <div class="priority-moment">Planning your weekend</div>
      <div class="priority-focus">Date & time</div>
    </div>
  </div>

  <p class="modal-synthesis"><strong>The information doesn't change — the priority does</strong>, depending on where you are in the experience. District and BookMyShow both nail the QR code. Everything after that is a missed opportunity: seat numbers buried in low-contrast grey text, prices resurfaced every time you just want to find your seat. Designing for the person walking into the dark, not the person who just completed checkout, is the whole redesign.</p>

  <a class="modal-cta" href="https://theproductdissect.substack.com/p/the-most-frustrating-30-seconds-of" target="_blank">Read full article →</a>
`,
};

function openModal(key) {
  document.getElementById("modal-content").innerHTML = caseStudies[key];
  document.getElementById("modal-overlay").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("active");
  document.body.style.overflow = "";
}

function closeModalOnOverlay(event) {
  if (event.target.id === "modal-overlay") closeModal();
}
