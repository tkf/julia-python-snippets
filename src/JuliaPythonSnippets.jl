module JuliaPythonSnippets

export @pyexample_str, @named

using PyCall
using Markdown

macro pyexample_str(str)
    code = """
    ```python
    $str
    ```
    """
    quote
        PyCall.@py_str $str
        Markdown.parse($code)
    end
end

const _scopes = Dict{Symbol,Module}()

macro named(name::Symbol, block)
    scope = get!(_scopes, name) do
        scope = Module(name)
        Base.eval(scope, :(using JuliaPythonSnippets))
        return scope
    end
    QuoteNode(Base.eval(scope, block))
end

end # module
