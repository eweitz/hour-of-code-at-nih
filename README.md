# hour-of-code-at-nih

_JavaScript course for [Hour of Code at the NIH Library](https://nihlibrary.nih.gov/AboutUs/Announcements/Pages/Hour-of-Code.aspx)_

This brief course evaluated genomics-oriented JavaScript code examples in [Chrome Developer Tools](https://developer.chrome.com/devtools), in tandem with [presentation slides](https://github.com/eweitz/hour-of-code-at-nih/raw/master/learn-javascript-in-an-hour.pptx). 

The cumulative series of JavaScript examples -- run in Chrome DevTools in a blank HTML [workpad](https://github.com/eweitz/hour-of-code-at-nih/blob/master/workpad.html) with jQuery pre-loaded -- introduced concepts like [variable assignment](https://github.com/eweitz/hour-of-code-at-nih/blob/master/01-variable-declaration-and-assignment.js), [objects](https://github.com/eweitz/hour-of-code-at-nih/blob/master/05-objects.js), [functions](https://github.com/eweitz/hour-of-code-at-nih/blob/master/06-functions.js), [event handling](https://github.com/eweitz/hour-of-code-at-nih/blob/master/10-event-handling.js), and [using Ajax](https://github.com/eweitz/hour-of-code-at-nih/blob/master/11-ajax-simple.js) to work with bioinformatics web APIs.  

By progressively building up these examples, we were able to encapsulate our processing of JSON data from the [NCBI EUtils](https://www.ncbi.nlm.nih.gov/books/NBK25500/) web service.  The transformed data drove interactive genome visualization with [Ideogram.js](https://github.com/eweitz/ideogram), and was used to link to [Genome Data Viewer](https://www.ncbi.nlm.nih.gov/genome/gdv/?acc=GCF_000001405.35&context=genome).

The genomics web app we developed can be used by going to https://eweitz.github.io/hour-of-code-at-nih/, or clicking the image below.

[![Click here to try our genomics web app](https://raw.githubusercontent.com/eweitz/hour-of-code-at-nih/master/genomics-web-app-screenshot.png)](https://eweitz.github.io/hour-of-code-at-nih/)

Questions?  Comments?  Please contact eric.weitz@nih.gov, or [open an issue](https://github.com/eweitz/hour-of-code-at-nih/issues)!
