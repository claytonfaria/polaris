---
title: shadow/property-disallowed-list
description: Disallows text shadow property.
keywords:
  - stylelint
  - shadow
  - shadow rules
---

import RulePreamble from '../_preamble.md';
import RulePostamble from '../_postamble.md';

# {frontmatter.title}

<Lede>{frontmatter.description}</Lede>

<RulePreamble category="shadow" />

Instead of using properties like `text-shadow`, make sure the text has proper contrast with the background so that it is readable without a shadow.

```diff
// Don't
- text-shadow: 2px 2px #ff0000;
```

<RulePostamble />
