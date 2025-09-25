/* Helpers */
const quartersContainer = document.getElementById("quartersContainer");
const navItems = document.querySelectorAll(".nav-item");

/* Data */
const DATA = {
  1: [
    { q: "Q1 2025", label: "Foundation", color: "q1",
      title: "Team Assembly & Infrastructure",
      bullets: [
        "<strong>Core Team Hiring:</strong> SEO Manager, Content Strategist, Technical SEO Specialist",
        "<strong>Foundation Setup:</strong> Analytics infrastructure, baseline tool stack, processes",
        "<strong>SEO Audit & Strategy:</strong> Comprehensive site audit and strategic roadmap",
        "<strong>Content Framework:</strong> Content strategy, editorial calendar, keyword mapping"
      ]
    },
    { q: "Q2 2025", label: "Build", color: "q2",
      title: "CRO Integration & Content Scale",
      bullets: [
        "<strong>CRO Foundation:</strong> Onboarding, testing framework setup",
        "<strong>Content Production:</strong> Scale creation, optimize existing content",
        "<strong>Technical SEO:</strong> Core Web Vitals, speed, mobile",
        "<strong>Link Building:</strong> Initial outreach and partnerships"
      ]
    },
    { q: "Q3 2025", label: "Expand", color: "q3",
      title: "Local & GEO/AEO Readiness",
      bullets: [
        "<strong>Local SEO:</strong> Location hubs, GBP optimization, citations",
        "<strong>Answer/GEO:</strong> FAQs, schemas, concise answers for engines",
        "<strong>UX:</strong> Forms friction audit, trust signals, accessibility",
        "<strong>Attribution:</strong> GA4 + CRM stitching MVP"
      ]
    },
    { q: "Q4 2025", label: "Prove", color: "q4",
      title: "Scale Experiments & Reporting",
      bullets: [
        "<strong>CRO:</strong> High-impact test pipeline, learnings library",
        "<strong>Content:</strong> Hub-and-spoke depth, internal linking automation",
        "<strong>Reporting:</strong> KPI dashboard, pillar-level insights",
        "<strong>Planning:</strong> FY roadmap & budget inputs"
      ]
    }
  ],
  2: [
    { q: "Q1 2026", label: "Optimize", color: "q1",
      title: "Automation & Quality",
      bullets: [
        "<strong>Automation:</strong> Internal linking, schema, image/CDN workflow",
        "<strong>Content Quality:</strong> E-E-A-T upgrades, expert review ops",
        "<strong>SEO:</strong> Programmatic pages with guardrails",
        "<strong>CRO:</strong> Personalization pilots"
      ]
    },
    { q: "Q2 2026", label: "Scale", color: "q2",
      title: "Territories & Partnerships",
      bullets: [
        "<strong>Locations:</strong> New markets & multilingual where relevant",
        "<strong>PR/Links:</strong> Digital PR calendar, partner co-marketing",
        "<strong>Speed:</strong> CWV excellence; ship perf budgets",
        "<strong>Analytics:</strong> Full-funnel ROI reporting"
      ]
    },
    { q: "Q3 2026", label: "Lead", color: "q3",
      title: "Category Leadership",
      bullets: [
        "<strong>Thought Leadership:</strong> Research content & data stories",
        "<strong>SERP Moats:</strong> Rich snippets & entity strength",
        "<strong>Journey:</strong> Post-sale upsell/retention UX",
        "<strong>MarTech:</strong> Evaluate next-gen stack"
      ]
    },
    { q: "Q4 2026", label: "Lock-in", color: "q4",
      title: "Operationalize Wins",
      bullets: [
        "<strong>Governance:</strong> Playbooks & QA gates",
        "<strong>Training:</strong> Team enablement & onboarding paths",
        "<strong>Budget:</strong> Scale what works",
        "<strong>Plan:</strong> Next 24-month strategy"
      ]
    }
  ]
};

function cardHTML(q){ 
  return `
    <article class="quarter-card">
      <header class="quarter-head ${q.color}">
        <span class="badge">${q.label}</span>
        <h3>${q.q}</h3>
        <small>${q.title}</small>
      </header>
      <div class="quarter-body">
        <div class="section-title">Strategic Focus Areas</div>
        <ul class="kv">${q.bullets.map(b=>`<li>${b}</li>`).join("")}</ul>
      </div>
    </article>
  `;
}

function render(year=1){
  quartersContainer.innerHTML = DATA[year].map(cardHTML).join("");

  // Safe active-state toggle
  navItems.forEach(n => n.classList.remove("active"));
  const target = document.querySelector(`[data-year="${year}"]`);
  if (target) target.classList.add("active");
}

// Public API
window.scrollToYear = (year)=> render(year);
window.showOverview = ()=> render(1);

// Initial render
render(1);
