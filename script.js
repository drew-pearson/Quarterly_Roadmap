// ===============================================
// EASY EDIT SECTION - MODIFY CONTENT HERE
// ===============================================

const ROADMAP_CONFIG = {
  header: {
    title: "Quarterly Strategic Roadmap",
    subtitle: "24-Month Journey to SEO/GEO/AEO/CRO Excellence"
  },
  yearSeparator: "🚀 Year 2: Scaling & Advanced Optimization 🚀",
  summary: {
    title: "Success Metrics Overview",
    description: "This roadmap transforms your organization from SEO basics to industry leadership across all modern optimization channels, positioning you at the forefront of AI-driven digital marketing excellence.",
    metrics: [
      { value: "400%", label: "Traffic Growth Target" },
      { value: "350%", label: "ROI Achievement" },
      { value: "12", label: "Team Members" },
      { value: "4", label: "Optimization Channels" }
    ]
  }
};

// Quarters data (truncated for brevity, keep as in your file)
const QUARTERS_DATA = [
  {
    id: "q1-2025",
    quarterClass: "q1",
    phase: "Foundation",
    title: "Q1 2025",
    subtitle: "Team Assembly & Infrastructure",
    focusIcon: "🚀",
    focusAreas: [
      "Core Team Hiring: SEO Manager, Content Strategist, Technical SEO Specialist",
      "Foundation Setup: Analytics infrastructure, basic tool stack, processes"
    ],
    deliverables: [
      "Complete SEO audit & technical fixes",
      "GA4 & analytics setup"
    ],
    metrics: [
      { value: "5", label: "Team Members" },
      { value: "$95K", label: "Budget" }
    ],
    progressPercent: 12.5
  }
  // ... include the rest of your QUARTERS_DATA here ...
];

// ===============================================
// END EASY EDIT SECTION
// ===============================================

function initializeContent() {
  document.getElementById('headerTitle').textContent = ROADMAP_CONFIG.header.title;
  document.getElementById('headerSubtitle').textContent = ROADMAP_CONFIG.header.subtitle;
  document.getElementById('summaryTitle').textContent = ROADMAP_CONFIG.summary.title;
  document.getElementById('summaryDescription').textContent = ROADMAP_CONFIG.summary.description;

  const summaryMetricsContainer = document.getElementById('summaryMetrics');
  ROADMAP_CONFIG.summary.metrics.forEach(metric => {
    const div = document.createElement('div');
    div.className = 'summary-metric';
    div.innerHTML = `
      <div class="summary-metric-value">${metric.value}</div>
      <div class="summary-metric-label">${metric.label}</div>
    `;
    summaryMetricsContainer.appendChild(div);
  });

  createQuarters();
}

function createQuarters() {
  const container = document.getElementById('quartersContainer');

  QUARTERS_DATA.forEach(quarter => {
    if (quarter.id === 'q1-2026') {
      const separator = document.createElement('div');
      separator.className = 'year-separator';
      separator.textContent = ROADMAP_CONFIG.yearSeparator;
      container.appendChild(separator);
    }

    const quarterCard = document.createElement('div');
    quarterCard.className = 'quarter-card';
    quarterCard.innerHTML = `
      <div class="quarter-header ${quarter.quarterClass}">
        <div class="phase-indicator">${quarter.phase}</div>
        <div class="quarter-title">${quarter.title}</div>
        <div class="quarter-subtitle">${quarter.subtitle}</div>
      </div>
      <div class="quarter-content">
        <div class="focus-areas">
          <div class="focus-title">
            <div class="focus-icon">${quarter.focusIcon}</div>
            Strategic Focus Areas
          </div>
          <ul class="focus-list">
            ${quarter.focusAreas.map(area => `
              <li class="focus-item">
                <div class="focus-bullet"></div>
                <span><strong>${area.split(':')[0]}:</strong> ${area.split(':')[1] || ''}</span>
              </li>
            `).join('')}
          </ul>
        </div>
        <div class="deliverables">
          <div class="focus-title">
            <div class="focus-icon">📋</div>
            Key Deliverables
          </div>
          ${quarter.deliverables.map(d => `<div class="deliverable-item">${d}</div>`).join('')}
        </div>
        <div class="metrics">
          ${quarter.metrics.map(m => `
            <div class="metric-card">
              <div class="metric-value">${m.value}</div>
              <div class="metric-label">${m.label}</div>
            </div>
          `).join('')}
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${quarter.progressPercent}%;"></div>
        </div>
      </div>
    `;
    container.appendChild(quarterCard);
  });
}

function scrollToYear(year) {
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
  if (year === 1) {
    document.querySelectorAll('.nav-item')[0].classList.add('active');
    document.querySelector('.quarter-card').scrollIntoView({ behavior: 'smooth' });
  } else if (year === 2) {
    document.querySelectorAll('.nav-item')[1].classList.add('active');
    document.querySelector('.year-separator').scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function showOverview() {
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
  document.querySelectorAll('.nav-item')[2].classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
  initializeContent();

  // Animate hover + scroll
  setTimeout(() => {
    document.querySelectorAll('.quarter-card').forEach(card => {
      card.addEventListener('mouseenter', () => card.style.transform = 'translateY(-8px) scale(1.02)');
      card.addEventListener('mouseleave', () => card.style.transform = 'translateY(0) scale(1)');
    });
  }, 100);
});
