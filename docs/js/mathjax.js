// MathJax Configuration for MkDocs Material with pymdownx.arithmatex
// This configuration works with the arithmatex extension in mkdocs.yml
// to render mathematical expressions in Markdown documents.
//
// Usage in Markdown:
// - Inline math: $expression$ (e.g., $f(x) = x^2 + 2x + 1$)
// - Display math: $$expression$$ (e.g., $$\int_0^1 x^2 \, dx$$)
//
// The arithmatex extension converts $ delimiters to LaTeX format before MathJax processes them.
// This ensures compatibility with MkDocs Material's markdown processing pipeline.

window.MathJax = {
  tex: {
    // Math delimiters - only using dollar syntax for simplicity and compatibility
    // Format: [startDelimiter, endDelimiter]
    inlineMath: [["$", "$"]],      // Inline math: $expression$
    displayMath: [["$$", "$$"]],   // Display math: $$expression$$

    // Process LaTeX escape sequences like \frac, \sqrt, etc.
    processEscapes: true,

    // Process LaTeX environments like \begin{equation}...\end{equation}
    processEnvironments: true
  },
  options: {
    // Ignore HTML elements with these classes when processing math
    ignoreHtmlClass: ".*|",

    // Only process HTML elements with this class for math rendering
    // This matches the 'arithmatex' class used by pymdownx.arithmatex
    processHtmlClass: "arithmatex"
  }
};

// Re-render math expressions when MkDocs Material navigates between pages
// This ensures math displays correctly on dynamic page loads
document$.subscribe(() => {
  if (window.MathJax && MathJax.startup) {
    MathJax.startup.output.clearCache()
    MathJax.typesetClear()
    MathJax.texReset()
    MathJax.typesetPromise()
  }
});
