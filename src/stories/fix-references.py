#!/usr/bin/env python3
"""
One-shot script to replace the placeholder References section at the bottom
of every docs/stories/*/index.md with curated working links.

Per instruction: the first three references in each story point to Wikipedia,
followed by MacTutor / Britannica / Nobel / NASA / Stanford Encyclopedia as
the stable secondary sources.

Safe to re-run — it always rewrites from the "## References" heading to EOF.
"""
from pathlib import Path

# Each story's References block: (title, url, short_description) tuples.
# First three per story are Wikipedia links.
REFS = {
    "rene-descartes": [
        ("Wikipedia: René Descartes",
         "https://en.wikipedia.org/wiki/Ren%C3%A9_Descartes",
         "Biography of the French philosopher and mathematician (1596–1650)"),
        ("Wikipedia: Cartesian coordinate system",
         "https://en.wikipedia.org/wiki/Cartesian_coordinate_system",
         "The coordinate plane named after Descartes"),
        ("Wikipedia: La Géométrie",
         "https://en.wikipedia.org/wiki/La_G%C3%A9om%C3%A9trie",
         "Descartes's 1637 appendix that introduced analytic geometry"),
        ("MacTutor: René Descartes",
         "https://mathshistory.st-andrews.ac.uk/Biographies/Descartes/",
         "University of St Andrews history of mathematics archive"),
        ("Stanford Encyclopedia of Philosophy: Descartes",
         "https://plato.stanford.edu/entries/descartes/",
         "Scholarly overview of Descartes's philosophy and method"),
    ],
    "leibniz-vs-newton": [
        ("Wikipedia: Gottfried Wilhelm Leibniz",
         "https://en.wikipedia.org/wiki/Gottfried_Wilhelm_Leibniz",
         "Biography of the German polymath and co-inventor of calculus"),
        ("Wikipedia: Leibniz–Newton calculus controversy",
         "https://en.wikipedia.org/wiki/Leibniz%E2%80%93Newton_calculus_controversy",
         "The decades-long priority dispute between Leibniz and Newton"),
        ("Wikipedia: History of calculus",
         "https://en.wikipedia.org/wiki/History_of_calculus",
         "The development of calculus from antiquity to Leibniz and Newton"),
        ("MacTutor: Gottfried Wilhelm von Leibniz",
         "https://mathshistory.st-andrews.ac.uk/Biographies/Leibniz/",
         "University of St Andrews history of mathematics archive"),
        ("Stanford Encyclopedia of Philosophy: Leibniz",
         "https://plato.stanford.edu/entries/leibniz/",
         "Scholarly overview of Leibniz's philosophy and mathematics"),
    ],
    "leonhard-euler": [
        ("Wikipedia: Leonhard Euler",
         "https://en.wikipedia.org/wiki/Leonhard_Euler",
         "Biography of the Swiss mathematician (1707–1783)"),
        ("Wikipedia: Function (mathematics)",
         "https://en.wikipedia.org/wiki/Function_(mathematics)",
         "The mathematical concept Euler gave the notation f(x)"),
        ("Wikipedia: Euler's identity",
         "https://en.wikipedia.org/wiki/Euler%27s_identity",
         "The famous equation e^(iπ) + 1 = 0"),
        ("MacTutor: Leonhard Euler",
         "https://mathshistory.st-andrews.ac.uk/Biographies/Euler/",
         "University of St Andrews history of mathematics archive"),
        ("Encyclopaedia Britannica: Leonhard Euler",
         "https://www.britannica.com/biography/Leonhard-Euler",
         "Overview of Euler's life, discoveries, and legacy"),
    ],
    "joseph-fourier": [
        ("Wikipedia: Joseph Fourier",
         "https://en.wikipedia.org/wiki/Joseph_Fourier",
         "Biography of the French mathematician and physicist (1768–1830)"),
        ("Wikipedia: Fourier series",
         "https://en.wikipedia.org/wiki/Fourier_series",
         "The decomposition of periodic functions into sines and cosines"),
        ("Wikipedia: Fourier transform",
         "https://en.wikipedia.org/wiki/Fourier_transform",
         "Fourier's idea extended to non-periodic functions"),
        ("MacTutor: Jean Baptiste Joseph Fourier",
         "https://mathshistory.st-andrews.ac.uk/Biographies/Fourier/",
         "University of St Andrews history of mathematics archive"),
        ("Encyclopaedia Britannica: Joseph, Baron Fourier",
         "https://www.britannica.com/biography/Joseph-Baron-Fourier",
         "Overview of Fourier's life and contributions to mathematics"),
    ],
    "ada-lovelace": [
        ("Wikipedia: Ada Lovelace",
         "https://en.wikipedia.org/wiki/Ada_Lovelace",
         "Biography of the English mathematician often called the first programmer"),
        ("Wikipedia: Analytical Engine",
         "https://en.wikipedia.org/wiki/Analytical_Engine",
         "Babbage's proposed mechanical general-purpose computer"),
        ("Wikipedia: Note G",
         "https://en.wikipedia.org/wiki/Note_G",
         "Lovelace's note describing the first published algorithm"),
        ("MacTutor: Augusta Ada King, Countess of Lovelace",
         "https://mathshistory.st-andrews.ac.uk/Biographies/Lovelace/",
         "University of St Andrews history of mathematics archive"),
        ("Encyclopaedia Britannica: Ada Lovelace",
         "https://www.britannica.com/biography/Ada-Lovelace",
         "Overview of Lovelace's life and contributions to computing"),
    ],
    "ronald-ross": [
        ("Wikipedia: Ronald Ross",
         "https://en.wikipedia.org/wiki/Ronald_Ross",
         "Biography of the British doctor who used math to model malaria"),
        ("Wikipedia: Mathematical modelling of infectious disease",
         "https://en.wikipedia.org/wiki/Mathematical_modelling_of_infectious_disease",
         "The field Ross helped found"),
        ("Wikipedia: History of malaria",
         "https://en.wikipedia.org/wiki/History_of_malaria",
         "Historical context for Ross's discovery of the malaria transmission cycle"),
        ("Nobel Prize: Ronald Ross – Biographical",
         "https://www.nobelprize.org/prizes/medicine/1902/ross/biographical/",
         "Official Nobel Foundation biography (Physiology or Medicine, 1902)"),
        ("Encyclopaedia Britannica: Sir Ronald Ross",
         "https://www.britannica.com/biography/Ronald-Ross",
         "Overview of Ross's career and malaria research"),
    ],
    "emmy-noether": [
        ("Wikipedia: Emmy Noether",
         "https://en.wikipedia.org/wiki/Emmy_Noether",
         "Biography of the German mathematician (1882–1935)"),
        ("Wikipedia: Noether's theorem",
         "https://en.wikipedia.org/wiki/Noether%27s_theorem",
         "Her landmark result connecting symmetries and conservation laws"),
        ("Wikipedia: Abstract algebra",
         "https://en.wikipedia.org/wiki/Abstract_algebra",
         "The field Noether helped establish in its modern form"),
        ("MacTutor: Emmy Amalie Noether",
         "https://mathshistory.st-andrews.ac.uk/Biographies/Noether_Emmy/",
         "University of St Andrews history of mathematics archive"),
        ("Encyclopaedia Britannica: Emmy Noether",
         "https://www.britannica.com/biography/Emmy-Noether",
         "Overview of Noether's life and contributions to algebra and physics"),
    ],
    "srinivasa-ramanujan": [
        ("Wikipedia: Srinivasa Ramanujan",
         "https://en.wikipedia.org/wiki/Srinivasa_Ramanujan",
         "Biography of the self-taught Indian mathematical genius (1887–1920)"),
        ("Wikipedia: Ramanujan's lost notebook",
         "https://en.wikipedia.org/wiki/Ramanujan%27s_lost_notebook",
         "The notebooks containing Ramanujan's formulas that mathematicians still study"),
        ("Wikipedia: 1729 (number)",
         "https://en.wikipedia.org/wiki/1729_(number)",
         "The famous Hardy–Ramanujan 'taxicab' number"),
        ("MacTutor: Srinivasa Aiyangar Ramanujan",
         "https://mathshistory.st-andrews.ac.uk/Biographies/Ramanujan/",
         "University of St Andrews history of mathematics archive"),
        ("Encyclopaedia Britannica: Srinivasa Ramanujan",
         "https://www.britannica.com/biography/Srinivasa-Ramanujan",
         "Overview of Ramanujan's life and number theory contributions"),
    ],
    "alan-turing": [
        ("Wikipedia: Alan Turing",
         "https://en.wikipedia.org/wiki/Alan_Turing",
         "Biography of the English mathematician and computer-science pioneer"),
        ("Wikipedia: Turing machine",
         "https://en.wikipedia.org/wiki/Turing_machine",
         "The theoretical model of computation Turing introduced in 1936"),
        ("Wikipedia: Enigma machine",
         "https://en.wikipedia.org/wiki/Enigma_machine",
         "The Nazi cipher device Turing helped defeat at Bletchley Park"),
        ("MacTutor: Alan Mathison Turing",
         "https://mathshistory.st-andrews.ac.uk/Biographies/Turing/",
         "University of St Andrews history of mathematics archive"),
        ("Stanford Encyclopedia of Philosophy: Alan Turing",
         "https://plato.stanford.edu/entries/turing/",
         "Scholarly overview of Turing's work and its significance"),
    ],
    "claude-shannon": [
        ("Wikipedia: Claude Shannon",
         "https://en.wikipedia.org/wiki/Claude_Shannon",
         "Biography of the American engineer and father of information theory"),
        ("Wikipedia: Information theory",
         "https://en.wikipedia.org/wiki/Information_theory",
         "The field Shannon founded with his 1948 paper"),
        ("Wikipedia: A Mathematical Theory of Communication",
         "https://en.wikipedia.org/wiki/A_Mathematical_Theory_of_Communication",
         "Shannon's foundational 1948 paper"),
        ("MacTutor: Claude Elwood Shannon",
         "https://mathshistory.st-andrews.ac.uk/Biographies/Shannon/",
         "University of St Andrews history of mathematics archive"),
        ("Encyclopaedia Britannica: Claude Shannon",
         "https://www.britannica.com/biography/Claude-Shannon",
         "Overview of Shannon's work at Bell Labs and MIT"),
    ],
    "katherine-johnson": [
        ("Wikipedia: Katherine Johnson",
         "https://en.wikipedia.org/wiki/Katherine_Johnson",
         "Biography of the NASA mathematician (1918–2020)"),
        ("Wikipedia: Project Mercury",
         "https://en.wikipedia.org/wiki/Project_Mercury",
         "The first U.S. human spaceflight program, whose orbits Johnson calculated"),
        ("Wikipedia: Hidden Figures",
         "https://en.wikipedia.org/wiki/Hidden_Figures",
         "The book and film that brought Johnson's story to the public"),
        ("NASA: Katherine Johnson Biography",
         "https://www.nasa.gov/centers-and-facilities/langley/katherine-johnson-biography/",
         "Official NASA Langley Research Center biography"),
        ("Encyclopaedia Britannica: Katherine Johnson",
         "https://www.britannica.com/biography/Katherine-Johnson-mathematician",
         "Overview of Johnson's NASA career and mathematical contributions"),
    ],
    "benoit-mandelbrot": [
        ("Wikipedia: Benoit Mandelbrot",
         "https://en.wikipedia.org/wiki/Benoit_Mandelbrot",
         "Biography of the Polish-French-American mathematician (1924–2010)"),
        ("Wikipedia: Fractal",
         "https://en.wikipedia.org/wiki/Fractal",
         "The geometric objects Mandelbrot named and studied"),
        ("Wikipedia: Mandelbrot set",
         "https://en.wikipedia.org/wiki/Mandelbrot_set",
         "The most famous fractal, named after Mandelbrot"),
        ("MacTutor: Benoit Mandelbrot",
         "https://mathshistory.st-andrews.ac.uk/Biographies/Mandelbrot/",
         "University of St Andrews history of mathematics archive"),
        ("Encyclopaedia Britannica: Benoit Mandelbrot",
         "https://www.britannica.com/biography/Benoit-Mandelbrot",
         "Overview of Mandelbrot's work on fractal geometry"),
    ],
    "frank-drake": [
        ("Wikipedia: Frank Drake",
         "https://en.wikipedia.org/wiki/Frank_Drake",
         "Biography of the American astronomer (1930–2022)"),
        ("Wikipedia: Drake equation",
         "https://en.wikipedia.org/wiki/Drake_equation",
         "The 1961 equation estimating the number of communicating civilizations"),
        ("Wikipedia: Search for extraterrestrial intelligence",
         "https://en.wikipedia.org/wiki/Search_for_extraterrestrial_intelligence",
         "The scientific field Drake helped found with Project Ozma"),
        ("SETI Institute: Frank Drake",
         "https://www.seti.org/frank-drake-trustee-emeritus",
         "SETI Institute biography and memorial"),
        ("Encyclopaedia Britannica: Frank Drake",
         "https://www.britannica.com/biography/Frank-Drake",
         "Overview of Drake's life and contributions to astrobiology"),
    ],
    "syukuro-manabe": [
        ("Wikipedia: Syukuro Manabe",
         "https://en.wikipedia.org/wiki/Syukuro_Manabe",
         "Biography of the Japanese-American climatologist (born 1931)"),
        ("Wikipedia: Climate model",
         "https://en.wikipedia.org/wiki/Climate_model",
         "The mathematical models of Earth's atmosphere Manabe helped pioneer"),
        ("Wikipedia: General circulation model",
         "https://en.wikipedia.org/wiki/General_circulation_model",
         "The specific class of climate model Manabe built at GFDL"),
        ("Nobel Prize: Syukuro Manabe – Facts",
         "https://www.nobelprize.org/prizes/physics/2021/manabe/facts/",
         "Official Nobel Foundation page (Physics, 2021)"),
        ("Encyclopaedia Britannica: Syukuro Manabe",
         "https://www.britannica.com/biography/Syukuro-Manabe",
         "Overview of Manabe's climate modeling career"),
    ],
    "karen-uhlenbeck": [
        ("Wikipedia: Karen Uhlenbeck",
         "https://en.wikipedia.org/wiki/Karen_Uhlenbeck",
         "Biography of the American mathematician and Abel Prize laureate"),
        ("Wikipedia: Abel Prize",
         "https://en.wikipedia.org/wiki/Abel_Prize",
         "The top prize in mathematics, which Uhlenbeck won in 2019"),
        ("Wikipedia: Minimal surface",
         "https://en.wikipedia.org/wiki/Minimal_surface",
         "The geometry of soap bubbles and membranes Uhlenbeck studied"),
        ("MacTutor: Karen Keskulla Uhlenbeck",
         "https://mathshistory.st-andrews.ac.uk/Biographies/Uhlenbeck/",
         "University of St Andrews history of mathematics archive"),
        ("Encyclopaedia Britannica: Karen Uhlenbeck",
         "https://www.britannica.com/biography/Karen-Uhlenbeck",
         "Overview of Uhlenbeck's geometric analysis contributions"),
    ],
    "maryam-mirzakhani": [
        ("Wikipedia: Maryam Mirzakhani",
         "https://en.wikipedia.org/wiki/Maryam_Mirzakhani",
         "Biography of the Iranian mathematician (1977–2017)"),
        ("Wikipedia: Fields Medal",
         "https://en.wikipedia.org/wiki/Fields_Medal",
         "The top prize in mathematics, which Mirzakhani won in 2014"),
        ("Wikipedia: Moduli space",
         "https://en.wikipedia.org/wiki/Moduli_space",
         "The geometry of Riemann surfaces Mirzakhani studied"),
        ("MacTutor: Maryam Mirzakhani",
         "https://mathshistory.st-andrews.ac.uk/Biographies/Mirzakhani/",
         "University of St Andrews history of mathematics archive"),
        ("Stanford News: Maryam Mirzakhani obituary",
         "https://news.stanford.edu/2017/07/15/maryam-mirzakhani-stanford-mathematician-and-fields-medal-winner-dies/",
         "Stanford University obituary and career retrospective"),
    ],
}


def rewrite_references(index_md: Path, refs: list[tuple[str, str, str]]) -> bool:
    text = index_md.read_text(encoding="utf-8")
    marker = "## References"
    idx = text.find(marker)
    if idx == -1:
        print(f"  WARNING: no '{marker}' heading in {index_md}")
        return False

    preserve = text[:idx].rstrip() + "\n\n"
    new_block = f"{marker}\n\n"
    for i, (title, url, desc) in enumerate(refs, start=1):
        new_block += f"{i}. [{title}]({url}) - {desc}\n"

    index_md.write_text(preserve + new_block, encoding="utf-8")
    return True


def main():
    stories_root = Path("docs/stories")
    ok, missing = 0, 0
    for story_name, refs in REFS.items():
        index_md = stories_root / story_name / "index.md"
        if not index_md.exists():
            print(f"SKIP (no index.md): {index_md}")
            missing += 1
            continue
        if rewrite_references(index_md, refs):
            print(f"updated: {index_md}")
            ok += 1
    print(f"\nDone. {ok} files updated, {missing} missing.")


if __name__ == "__main__":
    main()
