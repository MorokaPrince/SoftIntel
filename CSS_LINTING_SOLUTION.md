# CSS Linting Errors - Complete Solution Guide

## Issue Summary
VS Code CSS linter is showing "Unknown at rule" warnings for `@tailwind` and `@apply` directives in `src/app/globals.css`. These are **IDE warnings only** and **NOT actual build problems**.

## Diagnosis Results
✅ **Build Status**: Your project builds successfully without errors
✅ **Configuration**: `tailwind.config.ts` and `postcss.config.mjs` are correctly configured
✅ **Dependencies**: All Tailwind CSS dependencies are properly installed

## Why These Warnings Appear
The VS Code CSS linter doesn't recognize Tailwind CSS's custom at-rules (`@tailwind`, `@apply`) by default because they're PostCSS-specific directives, not standard CSS.

## Solution: Configure VS Code Settings

### Option 1: Disable CSS Linting for Tailwind Directives (Recommended)
Create or update `.vscode/settings.json`:

```json
{
  "css.lint.unknownAtRules": "ignore",
  "scss.lint.unknownAtRules": "ignore",
  "less.lint.unknownAtRules": "ignore"
}
```

This tells VS Code to ignore unknown at-rules in CSS files, eliminating the false warnings.

### Option 2: Install Tailwind CSS IntelliSense Extension
1. Open VS Code Extensions (Ctrl+Shift+X)
2. Search for "Tailwind CSS IntelliSense"
3. Install the official extension by Tailwind Labs
4. This provides proper syntax highlighting and validation for Tailwind directives

### Option 3: Use PostCSS Language Support
1. Install "PostCSS Language Support" extension
2. Configure VS Code to treat `.css` files with Tailwind directives as PostCSS
3. Add to `.vscode/settings.json`:

```json
{
  "files.associations": {
    "*.css": "postcss"
  }
}
```

## Recommended Approach
**Combine Options 1 + 2**:
- Use Option 1 to suppress false warnings
- Install Tailwind CSS IntelliSense for better development experience

## Verification
After applying settings:
1. Reload VS Code (Ctrl+Shift+P → "Developer: Reload Window")
2. Open `src/app/globals.css`
3. Warnings should disappear
4. Run `npm run build` to confirm no actual build errors

## Current Configuration Status
✅ `tailwind.config.ts` - Properly configured with content paths
✅ `postcss.config.mjs` - Correctly set up with tailwindcss and autoprefixer
✅ `package.json` - All dependencies installed (tailwindcss@3.4.18, autoprefixer@10.4.21)
✅ `src/app/globals.css` - Valid Tailwind directives at lines 3-5

## Conclusion
These are **purely IDE warnings** and do not affect your build or deployment. The CSS linting warnings are false positives that can be safely suppressed with the configuration above.

