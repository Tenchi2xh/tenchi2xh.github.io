---
date: 2016-04-09T01:10:08+02:00
description: Exporting command outputs to colored HTML
title: HTML Terminal Snapshots
---

In preparation for my future posts, I needed to devise a way to export the output of *terminal commands* to formatted HTML (including colors). While I'm sure some terminal emulators out there already provide such a feature, I wanted my own portable solution that anyone could use.

## First attempt

> &#x2318;+C, &#x2318;+V

My research first led me to an *OS X only* version. The clipboard management of OS X has support for rich text copy and paste, through the RTF format. I could just run a command in the Terminal application, copy and paste the output to TextEdit, and save as an HTML file. 

Although this solution worked, it had major caveats:

1. It is a tedious process and can't be automated
2. The generated HTML output is not really helpful for this blog:
    - All colors and properties defined in generated styles in `<head>`
    - Automatically generated style names makes it impossible to paste multiple snapshots in a single post
    - Not in a `<pre>` tag, spaces are wrapped in styled spans
3. Not really portable!

## *An answer from the experts*

Thankfully after reading some posts on StackOverflow, I discovered a very nifty tool called [ansifilter](http://www.andre-simon.de/doku/ansifilter/en/ansifilter.php)^[`ansifilter` is available on `brew` if you're on a Mac], which translates *ANSI escape codes* (we're gonna see a lot more of these in future posts :)^[http://www.xkcd.com/541/] to either formats such as HTML, RTF and even LaTeX.

What's more, `ansifilter` generates clean HTML, uses `<pre>` and can produce either a standalone HTML file or only the contents of the `<pre>` tag. I can now present to you, anytime I want, ***glorious terminal snapshots***:

{{< term >}}
$ cowsay -e '&gt;o' 'Howdy, readers!' | lolcat -F 0.4
<span style="color:#00d7d7;"> </span><span style="color:#00ffaf;">_</span><span style="color:#00ffaf;">_</span><span style="color:#00ffaf;">_</span><span style="color:#00ff87;">_</span><span style="color:#00ff87;">_</span><span style="color:#5fff5f;">_</span><span style="color:#5fff5f;">_</span><span style="color:#5fff5f;">_</span><span style="color:#87ff00;">_</span><span style="color:#87ff00;">_</span><span style="color:#afff00;">_</span><span style="color:#afff00;">_</span><span style="color:#afff00;">_</span><span style="color:#d7d700;">_</span><span style="color:#d7d700;">_</span><span style="color:#d7d700;">_</span><span style="color:#ffaf00;">_</span><span style="color:#ffaf00;"> </span>
<span style="color:#00ffaf;">&lt;</span><span style="color:#00ff87;"> </span><span style="color:#00ff87;">H</span><span style="color:#5fff5f;">o</span><span style="color:#5fff5f;">w</span><span style="color:#5fff5f;">d</span><span style="color:#87ff00;">y</span><span style="color:#87ff00;">,</span><span style="color:#afff00;"> </span><span style="color:#afff00;">r</span><span style="color:#afff00;">e</span><span style="color:#d7d700;">a</span><span style="color:#d7d700;">d</span><span style="color:#d7d700;">e</span><span style="color:#ffaf00;">r</span><span style="color:#ffaf00;">s</span><span style="color:#ff8700;">!</span><span style="color:#ff8700;"> </span><span style="color:#ff8700;">&gt;</span>
<span style="color:#5fff5f;"> </span><span style="color:#5fff5f;">-</span><span style="color:#5fff5f;">-</span><span style="color:#87ff00;">-</span><span style="color:#87ff00;">-</span><span style="color:#afff00;">-</span><span style="color:#afff00;">-</span><span style="color:#afff00;">-</span><span style="color:#d7d700;">-</span><span style="color:#d7d700;">-</span><span style="color:#d7d700;">-</span><span style="color:#ffaf00;">-</span><span style="color:#ffaf00;">-</span><span style="color:#ff8700;">-</span><span style="color:#ff8700;">-</span><span style="color:#ff8700;">-</span><span style="color:#ff5f5f;">-</span><span style="color:#ff5f5f;">-</span><span style="color:#ff5f5f;"> </span>
<span style="color:#87ff00;"> </span><span style="color:#87ff00;"> </span><span style="color:#afff00;"> </span><span style="color:#afff00;"> </span><span style="color:#afff00;"> </span><span style="color:#d7d700;"> </span><span style="color:#d7d700;"> </span><span style="color:#d7d700;"> </span><span style="color:#ffaf00;">\</span><span style="color:#ffaf00;"> </span><span style="color:#ff8700;"> </span><span style="color:#ff8700;"> </span><span style="color:#ff8700;">^</span><span style="color:#ff5f5f;">_</span><span style="color:#ff5f5f;">_</span><span style="color:#ff5f5f;">^</span>
<span style="color:#afff00;"> </span><span style="color:#afff00;"> </span><span style="color:#d7d700;"> </span><span style="color:#d7d700;"> </span><span style="color:#d7d700;"> </span><span style="color:#ffaf00;"> </span><span style="color:#ffaf00;"> </span><span style="color:#ff8700;"> </span><span style="color:#ff8700;"> </span><span style="color:#ff8700;">\</span><span style="color:#ff5f5f;"> </span><span style="color:#ff5f5f;"> </span><span style="color:#ff5f5f;">(</span><span style="color:#ff0087;">&gt;</span><span style="color:#ff0087;">o</span><span style="color:#ff00af;">)</span><span style="color:#ff00af;">\</span><span style="color:#d700af;">_</span><span style="color:#d700d7;">_</span><span style="color:#d700d7;">_</span><span style="color:#af00d7;">_</span><span style="color:#af00ff;">_</span><span style="color:#af00ff;">_</span><span style="color:#8700ff;">_</span>
<span style="color:#d7d700;"> </span><span style="color:#d7d700;"> </span><span style="color:#ffaf00;"> </span><span style="color:#ffaf00;"> </span><span style="color:#ff8700;"> </span><span style="color:#ff8700;"> </span><span style="color:#ff8700;"> </span><span style="color:#ff5f5f;"> </span><span style="color:#ff5f5f;"> </span><span style="color:#ff5f5f;"> </span><span style="color:#ff0087;"> </span><span style="color:#ff0087;"> </span><span style="color:#ff00af;">(</span><span style="color:#ff00af;">_</span><span style="color:#d700af;">_</span><span style="color:#d700d7;">)</span><span style="color:#d700d7;">\</span><span style="color:#af00d7;"> </span><span style="color:#af00ff;"> </span><span style="color:#af00ff;"> </span><span style="color:#8700ff;"> </span><span style="color:#8700ff;"> </span><span style="color:#875fff;"> </span><span style="color:#5f5fff;"> </span><span style="color:#5f5fff;">)</span><span style="color:#5f87ff;">\</span><span style="color:#0087ff;">/</span><span style="color:#0087ff;">\</span>
<span style="color:#ffaf00;"> </span><span style="color:#ff8700;"> </span><span style="color:#ff8700;"> </span><span style="color:#ff8700;"> </span><span style="color:#ff5f5f;"> </span><span style="color:#ff5f5f;"> </span><span style="color:#ff5f5f;"> </span><span style="color:#ff0087;"> </span><span style="color:#ff0087;"> </span><span style="color:#ff00af;"> </span><span style="color:#ff00af;"> </span><span style="color:#d700af;"> </span><span style="color:#d700d7;"> </span><span style="color:#d700d7;"> </span><span style="color:#af00d7;"> </span><span style="color:#af00ff;"> </span><span style="color:#af00ff;">|</span><span style="color:#8700ff;">|</span><span style="color:#8700ff;">-</span><span style="color:#875fff;">-</span><span style="color:#5f5fff;">-</span><span style="color:#5f5fff;">-</span><span style="color:#5f87ff;">w</span><span style="color:#0087ff;"> </span><span style="color:#0087ff;">|</span>
<span style="color:#ff8700;"> </span><span style="color:#ff5f5f;"> </span><span style="color:#ff5f5f;"> </span><span style="color:#ff5f5f;"> </span><span style="color:#ff0087;"> </span><span style="color:#ff0087;"> </span><span style="color:#ff00af;"> </span><span style="color:#ff00af;"> </span><span style="color:#d700af;"> </span><span style="color:#d700d7;"> </span><span style="color:#d700d7;"> </span><span style="color:#af00d7;"> </span><span style="color:#af00ff;"> </span><span style="color:#af00ff;"> </span><span style="color:#8700ff;"> </span><span style="color:#8700ff;"> </span><span style="color:#875fff;">|</span><span style="color:#5f5fff;">|</span><span style="color:#5f5fff;"> </span><span style="color:#5f87ff;"> </span><span style="color:#0087ff;"> </span><span style="color:#0087ff;"> </span><span style="color:#00afff;"> </span><span style="color:#00afff;">|</span><span style="color:#00d7d7;">|</span>
{{< /term >}}

