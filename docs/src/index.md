# julia-python-snippets

```@contents
```

This document is generated by using Julia:

```@example
VERSION
```

and Python:

```@example
using PyCall
py"""
import sys
import numpy
"""
println("Python version:")
println(py"sys.version")
println("Numpy version:")
println(py"numpy.__version__")
```
