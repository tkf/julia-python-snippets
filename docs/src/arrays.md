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

## `permutedims` / `.transpose`

```@example
@assert size(permutedims(zeros(3, 5, 7), (2, 1, 3))) == (5, 3, 7)
```

```@eval
using JuliaPythonSnippets
pyexample"""
import numpy
assert numpy.zeros((3, 5, 7)).transpose(1, 0, 2).shape == (5, 3, 7)
"""
```

## Adjoint and transpose

```@example
A = [
    1   2im
    -3 -4im
]
@assert A' == adjoint(A) == [
    1     -3
    -2im  4im
]
@assert transpose(A) == [
    1    -3
    2im  -4im
]
@assert adjoint.(A) == [
    1  -2im
    -3  4im
]
```

```@eval
using JuliaPythonSnippets
pyexample"""
import numpy
A = numpy.array([
    [1, 2j],
    [-3, -4j],
])
assert (A.T.conj() == numpy.array([
    [1, -3],
    [-2j, 4j],
])).all()
assert (A.T == numpy.array([
    [1, -3],
    [2j, -4j],
])).all()
assert (A.conj() == numpy.array([
    [1, -2j],
    [-3, 4j],
])).all()
"""
```

!!! note

    Although there is
    [`numpy.matrix.H`](https://docs.scipy.org/doc/numpy-1.16.1/reference/generated/numpy.matrix.H.html)
    which is closer to Julia's `adjoint`,
    [Numpy manual notes that](https://www.numpy.org/devdocs/reference/arrays.classes.html#matrix-objects):

    > It is strongly advised _not_ to use the matrix subclass.

## Zero-dimensional array

```@example
A = Array{Int,0}(undef)
A[] = 12345
@assert A[] == 12345
@assert A[] isa Int
@assert A[] - 12345 == 0
@assert length(A) == 1
@assert ndims(A) == 0
@assert size(A) == ()
```

```@eval
using JuliaPythonSnippets
pyexample"""
import numpy
A = numpy.array(12345)
assert A.item() == numpy.asscalar(A) == 12345
assert isinstance(A.item(), int)
assert isinstance(numpy.asscalar(A), int)
assert A - 12345 == 0
assert A.size == 1
assert A.ndim == 0
assert A.shape == ()
"""
```

## Broadcasting

* [Multi-dimensional Arrays · The Julia Language](https://docs.julialang.org/en/latest/manual/arrays/#Broadcasting-1)
* [Mathematical Operations and Elementary Functions · The Julia Language](https://docs.julialang.org/en/latest/manual/mathematical-operations/#man-dot-operators-1)
* [Broadcasting — NumPy Manual](https://www.numpy.org/devdocs/user/basics.broadcasting.html)
* [numpy.broadcast — NumPy Manual](https://docs.scipy.org/doc/numpy/reference/generated/numpy.broadcast.html)

Broadcasting in Julia starts from left (leading dimension):

```@example
xs = reshape(1:6, (2, 3))
ys = 1:3:6
@assert ifelse.(xs .> ys, xs, ys) == [
    1 3 5
    4 4 6
]
```

Broadcasting in Python starts from right (trailing dimension):

```@eval
using JuliaPythonSnippets
pyexample"""
import numpy
xs = (numpy.arange(6) + 1).reshape(3, 2)
ys = numpy.arange(1, 7, 3)

@numpy.vectorize
def vifelse(b, x, y):
    if b:
        return x
    else:
        return y

assert (vifelse(xs > ys, xs, ys).T == [  # notice `.T`
    [1, 3, 5],
    [4, 4, 6],
]).all()
"""
```

!!! note

    As mentioned in
    [numpy.vectorize — NumPy Manual](https://docs.scipy.org/doc/numpy/reference/generated/numpy.vectorize.html),
    there is no performance gain for using `numpy.vectorize` in Python
    (but sometimes it's quite useful!):

    > The `vectorize` function is provided primarily for convenience,
    > not for performance. The implementation is essentially a for
    > loop.
