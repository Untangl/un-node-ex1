# Untangler Sample Node.js Client

This is a sample client Node.js application for use with *Untangler* (https://untangl.co.uk/), which converts unknown tabular data into 
a known format.

It demonstrates use of the Untangler REST API to post an MS Excel worksheet file, which is converted and displayed
as tabular text.

This is a command line (non-server) application that illustrates how a Node.js server might call Untangler on behalf 
of its web client.

## Operation

The application does the following:
- uses a valid token for credentials;
- reads and encodes a supplied example worksheet, ExDemoFile.xlsx;
- using a demo template (which defines the output format) it issues a POST request to Untangler;
- the request returns the converted data and the application displays it in a textual table.

## Output
The output is specified by a template (defined separately in *Untangler Admin*).

In this example, the column headers display the output column letter (A, B, etc), the output column name 
(as defined by a template field) and the column letter of the identified data in the input file.

```
╔════════════════╤═══════════════╤═════════════════╤══════════════════╤═══════════════════╤═══════════════════════╤═════════════════╗
║ A.Forename (D) │ B.Surname (C) │ C.Email Address │ D.Birth Date (F) │ E.Postal Code (M) │ F.Employment Date (J) │ G.Job Title (L) ║
╟────────────────┼───────────────┼─────────────────┼──────────────────┼───────────────────┼───────────────────────┼─────────────────╢
║ Charlie        │ Bailey        │                 │ 01/03/1998       │ WR11 7EL          │ 16/01/2014            │ Manager         ║
╟────────────────┼───────────────┼─────────────────┼──────────────────┼───────────────────┼───────────────────────┼─────────────────╢
║ Arvid          │ Barrows       │                 │                  │ HA5 2BL           │ 15/06/2017            │ Director        ║
╟────────────────┼───────────────┼─────────────────┼──────────────────┼───────────────────┼───────────────────────┼─────────────────╢
║ Lauren         │ Bartell       │                 │ 01/08/1986       │                   │ 01/02/2019            │ Manager         ║
╚════════════════╧═══════════════╧═════════════════╧══════════════════╧═══════════════════╧═══════════════════════╧═════════════════╝
```
As well as converting the input data, Untangler also validates it and produces a list of *analyses*,
which highlight problems in the data such as:
- date out of range
- invalid UK postcode
- invalid email address

These are listed in descending order of severity (error, warn, etc).