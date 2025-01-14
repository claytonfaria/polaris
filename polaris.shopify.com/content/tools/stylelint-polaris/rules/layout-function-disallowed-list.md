---
title: layout/function-disallowed-list
description: Disallows use of internal Sass layout functions.
keywords:
  - stylelint
  - layout
  - layout rules
---

import RulePreamble from '../_preamble.md';
import RulePostamble from '../_postamble.md';

# {frontmatter.title}

<Lede>{frontmatter.description}</Lede>

<RulePreamble category="layout" />

Use hard coded pixel or rem values for `width` and `height` instead of legacy mixins/variables or spacing tokens.

```diff
// Do
+ height: 56px;
// Don't
- height: top-bar-height();
```

<RulePostamble />
