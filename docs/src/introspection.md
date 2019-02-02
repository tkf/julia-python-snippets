# Introspection

* [Reflection and introspection · The Julia Language](https://docs.julialang.org/en/latest/devdocs/reflection/)
* [Built-in Functions — Python 3 documentation](https://docs.python.org/3/library/functions.html)
* [3. Data model — Python 3 documentation](https://docs.python.org/3/reference/datamodel.html)

## `isa` / `isinstance`

```@example
@assert (1, 2, 3) isa Tuple
```

```@eval
using JuliaPythonSnippets
pyexample"""
assert isinstance((1, 2, 3), tuple)
"""
```

## `<:` / `issubtype`

```@example
@assert Tuple <: Any
```

```@eval
using JuliaPythonSnippets
pyexample"""
assert issubclass(tuple, object)
"""
```

## `typeof` / `type`

```@example
@assert typeof((1, 2, 3)) <: Tuple
```

```@eval
using JuliaPythonSnippets
pyexample"""
assert type((1, 2, 3)) == tuple
"""
```

## Properties and fields

```@example
mutable struct ObjectWithProperties
    alpha
    beta
end

obj = ObjectWithProperties(1, 2)

@assert propertynames(obj) == (:alpha, :beta)
@assert fieldnames(ObjectWithProperties) == (:alpha, :beta)

@assert getproperty(obj, :alpha) == 1
@assert getfield(obj, :beta) == 2

setproperty!(obj, :alpha, 10); @assert obj.alpha == 10
setfield!(obj, :beta, 20); @assert obj.beta == 20
```

```@eval
using JuliaPythonSnippets
pyexample"""
class ObjectWithProperties:
    alpha = 1
    beta = 2

obj = ObjectWithProperties()

assert set(dir(obj)) >= {"alpha", "beta"}
assert set(dir(ObjectWithProperties)) >= {"alpha", "beta"}

assert getattr(obj, "alpha") == 1

setattr(obj, "beta", 20); assert obj.beta == 20
"""
```

## Locals

```@example
f(a, b) = Base.@locals
@assert f(1, 2) == Dict(:a => 1, :b => 2)
```

```@eval
using JuliaPythonSnippets
pyexample"""
def f(a, b):
    return locals()

assert f(1, 2) == dict(a=1, b=2)
"""
```

## Globals

```@example
m = Module(:SomeModule)
Base.eval(m, quote
    function f()
        names(@__MODULE__, all=true)
    end
end)
@assert Set(names(m, all=true)) >= Set([:SomeModule, :f])
@assert Set(m.f()) >= Set([:SomeModule, :f])
```

```@eval
using JuliaPythonSnippets
pyexample"""
import types
m = types.ModuleType("SomeModule")
exec('''
def f():
    return list(globals())
''', vars(m))

assert set(vars(m)) >= {"__name__", "__doc__"}
assert set(m.f()) >= {"__name__", "__doc__"}
"""
```
