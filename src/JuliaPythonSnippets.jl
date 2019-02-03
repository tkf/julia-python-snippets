module JuliaPythonSnippets

export @pyexample_str, @pyshow_str, @named

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

macro pyshow_str(str)
    quote
        pyshow_impl(PyCall.@py_str $str 'o')
    end
end

function pyshow_impl(obj::PyObject)
    str = pybuiltin("repr")(obj)
    return Markdown.parse("""
    ```
    $str
    ```
    """)
end

const _scopes = Dict{Symbol,Module}()

macro named(name::Symbol, block)
    scope = get!(() -> Module(name), _scopes, name)
    Base.eval(scope, :(using JuliaPythonSnippets))
    Base.eval(scope, :(using PyCall))
    QuoteNode(Base.eval(scope, block))
end

end # module
