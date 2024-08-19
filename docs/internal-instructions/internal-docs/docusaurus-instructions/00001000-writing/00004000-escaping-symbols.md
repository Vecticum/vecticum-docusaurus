# Escaping Symbols

Docusaurus as a platform is sensitive to various symbols that are used in programming languages, 

Examples: \{, \<.

## Example 1
If you just write text like:
> Today we will talk about symbol \<

you will get error. In this case, you need to **escape** this symbol. Symbols can be escaped with another symbol "\\".

This sentence will work if you write in this way:
```
Today we will talk about symbol \<
```

As we can see, symbol \< is escaped with symbol "\\".

## Example 2
We want to explain, how to use some filters. We want to write:

>\"filterClassMap\": \{\"I10spNv4pUdDN47PufV2\":\"yu684j59HcO8j2nU7lBy\"} ,

we need to write this way:

```
\"filterClassMap\": \{\"I10spNv4pUdDN47PufV2\":\"yu684j59HcO8j2nU7lBy\"} ,
```
## Example 3
We want to explain, how to use some keys at expression. We want to write:
> \$data\{keyForDocumentView}.

to
```
\$data\{keyForDocumentView}.
```
