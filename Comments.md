## Comments on project

This is a next.js project written in TypeScript and styled with SASS.  
The Backend data is fetched from Contentful CMS and the site is deployed it via Vercel which maintains Continuous Integration and Deployment through github commits.

For the hardcover toggle I used useState but for a more technical website with other pages I would use Redux (I initially went down this route but thought it was overkill for the particular scenario)

The mobile breakpoint is set to 600px but I also added tablet which prevented the boxes exceeding the screensize/overlapping while minimizing the width.

Note that I have used the requested colour throught the app but that it fails WCAG AAA colour contrast standards
https://webaim.org/resources/contrastchecker/  
This is something I would normally raise with the UI/UX designer and/or team lead as something to note or possibly change.It does pass WCAG AA at least.
