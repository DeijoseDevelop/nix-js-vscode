const rows = Array.from({ length: 40 }, (_, i) => ({ id: i + 1, name: `Item-${i + 1}` }));
const selected = signal(1);
const opened = signal(false);

export const StressTemplate = html`
  <section class="stress-root">
    <header>
      <h1>Stress Fixture</h1>
      <button @click.prevent=${() => (opened.value = !opened.value)}>Toggle</button>
    </header>

    ${() => opened.value ? html`
      <div class="panel">
        <div class=${() => `row-001 ${selected.value === 1 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 1)} @click.capture.once=${() => handle(1)}>
          <span class="label">Block 001</span>
          ${rows.map(r => html`<em data-id=${r.id}>001-${r.name}</em>`)}
        </div>
        <div class=${() => `row-002 ${selected.value === 2 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 2)} @click.capture.once=${() => handle(2)}>
          <span class="label">Block 002</span>
          ${rows.map(r => html`<em data-id=${r.id}>002-${r.name}</em>`)}
        </div>
        <div class=${() => `row-003 ${selected.value === 3 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 3)} @click.capture.once=${() => handle(3)}>
          <span class="label">Block 003</span>
          ${rows.map(r => html`<em data-id=${r.id}>003-${r.name}</em>`)}
        </div>
        <div class=${() => `row-004 ${selected.value === 4 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 4)} @click.capture.once=${() => handle(4)}>
          <span class="label">Block 004</span>
          ${rows.map(r => html`<em data-id=${r.id}>004-${r.name}</em>`)}
        </div>
        <div class=${() => `row-005 ${selected.value === 5 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 5)} @click.capture.once=${() => handle(5)}>
          <span class="label">Block 005</span>
          ${rows.map(r => html`<em data-id=${r.id}>005-${r.name}</em>`)}
        </div>
        <div class=${() => `row-006 ${selected.value === 6 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 6)} @click.capture.once=${() => handle(6)}>
          <span class="label">Block 006</span>
          ${rows.map(r => html`<em data-id=${r.id}>006-${r.name}</em>`)}
        </div>
        <div class=${() => `row-007 ${selected.value === 7 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 7)} @click.capture.once=${() => handle(7)}>
          <span class="label">Block 007</span>
          ${rows.map(r => html`<em data-id=${r.id}>007-${r.name}</em>`)}
        </div>
        <div class=${() => `row-008 ${selected.value === 8 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 8)} @click.capture.once=${() => handle(8)}>
          <span class="label">Block 008</span>
          ${rows.map(r => html`<em data-id=${r.id}>008-${r.name}</em>`)}
        </div>
        <div class=${() => `row-009 ${selected.value === 9 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 9)} @click.capture.once=${() => handle(9)}>
          <span class="label">Block 009</span>
          ${rows.map(r => html`<em data-id=${r.id}>009-${r.name}</em>`)}
        </div>
        <div class=${() => `row-010 ${selected.value === 10 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 10)} @click.capture.once=${() => handle(10)}>
          <span class="label">Block 010</span>
          ${rows.map(r => html`<em data-id=${r.id}>010-${r.name}</em>`)}
        </div>
        <div class=${() => `row-011 ${selected.value === 11 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 11)} @click.capture.once=${() => handle(11)}>
          <span class="label">Block 011</span>
          ${rows.map(r => html`<em data-id=${r.id}>011-${r.name}</em>`)}
        </div>
        <div class=${() => `row-012 ${selected.value === 12 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 12)} @click.capture.once=${() => handle(12)}>
          <span class="label">Block 012</span>
          ${rows.map(r => html`<em data-id=${r.id}>012-${r.name}</em>`)}
        </div>
        <div class=${() => `row-013 ${selected.value === 13 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 13)} @click.capture.once=${() => handle(13)}>
          <span class="label">Block 013</span>
          ${rows.map(r => html`<em data-id=${r.id}>013-${r.name}</em>`)}
        </div>
        <div class=${() => `row-014 ${selected.value === 14 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 14)} @click.capture.once=${() => handle(14)}>
          <span class="label">Block 014</span>
          ${rows.map(r => html`<em data-id=${r.id}>014-${r.name}</em>`)}
        </div>
        <div class=${() => `row-015 ${selected.value === 15 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 15)} @click.capture.once=${() => handle(15)}>
          <span class="label">Block 015</span>
          ${rows.map(r => html`<em data-id=${r.id}>015-${r.name}</em>`)}
        </div>
        <div class=${() => `row-016 ${selected.value === 16 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 16)} @click.capture.once=${() => handle(16)}>
          <span class="label">Block 016</span>
          ${rows.map(r => html`<em data-id=${r.id}>016-${r.name}</em>`)}
        </div>
        <div class=${() => `row-017 ${selected.value === 17 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 17)} @click.capture.once=${() => handle(17)}>
          <span class="label">Block 017</span>
          ${rows.map(r => html`<em data-id=${r.id}>017-${r.name}</em>`)}
        </div>
        <div class=${() => `row-018 ${selected.value === 18 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 18)} @click.capture.once=${() => handle(18)}>
          <span class="label">Block 018</span>
          ${rows.map(r => html`<em data-id=${r.id}>018-${r.name}</em>`)}
        </div>
        <div class=${() => `row-019 ${selected.value === 19 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 19)} @click.capture.once=${() => handle(19)}>
          <span class="label">Block 019</span>
          ${rows.map(r => html`<em data-id=${r.id}>019-${r.name}</em>`)}
        </div>
        <div class=${() => `row-020 ${selected.value === 20 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 20)} @click.capture.once=${() => handle(20)}>
          <span class="label">Block 020</span>
          ${rows.map(r => html`<em data-id=${r.id}>020-${r.name}</em>`)}
        </div>
        <div class=${() => `row-021 ${selected.value === 21 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 21)} @click.capture.once=${() => handle(21)}>
          <span class="label">Block 021</span>
          ${rows.map(r => html`<em data-id=${r.id}>021-${r.name}</em>`)}
        </div>
        <div class=${() => `row-022 ${selected.value === 22 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 22)} @click.capture.once=${() => handle(22)}>
          <span class="label">Block 022</span>
          ${rows.map(r => html`<em data-id=${r.id}>022-${r.name}</em>`)}
        </div>
        <div class=${() => `row-023 ${selected.value === 23 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 23)} @click.capture.once=${() => handle(23)}>
          <span class="label">Block 023</span>
          ${rows.map(r => html`<em data-id=${r.id}>023-${r.name}</em>`)}
        </div>
        <div class=${() => `row-024 ${selected.value === 24 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 24)} @click.capture.once=${() => handle(24)}>
          <span class="label">Block 024</span>
          ${rows.map(r => html`<em data-id=${r.id}>024-${r.name}</em>`)}
        </div>
        <div class=${() => `row-025 ${selected.value === 25 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 25)} @click.capture.once=${() => handle(25)}>
          <span class="label">Block 025</span>
          ${rows.map(r => html`<em data-id=${r.id}>025-${r.name}</em>`)}
        </div>
        <div class=${() => `row-026 ${selected.value === 26 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 26)} @click.capture.once=${() => handle(26)}>
          <span class="label">Block 026</span>
          ${rows.map(r => html`<em data-id=${r.id}>026-${r.name}</em>`)}
        </div>
        <div class=${() => `row-027 ${selected.value === 27 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 27)} @click.capture.once=${() => handle(27)}>
          <span class="label">Block 027</span>
          ${rows.map(r => html`<em data-id=${r.id}>027-${r.name}</em>`)}
        </div>
        <div class=${() => `row-028 ${selected.value === 28 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 28)} @click.capture.once=${() => handle(28)}>
          <span class="label">Block 028</span>
          ${rows.map(r => html`<em data-id=${r.id}>028-${r.name}</em>`)}
        </div>
        <div class=${() => `row-029 ${selected.value === 29 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 29)} @click.capture.once=${() => handle(29)}>
          <span class="label">Block 029</span>
          ${rows.map(r => html`<em data-id=${r.id}>029-${r.name}</em>`)}
        </div>
        <div class=${() => `row-030 ${selected.value === 30 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 30)} @click.capture.once=${() => handle(30)}>
          <span class="label">Block 030</span>
          ${rows.map(r => html`<em data-id=${r.id}>030-${r.name}</em>`)}
        </div>
        <div class=${() => `row-031 ${selected.value === 31 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 31)} @click.capture.once=${() => handle(31)}>
          <span class="label">Block 031</span>
          ${rows.map(r => html`<em data-id=${r.id}>031-${r.name}</em>`)}
        </div>
        <div class=${() => `row-032 ${selected.value === 32 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 32)} @click.capture.once=${() => handle(32)}>
          <span class="label">Block 032</span>
          ${rows.map(r => html`<em data-id=${r.id}>032-${r.name}</em>`)}
        </div>
        <div class=${() => `row-033 ${selected.value === 33 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 33)} @click.capture.once=${() => handle(33)}>
          <span class="label">Block 033</span>
          ${rows.map(r => html`<em data-id=${r.id}>033-${r.name}</em>`)}
        </div>
        <div class=${() => `row-034 ${selected.value === 34 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 34)} @click.capture.once=${() => handle(34)}>
          <span class="label">Block 034</span>
          ${rows.map(r => html`<em data-id=${r.id}>034-${r.name}</em>`)}
        </div>
        <div class=${() => `row-035 ${selected.value === 35 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 35)} @click.capture.once=${() => handle(35)}>
          <span class="label">Block 035</span>
          ${rows.map(r => html`<em data-id=${r.id}>035-${r.name}</em>`)}
        </div>
        <div class=${() => `row-036 ${selected.value === 36 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 36)} @click.capture.once=${() => handle(36)}>
          <span class="label">Block 036</span>
          ${rows.map(r => html`<em data-id=${r.id}>036-${r.name}</em>`)}
        </div>
        <div class=${() => `row-037 ${selected.value === 37 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 37)} @click.capture.once=${() => handle(37)}>
          <span class="label">Block 037</span>
          ${rows.map(r => html`<em data-id=${r.id}>037-${r.name}</em>`)}
        </div>
        <div class=${() => `row-038 ${selected.value === 38 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 38)} @click.capture.once=${() => handle(38)}>
          <span class="label">Block 038</span>
          ${rows.map(r => html`<em data-id=${r.id}>038-${r.name}</em>`)}
        </div>
        <div class=${() => `row-039 ${selected.value === 39 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 39)} @click.capture.once=${() => handle(39)}>
          <span class="label">Block 039</span>
          ${rows.map(r => html`<em data-id=${r.id}>039-${r.name}</em>`)}
        </div>
        <div class=${() => `row-040 ${selected.value === 40 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 40)} @click.capture.once=${() => handle(40)}>
          <span class="label">Block 040</span>
          ${rows.map(r => html`<em data-id=${r.id}>040-${r.name}</em>`)}
        </div>
        <div class=${() => `row-041 ${selected.value === 41 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 41)} @click.capture.once=${() => handle(41)}>
          <span class="label">Block 041</span>
          ${rows.map(r => html`<em data-id=${r.id}>041-${r.name}</em>`)}
        </div>
        <div class=${() => `row-042 ${selected.value === 42 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 42)} @click.capture.once=${() => handle(42)}>
          <span class="label">Block 042</span>
          ${rows.map(r => html`<em data-id=${r.id}>042-${r.name}</em>`)}
        </div>
        <div class=${() => `row-043 ${selected.value === 43 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 43)} @click.capture.once=${() => handle(43)}>
          <span class="label">Block 043</span>
          ${rows.map(r => html`<em data-id=${r.id}>043-${r.name}</em>`)}
        </div>
        <div class=${() => `row-044 ${selected.value === 44 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 44)} @click.capture.once=${() => handle(44)}>
          <span class="label">Block 044</span>
          ${rows.map(r => html`<em data-id=${r.id}>044-${r.name}</em>`)}
        </div>
        <div class=${() => `row-045 ${selected.value === 45 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 45)} @click.capture.once=${() => handle(45)}>
          <span class="label">Block 045</span>
          ${rows.map(r => html`<em data-id=${r.id}>045-${r.name}</em>`)}
        </div>
        <div class=${() => `row-046 ${selected.value === 46 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 46)} @click.capture.once=${() => handle(46)}>
          <span class="label">Block 046</span>
          ${rows.map(r => html`<em data-id=${r.id}>046-${r.name}</em>`)}
        </div>
        <div class=${() => `row-047 ${selected.value === 47 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 47)} @click.capture.once=${() => handle(47)}>
          <span class="label">Block 047</span>
          ${rows.map(r => html`<em data-id=${r.id}>047-${r.name}</em>`)}
        </div>
        <div class=${() => `row-048 ${selected.value === 48 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 48)} @click.capture.once=${() => handle(48)}>
          <span class="label">Block 048</span>
          ${rows.map(r => html`<em data-id=${r.id}>048-${r.name}</em>`)}
        </div>
        <div class=${() => `row-049 ${selected.value === 49 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 49)} @click.capture.once=${() => handle(49)}>
          <span class="label">Block 049</span>
          ${rows.map(r => html`<em data-id=${r.id}>049-${r.name}</em>`)}
        </div>
        <div class=${() => `row-050 ${selected.value === 50 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 50)} @click.capture.once=${() => handle(50)}>
          <span class="label">Block 050</span>
          ${rows.map(r => html`<em data-id=${r.id}>050-${r.name}</em>`)}
        </div>
        <div class=${() => `row-051 ${selected.value === 51 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 51)} @click.capture.once=${() => handle(51)}>
          <span class="label">Block 051</span>
          ${rows.map(r => html`<em data-id=${r.id}>051-${r.name}</em>`)}
        </div>
        <div class=${() => `row-052 ${selected.value === 52 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 52)} @click.capture.once=${() => handle(52)}>
          <span class="label">Block 052</span>
          ${rows.map(r => html`<em data-id=${r.id}>052-${r.name}</em>`)}
        </div>
        <div class=${() => `row-053 ${selected.value === 53 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 53)} @click.capture.once=${() => handle(53)}>
          <span class="label">Block 053</span>
          ${rows.map(r => html`<em data-id=${r.id}>053-${r.name}</em>`)}
        </div>
        <div class=${() => `row-054 ${selected.value === 54 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 54)} @click.capture.once=${() => handle(54)}>
          <span class="label">Block 054</span>
          ${rows.map(r => html`<em data-id=${r.id}>054-${r.name}</em>`)}
        </div>
        <div class=${() => `row-055 ${selected.value === 55 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 55)} @click.capture.once=${() => handle(55)}>
          <span class="label">Block 055</span>
          ${rows.map(r => html`<em data-id=${r.id}>055-${r.name}</em>`)}
        </div>
        <div class=${() => `row-056 ${selected.value === 56 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 56)} @click.capture.once=${() => handle(56)}>
          <span class="label">Block 056</span>
          ${rows.map(r => html`<em data-id=${r.id}>056-${r.name}</em>`)}
        </div>
        <div class=${() => `row-057 ${selected.value === 57 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 57)} @click.capture.once=${() => handle(57)}>
          <span class="label">Block 057</span>
          ${rows.map(r => html`<em data-id=${r.id}>057-${r.name}</em>`)}
        </div>
        <div class=${() => `row-058 ${selected.value === 58 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 58)} @click.capture.once=${() => handle(58)}>
          <span class="label">Block 058</span>
          ${rows.map(r => html`<em data-id=${r.id}>058-${r.name}</em>`)}
        </div>
        <div class=${() => `row-059 ${selected.value === 59 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 59)} @click.capture.once=${() => handle(59)}>
          <span class="label">Block 059</span>
          ${rows.map(r => html`<em data-id=${r.id}>059-${r.name}</em>`)}
        </div>
        <div class=${() => `row-060 ${selected.value === 60 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 60)} @click.capture.once=${() => handle(60)}>
          <span class="label">Block 060</span>
          ${rows.map(r => html`<em data-id=${r.id}>060-${r.name}</em>`)}
        </div>
        <div class=${() => `row-061 ${selected.value === 61 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 61)} @click.capture.once=${() => handle(61)}>
          <span class="label">Block 061</span>
          ${rows.map(r => html`<em data-id=${r.id}>061-${r.name}</em>`)}
        </div>
        <div class=${() => `row-062 ${selected.value === 62 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 62)} @click.capture.once=${() => handle(62)}>
          <span class="label">Block 062</span>
          ${rows.map(r => html`<em data-id=${r.id}>062-${r.name}</em>`)}
        </div>
        <div class=${() => `row-063 ${selected.value === 63 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 63)} @click.capture.once=${() => handle(63)}>
          <span class="label">Block 063</span>
          ${rows.map(r => html`<em data-id=${r.id}>063-${r.name}</em>`)}
        </div>
        <div class=${() => `row-064 ${selected.value === 64 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 64)} @click.capture.once=${() => handle(64)}>
          <span class="label">Block 064</span>
          ${rows.map(r => html`<em data-id=${r.id}>064-${r.name}</em>`)}
        </div>
        <div class=${() => `row-065 ${selected.value === 65 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 65)} @click.capture.once=${() => handle(65)}>
          <span class="label">Block 065</span>
          ${rows.map(r => html`<em data-id=${r.id}>065-${r.name}</em>`)}
        </div>
        <div class=${() => `row-066 ${selected.value === 66 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 66)} @click.capture.once=${() => handle(66)}>
          <span class="label">Block 066</span>
          ${rows.map(r => html`<em data-id=${r.id}>066-${r.name}</em>`)}
        </div>
        <div class=${() => `row-067 ${selected.value === 67 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 67)} @click.capture.once=${() => handle(67)}>
          <span class="label">Block 067</span>
          ${rows.map(r => html`<em data-id=${r.id}>067-${r.name}</em>`)}
        </div>
        <div class=${() => `row-068 ${selected.value === 68 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 68)} @click.capture.once=${() => handle(68)}>
          <span class="label">Block 068</span>
          ${rows.map(r => html`<em data-id=${r.id}>068-${r.name}</em>`)}
        </div>
        <div class=${() => `row-069 ${selected.value === 69 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 69)} @click.capture.once=${() => handle(69)}>
          <span class="label">Block 069</span>
          ${rows.map(r => html`<em data-id=${r.id}>069-${r.name}</em>`)}
        </div>
        <div class=${() => `row-070 ${selected.value === 70 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 70)} @click.capture.once=${() => handle(70)}>
          <span class="label">Block 070</span>
          ${rows.map(r => html`<em data-id=${r.id}>070-${r.name}</em>`)}
        </div>
        <div class=${() => `row-071 ${selected.value === 71 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 71)} @click.capture.once=${() => handle(71)}>
          <span class="label">Block 071</span>
          ${rows.map(r => html`<em data-id=${r.id}>071-${r.name}</em>`)}
        </div>
        <div class=${() => `row-072 ${selected.value === 72 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 72)} @click.capture.once=${() => handle(72)}>
          <span class="label">Block 072</span>
          ${rows.map(r => html`<em data-id=${r.id}>072-${r.name}</em>`)}
        </div>
        <div class=${() => `row-073 ${selected.value === 73 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 73)} @click.capture.once=${() => handle(73)}>
          <span class="label">Block 073</span>
          ${rows.map(r => html`<em data-id=${r.id}>073-${r.name}</em>`)}
        </div>
        <div class=${() => `row-074 ${selected.value === 74 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 74)} @click.capture.once=${() => handle(74)}>
          <span class="label">Block 074</span>
          ${rows.map(r => html`<em data-id=${r.id}>074-${r.name}</em>`)}
        </div>
        <div class=${() => `row-075 ${selected.value === 75 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 75)} @click.capture.once=${() => handle(75)}>
          <span class="label">Block 075</span>
          ${rows.map(r => html`<em data-id=${r.id}>075-${r.name}</em>`)}
        </div>
        <div class=${() => `row-076 ${selected.value === 76 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 76)} @click.capture.once=${() => handle(76)}>
          <span class="label">Block 076</span>
          ${rows.map(r => html`<em data-id=${r.id}>076-${r.name}</em>`)}
        </div>
        <div class=${() => `row-077 ${selected.value === 77 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 77)} @click.capture.once=${() => handle(77)}>
          <span class="label">Block 077</span>
          ${rows.map(r => html`<em data-id=${r.id}>077-${r.name}</em>`)}
        </div>
        <div class=${() => `row-078 ${selected.value === 78 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 78)} @click.capture.once=${() => handle(78)}>
          <span class="label">Block 078</span>
          ${rows.map(r => html`<em data-id=${r.id}>078-${r.name}</em>`)}
        </div>
        <div class=${() => `row-079 ${selected.value === 79 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 79)} @click.capture.once=${() => handle(79)}>
          <span class="label">Block 079</span>
          ${rows.map(r => html`<em data-id=${r.id}>079-${r.name}</em>`)}
        </div>
        <div class=${() => `row-080 ${selected.value === 80 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 80)} @click.capture.once=${() => handle(80)}>
          <span class="label">Block 080</span>
          ${rows.map(r => html`<em data-id=${r.id}>080-${r.name}</em>`)}
        </div>
        <div class=${() => `row-081 ${selected.value === 81 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 81)} @click.capture.once=${() => handle(81)}>
          <span class="label">Block 081</span>
          ${rows.map(r => html`<em data-id=${r.id}>081-${r.name}</em>`)}
        </div>
        <div class=${() => `row-082 ${selected.value === 82 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 82)} @click.capture.once=${() => handle(82)}>
          <span class="label">Block 082</span>
          ${rows.map(r => html`<em data-id=${r.id}>082-${r.name}</em>`)}
        </div>
        <div class=${() => `row-083 ${selected.value === 83 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 83)} @click.capture.once=${() => handle(83)}>
          <span class="label">Block 083</span>
          ${rows.map(r => html`<em data-id=${r.id}>083-${r.name}</em>`)}
        </div>
        <div class=${() => `row-084 ${selected.value === 84 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 84)} @click.capture.once=${() => handle(84)}>
          <span class="label">Block 084</span>
          ${rows.map(r => html`<em data-id=${r.id}>084-${r.name}</em>`)}
        </div>
        <div class=${() => `row-085 ${selected.value === 85 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 85)} @click.capture.once=${() => handle(85)}>
          <span class="label">Block 085</span>
          ${rows.map(r => html`<em data-id=${r.id}>085-${r.name}</em>`)}
        </div>
        <div class=${() => `row-086 ${selected.value === 86 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 86)} @click.capture.once=${() => handle(86)}>
          <span class="label">Block 086</span>
          ${rows.map(r => html`<em data-id=${r.id}>086-${r.name}</em>`)}
        </div>
        <div class=${() => `row-087 ${selected.value === 87 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 87)} @click.capture.once=${() => handle(87)}>
          <span class="label">Block 087</span>
          ${rows.map(r => html`<em data-id=${r.id}>087-${r.name}</em>`)}
        </div>
        <div class=${() => `row-088 ${selected.value === 88 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 88)} @click.capture.once=${() => handle(88)}>
          <span class="label">Block 088</span>
          ${rows.map(r => html`<em data-id=${r.id}>088-${r.name}</em>`)}
        </div>
        <div class=${() => `row-089 ${selected.value === 89 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 89)} @click.capture.once=${() => handle(89)}>
          <span class="label">Block 089</span>
          ${rows.map(r => html`<em data-id=${r.id}>089-${r.name}</em>`)}
        </div>
        <div class=${() => `row-090 ${selected.value === 90 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 90)} @click.capture.once=${() => handle(90)}>
          <span class="label">Block 090</span>
          ${rows.map(r => html`<em data-id=${r.id}>090-${r.name}</em>`)}
        </div>
        <div class=${() => `row-091 ${selected.value === 91 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 91)} @click.capture.once=${() => handle(91)}>
          <span class="label">Block 091</span>
          ${rows.map(r => html`<em data-id=${r.id}>091-${r.name}</em>`)}
        </div>
        <div class=${() => `row-092 ${selected.value === 92 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 92)} @click.capture.once=${() => handle(92)}>
          <span class="label">Block 092</span>
          ${rows.map(r => html`<em data-id=${r.id}>092-${r.name}</em>`)}
        </div>
        <div class=${() => `row-093 ${selected.value === 93 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 93)} @click.capture.once=${() => handle(93)}>
          <span class="label">Block 093</span>
          ${rows.map(r => html`<em data-id=${r.id}>093-${r.name}</em>`)}
        </div>
        <div class=${() => `row-094 ${selected.value === 94 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 94)} @click.capture.once=${() => handle(94)}>
          <span class="label">Block 094</span>
          ${rows.map(r => html`<em data-id=${r.id}>094-${r.name}</em>`)}
        </div>
        <div class=${() => `row-095 ${selected.value === 95 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 95)} @click.capture.once=${() => handle(95)}>
          <span class="label">Block 095</span>
          ${rows.map(r => html`<em data-id=${r.id}>095-${r.name}</em>`)}
        </div>
        <div class=${() => `row-096 ${selected.value === 96 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 96)} @click.capture.once=${() => handle(96)}>
          <span class="label">Block 096</span>
          ${rows.map(r => html`<em data-id=${r.id}>096-${r.name}</em>`)}
        </div>
        <div class=${() => `row-097 ${selected.value === 97 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 97)} @click.capture.once=${() => handle(97)}>
          <span class="label">Block 097</span>
          ${rows.map(r => html`<em data-id=${r.id}>097-${r.name}</em>`)}
        </div>
        <div class=${() => `row-098 ${selected.value === 98 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 98)} @click.capture.once=${() => handle(98)}>
          <span class="label">Block 098</span>
          ${rows.map(r => html`<em data-id=${r.id}>098-${r.name}</em>`)}
        </div>
        <div class=${() => `row-099 ${selected.value === 99 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 99)} @click.capture.once=${() => handle(99)}>
          <span class="label">Block 099</span>
          ${rows.map(r => html`<em data-id=${r.id}>099-${r.name}</em>`)}
        </div>
        <div class=${() => `row-100 ${selected.value === 100 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 100)} @click.capture.once=${() => handle(100)}>
          <span class="label">Block 100</span>
          ${rows.map(r => html`<em data-id=${r.id}>100-${r.name}</em>`)}
        </div>
        <div class=${() => `row-101 ${selected.value === 101 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 101)} @click.capture.once=${() => handle(101)}>
          <span class="label">Block 101</span>
          ${rows.map(r => html`<em data-id=${r.id}>101-${r.name}</em>`)}
        </div>
        <div class=${() => `row-102 ${selected.value === 102 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 102)} @click.capture.once=${() => handle(102)}>
          <span class="label">Block 102</span>
          ${rows.map(r => html`<em data-id=${r.id}>102-${r.name}</em>`)}
        </div>
        <div class=${() => `row-103 ${selected.value === 103 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 103)} @click.capture.once=${() => handle(103)}>
          <span class="label">Block 103</span>
          ${rows.map(r => html`<em data-id=${r.id}>103-${r.name}</em>`)}
        </div>
        <div class=${() => `row-104 ${selected.value === 104 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 104)} @click.capture.once=${() => handle(104)}>
          <span class="label">Block 104</span>
          ${rows.map(r => html`<em data-id=${r.id}>104-${r.name}</em>`)}
        </div>
        <div class=${() => `row-105 ${selected.value === 105 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 105)} @click.capture.once=${() => handle(105)}>
          <span class="label">Block 105</span>
          ${rows.map(r => html`<em data-id=${r.id}>105-${r.name}</em>`)}
        </div>
        <div class=${() => `row-106 ${selected.value === 106 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 106)} @click.capture.once=${() => handle(106)}>
          <span class="label">Block 106</span>
          ${rows.map(r => html`<em data-id=${r.id}>106-${r.name}</em>`)}
        </div>
        <div class=${() => `row-107 ${selected.value === 107 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 107)} @click.capture.once=${() => handle(107)}>
          <span class="label">Block 107</span>
          ${rows.map(r => html`<em data-id=${r.id}>107-${r.name}</em>`)}
        </div>
        <div class=${() => `row-108 ${selected.value === 108 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 108)} @click.capture.once=${() => handle(108)}>
          <span class="label">Block 108</span>
          ${rows.map(r => html`<em data-id=${r.id}>108-${r.name}</em>`)}
        </div>
        <div class=${() => `row-109 ${selected.value === 109 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 109)} @click.capture.once=${() => handle(109)}>
          <span class="label">Block 109</span>
          ${rows.map(r => html`<em data-id=${r.id}>109-${r.name}</em>`)}
        </div>
        <div class=${() => `row-110 ${selected.value === 110 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 110)} @click.capture.once=${() => handle(110)}>
          <span class="label">Block 110</span>
          ${rows.map(r => html`<em data-id=${r.id}>110-${r.name}</em>`)}
        </div>
        <div class=${() => `row-111 ${selected.value === 111 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 111)} @click.capture.once=${() => handle(111)}>
          <span class="label">Block 111</span>
          ${rows.map(r => html`<em data-id=${r.id}>111-${r.name}</em>`)}
        </div>
        <div class=${() => `row-112 ${selected.value === 112 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 112)} @click.capture.once=${() => handle(112)}>
          <span class="label">Block 112</span>
          ${rows.map(r => html`<em data-id=${r.id}>112-${r.name}</em>`)}
        </div>
        <div class=${() => `row-113 ${selected.value === 113 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 113)} @click.capture.once=${() => handle(113)}>
          <span class="label">Block 113</span>
          ${rows.map(r => html`<em data-id=${r.id}>113-${r.name}</em>`)}
        </div>
        <div class=${() => `row-114 ${selected.value === 114 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 114)} @click.capture.once=${() => handle(114)}>
          <span class="label">Block 114</span>
          ${rows.map(r => html`<em data-id=${r.id}>114-${r.name}</em>`)}
        </div>
        <div class=${() => `row-115 ${selected.value === 115 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 115)} @click.capture.once=${() => handle(115)}>
          <span class="label">Block 115</span>
          ${rows.map(r => html`<em data-id=${r.id}>115-${r.name}</em>`)}
        </div>
        <div class=${() => `row-116 ${selected.value === 116 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 116)} @click.capture.once=${() => handle(116)}>
          <span class="label">Block 116</span>
          ${rows.map(r => html`<em data-id=${r.id}>116-${r.name}</em>`)}
        </div>
        <div class=${() => `row-117 ${selected.value === 117 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 117)} @click.capture.once=${() => handle(117)}>
          <span class="label">Block 117</span>
          ${rows.map(r => html`<em data-id=${r.id}>117-${r.name}</em>`)}
        </div>
        <div class=${() => `row-118 ${selected.value === 118 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 118)} @click.capture.once=${() => handle(118)}>
          <span class="label">Block 118</span>
          ${rows.map(r => html`<em data-id=${r.id}>118-${r.name}</em>`)}
        </div>
        <div class=${() => `row-119 ${selected.value === 119 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 119)} @click.capture.once=${() => handle(119)}>
          <span class="label">Block 119</span>
          ${rows.map(r => html`<em data-id=${r.id}>119-${r.name}</em>`)}
        </div>
        <div class=${() => `row-120 ${selected.value === 120 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 120)} @click.capture.once=${() => handle(120)}>
          <span class="label">Block 120</span>
          ${rows.map(r => html`<em data-id=${r.id}>120-${r.name}</em>`)}
        </div>
        <div class=${() => `row-121 ${selected.value === 121 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 121)} @click.capture.once=${() => handle(121)}>
          <span class="label">Block 121</span>
          ${rows.map(r => html`<em data-id=${r.id}>121-${r.name}</em>`)}
        </div>
        <div class=${() => `row-122 ${selected.value === 122 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 122)} @click.capture.once=${() => handle(122)}>
          <span class="label">Block 122</span>
          ${rows.map(r => html`<em data-id=${r.id}>122-${r.name}</em>`)}
        </div>
        <div class=${() => `row-123 ${selected.value === 123 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 123)} @click.capture.once=${() => handle(123)}>
          <span class="label">Block 123</span>
          ${rows.map(r => html`<em data-id=${r.id}>123-${r.name}</em>`)}
        </div>
        <div class=${() => `row-124 ${selected.value === 124 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 124)} @click.capture.once=${() => handle(124)}>
          <span class="label">Block 124</span>
          ${rows.map(r => html`<em data-id=${r.id}>124-${r.name}</em>`)}
        </div>
        <div class=${() => `row-125 ${selected.value === 125 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 125)} @click.capture.once=${() => handle(125)}>
          <span class="label">Block 125</span>
          ${rows.map(r => html`<em data-id=${r.id}>125-${r.name}</em>`)}
        </div>
        <div class=${() => `row-126 ${selected.value === 126 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 126)} @click.capture.once=${() => handle(126)}>
          <span class="label">Block 126</span>
          ${rows.map(r => html`<em data-id=${r.id}>126-${r.name}</em>`)}
        </div>
        <div class=${() => `row-127 ${selected.value === 127 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 127)} @click.capture.once=${() => handle(127)}>
          <span class="label">Block 127</span>
          ${rows.map(r => html`<em data-id=${r.id}>127-${r.name}</em>`)}
        </div>
        <div class=${() => `row-128 ${selected.value === 128 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 128)} @click.capture.once=${() => handle(128)}>
          <span class="label">Block 128</span>
          ${rows.map(r => html`<em data-id=${r.id}>128-${r.name}</em>`)}
        </div>
        <div class=${() => `row-129 ${selected.value === 129 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 129)} @click.capture.once=${() => handle(129)}>
          <span class="label">Block 129</span>
          ${rows.map(r => html`<em data-id=${r.id}>129-${r.name}</em>`)}
        </div>
        <div class=${() => `row-130 ${selected.value === 130 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 130)} @click.capture.once=${() => handle(130)}>
          <span class="label">Block 130</span>
          ${rows.map(r => html`<em data-id=${r.id}>130-${r.name}</em>`)}
        </div>
        <div class=${() => `row-131 ${selected.value === 131 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 131)} @click.capture.once=${() => handle(131)}>
          <span class="label">Block 131</span>
          ${rows.map(r => html`<em data-id=${r.id}>131-${r.name}</em>`)}
        </div>
        <div class=${() => `row-132 ${selected.value === 132 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 132)} @click.capture.once=${() => handle(132)}>
          <span class="label">Block 132</span>
          ${rows.map(r => html`<em data-id=${r.id}>132-${r.name}</em>`)}
        </div>
        <div class=${() => `row-133 ${selected.value === 133 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 133)} @click.capture.once=${() => handle(133)}>
          <span class="label">Block 133</span>
          ${rows.map(r => html`<em data-id=${r.id}>133-${r.name}</em>`)}
        </div>
        <div class=${() => `row-134 ${selected.value === 134 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 134)} @click.capture.once=${() => handle(134)}>
          <span class="label">Block 134</span>
          ${rows.map(r => html`<em data-id=${r.id}>134-${r.name}</em>`)}
        </div>
        <div class=${() => `row-135 ${selected.value === 135 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 135)} @click.capture.once=${() => handle(135)}>
          <span class="label">Block 135</span>
          ${rows.map(r => html`<em data-id=${r.id}>135-${r.name}</em>`)}
        </div>
        <div class=${() => `row-136 ${selected.value === 136 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 136)} @click.capture.once=${() => handle(136)}>
          <span class="label">Block 136</span>
          ${rows.map(r => html`<em data-id=${r.id}>136-${r.name}</em>`)}
        </div>
        <div class=${() => `row-137 ${selected.value === 137 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 137)} @click.capture.once=${() => handle(137)}>
          <span class="label">Block 137</span>
          ${rows.map(r => html`<em data-id=${r.id}>137-${r.name}</em>`)}
        </div>
        <div class=${() => `row-138 ${selected.value === 138 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 138)} @click.capture.once=${() => handle(138)}>
          <span class="label">Block 138</span>
          ${rows.map(r => html`<em data-id=${r.id}>138-${r.name}</em>`)}
        </div>
        <div class=${() => `row-139 ${selected.value === 139 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 139)} @click.capture.once=${() => handle(139)}>
          <span class="label">Block 139</span>
          ${rows.map(r => html`<em data-id=${r.id}>139-${r.name}</em>`)}
        </div>
        <div class=${() => `row-140 ${selected.value === 140 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 140)} @click.capture.once=${() => handle(140)}>
          <span class="label">Block 140</span>
          ${rows.map(r => html`<em data-id=${r.id}>140-${r.name}</em>`)}
        </div>
        <div class=${() => `row-141 ${selected.value === 141 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 141)} @click.capture.once=${() => handle(141)}>
          <span class="label">Block 141</span>
          ${rows.map(r => html`<em data-id=${r.id}>141-${r.name}</em>`)}
        </div>
        <div class=${() => `row-142 ${selected.value === 142 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 142)} @click.capture.once=${() => handle(142)}>
          <span class="label">Block 142</span>
          ${rows.map(r => html`<em data-id=${r.id}>142-${r.name}</em>`)}
        </div>
        <div class=${() => `row-143 ${selected.value === 143 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 143)} @click.capture.once=${() => handle(143)}>
          <span class="label">Block 143</span>
          ${rows.map(r => html`<em data-id=${r.id}>143-${r.name}</em>`)}
        </div>
        <div class=${() => `row-144 ${selected.value === 144 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 144)} @click.capture.once=${() => handle(144)}>
          <span class="label">Block 144</span>
          ${rows.map(r => html`<em data-id=${r.id}>144-${r.name}</em>`)}
        </div>
        <div class=${() => `row-145 ${selected.value === 145 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 145)} @click.capture.once=${() => handle(145)}>
          <span class="label">Block 145</span>
          ${rows.map(r => html`<em data-id=${r.id}>145-${r.name}</em>`)}
        </div>
        <div class=${() => `row-146 ${selected.value === 146 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 146)} @click.capture.once=${() => handle(146)}>
          <span class="label">Block 146</span>
          ${rows.map(r => html`<em data-id=${r.id}>146-${r.name}</em>`)}
        </div>
        <div class=${() => `row-147 ${selected.value === 147 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 147)} @click.capture.once=${() => handle(147)}>
          <span class="label">Block 147</span>
          ${rows.map(r => html`<em data-id=${r.id}>147-${r.name}</em>`)}
        </div>
        <div class=${() => `row-148 ${selected.value === 148 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 148)} @click.capture.once=${() => handle(148)}>
          <span class="label">Block 148</span>
          ${rows.map(r => html`<em data-id=${r.id}>148-${r.name}</em>`)}
        </div>
        <div class=${() => `row-149 ${selected.value === 149 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 149)} @click.capture.once=${() => handle(149)}>
          <span class="label">Block 149</span>
          ${rows.map(r => html`<em data-id=${r.id}>149-${r.name}</em>`)}
        </div>
        <div class=${() => `row-150 ${selected.value === 150 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 150)} @click.capture.once=${() => handle(150)}>
          <span class="label">Block 150</span>
          ${rows.map(r => html`<em data-id=${r.id}>150-${r.name}</em>`)}
        </div>
        <div class=${() => `row-151 ${selected.value === 151 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 151)} @click.capture.once=${() => handle(151)}>
          <span class="label">Block 151</span>
          ${rows.map(r => html`<em data-id=${r.id}>151-${r.name}</em>`)}
        </div>
        <div class=${() => `row-152 ${selected.value === 152 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 152)} @click.capture.once=${() => handle(152)}>
          <span class="label">Block 152</span>
          ${rows.map(r => html`<em data-id=${r.id}>152-${r.name}</em>`)}
        </div>
        <div class=${() => `row-153 ${selected.value === 153 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 153)} @click.capture.once=${() => handle(153)}>
          <span class="label">Block 153</span>
          ${rows.map(r => html`<em data-id=${r.id}>153-${r.name}</em>`)}
        </div>
        <div class=${() => `row-154 ${selected.value === 154 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 154)} @click.capture.once=${() => handle(154)}>
          <span class="label">Block 154</span>
          ${rows.map(r => html`<em data-id=${r.id}>154-${r.name}</em>`)}
        </div>
        <div class=${() => `row-155 ${selected.value === 155 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 155)} @click.capture.once=${() => handle(155)}>
          <span class="label">Block 155</span>
          ${rows.map(r => html`<em data-id=${r.id}>155-${r.name}</em>`)}
        </div>
        <div class=${() => `row-156 ${selected.value === 156 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 156)} @click.capture.once=${() => handle(156)}>
          <span class="label">Block 156</span>
          ${rows.map(r => html`<em data-id=${r.id}>156-${r.name}</em>`)}
        </div>
        <div class=${() => `row-157 ${selected.value === 157 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 157)} @click.capture.once=${() => handle(157)}>
          <span class="label">Block 157</span>
          ${rows.map(r => html`<em data-id=${r.id}>157-${r.name}</em>`)}
        </div>
        <div class=${() => `row-158 ${selected.value === 158 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 158)} @click.capture.once=${() => handle(158)}>
          <span class="label">Block 158</span>
          ${rows.map(r => html`<em data-id=${r.id}>158-${r.name}</em>`)}
        </div>
        <div class=${() => `row-159 ${selected.value === 159 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 159)} @click.capture.once=${() => handle(159)}>
          <span class="label">Block 159</span>
          ${rows.map(r => html`<em data-id=${r.id}>159-${r.name}</em>`)}
        </div>
        <div class=${() => `row-160 ${selected.value === 160 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 160)} @click.capture.once=${() => handle(160)}>
          <span class="label">Block 160</span>
          ${rows.map(r => html`<em data-id=${r.id}>160-${r.name}</em>`)}
        </div>
        <div class=${() => `row-161 ${selected.value === 161 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 161)} @click.capture.once=${() => handle(161)}>
          <span class="label">Block 161</span>
          ${rows.map(r => html`<em data-id=${r.id}>161-${r.name}</em>`)}
        </div>
        <div class=${() => `row-162 ${selected.value === 162 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 162)} @click.capture.once=${() => handle(162)}>
          <span class="label">Block 162</span>
          ${rows.map(r => html`<em data-id=${r.id}>162-${r.name}</em>`)}
        </div>
        <div class=${() => `row-163 ${selected.value === 163 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 163)} @click.capture.once=${() => handle(163)}>
          <span class="label">Block 163</span>
          ${rows.map(r => html`<em data-id=${r.id}>163-${r.name}</em>`)}
        </div>
        <div class=${() => `row-164 ${selected.value === 164 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 164)} @click.capture.once=${() => handle(164)}>
          <span class="label">Block 164</span>
          ${rows.map(r => html`<em data-id=${r.id}>164-${r.name}</em>`)}
        </div>
        <div class=${() => `row-165 ${selected.value === 165 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 165)} @click.capture.once=${() => handle(165)}>
          <span class="label">Block 165</span>
          ${rows.map(r => html`<em data-id=${r.id}>165-${r.name}</em>`)}
        </div>
        <div class=${() => `row-166 ${selected.value === 166 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 166)} @click.capture.once=${() => handle(166)}>
          <span class="label">Block 166</span>
          ${rows.map(r => html`<em data-id=${r.id}>166-${r.name}</em>`)}
        </div>
        <div class=${() => `row-167 ${selected.value === 167 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 167)} @click.capture.once=${() => handle(167)}>
          <span class="label">Block 167</span>
          ${rows.map(r => html`<em data-id=${r.id}>167-${r.name}</em>`)}
        </div>
        <div class=${() => `row-168 ${selected.value === 168 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 168)} @click.capture.once=${() => handle(168)}>
          <span class="label">Block 168</span>
          ${rows.map(r => html`<em data-id=${r.id}>168-${r.name}</em>`)}
        </div>
        <div class=${() => `row-169 ${selected.value === 169 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 169)} @click.capture.once=${() => handle(169)}>
          <span class="label">Block 169</span>
          ${rows.map(r => html`<em data-id=${r.id}>169-${r.name}</em>`)}
        </div>
        <div class=${() => `row-170 ${selected.value === 170 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 170)} @click.capture.once=${() => handle(170)}>
          <span class="label">Block 170</span>
          ${rows.map(r => html`<em data-id=${r.id}>170-${r.name}</em>`)}
        </div>
        <div class=${() => `row-171 ${selected.value === 171 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 171)} @click.capture.once=${() => handle(171)}>
          <span class="label">Block 171</span>
          ${rows.map(r => html`<em data-id=${r.id}>171-${r.name}</em>`)}
        </div>
        <div class=${() => `row-172 ${selected.value === 172 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 172)} @click.capture.once=${() => handle(172)}>
          <span class="label">Block 172</span>
          ${rows.map(r => html`<em data-id=${r.id}>172-${r.name}</em>`)}
        </div>
        <div class=${() => `row-173 ${selected.value === 173 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 173)} @click.capture.once=${() => handle(173)}>
          <span class="label">Block 173</span>
          ${rows.map(r => html`<em data-id=${r.id}>173-${r.name}</em>`)}
        </div>
        <div class=${() => `row-174 ${selected.value === 174 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 174)} @click.capture.once=${() => handle(174)}>
          <span class="label">Block 174</span>
          ${rows.map(r => html`<em data-id=${r.id}>174-${r.name}</em>`)}
        </div>
        <div class=${() => `row-175 ${selected.value === 175 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 175)} @click.capture.once=${() => handle(175)}>
          <span class="label">Block 175</span>
          ${rows.map(r => html`<em data-id=${r.id}>175-${r.name}</em>`)}
        </div>
        <div class=${() => `row-176 ${selected.value === 176 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 176)} @click.capture.once=${() => handle(176)}>
          <span class="label">Block 176</span>
          ${rows.map(r => html`<em data-id=${r.id}>176-${r.name}</em>`)}
        </div>
        <div class=${() => `row-177 ${selected.value === 177 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 177)} @click.capture.once=${() => handle(177)}>
          <span class="label">Block 177</span>
          ${rows.map(r => html`<em data-id=${r.id}>177-${r.name}</em>`)}
        </div>
        <div class=${() => `row-178 ${selected.value === 178 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 178)} @click.capture.once=${() => handle(178)}>
          <span class="label">Block 178</span>
          ${rows.map(r => html`<em data-id=${r.id}>178-${r.name}</em>`)}
        </div>
        <div class=${() => `row-179 ${selected.value === 179 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 179)} @click.capture.once=${() => handle(179)}>
          <span class="label">Block 179</span>
          ${rows.map(r => html`<em data-id=${r.id}>179-${r.name}</em>`)}
        </div>
        <div class=${() => `row-180 ${selected.value === 180 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 180)} @click.capture.once=${() => handle(180)}>
          <span class="label">Block 180</span>
          ${rows.map(r => html`<em data-id=${r.id}>180-${r.name}</em>`)}
        </div>
        <div class=${() => `row-181 ${selected.value === 181 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 181)} @click.capture.once=${() => handle(181)}>
          <span class="label">Block 181</span>
          ${rows.map(r => html`<em data-id=${r.id}>181-${r.name}</em>`)}
        </div>
        <div class=${() => `row-182 ${selected.value === 182 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 182)} @click.capture.once=${() => handle(182)}>
          <span class="label">Block 182</span>
          ${rows.map(r => html`<em data-id=${r.id}>182-${r.name}</em>`)}
        </div>
        <div class=${() => `row-183 ${selected.value === 183 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 183)} @click.capture.once=${() => handle(183)}>
          <span class="label">Block 183</span>
          ${rows.map(r => html`<em data-id=${r.id}>183-${r.name}</em>`)}
        </div>
        <div class=${() => `row-184 ${selected.value === 184 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 184)} @click.capture.once=${() => handle(184)}>
          <span class="label">Block 184</span>
          ${rows.map(r => html`<em data-id=${r.id}>184-${r.name}</em>`)}
        </div>
        <div class=${() => `row-185 ${selected.value === 185 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 185)} @click.capture.once=${() => handle(185)}>
          <span class="label">Block 185</span>
          ${rows.map(r => html`<em data-id=${r.id}>185-${r.name}</em>`)}
        </div>
        <div class=${() => `row-186 ${selected.value === 186 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 186)} @click.capture.once=${() => handle(186)}>
          <span class="label">Block 186</span>
          ${rows.map(r => html`<em data-id=${r.id}>186-${r.name}</em>`)}
        </div>
        <div class=${() => `row-187 ${selected.value === 187 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 187)} @click.capture.once=${() => handle(187)}>
          <span class="label">Block 187</span>
          ${rows.map(r => html`<em data-id=${r.id}>187-${r.name}</em>`)}
        </div>
        <div class=${() => `row-188 ${selected.value === 188 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 188)} @click.capture.once=${() => handle(188)}>
          <span class="label">Block 188</span>
          ${rows.map(r => html`<em data-id=${r.id}>188-${r.name}</em>`)}
        </div>
        <div class=${() => `row-189 ${selected.value === 189 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 189)} @click.capture.once=${() => handle(189)}>
          <span class="label">Block 189</span>
          ${rows.map(r => html`<em data-id=${r.id}>189-${r.name}</em>`)}
        </div>
        <div class=${() => `row-190 ${selected.value === 190 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 190)} @click.capture.once=${() => handle(190)}>
          <span class="label">Block 190</span>
          ${rows.map(r => html`<em data-id=${r.id}>190-${r.name}</em>`)}
        </div>
        <div class=${() => `row-191 ${selected.value === 191 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 191)} @click.capture.once=${() => handle(191)}>
          <span class="label">Block 191</span>
          ${rows.map(r => html`<em data-id=${r.id}>191-${r.name}</em>`)}
        </div>
        <div class=${() => `row-192 ${selected.value === 192 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 192)} @click.capture.once=${() => handle(192)}>
          <span class="label">Block 192</span>
          ${rows.map(r => html`<em data-id=${r.id}>192-${r.name}</em>`)}
        </div>
        <div class=${() => `row-193 ${selected.value === 193 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 193)} @click.capture.once=${() => handle(193)}>
          <span class="label">Block 193</span>
          ${rows.map(r => html`<em data-id=${r.id}>193-${r.name}</em>`)}
        </div>
        <div class=${() => `row-194 ${selected.value === 194 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 194)} @click.capture.once=${() => handle(194)}>
          <span class="label">Block 194</span>
          ${rows.map(r => html`<em data-id=${r.id}>194-${r.name}</em>`)}
        </div>
        <div class=${() => `row-195 ${selected.value === 195 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 195)} @click.capture.once=${() => handle(195)}>
          <span class="label">Block 195</span>
          ${rows.map(r => html`<em data-id=${r.id}>195-${r.name}</em>`)}
        </div>
        <div class=${() => `row-196 ${selected.value === 196 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 196)} @click.capture.once=${() => handle(196)}>
          <span class="label">Block 196</span>
          ${rows.map(r => html`<em data-id=${r.id}>196-${r.name}</em>`)}
        </div>
        <div class=${() => `row-197 ${selected.value === 197 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 197)} @click.capture.once=${() => handle(197)}>
          <span class="label">Block 197</span>
          ${rows.map(r => html`<em data-id=${r.id}>197-${r.name}</em>`)}
        </div>
        <div class=${() => `row-198 ${selected.value === 198 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 198)} @click.capture.once=${() => handle(198)}>
          <span class="label">Block 198</span>
          ${rows.map(r => html`<em data-id=${r.id}>198-${r.name}</em>`)}
        </div>
        <div class=${() => `row-199 ${selected.value === 199 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 199)} @click.capture.once=${() => handle(199)}>
          <span class="label">Block 199</span>
          ${rows.map(r => html`<em data-id=${r.id}>199-${r.name}</em>`)}
        </div>
        <div class=${() => `row-200 ${selected.value === 200 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 200)} @click.capture.once=${() => handle(200)}>
          <span class="label">Block 200</span>
          ${rows.map(r => html`<em data-id=${r.id}>200-${r.name}</em>`)}
        </div>
        <div class=${() => `row-201 ${selected.value === 201 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 201)} @click.capture.once=${() => handle(201)}>
          <span class="label">Block 201</span>
          ${rows.map(r => html`<em data-id=${r.id}>201-${r.name}</em>`)}
        </div>
        <div class=${() => `row-202 ${selected.value === 202 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 202)} @click.capture.once=${() => handle(202)}>
          <span class="label">Block 202</span>
          ${rows.map(r => html`<em data-id=${r.id}>202-${r.name}</em>`)}
        </div>
        <div class=${() => `row-203 ${selected.value === 203 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 203)} @click.capture.once=${() => handle(203)}>
          <span class="label">Block 203</span>
          ${rows.map(r => html`<em data-id=${r.id}>203-${r.name}</em>`)}
        </div>
        <div class=${() => `row-204 ${selected.value === 204 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 204)} @click.capture.once=${() => handle(204)}>
          <span class="label">Block 204</span>
          ${rows.map(r => html`<em data-id=${r.id}>204-${r.name}</em>`)}
        </div>
        <div class=${() => `row-205 ${selected.value === 205 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 205)} @click.capture.once=${() => handle(205)}>
          <span class="label">Block 205</span>
          ${rows.map(r => html`<em data-id=${r.id}>205-${r.name}</em>`)}
        </div>
        <div class=${() => `row-206 ${selected.value === 206 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 206)} @click.capture.once=${() => handle(206)}>
          <span class="label">Block 206</span>
          ${rows.map(r => html`<em data-id=${r.id}>206-${r.name}</em>`)}
        </div>
        <div class=${() => `row-207 ${selected.value === 207 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 207)} @click.capture.once=${() => handle(207)}>
          <span class="label">Block 207</span>
          ${rows.map(r => html`<em data-id=${r.id}>207-${r.name}</em>`)}
        </div>
        <div class=${() => `row-208 ${selected.value === 208 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 208)} @click.capture.once=${() => handle(208)}>
          <span class="label">Block 208</span>
          ${rows.map(r => html`<em data-id=${r.id}>208-${r.name}</em>`)}
        </div>
        <div class=${() => `row-209 ${selected.value === 209 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 209)} @click.capture.once=${() => handle(209)}>
          <span class="label">Block 209</span>
          ${rows.map(r => html`<em data-id=${r.id}>209-${r.name}</em>`)}
        </div>
        <div class=${() => `row-210 ${selected.value === 210 ? "on" : ""}`} @keydown.enter.stop=${() => (selected.value = 210)} @click.capture.once=${() => handle(210)}>
          <span class="label">Block 210</span>
          ${rows.map(r => html`<em data-id=${r.id}>210-${r.name}</em>`)}
        </div>
      </div>
    ` : null}

    <footer data-end="ok"></footer>
  </section>
`;
