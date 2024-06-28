# Configuration

Parameters that can be passed to \_\_config

### Applicant

Key - applicant

External person without login to the system, who will be filling his personal data to a document, this param accepts 2 types - string and Lookup. String or lookup.name will be shown as an author of a comment.

  ![](/assets/image_(251).png)



### Approver

Key - approver

Internal person with login to the system, who will be reviewing, accepting, rejecting a document. Parameter accepts 2 types, it can be passed as a string or as a Lookup. String or lookup.name will be shown as an author name of a comment.

  ![](/assets/image_(350).png)

### Logo

Key - logo

String with link to a logo image, which should be displayed in the header of a document.

  ![](/assets/image_(101).png)

### Document header

Key - header

String type parameter which will be used as a document header text.

  ![](/assets/image_(268).png)

### Language

Key - language

Language parameter for translations, default value is "en", for Lithuanian language it should be "lt-LT" and etc.

### Fields

#### Possible field types

* text
* boolean
* date
* dateRange
* choice
* file
* children

#### Field parameters for all types

* key - **Mandatory** (string) - unique field identifier (string)&#x20;
* label  - **Mandatory** (string)  - field label, it can be ignored for file field type
* required - _Optional_ (boolean)_-_ identifier if field is required or not
* order - **Mandatory** (number) - number by which elements will be ordered
* help - _Optional_ (string) - additional text below field

```json
   "fields":[
      {
         "key":"name",
         "label":"Vardas",
         "type":"text",
         "required":true,
         "order":1,
         "help":"Any kind of text"
      }
   ]
```

#### Additional parameters for boolean type

* text - _Optional_ (string) - additional text next to checkbox

```json
      {
         "key":"checkbox",
         "label":"Boolean",
         "type":"boolean",
         "text":"I agree with terms and ...",
         "order":3
      }
```

#### Additional parameters for choice type

* options - **Mandatory** (Array of objects) - options to choose from in a dropdown

```json
      {
         "key":"choice",
         "label":"Choice",
         "type":"choice",
         "options":[
            {
               "key":"solid",
               "value":"Solid"
            },
            {
               "key":"great",
               "value":"Great"
            },
            {
               "key":"good",
               "value":"Good"
            },
            {
               "key":"unproven",
               "value":"Unproven"
            }
         ],
         "order":5
      }
```

#### Additional parameters for file type

* message - **Mandatory** (string) - text which will be displayed inside file upload box

```json
      {
         "key":"file",
         "type":"file",
         "message":"some message for file",
         "order":6
      }
```

  ![](/assets/image_(112).png)

#### Additional parameters for children type

* fields - **Mandatory** (Array of objects) - Same rules applies as for all other fields, cannot nest children into children.

```json
      {
         "key":"children",
         "label":"Issilavinimas",
         "type":"children",
         "fields":[
            {
               "key":"middle",
               "label":"Antras vardas",
               "type":"text",
               "order":3
            },
            {
               "key":"surname",
               "label":"Pavarde",
               "type":"text",
               "order":1
            },
            {
               "key":"name",
               "label":"Vardas",
               "type":"text"
            },
            {
               "key":"date",
               "label":"Data",
               "type":"date",
               "order":4
            },
            {
               "key":"dateRange",
               "label":"DataRanges",
               "type":"dateRange",
               "order":10
            },
            {
               "key":"file",
               "type":"file",
               "message":"some message for file",
               "order":6
            }
         ]
      }
```

#### Example of config JSON

  [example.json](/assets/example_(1).json)

