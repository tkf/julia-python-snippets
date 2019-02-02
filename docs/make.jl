using Documenter, JuliaPythonSnippets

makedocs(;
    modules=[JuliaPythonSnippets],
    format=Documenter.HTML(),
    pages=[
        "Home" => "index.md",
        "arrays.md",
        "introspection.md",
    ],
    repo="https://github.com/tkf/julia-python-snippets/blob/{commit}{path}#L{line}",
    sitename="julia-python-snippets",
    authors="Takafumi Arakaki",
    assets=[],
)

deploydocs(;
    repo="github.com/tkf/julia-python-snippets",
)
