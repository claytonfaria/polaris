---
title: color/function-disallowed-list
description: Disallows allows use of built in and legacy color functions.
keywords:
  - stylelint
  - color
  - color rules
---

import RulePreamble from '../_preamble.md';
import RulePostamble from '../_postamble.md';

# {frontmatter.title}

<Lede>{frontmatter.description}</Lede>

<RulePreamble category="color" />

```diff
// Do
+ color: var(--p-color-text-disabled);
+ background: var(--p-color-bg-fill-inverse-hover);
// Don't
- color: rgb(140, 145, 150);
- background: color('hover');
```

<RulePostamble />
