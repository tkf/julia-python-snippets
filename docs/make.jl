#!/bin/bash
# -*- mode: julia -*-
#=
JULIA="${JULIA:-julia --color=yes --startup-file=no}"
export JULIA_PROJECT="$(dirname ${BASH_SOURCE[0]})"

set -ex
${JULIA} -e 'using Pkg; Pkg.instantiate();
             Pkg.develop(PackageSpec(path=pwd()))'
exec ${JULIA} "${BASH_SOURCE[0]}" "$@"
=#

using Documenter, JuliaPythonSnippets

makedocs(;
    modules=[JuliaPythonSnippets],
    format=Documenter.HTML(),
    pages=[
        "Home" => "index.md",
        "arrays.md",
        "introspection.md",
        "miscellaneous.md",
    ],
    repo="https://github.com/tkf/julia-python-snippets/blob/{commit}{path}#L{line}",
    sitename="julia-python-snippets",
    authors="Takafumi Arakaki",
    assets=[],
    strict=true,
)

deploydocs(;
    repo="github.com/tkf/julia-python-snippets",
)
