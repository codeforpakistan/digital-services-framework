# Getting started with APIs

**This guidance covers how to run your API as a service, including building the team you will need and the lifecycle of your API**

If your API is providing a valuable function for users, you should treat it as a service and iterate it often, according to user research and new security developments.

The framework contains agile delivery guidance for citizen-facing services to make sure they meet user needs. To make sure your API is effective and meets user needs, you should use the following sections of guidance:

- [Gathering user requirements](requirements)
- [Prototyping your APIs](./prototyping)
- [Testing your APIs](./testing)
- [Setting API service levels](./service-levels)
- [Documenting your APIs](./documentation)
- [Managing live APIs](./management)

## Setting up a new API
When you consider setting up a team to develop an API, you should:

- check the API Catalogue to see if there are components, design patterns or data sets that you can reuse from similar APIs
- read [API technical and data standards](/technology/api-standards)
- understand the skills needed on your API and how these skill-sets differ to those who work on frontend web services
- understand the publishing process for new APIs, to avoid developing in silos and to make sure you add your API to internal catalogues

## Building skills in your API team
You will need the following roles in your API development team:

- developer
- technical architect
- product manager with technical and API understanding
- user researcher - combined with an understanding of UX (if building an API platform) and software development
- business analyst - these skills can support user research and quality control
- technical writer - this is a different skill to content design, so you will need a technical writer
- interaction designer or service designer - particularly if building an API platform, but also to make sure your APIs expose data in a way that is easy to use

## Your API lifecycle
Your API will follow a lifecycle from the publication to retirement.

Every version of your API will likely be at a different point in its lifecycle. For example, v1.0 might be deprecated (retired), v2.0 might be live (stable) and v.3.0 might be in private beta.

You must make it clear to users where each version of your API is in its lifecycle. This will affect whether your:

- documentation is visible to users
- API endpoints are enabled, allowing users to make requests to the API version

You might also have API endpoints at different stages of maturity in the development lifecycle.