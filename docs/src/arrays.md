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

## Comparison

```@example zeros_ones_empty
@assert a0 == zero(a0)
@assert all(a0 .== 0)
```

```@eval
using JuliaPythonSnippets
@named zeros_ones_empty begin
pyexample"""
assert all(a0 == numpy.zeros_like(a0))
assert all(a0 == 0)
"""
end
```

## Indexing

```@example indexing_1
x0 = reshape(1:6, 2, 3)
```

```@eval
using JuliaPythonSnippets
@named indexing_1 begin
pyexample"""
import numpy
x0 = numpy.arange(1, 7).reshape(2, 3)
"""
end
```

```@eval
using JuliaPythonSnippets
@named indexing_1 begin
pyshow"x0"
end
```
