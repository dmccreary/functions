# IB Mathematics Functions Teachers Guide

Welcome to the teacher's guide for *IB Mathematics Functions: An interactive intelligent textbook for IB Mathematics Functions*. This guide explains every feature of the textbook, how to use it in your classroom, and how to customize it for your students. No prior technical knowledge is assumed — every technical term is defined before it is used.

## About This Interactive Intelligent Textbook

### What is an Intelligent Textbook?

An **intelligent textbook** is a digital textbook that goes beyond static text and images. It includes interactive simulations, a searchable glossary, a curated FAQ, and a structured map of how concepts relate to each other. The goal is to give students a richer, more engaging learning experience than a traditional printed textbook.

### The Five Levels of Intelligent Textbooks

Not all digital textbooks are created equal. We categorize intelligent textbooks into five levels based on how interactive and adaptive they are:

<iframe src="https://dmccreary.github.io/intelligent-textbooks/sims/book-levels/main.html" height="500px" scrolling="no"
  style="overflow: hidden;"></iframe>

| Level | Name | Description | Example Features |
|-------|------|-------------|-----------------|
| **Level 1** | Static Digital | A PDF or basic web version of a print textbook | Text and images only, no interactivity |
| **Level 2** | Interactive | Adds interactive elements like simulations and searchable glossaries | MicroSims, concept search, learning graph |
| **Level 3** | Adaptive | Adjusts content based on student performance | Personalized learning paths, difficulty adjustment |
| **Level 4** | AI-Assisted | Includes an AI tutor that can answer student questions | Chatbot integration, automated feedback |
| **Level 5** | Fully Adaptive AI | Continuously learns from student interactions and optimizes the experience | Real-time content generation, predictive analytics |

**This textbook is a Level 2 Intelligent Textbook.** It includes 28 MicroSims, a 208-term glossary, an FAQ, and an interactive learning graph showing how all 208 concepts connect.

### What Makes This Textbook Different

- **Interactive MicroSims** let students manipulate mathematical models directly in their browser — no software installation required
- **IB-aligned content** built specifically for IB Diploma Programme students (SL and HL/AHL)
- **Conversational tone** — concepts are explained the way a great teacher would at the whiteboard, not like a dry reference manual
- **Learning graph** — a visual map showing how all 208 concepts connect and build on each other
- **Rick the Raccoon** — a friendly mascot character (called a "pedagogical agent") who guides students through each chapter with tips, encouragement, jokes, and key insights
- **Completely free and open source** — licensed under Creative Commons for non-commercial use

## Using the Chapters

### Chapter Structure

The textbook contains **13 chapters** organized in a deliberate sequence. Each chapter builds on concepts from previous chapters, so students should work through them in order:

| Chapters | Topic Area |
|----------|-----------|
| 1 | Algebra Foundations (number systems, factoring, expressions) |
| 2 | Relations and Functions (coordinate plane, domain/range, classifications) |
| 3 | Graphing and Key Features (intercepts, turning points, window settings) |
| 4 | Linear Functions (gradient, intercepts, simultaneous equations) |
| 5 | Quadratic Functions (solving methods, sign diagrams, projectile motion) |
| 6 | Inverse and Composite Functions |
| 7 | Exponential Functions (growth, decay, models) |
| 8 | Logarithmic Functions |
| 9 | Polynomial Functions (AHL focus) |
| 10 | Rational Functions (asymptotes, hyperbolas) |
| 11 | Function Classifications (even, odd, modulus — AHL focus) |
| 12 | Transformations (translations, reflections, stretches) |
| 13 | Modeling and Applications (regression, real-world fits) |

### What Each Chapter Contains

Every chapter follows a consistent structure:

1. **YAML front matter** — Metadata at the top of each chapter file (title, description, reading level). Students don't see this; it's used by search engines and the website builder.
2. **Summary** — A brief overview of what the chapter covers and what students will learn.
3. **Concepts covered** — A list of the specific concepts addressed in the chapter, drawn from the learning graph.
4. **Welcome from Rick** — A mascot admonition that introduces the chapter topic in Rick's friendly, playful voice.
5. **Main content** — The core instructional material, written at an IB Diploma reading level. Includes tables, worked examples, "Try it yourself" exercises, and embedded MicroSims.
6. **Mascot admonitions** — Throughout the chapter, Rick appears 5–6 times to highlight key insights (thinking), offer practical tips (tip), provide encouragement on harder concepts (encourage), and warn about common mistakes (warning).
7. **Key takeaways** — A summary of the most important concepts, preceded by a celebration from Rick.

