var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#julia-python-snippets-1",
    "page": "Home",
    "title": "julia-python-snippets",
    "category": "section",
    "text": ""
},

{
    "location": "arrays/#",
    "page": "Arrays",
    "title": "Arrays",
    "category": "page",
    "text": ""
},

{
    "location": "arrays/#Arrays-1",
    "page": "Arrays",
    "title": "Arrays",
    "category": "section",
    "text": ""
},

{
    "location": "arrays/#Zeros,-ones,-empty,-similar-1",
    "page": "Arrays",
    "title": "Zeros, ones, empty, similar",
    "category": "section",
    "text": "a1 = zeros(3)\na2 = ones(Int, 2, 1)\na3 = Array{Float32}(undef, 5)\na4 = similar(a1)\nnothing # hideusing JuliaPythonSnippets\n@named zeros_ones_empty begin\npyexample\"\"\"\nimport numpy\na1 = numpy.zeros(3)\na2 = numpy.ones((2, 1), dtype=int)\na3 = numpy.empty(5, dtype=\"f4\")\na4 = numpy.empty_like(a1)\n\"\"\"\nend"
},

{
    "location": "arrays/#eltype-/-.dtype-1",
    "page": "Arrays",
    "title": "eltype / .dtype",
    "category": "section",
    "text": "@assert eltype(a1) == eltype(a4) == Float64\n@assert eltype(a2) == Int\n@assert eltype(a3) == Float32using JuliaPythonSnippets\n@named zeros_ones_empty begin\npyexample\"\"\"\nassert a1.dtype == a4.dtype == float\nassert a2.dtype == int\nassert a3.dtype == numpy.dtype(\"f4\")\n\"\"\"\nend"
},

{
    "location": "introspection/#",
    "page": "Introspection",
    "title": "Introspection",
    "category": "page",
    "text": ""
},

{
    "location": "introspection/#Introspection-1",
    "page": "Introspection",
    "title": "Introspection",
    "category": "section",
    "text": "Reflection and introspection · The Julia Language\nBuilt-in Functions — Python 3 documentation\n3. Data model — Python 3 documentation"
},

{
    "location": "introspection/#isa-/-isinstance-1",
    "page": "Introspection",
    "title": "isa / isinstance",
    "category": "section",
    "text": "@assert (1, 2, 3) isa Tupleusing JuliaPythonSnippets\npyexample\"\"\"\nassert isinstance((1, 2, 3), tuple)\n\"\"\""
},

{
    "location": "introspection/#:-/-issubtype-1",
    "page": "Introspection",
    "title": "<: / issubtype",
    "category": "section",
    "text": "@assert Tuple <: Anyusing JuliaPythonSnippets\npyexample\"\"\"\nassert issubclass(tuple, object)\n\"\"\""
},

{
    "location": "introspection/#typeof-/-type-1",
    "page": "Introspection",
    "title": "typeof / type",
    "category": "section",
    "text": "@assert typeof((1, 2, 3)) <: Tupleusing JuliaPythonSnippets\npyexample\"\"\"\nassert type((1, 2, 3)) == tuple\n\"\"\""
},

{
    "location": "introspection/#Properties-and-fields-1",
    "page": "Introspection",
    "title": "Properties and fields",
    "category": "section",
    "text": "mutable struct ObjectWithProperties\n    alpha\n    beta\nend\n\nobj = ObjectWithProperties(1, 2)\n\n@assert propertynames(obj) == (:alpha, :beta)\n@assert fieldnames(ObjectWithProperties) == (:alpha, :beta)\n\n@assert getproperty(obj, :alpha) == 1\n@assert getfield(obj, :beta) == 2\n\nsetproperty!(obj, :alpha, 10); @assert obj.alpha == 10\nsetfield!(obj, :beta, 20); @assert obj.beta == 20using JuliaPythonSnippets\npyexample\"\"\"\nclass ObjectWithProperties:\n    alpha = 1\n    beta = 2\n\nobj = ObjectWithProperties()\n\nassert set(dir(obj)) >= {\"alpha\", \"beta\"}\nassert set(dir(ObjectWithProperties)) >= {\"alpha\", \"beta\"}\n\nassert getattr(obj, \"alpha\") == 1\n\nsetattr(obj, \"beta\", 20); assert obj.beta == 20\n\"\"\""
},

{
    "location": "introspection/#Locals-1",
    "page": "Introspection",
    "title": "Locals",
    "category": "section",
    "text": "f(a, b) = Base.@locals\n@assert f(1, 2) == Dict(:a => 1, :b => 2)using JuliaPythonSnippets\npyexample\"\"\"\ndef f(a, b):\n    return locals()\n\nassert f(1, 2) == dict(a=1, b=2)\n\"\"\""
},

{
    "location": "introspection/#Globals-1",
    "page": "Introspection",
    "title": "Globals",
    "category": "section",
    "text": "m = Module(:SomeModule)\nBase.eval(m, quote\n    function f()\n        names(@__MODULE__, all=true)\n    end\nend)\n@assert Set(names(m, all=true)) >= Set([:SomeModule, :f])\n@assert Set(m.f()) >= Set([:SomeModule, :f])using JuliaPythonSnippets\npyexample\"\"\"\nimport types\nm = types.ModuleType(\"SomeModule\")\nexec(\'\'\'\ndef f():\n    return list(globals())\n\'\'\', vars(m))\n\nassert set(vars(m)) >= {\"__name__\", \"__doc__\"}\nassert set(m.f()) >= {\"__name__\", \"__doc__\"}\n\"\"\""
},

]}
