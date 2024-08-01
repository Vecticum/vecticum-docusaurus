# MD File editor

To format .md files, you need to know this markup language.

For example:
Asterisk will make your text in italics:
> \*text* => *text*

Double asterisks will bold your text:
> \**text** => **text**

~~ will strikethrough text
> \~~text~~ => ~~text~~

and so on.

## Editors

Fortunatelly, you don't need to memorize this syntax. There is some online MD editors you can use. Simply find any MD editor, format your text and then paste result to Docusaurus.

Few options:
- [StackEdit](https://stackedit.io/)
- [Dillinger](https://typora.io/)

Also, HTML syntax is valid here also, but there is restriction - docusaurus do not support self-closing tags, so every tag should be closed separately.<br></br>
Bad examples:
> \<br><br></br>
> \<br/><br></br>
> \<img ... />

It must be rewritten in this way:

> \<br> **=>** \<br>\</br><br></br>
> \<br/> **=>** \<br>\</br><br></br>
> \<img ... /> **=>** \<img ... >\</img><br></br>
>