### Suggested Classroom Use

- **Before class**: Assign the chapter as reading homework. The MicroSims keep students engaged during independent reading.
- **During class**: Use the MicroSims on a projector for whole-class demonstrations. Ask students to predict what will happen when you change a slider, then test their predictions.
- **After class**: Assign the "Try it yourself" exercises and the worked examples for independent practice.
- **Pacing**: Each chapter is designed for approximately 2–3 class periods (90–135 minutes of instruction). Chapters with more MicroSims (like 5 — Quadratic Functions) may take longer.

## Using the MicroSims

### What is a MicroSim?

A **MicroSim** (short for "micro-simulation") is a small, interactive simulation that runs directly in a web browser. Students don't need to install any software — MicroSims work on any device with a modern web browser (Chrome, Firefox, Safari, Edge).

Each MicroSim lets students manipulate one or more variables (using sliders, buttons, or drag-and-drop) and immediately see how the model responds. This "learn by doing" approach helps students build intuition for abstract mathematical concepts like asymptotes, transformations, and function composition.

### How MicroSims Are Embedded

MicroSims appear within chapter text as rectangular interactive areas. They are embedded using **iframes** — a web technology that displays one web page inside another. You don't need to understand how iframes work; just know that the MicroSims load automatically when students view the chapter page.

### Types of MicroSims

The textbook includes **28 MicroSims** built primarily with p5.js, a JavaScript library for creative coding and interactive graphics:

| Technology | What It's Good For | Example MicroSims |
|-----------|-------------------|-------------------|
| **p5.js** | Interactive graphs with sliders, buttons, and drag-and-drop | Gradient Explorer, Transformation Explorer, Quadratic Equation Solver |
| **p5.js (quiz mode)** | Self-check activities with feedback and scoring | Coordinate Plane Explorer, Function Feature Identifier, Function Property Classifier |
| **vis-network** | Network diagrams showing concept dependencies | Learning Graph Viewer |

Highlights include the **Inverse Function Reflector** (shows a function and its inverse reflecting across $y = x$), the **Exponential Model Simulator** (switches between compound interest, population growth, and half-life decay), and the **Factoring Decision Flowchart** (guides students through choosing the right factoring technique).

### Tips for Using MicroSims in Class

1. **Project them on a screen** — MicroSims are designed to be visible on a projector. Have students call out predictions before you move a slider.
2. **Let students explore independently** — After a demonstration, give students 5–10 minutes to experiment on their own devices.
3. **Use the "Reset" and dropdown controls** — Encourage students to reset and try different base functions, parameters, and scenarios.
4. **Connect to the text** — Each MicroSim is placed near the concept it illustrates. After exploring the sim, have students re-read the surrounding text.
5. **Offline access** — MicroSims require an internet connection unless you have built the site locally (see "Customizing Your Own Textbook" below).

!!! mascot-tip "Rick's Tip: Embed MicroSims Anywhere!"
    <img src="../img/mascot/tip.png" class="mascot-admonition-img" alt="Rick shares a tip">
    You can add any MicroSim to **any web page** — a Google Site, a
    WordPress blog, an LMS like Canvas or Schoology, or even a plain
    HTML file. Just paste a single line of HTML:

    ```html
    <iframe src="https://dmccreary.github.io/functions/sims/YOUR-MICROSIM-NAME/main.html"
        width="100%" height="500px"
        scrolling="no">
    </iframe>
    ```

    Replace `YOUR-MICROSIM-NAME` with the name of any MicroSim from
    the [MicroSims list](../sims/index.md). That's it — one line of
    code and your students have an interactive simulation on any page
    you control. Every input has its output!

### MicroSim Specifications

Each MicroSim has its own page in the "MicroSims" section of the left navigation. These pages include the MicroSim itself plus a description of what it does, the controls available, and the concepts it illustrates. Use these as a reference when planning which MicroSims to feature in each lesson.

## Using the Glossary

### What is the Glossary?

