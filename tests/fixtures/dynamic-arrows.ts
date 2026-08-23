html`
  ${() => {
        const groups = { docs: [{ id: "intro", label: "Intro" }] };

        return Object.entries(groups).map(([grp, pages]) => html`
      <div class="nav-grp">${grp}</div>
      ${pages.map(p => html`
        <div class=${() => `nav-a${p.id === "intro" ? " on" : ""}`}
          @click=${() => go(p.id)}>
          <span class="nav-dot"></span>
          ${p.label}
        </div>
      `)}
    `);
    }}

  <aside id="sb"></aside>
`;