All I had to do now was to create some useful aliases:

```bash
alias html="ansifilter -H -f"
alias copyhtml="html | pbcopy"
```

Running any command and piping its output to `copyhtml` would now place a nicely colored HTML output in my clipboard, ready to paste anywhere. Piping to `html` would output the formated HTML to `stdout` enabling you to further pipe into other commands. 

The last step to make this process even quicker with [Hugo](http://gohugo.io/), my blog builder, was to create a template to avoid having to manually wrap my pasted snippet with opening and closing tags for the formatting:

{{< term >}}
$ pless layouts/shortcodes/term.html
<span style="color:#ff005f;">&lt;table</span><span style="color:#ffffff;"> </span><span style="color:#afd700;">class=</span><span style="color:#d7d787;">&quot;highlighttable&quot;</span><span style="color:#ff005f;">&gt;</span>
<span style="color:#ffffff;">    </span><span style="color:#ff005f;">&lt;td</span><span style="color:#ff005f;">&gt;</span>
<span style="color:#ffffff;">        </span><span style="color:#ff005f;">&lt;pre</span><span style="color:#ff005f;">&gt;</span><span style="color:#ffffff;">{{ .Inner }}</span><span style="color:#ff005f;">&lt;/pre&gt;</span>
<span style="color:#ffffff;">    </span><span style="color:#ff005f;">&lt;/td&gt;</span>
<span style="color:#ff005f;">&lt;/table&gt;</span>
{{< /term >}}

(`pless` is a custom command that has a `less` behavior while highlighting code syntax with `pygments`, more on that in later posts!)

Thanks to that template, I now have a really nice work flow for writing my Markdown posts:

- Run the command I want to demo, pipe it to `copyhtml`
- Go to my Markdown article, open a `{{</* term */>}}` tag
- Paste
- ???
- Profit!


## Clever pipes

In actuality, I had to cheat to produce the above example (sorry). Some programs like `ls` or [lolcat](https://github.com/busyloop/lolcat) will detect if their `stdout` is connected to a tty or not, stripping all ANSI escape codes in the latter case.

Enter the `unbuffer` command from the `expect`^[Also available on `brew`] software suite:

> unbuffer disables the output buffering that occurs when program output is redirected from non-interactive programs.

The commands I really ran were:

```bash
cowsay -e '>o' 'Howdy, readers!' > tmp
unbuffer lolcat -F 0.4 tmp | copyhtml
rm tmp
```

But, for most cases, `command | copyhtml` is enough :)