using Documenter, JuliaPythonSnippets

makedocs(;
    modules=[JuliaPythonSnippets],
    format=Documenter.HTML(),
    pages=[
        "Home" => "index.md",
    ],
    repo="https://github.com/tkf/JuliaPythonSnippets.jl/blob/{commit}{path}#L{line}",
    sitename="JuliaPythonSnippets.jl",
    authors="Takafumi Arakaki",
    assets=[],
)

deploydocs(;
    repo="github.com/tkf/JuliaPythonSnippets.jl",
)
