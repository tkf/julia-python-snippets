# Arrays

## Zeros, ones, empty, similar

```@example zeros_ones_empty
a1 = zeros(3)
a2 = ones(Int, 2, 1)
a3 = Array{Float32}(undef, 5)
a4 = similar(a1)
nothing # hide
```

```@eval
using JuliaPythonSnippets
@named zeros_ones_empty begin
pyexample"""
import numpy
a1 = numpy.zeros(3)
a2 = numpy.ones((2, 1), dtype=int)
a3 = numpy.empty(5, dtype="f4")
a4 = numpy.empty_like(a1)
"""
end
```

## `eltype` / `.dtype`

```@example zeros_ones_empty
@assert eltype(a1) == eltype(a4) == Float64
@assert eltype(a2) == Int
@assert eltype(a3) == Float32
```

```@eval
using JuliaPythonSnippets
@named zeros_ones_empty begin
pyexample"""
assert a1.dtype == a4.dtype == float
assert a2.dtype == int
assert a3.dtype == numpy.dtype("f4")
"""
end
```
