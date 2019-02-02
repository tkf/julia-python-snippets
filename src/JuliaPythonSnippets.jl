module JuliaPythonSnippets

export @pyexample_str

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

end # module
