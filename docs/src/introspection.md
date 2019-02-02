# Introspection

* [Reflection and introspection · The Julia Language](https://docs.julialang.org/en/latest/devdocs/reflection/)
* [Built-in Functions — Python 3 documentation](https://docs.python.org/3/library/functions.html)
* [3. Data model — Python 3 documentation](https://docs.python.org/3/reference/datamodel.html)

```@setup introspection
using JuliaPythonSnippets
```

```@example introspection
@assert [] isa Vector
```

```@eval introspection
pyexample"""
assert isinstance([], list)
"""
```
