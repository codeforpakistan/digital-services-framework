# Documenting your APIs

API documentation helps your users integrate with your API by explaining what it is and how to use it.

API documentation is usually made up of:

- conceptual information to introduce users to the API and the domain
- practical information to help users get started with the API
- reference information to inform users of every detail of your API

If you provide client libraries to interface with your API, you may need to produce separate documentation for each client library. 

## Understand user needs for the documentation
Your users may have different levels of technical ability or understanding. Starting with user research and defining user needs can help you understand what users need from your documentation.

## How to structure your documentation
Your document should loosely follow the outline below. You may find it useful to look at API documentation for similar APIs to yours or look at documentation from other organisations to see how they structure their content.

### Introduce your API
It can be useful to start your documentation with a short overview of:

- what the API does
- the benefits of using the API to help users can evaluate it against other APIs if applicable
- how the API is consumed, for example do your users need to build or buy anything in order to use it
- any terms or conditions of using the API
- any rate limits, authentication or access requirements
- whether the API is only available during certain times
- versions and changes that have occurred between versions (you can link to a change log to avoid making the overview too long)
- whether it's RESTful and how the data is returned, for example in JSON

Keep your introduction short so your users can read and understand it easily. You should write in Plain English and avoid jargon or buzzwords.

### Authentication
If you need to authenticate a user before they use your API, include a section explaining how they can apply for authentication. For example, the Companies House API documentation includes a separate section on how to get and send an API key.

### Authorisation
If access to parts of your API requires authorisation, have a section in your documentation explaining how a user can gain access. You can then link to this section from the endpoints or resources that require authorisation.

### Rate limits
If your API uses rate (or record) limiting, explain how many requests users can make within a set period. Even if it's unlikely a user will meet the maximum number of requests, you must still explain what will happen if users exceed that limit, including the type of error message they can expect and how to correct that error.

For example, yoy may explain that the user will see a particular error code, but they will be able to make another request after one second has passed.

### Versioning information
Tell users how versioning works for your API and version your documentation alongside your API.

Each version of your documentation should include a clear introduction explaining what makes it different from the version before. You should include all revision history for your API documentation and make it easy for users to switch between documentation for different versions. 

## Getting started
A ***get started*** or ***quick start*** section should explain the easiest and quickest way a developer can use the API. It gives your users a quick way to see how your API works so they can start experimenting.

You might find it useful to provide these instructions in a short, numbered list. 

Your ***get started*** section could also include sample code a developer can use to see a response. 

## Reference documentation
Reference information is what many users consider to be the main part of API documentation. It provides the methods, requests and responses of an API. Follow the guidance on writing [API Reference documentation](./reference).

## API testing
You should also help your users make sure they can successfully test your API, especially if they want to use it in a production environment with real data.

In this section, explain how a user can test their interactions with your API are operating properly, including:

- why they should test
- what they need to test
- how to run the tests in a test environment

Make it easy for developers to experiment with your API in a sandbox environment. Ideally this sandbox environment will let users use data to test their scenarios. If using a sandbox environment, you should make sure developers can:

- test your API without risking any real user data
- access the environment without needing authorisation

Clearly explain the limitations of your sandbox environment compared to your production environment. For example, if your sandbox environment only allow stateless testing, your users should know it will not be representative as stateful testing in production.

## Support
Consider how you can help users trying to use your API. You could add a ***support*** section in your documentation and include:

- how to contact the API development team (for example, through GitHub or a contact form)
- how to contribute to development if appropriate
- links to any supporting information or guidance, such as product blog posts

You could also explain how users can report any vulnerabilities or security concerns and how you respond to these reports. You could also ask users not to publicly disclose any issue until it has been addressed by your development team.

## Publishing and formatting API documentation
As well as writing the content for your API documentation, you'll need to design the content so your users can find the information they need.

### Metadata
Metadata will help your users find your documentation. Consider including the name of the API, whether it's stable or in alpha, the base URL, version number, and availability information.

### Help users navigate your documentation
API documentation can become long and complicated. Consider how to help your users find the part of your API documentation they need with a navigation. For example, the documentation template built by GDS uses a fixed left-hand navigation so a user can move to different sections, and can render content as either a single or multiple pages. This is a common documentation navigation design used by organisations including Stripe and Dropbox.

If you have a lot of documentation, you may find it useful to introduce search functionality. Be aware many developers search long documentation pages using inbuilt browser search (Ctrl-F). The GDS documentation template has an inbuilt search function.

### Format code snippets
Code snippets are small blocks of reusable code. Code snippets should be clearly distinguishable from non-code text, for example by rendering snippets in a fixed-width font. You might also find it helpful to provide a light background colour to make it stand apart from standard text.

### Publishing your documentation
You can use a number of writing and publishing tools and formats to edit your API documentation.

For example, when using static site generators, content can be written in HTML or Markdown and is stored as code, which allows it to be kept in version control systems such as Git. 

If you have a small API and your user research suggests your users only need minimal documentation, you may want to store and publish documentation within your team's source code repository. For example, in a markdown README file that can be accessed on GitHub.

## Updating documentation to meet user needs
Publish your documentation as earlier as possible to get feedback from users. You should regularly test active API documentation, especially if you introduce any changes that affect how a user would consume the documentation or use your API.

For example, you can ask them to complete common scenarios with your API and see if the instructions you have provided in the documentation help them to complete a task. By observing your users following your documented instructions, you can see whether your documentation is incomplete, unclear, or helping users effectively.

You can also test your users' understanding of the language you have used in your documentation with comprehension testing. Common ways to test comprehension include asking users to highlight parts of your documentation that make it easier or harder to understand a concept or use your API.

You can also interview users to find out how comfortable they are with the domain around your API or how your API works. You can even run A/B tests to test variations of content before publishing.

You can also experiment with using pop-up surveys to get immediate feedback from developers using their documentation. The team then use the responses to iterate the documentation.
