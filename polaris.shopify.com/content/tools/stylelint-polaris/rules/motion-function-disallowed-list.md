---
title: motion/function-disallowed-list
description: Disallows use of legacy Sass motion functions.
keywords:
  - stylelint
  - motion
  - motion rules
---

import RulePreamble from '../_preamble.md';
import RulePostamble from '../_postamble.md';

# {frontmatter.title}

<Lede>{frontmatter.description}</Lede>

<RulePreamble category="motion" />

```diff
// Do
+ transition-duration: var(--p-motion-duration-200);
// Don't
- transition-duration: 200ms;
```

<RulePostamble />
