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
assert (a0 == numpy.zeros_like(a0)).all()
assert (a0 == 0).all()
"""
end
```

## Indexing

* [Indexing · Multi-dimensional Arrays · The Julia Language](https://docs.julialang.org/en/latest/manual/arrays/#man-array-indexing-1)
* [Supported index types · Multi-dimensional Arrays · The Julia Language](https://docs.julialang.org/en/latest/manual/arrays/#man-array-indexing-1)
* [Indexing — NumPy User Guide](https://www.numpy.org/devdocs/user/basics.indexing.html)
* [Indexing — NumPy Manual](https://www.numpy.org/devdocs/reference/arrays.indexing.html)

```@example indexing_1
x0 = reshape(1:6, 2, 3)
```

```@eval
using JuliaPythonSnippets
@named indexing_1 begin
pyexample"""
import numpy
x0 = numpy.arange(1, 7).reshape(3, 2).T
"""
end
```

```@eval
using JuliaPythonSnippets
@named indexing_1 pyshow"x0"
```

```@example indexing_1
using JuliaPythonSnippets                                            # hide
@assert x0 == @named indexing_1 py"x0"                               # hide
nothing                                                              # hide
```

### Cartesian indexing

```@example indexing_1
x1 = x0[CartesianIndex.([1, 2], [1, 3])]
```

```@eval
using JuliaPythonSnippets
@named indexing_1 begin
pyexample"""
x1 = x0[[0, 1], [0, 2]]
"""
end
```

```@eval
using JuliaPythonSnippets
@named indexing_1 pyshow"x1"
```

```@example indexing_1
using JuliaPythonSnippets                                            # hide
@assert x1 == @named indexing_1 py"x1"                               # hide
nothing                                                              # hide
```

### APL indexing

```@example indexing_1
x2 = x0[[1, 2], [1, 3]]
```

```@eval
using JuliaPythonSnippets
@named indexing_1 begin
pyexample"""
x2 = x0[numpy.ix_([0, 1], [0, 2])]
x2_equivalent = x0[[[0], [1]], [[0, 2]]]
assert (x2 == x2_equivalent).all()
x2
"""
end
```

```@eval
using JuliaPythonSnippets
@named indexing_1 pyshow"x2"
```

```@example indexing_1
using JuliaPythonSnippets                                            # hide
@assert x2 == @named indexing_1 py"x2"                               # hide
nothing                                                              # hide
```

* [numpy.ix_ — NumPy Manual](https://www.numpy.org/devdocs/reference/generated/numpy.ix_.html)

### Boolean indexing

```@example indexing_1
x3 = x0[x0 .% 2 .== 0]
```

```@eval
using JuliaPythonSnippets
@named indexing_1 begin
pyexample"""
x3 = x0[x0 % 2 == 0]
"""
end
```

```@eval
using JuliaPythonSnippets
@named indexing_1 pyshow"x3"
```

```@example indexing_1
using JuliaPythonSnippets                                            # hide
@assert x3 == @named indexing_1 py"x3"                               # hide
nothing                                                              # hide
```
