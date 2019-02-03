# Miscellaneous

## Read from and write to subprocess simultaneously

```@example
function communicate(cmd::Cmd, input)
    inp = Pipe()
    out = Pipe()
    err = Pipe()

    process = run(pipeline(cmd, stdin=inp, stdout=out, stderr=err), wait=false)
    close(out.in)
    close(err.in)

    stdout = @async String(read(out))
    stderr = @async String(read(err))
    write(inp, input)
    close(inp)
    wait(process)
    return (
        stdout = fetch(stdout),
        stderr = fetch(stderr),
        code = process.exitcode
    )
end

@assert communicate(`cat`, "hello").stdout == "hello"
```


```@eval
using JuliaPythonSnippets
pyexample"""
import sys

if sys.version_info >= (3, 5):
    from subprocess import run, PIPE
    output = run(["cat"], stdout=PIPE, input="hello", universal_newlines=True).stdout
else:
    from subprocess import Popen, PIPE
    proc = Popen(["cat"], stdout=PIPE, stdin=PIPE, universal_newlines=True)
    output, _ = proc.communicate("hello")

assert output == "hello"
"""
```
