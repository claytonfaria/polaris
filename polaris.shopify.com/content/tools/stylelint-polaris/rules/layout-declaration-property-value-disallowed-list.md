---
title: layout/declaration-property-value-disallowed-list
description: Disallows declaration of positioning and dimension property values with Polaris tokens.
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

```diff
// Do
+ <LegacyStack />
// Don't
- width: 100%;
```

<RulePostamble />
