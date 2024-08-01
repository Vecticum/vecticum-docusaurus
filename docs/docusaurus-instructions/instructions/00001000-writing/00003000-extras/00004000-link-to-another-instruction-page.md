# Link to another instruction page

## Any instruction page
To insert link to another page, LinkToAnotherPage widget should be used:
```
<LinkToAnotherPage path="/vecticum-docusaurus/docs/vecticum/administration/expressions-examples" text="Expressions examples"/>
```
**path** - link to document as full path <br></br>
**text** - text you want to show

Result:
<LinkToAnotherPage path="/vecticum-docusaurus/docs/vecticum/administration/expressions-examples" text="Expressions examples"/>

## Page in the same directory
If you want to insert a link to document that is located in the same directory, you can write in this way:
```
<LinkToAnotherPage path="/vecticum-docusaurus/docs/vecticum/administration/expressions-examples" text="Expressions examples"/>
```

**path** - page name<br></br>
**text** - text you want to show

Result:
<LinkToAnotherPage path="link-to-download-file" text="Link to download file"/>

## Page on the parent directory

If you want to insert a link to document that is located in the parent directory, you can add "../" to the beginning:
```
<LinkToAnotherPage path="../md-file-editors" text="MD file editor"/>
```

**path** - page name with ../ in the beginning<br></br>
**text** - text you want to show

Result:
<LinkToAnotherPage path="../md-file-editors" text="MD file editor"/>

## Link to section of document

If you want to insert a link to section of document, you need to add '#' and name of section:
```
<LinkToAnotherPage path="admonitions#warning" text="Admonitions (warning)"/>
```

**path** - page name<br></br>
**text** - text you want to show

Result:
<LinkToAnotherPage path="admonitions#warning" text="Admonitions (warning)"/>
