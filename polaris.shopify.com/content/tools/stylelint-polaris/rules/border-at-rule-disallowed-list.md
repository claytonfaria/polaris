---
title: border/at-rule-disallowed-list
description: Disallows use of legacy Sass border mixins.
keywords:
  - stylelint
  - border
  - border rules
---

import RulePreamble from '../_preamble.md';
import RulePostamble from '../_postamble.md';

# {frontmatter.title}

<Lede>{frontmatter.description}</Lede>

<RulePreamble category="border" />

```diff
// Do
+ outline: var(--p-border-width-025) solid transparent;
// Don't
- @include high-contrast-outline()
```

NOTE: The `focus-ring` at rule does not currently have an equivalent token or component. If you need to use it, feel free to add a stylelint ignore comment until a solution from Polaris is ready.

```diff
// Do
+ &:focus {
  + outline: var(--p-border-width-050) solid var(--p-color-border-focus);
  + outline-offset: var(--p-space-050);
+ }
// Don't
- @include focus-ring
```

<RulePostamble />
