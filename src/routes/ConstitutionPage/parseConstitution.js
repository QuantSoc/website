// Turns the plain-text export of the constitution (Google Docs -> File ->
// Download -> Plain text) into sections the page can render. The export looks like:
//
//   1 Introduction                      <- section heading
//   1.1        The official name ...    <- clause (number, 2+ spaces, text)
//   4.10.1 Co-Presidents                <- sub-heading (number, 1 space, title)
//   a)        To chair all ...          <- lettered item
//   Definitions                         <- unnumbered sub-heading
//
// Anything before the first section heading (the document title) is ignored.

const SECTION = /^(\d+) (\S.*)$/;
const CLAUSE = /^(\d+(?:\.\d+)+)\s{2,}(\S.*)$/;
const NUMBERED_SUBHEADING = /^(\d+(?:\.\d+)+) (\S.*)$/;
const LETTERED = /^([a-z])\)\s+(\S.*)$/;

const parseConstitution = (rawText) => {
  const lines = rawText
    .replace(/^\uFEFF/, '')
    .split(/\r?\n/)
    .map((line) => {
      return line.trim();
    })
    .filter(Boolean);

  const sections = [];
  let current = null;
  let lastDepth = 0;

  lines.forEach((line) => {
    let match = line.match(SECTION);
    if (match) {
      current = {
        number: match[1],
        title: match[2],
        id: `section-${match[1]}`,
        items: [],
      };
      sections.push(current);
      lastDepth = 0;
      return;
    }
    if (!current) return; // document title, before section 1

    match = line.match(CLAUSE);
    if (match) {
      // 1.1 -> depth 0, 1.1.1 -> depth 1, 3.8.6.1 -> depth 2
      lastDepth = match[1].split('.').length - 2;
      current.items.push({
        type: 'clause',
        number: match[1],
        text: match[2],
        depth: lastDepth,
      });
      return;
    }

    match = line.match(LETTERED);
    if (match) {
      current.items.push({
        type: 'clause',
        number: `${match[1]})`,
        text: match[2],
        depth: lastDepth + 1,
      });
      return;
    }

    match = line.match(NUMBERED_SUBHEADING);
    current.items.push({
      type: 'subheading',
      text: match ? `${match[1]} ${match[2]}` : line,
    });
    lastDepth = 0;
  });

  return sections;
};

export default parseConstitution;
