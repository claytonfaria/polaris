---
title: z-index/global-disallowed-list
description: Disallows use of legacy z-index Sass APIs.
keywords:
  - stylelint
  - z-index
  - z-index rules
---

import RulePreamble from '../_preamble.md';
import RulePostamble from '../_postamble.md';

# {frontmatter.title}

<Lede>{frontmatter.description}</Lede>

<RulePreamble category="z-" />

```diff
// Don't
- @type map $elevation-data: $global-elements;
```

<RulePostamble />
