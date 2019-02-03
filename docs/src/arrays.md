# Arrays

## Zeros, ones, empty, similar

```@example zeros_ones_empty
a0 = zeros(3)
a1 = ones(Int, 2, 1)
a2 = Array{Float32}(undef, 5)
a3 = similar(a0)
nothing # hide
```

```@eval
using JuliaPythonSnippets
@named zeros_ones_empty begin
pyexample"""
import numpy
a0 = numpy.zeros(3)
a1 = numpy.ones((2, 1), dtype=int)
a2 = numpy.empty(5, dtype="f4")
a3 = numpy.empty_like(a0)
"""
end
```

## `eltype` / `.dtype`

```@example zeros_ones_empty
@assert eltype(a0) == eltype(a3) == Float64
@assert eltype(a1) == Int
@assert eltype(a2) == Float32
```

```@eval
using JuliaPythonSnippets
@named zeros_ones_empty begin
pyexample"""
assert a0.dtype == a3.dtype == float
assert a1.dtype == int
assert a2.dtype == numpy.dtype("f4")
"""
end
```
