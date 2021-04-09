#!/bin/sh

# @see {@link https://github.com/rouge-ruby/rouge#command-line}
# @see {@link https://github.com/rouge-ruby/rouge/tree/master/lib/rouge/themes}

echo ".s_h_base16 { $(rougify style base16) } "  > _sass/_s_h_base16.scss
echo ".s_h_igorpro { $(rougify style igorpro) } "  > _sass/_s_h_igorpro.scss
echo ".s_h_magritte { $(rougify style magritte) } "  > _sass/_s_h_magritte.scss
echo ".s_h_pastie { $(rougify style pastie) } "  > _sass/_s_h_pastie.scss
echo ".s_h_github { $(rougify style github) } "  > _sass/_s_h_github.scss
echo ".s_h_gruvbox { $(rougify style gruvbox) } "  > _sass/_s_h_gruvbox.scss
echo ".s_h_molokai { $(rougify style molokai) } "  > _sass/_s_h_molokai.scss
echo ".s_h_monokai { $(rougify style monokai) } "  > _sass/_s_h_monokai.scss
echo ".s_h_thankful_eyes { $(rougify style thankful_eyes) } "  > _sass/_s_h_thankful_eyes.scss
echo ".s_h_tulip { $(rougify style tulip) } "  > _sass/_s_h_tulip.scss
echo ".s_h_bw { $(rougify style bw) } "  > _sass/_s_h_bw.scss
echo ".s_h_colorful { $(rougify style colorful) } "  > _sass/_s_h_colorful.scss
echo ".s_h_monokai_sublime { $(rougify style monokai.sublime) } " > _sass/_s_h_monokai_sublime.scss

echo '@import "s_h_default";
@import "s_h_base16";
@import "s_h_igorpro";
@import "s_h_magritte";
@import "s_h_pastie";
@import "s_h_github";
@import "s_h_gruvbox";
@import "s_h_molokai";
@import "s_h_monokai";
@import "s_h_thankful_eyes";
@import "s_h_tulip";
@import "s_h_bw";
@import "s_h_colorful";
@import "s_h_monokai_sublime";' > _sass/_s_h_import.scss
