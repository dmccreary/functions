# IB Mathematics Functions

[![MkDocs](https://img.shields.io/badge/Made%20with-MkDocs-526CFE?logo=materialformkdocs)](https://www.mkdocs.org/)
[![Material for MkDocs](https://img.shields.io/badge/Material%20for%20MkDocs-526CFE?logo=materialformkdocs)](https://squidfunk.github.io/mkdocs-material/)
[![GitHub Pages](https://img.shields.io/badge/View%20on-GitHub%20Pages-blue?logo=github)](https://dmccreary.github.io/functions/)
[![GitHub](https://img.shields.io/badge/GitHub-dmccreary%2Ffunctions-blue?logo=github)](https://github.com/dmccreary/functions)
[![MathJax](https://img.shields.io/badge/Math-MathJax-green?logo=latex)](https://www.mathjax.org/)
[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

## View the Live Site

Visit the interactive intelligent textbook at: [https://dmccreary.github.io/functions/](https://dmccreary.github.io/functions/)

## Overview

This is an interactive, intelligent textbook on **IB Mathematics Functions** designed for high school International Baccalaureate Diploma Programme (SL and HL/AHL levels) students. Built using MkDocs with the Material theme and MathJax logic processing, it aims to clarify the concept of functional mapping, quadratic frameworks, polynomials, exponentials, and complex transformations.

The textbook structures its outcomes around Bloom's Taxonomy (2001 revision) ensuring an optimal cognitive gradient from memorization to advanced analytical creations mapping back to realistic geometry and behavioral graphs. 

Whether you're a student building a foundational understanding of mathematical equations or exploring complex limits and compositions, this living document bridges practical realities with abstraction—enhanced continuously by interactive components.



## Getting Started

### Clone the Repository

```bash
git clone https://github.com/dmccreary/functions.git
cd functions
```

### Install Dependencies

This project uses MkDocs with the Material theme:

```bash
pip install mkdocs
pip install mkdocs-material
```

### Build and Serve Locally

Build the site:

```bash
mkdocs build
```

Serve locally for development (with live reload):

```bash
mkdocs serve
```

Open your browser to `http://localhost:8000`

### Using the Book

**Navigation:**
- Use the left sidebar to browse content.
- Click on the search icon to search all concepts.
- The platform automatically formats LaTeX expressions using customized MathJax bindings.

**Customization:**
- Edit markdown files in `docs/` to modify content.
- Update `mkdocs.yml` to alter project settings.
- Push dynamic code updates to rebuild your GitHub Pages deployments.

## Repository Structure

```text
functions/
├── .agents/                       # Automated workflows and scripts
│   └── workflows/
│       └── cpd.md                 # Commit, Push, Deploy automation rule
├── docs/                          # MkDocs documentation source
│   ├── js/        
│   │   └── mathjax.js             # MathJax initialization logic
│   ├── course-description.md      # Detailed course objectives using Bloom's taxonomy
│   ├── course-notes.txt           # Reference material source
│   └── index.md                   # Home page markdown
├── mkdocs.yml                     # Site and dependency configuration
└── README.md                      # This file
```

## Reporting Issues

Found a bug, typo, or have a suggestion for improvement? Please report it:

[GitHub Issues](https://github.com/dmccreary/functions/issues)

When reporting, please specify your browser for math rendering issues and provide screenshots if a structural pattern is misaligned.

## License

This project adheres to standard non-commercial sharing principles. 
If not otherwise specified, standard terms fall under [Creative Commons Attribution-NonCommercial-ShareAlike 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).

**You are free to:**
- Share — copy and redistribute the material
- Adapt — remix, transform, and build upon the material

## Acknowledgements

This project is built on the shoulders of giants in the open source community:

- **[MkDocs](https://www.mkdocs.org/)** - Static site generator optimized for project documentation
- **[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)** - Beautiful, responsive theme
- **[MathJax](https://www.mathjax.org/)** - High-quality mathematics display engine
- **[GitHub Pages](https://pages.github.com/)** - Free hosting for open source projects

## Contact

**Dan McCreary**

- LinkedIn: [linkedin.com/in/danmccreary](https://www.linkedin.com/in/danmccreary/)
- GitHub: [@dmccreary](https://github.com/dmccreary)