The **glossary** is an alphabetical list of all **208 key terms** used in the textbook, each with a precise, concise definition. It serves as a quick-reference dictionary for students encountering unfamiliar vocabulary. Most entries include a worked example in IB-standard notation.

### How to Access the Glossary

- Click **"Glossary"** in the left navigation sidebar from any page
- Use the browser's built-in search (Ctrl+F on Windows/Linux, Cmd+F on Mac) to find a specific term on the glossary page
- Use the site-wide **search bar** at the top of any page to search for a term across the entire textbook

### Tips for Using the Glossary in Class

- **Vocabulary preview** — Before starting a new chapter, have students look up the key terms in the glossary to build familiarity.
- **Definition matching** — Create a warm-up activity where students match glossary definitions to terms from the current chapter.
- **Student-generated definitions** — After reading a chapter, have students write their own definitions, then compare with the glossary.
- **Terminology drills** — Use glossary terms for quick formative assessments (flash cards, quiz games, etc.). The IB exam expects precise use of terms like "gradient," "asymptote," and "discriminant."

## Using the FAQ

### What is the FAQ?

The **FAQ** (Frequently Asked Questions) is a curated list of common questions students ask about functions and IB Mathematics, organized by topic. Each question includes a clear, concise answer written at the same reading level as the chapters.

### How the FAQ is Organized

The FAQ covers questions across all 13 chapters. Questions are grouped by topic area to make browsing easy.

### Tips for Using the FAQ in Class

- **Discussion starters** — Pick 2–3 FAQ questions at the start of class and have students discuss before revealing the answer.
- **Homework support** — Point students to the FAQ when they have questions outside of class hours.
- **Extension reading** — The FAQ often covers angles not addressed in the main chapter text, making it good supplementary material.
- **Exam review** — Students can use the FAQ as a study guide before IB assessments.

## Understanding the License

### What is a Creative Commons License?

A **license** is a legal document that explains what others are allowed to do with a piece of work. A **Creative Commons (CC) license** is a standardized, easy-to-understand license used for educational and creative content. It tells you exactly what permissions you have without needing a lawyer.

### This Textbook's License

This textbook uses the **CC BY-NC-SA 4.0** license. Here's what each part means:

| Code | Full Name | What It Means |
|------|-----------|---------------|
| **CC** | Creative Commons | A standard open license |
| **BY** | Attribution | You must give credit to the original author |
| **NC** | Non-Commercial | You cannot use the material to make money |
| **SA** | Share-Alike | If you modify the material, you must share it under the same license |
| **4.0** | Version 4.0 | The version of the license (the current standard) |

### What You CAN Do

- **Copy** the entire textbook or individual chapters for your students
- **Share** the textbook link with other teachers, students, or parents
- **Print** chapters for classroom use
- **Modify** the content — add your own examples, remove sections, change the order
- **Translate** the content into other languages
- **Create derivative works** — build your own version of the textbook based on this one

### What You CANNOT Do

- **Sell** the textbook or charge students for access
- **Remove attribution** — you must credit the original author (Dan McCreary)
- **Use a different license** — if you modify and share, it must remain CC BY-NC-SA 4.0
- **Claim it as your own work** — the attribution requirement means you must acknowledge the original source

For the full legal text, see the [License](../license.md) page.

## Customizing Your Own Textbook

One of the most powerful features of this textbook is that you can create your own customized version. This section explains how, step by step.

### Key Technical Terms

Before we begin, here are some terms you'll need to understand:

- **Repository (repo)** — A folder on GitHub that contains all the files for a project. Think of it as the project's home directory.
- **Git** — A version control tool that tracks changes to files. It lets you see what changed, when, and by whom.
- **Clone** — Making a complete copy of a repository on your own computer.
- **Fork** — Making a complete copy of a repository on your own GitHub account (stays on GitHub, not your computer).
- **MkDocs** — The software that converts the textbook's markdown files into a website. You don't need to learn MkDocs deeply — just enough to make basic changes.
- **Markdown** — A simple text formatting language. If you can write an email, you can write Markdown. `**bold**` makes **bold**, `# Heading` makes a heading, and `-` makes a bullet point.
- **mkdocs.yml** — The main configuration file for the textbook website. It controls the site title, navigation structure, colors, and which features are enabled.

