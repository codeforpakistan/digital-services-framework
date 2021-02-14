# Prototyping your APIs

An API prototype is when you can get feedback on your initial API design and documentation. Often in **alpha**, your API documentation is available, but you will disable the API endpoints as they are not yet ready to use. You will need to name your API and might choose to get an API domain on GOV.PK.

In prototype, you might also:

- write and test your API documentation
- build one or more API prototypes
- speak to the Cyber Security Centre on security best practice for your API
- use OpenAPI 3 for an API design-first approach that will help you understand the security and governance aspects to your API

If members of your team have not worked on an API before, or one with a similar architecture, make sure they all clearly understand the roles and responsibilities within your team.

## Starting user research 
Before you begin your user research, you should understand where your API sits in the wider application process. You should map out the end-to-end journeys of the software developers using your API.

You should do this when you design a completely new API and you do not have the design limitations of an existing service. For example, to understand what data should be returned in your API responses, you might want to understand how software developers search, and the types of fields they use.

At the start of prototyping you should talk to software developers who will use your API to identify:

- expectations they have of your API, for example they might expect your service to be free of charge
- type of security, authorisation and user consent your API will need as this will affect the user journey

## Testing your API early on
When testing your API in prototype, you might want to consider:

- publishing your documentation but marking it as **alpha** and asking for feedback on the contents - you can host a micro-poll on your API documentation page to ask for feedback
- flagging your API as **alpha** in the body of your HTTP responses
- holding a hack day to see how product owners, technical architects and developers interact with your API, which can provide useful insight into how you can improve your API
- testing your API with external software developers who will be using the API - it is not enough to only involve your own developers in the testing process

Testing your API with external software developers is a different user research task to testing citizen-facing services. This is because the developer users you will test with know how to build and design software. The user research you do will require you to have a lot more technical knowledge.

If you decide to proceed to beta, you will then need to iterate your API using the [API data and technical standards](/technology/api-standards) in response to testing. Keep in mind that you will get more feedback in your beta process.

## Creating a sandbox for your API
During the **alpha** or **beta** stage of your API development, you might consider producing an API sandbox. 

> A sandbox is an implementation of your API where developers can test the API, by submitting API requests and receiving responses that realistically reflect the system behaviour*.

Most APIs will need a sandbox unless they're very simple. Often you will decide to build your sandbox in beta. For more information, read the guidance on creating a sandbox for your beta API.

You might decide to build your sandbox in prototype if:

- you want to take your API beyond proof of concept before fully committing to further developing your API in beta
- it's not a problem for your users to experience more breaking changes using the sandbox than they would in beta

If your users experience lots of breaking changes, this could affect your business case for bringing your API into beta. For this reason, you might want to wait until your API is in beta before running a sandbox.

## Conducting an exit review
When you get to the end of protoyping, make sure the API meets user needs, it is cost-effective, and you have the budget and people needed to deliver it. If you're not sure, you can repeat user research or prototyping, or stop altogether.

Before deciding to move your API to beta, you might want to conduct an exit review. You should do this with KPITB team.

> An exit review includes a checklist of quality considerations your API will need to meet, including how well your API meets the user needs you've identified.