---
title: space/custom-property-disallowed-list
description: Disallows use of legacy space custom properties.
keywords:
  - stylelint
  - space
  - space rules
---

import RulePreamble from '../_preamble.md';
import RulePostamble from '../_postamble.md';

# {frontmatter.title}

<Lede>{frontmatter.description}</Lede>

<RulePreamble category="space" />

```diff
// Do
+ margin-bottom: var(--p-space-025);
// Don't
- margin-bottom: var(--p-choice-margin);
```

<RulePostamble />