### Step 1: Create a GitHub Account

If you don't already have one, go to [github.com](https://github.com) and create a free account.

### Step 2: Fork or Clone the Repository

**Option A: Fork (easier, stays on GitHub)**

1. Go to [dmccreary/functions](https://github.com/dmccreary/functions)
2. Click the **"Fork"** button in the upper-right corner
3. This creates a copy in your own GitHub account that you can edit

**Option B: Clone (more control, works on your computer)**

1. Install Git on your computer ([git-scm.com](https://git-scm.com/))
2. Open a terminal (Command Prompt on Windows, Terminal on Mac)
3. Run this command:

```bash
git clone https://github.com/dmccreary/functions.git
```

This downloads the entire textbook to your computer.

### Step 3: Make Changes

All content files are in the `docs/` folder. They are written in **Markdown** (`.md` files) — plain text files with simple formatting. You can edit them with any text editor.

#### Changing the Title and Description

Open `mkdocs.yml` and edit these lines:

```yaml
site_name: "Your Custom Textbook Title"
site_description: "Your description here"
site_author: "Your Name"
```

#### Changing the Colors

In `mkdocs.yml`, find (or add) the `palette` section under `theme`:

```yaml
theme:
  palette:
    - scheme: default
      primary: indigo    # Change to: blue, red, purple, teal, etc.
      accent: amber      # Change the accent color
```

MkDocs Material supports these primary colors: red, pink, purple, deep purple, indigo, blue, light blue, cyan, teal, green, light green, lime, yellow, amber, orange, deep orange, brown, grey, blue grey.

#### Changing the Logo

Replace the file `docs/img/mascot/neutral.png` with your own logo image (PNG format, approximately 128x128 pixels), or update the `logo:` path in `mkdocs.yml`.

### Step 4: Preview Your Changes Locally

1. Install Python (version 3.8 or newer) from [python.org](https://python.org)
2. Install MkDocs and the Material theme:

```bash
pip install mkdocs mkdocs-material
```

3. Navigate to the project folder and start the preview server:

```bash
cd functions
mkdocs serve
```

4. Open your browser to `http://127.0.0.1:8000/functions/` to see your customized version

The preview server watches for file changes. When you edit and save a Markdown file, the page automatically refreshes in your browser.

### Step 5: Publish Your Version

To publish your customized textbook as a free website using GitHub Pages:

```bash
mkdocs gh-deploy
```

This command builds the website and publishes it to `https://YOUR-USERNAME.github.io/functions/`. The process takes about 1–2 minutes.

## Customizing Your Analytics

### What is Web Analytics?

**Web analytics** is the process of measuring how visitors use a website — which pages they visit, how long they stay, and where they come from. For an educational textbook, analytics can help you understand which chapters students read most, which MicroSims they interact with, and where they might be struggling.

### Google Analytics

You can connect a free **Google Analytics** account to your fork to track visits.

#### Setting Up Your Own Google Analytics

1. Go to [analytics.google.com](https://analytics.google.com/) and sign in with a Google account
2. Create a new **property** (Google's term for a tracked website)
3. Google will give you a **Measurement ID** — a code that looks like `G-XXXXXXXXXX`
4. In your `mkdocs.yml`, add this section:

```yaml
extra:
  analytics:
    provider: google
    property: G-YOUR-MEASUREMENT-ID
```

5. Rebuild and deploy your site. Analytics data will start appearing within 24–48 hours.

#### What You Can Learn from Analytics

- **Which chapters are most/least visited** — helps you identify where students might be skipping content
- **Average time on page** — longer times may indicate engagement or confusion
- **Device breakdown** — what percentage of students use phones vs. computers
- **Geographic distribution** — where your students are accessing from
- **Search terms** — what students search for on your site

### xAPI Monitoring (Advanced)

**xAPI** (Experience API, also called "Tin Can API") is an advanced standard for tracking detailed learning activities — not just page views, but specific interactions like "student moved a slider to position X" or "student answered quiz question 3 correctly."

#### What is an LRS?

An **LRS** (Learning Record Store) is a database that stores xAPI learning records. Think of it as a specialized analytics system designed specifically for education. If you use an LRS, you can track granular student learning data.

#### Important: Regulatory Considerations

Before collecting student-specific learning data, be aware of these regulations:

- **FERPA** (Family Educational Rights and Privacy Act) — U.S. federal law that protects student education records. If you collect data that can identify individual students, you must comply with FERPA.
- **COPPA** (Children's Online Privacy Protection Act) — U.S. federal law that applies to children under 13. If any of your students are under 13, additional restrictions apply.
- **State laws** — Many U.S. states have additional student privacy laws.
- **GDPR** (General Data Protection Regulation) — European Union law that applies if any of your students are in the EU. IB Diploma classes frequently include students in EU jurisdictions, so GDPR is especially relevant for IB teachers.

**Recommendation**: The Google Analytics setup described above is anonymous by default — it tracks aggregate page views, not individual students. This is the safest approach. If you want individual student tracking via xAPI, consult your school's data privacy officer before proceeding.

### Building a Student Progress Dashboard with AI

As AI tools become more accessible, it is becoming possible to build custom dashboards that visualize student progress through the textbook. For example:

- Which chapters each student has completed
- MicroSim engagement levels (which sims got the most interaction)
- Concepts that need re-teaching based on exercise performance

Building such a dashboard requires programming knowledge (Python, JavaScript) and careful attention to student data privacy. This is an advanced topic beyond the scope of this guide, but the open-source nature of this textbook means all the data structures are available for developers to build upon.

## The Learning Graph

### What is a Learning Graph?

A **learning graph** is a visual map showing how concepts in the textbook depend on each other. It is structured as a **DAG** (Directed Acyclic Graph) — a diagram where arrows show which concepts must be understood before others.

For example, understanding the **discriminant** requires first understanding the **quadratic formula**, which requires understanding **factoring** and **quadratic equations**. The learning graph makes these dependency chains visible across all 208 concepts in this course.

### How Teachers Can Use the Learning Graph

- **Prerequisite checking** — Before teaching a concept, verify that students have covered its prerequisites
- **Remediation** — If a student struggles with a concept, trace back to its prerequisites to find the gap
- **Curriculum mapping** — Compare the learning graph to the IB Mathematics syllabus to identify coverage gaps between SL and HL
- **Enrichment** — Advanced students can explore concepts ahead of the current chapter by following the graph forward

The interactive Learning Graph Viewer is available in the "MicroSims → Learning Graph Viewer" section of the left navigation.

## Rick the Raccoon: Your Pedagogical Agent

### What is a Pedagogical Agent?

A **pedagogical agent** is a character that appears throughout a textbook to guide students. Research shows that pedagogical agents improve student engagement and perception of learning — a phenomenon called the **persona effect**.

### Meet Rick

**Rick** is a compact, round cartoon raccoon with gray, brown, tan, and black fur, a bushy striped tail, signature black mask markings, and a mischievous grin. His catchphrase is **"Every input has its output!"** Rick is funny, playful, optimistic, supportive, and clever. He cracks math puns, celebrates every small win, and never talks down to students — even when the quadratic formula is giving them grief.

### How Rick Appears

Rick appears as colored callout boxes (called **admonitions**) throughout each chapter. There are seven types:

| Type | Purpose | Frequency |
|------|---------|-----------|
| Welcome | Introduces the chapter with warmth and a joke | Every chapter opening |
| Thinking | Highlights key insights | 1–2 per chapter |
| Tip | Shares practical advice or shortcuts | As needed |
| Warning | Alerts to common mistakes | As needed |
| Encourage | Supports students on harder concepts | Where students may struggle |
| Celebration | Celebrates progress | End of major sections |
| Neutral | General sidebar notes | As needed |

Rick appears no more than 6–7 times per chapter to avoid overuse. Mascot admonitions are never placed back-to-back.

### Tips for Teachers

- **Read Rick's lines aloud** — They're written in a conversational tone and land well when spoken. The jokes work better out loud.
- **Use as discussion prompts** — Rick's "thinking" admonitions highlight the most important insights in each chapter.
- **Encourage struggling students** — Point students to Rick's "encourage" admonitions when they're frustrated with a concept like asymptotes or function composition.
- **Let Rick defuse anxiety** — Rick's warnings reframe scary-looking math ("This looks scary, but I promise it's just algebra in a trenchcoat."). Use this approach in your own teaching.
