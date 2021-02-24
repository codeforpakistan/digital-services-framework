# Testing your APIs

The **beta** phase provides you with the opportunity to test your API. If you have a central API management team, they might manage your API beta. If you're managing your API beta, you will need to decide if it is best to do a public or private.

You should generally try to run an open public beta to get feedback, unless you have reason to keep your beta private.

If you're running a public beta, you should make sure your API users have clear expectations of your API service levels. This is to make sure your API users can try your API, but make sure their service does not depend on it in ways that are too costly to reverse.

## When to run a private beta
You might decide to keep your beta private if you:

- do not want people to be publicly aware of your API yet because of commercial reasons
- have security considerations that you still need to address during the beta

## Managing public beta with controlled release
If your API cannot yet scale easily, you can still run a public beta by taking a controlled release process into production. This will allow you to manage the load on your API while testing your support model and recognising any data quality issues.

A controlled release is likely to start with rolling out your API to users you have a relationship with already.

This will involve smoke testing your API in production with a small number of users to make sure data is returning correctly. Any issues with testing might take some time for you to put right and you should communicate this to future users of your API.

::: tip
For more information about smoke testing, read the Service Manual guidance on using smoke tests after you deploy.
:::

You can do a controlled release while still working openly, by:

- making your documentation publicly available
- creating a waiting list for accessing the API
- making a sandbox publicly available for anyone interested in doing testing - this will help with feedback on your API

## Creating a sandbox for your beta API
During the **alpha** or **beta** stage of your API development, you should consider producing an API sandbox. The sandbox is an implementation of your API where developers can submit API requests and receive responses that realistically reflect the system behaviour.

You will need to test most APIs in a sandbox unless they are very simple. Sometimes you might decide to build your sandbox in alpha. You can read our guidance on creating a sandbox for your alpha API to understand some reasons for doing this.

You can choose to create a sandbox in multiple ways, including:

- building the sandbox using your OpenAPI definition file
- using the functionality of your API Platform - most provide basic sandboxes
- creating a copy of your production system

When considering different approaches, you will need to think about the quality of service they provide to your users. For example, consider how each approach produces realistic error handling, and the amount of maintenance, configuration and operations needed.

You will also need to think about how to guide developers through your sandbox process. Consider whether to present the information to them at the point where they need it, as they interact with your API, or through linking them to your documentation URL.

## Supporting your beta API users
Make sure you're ready to support your beta API service. You can do this by setting up a developer support team.

Your support team will usually support API users by responding to queries made through:

- emails to your API team account
- the version control system your development team uses for its repositories, such as Git

Queries from users might lead to the API development team investigating the backend system, fixing bugs or adding more clarity to their documentation.

The support team will frequently include a technical writer who can help manage queries from developers and support calls and communicate breaking changes.

Your support model and how you receive general feedback from users will depend on whether you're running your beta privately or publicly.

If you have an established relationship with your users in a private beta you can choose to approach them directly for feedback.

In a public beta, the user researcher on your team will have already engaged with a select number of users, and you should tell those users how you will support them. You could also publish information on your website or write a blog post to increase transparency.

If you are running a public beta with a large number of users, you might want to consider developing an API communications strategy.

## User testing your beta API
When building your API, you should work closely with your users to get feedback on your API design and how it functions. This is when you're most likely to discover data quality issues.

For some support requests, your technical writer might decide to update the API documentation to give more clarity on how the API functions. However, API teams should aim to reduce design complexity for users rather than attempting to 'fix' the API though adding more detail to documentation.

You should advocate for a user-focused approach to prioritising support tickets and measure the effect fixes have on performance and usability.

When testing your API, you should provide your users with test data for as many scenarios as possible. The goal of this is to test all your API endpoints before they're deployed to the customers as live APIs. This is so you can make sure everything is working. This testing is especially important when building an API into a legacy system, to make sure data output through the API is equivalent to data accessed through a legacy interface.

Involve your technical writer in the design, running and analysis of your testing. This lets you test the docs together with the API itself, and helps your technical writer get a deeper understanding of any issues developers have and the language they use.

## Adding your API to the service catalogue
Once your API goes into beta, you should add it to the government [service catalogue](https://rehnuma.kpgov.tech).

This shows you have met the standards necessary to publish a government API, which will help you build trust with your users. The catalogue might also help you publicise your API within the API community and across government organisations.

## Getting feedback from users
You might want to ask your users for direct feedback on your API and how it is functioning for them. This is to make sure your API:

- is functioning properly at a technical level
- fits into their end-to-end journey as expected

You might choose to send questionnaires out by email or carry out face-to-face user research with a few users.

Questions you might want to ask include:

- does the data provided by the API work for you?
- are you experiencing any data quality issues?
- how do you find the authorisation process?
- what star rating would you give this API and why?
- would you be interested in giving more feedback on this API in the future?

You will need to iterate your beta service based on this feedback from your end users.

You might choose to include some of the feedback in a business case for continuing API development.

## Iterating your API in beta
When iterating your API to add new or improved functionality, you should minimise disruption for users by following the API technical and data standards. You should also make changes backwards compatible wherever possible.

If you do need to make a backward incompatible change, you will need to clearly communicate this to your users.

Ideally, you will have an understanding of the systems and dependencies your users will need to manage, and the amount of time you will need to give them to adapt to the breaking changes.

## Exiting beta with your API
To exit beta, you will need to decide if the API service is 'good enough' to exit beta. This will involve:

- making sure you have a robust support capability in place that can support the service at scale
- measuring your API against the success metrics you define in discovery, for example reducing the time or cost of integration
- conducting a beta exit review - your organisation's central API management team might do this if you have one

## Doing a beta exit API review
Your beta exit API review will look at your API in detail. The review will often involve assessing your API against the standards and best practice in the government API design collection.

The review might also look at the:

- benefits your API delivers to users and to your organisation
- user research conducted by your API development team
- current API support model, service levels and performance metrics
- security of your API, and whether it is proportionate to the specific risks you've identified around the data you're providing
- data architecture of your API, the data your API is using and the data standards you have in place
- quality of your API documentation
- governance process you have put in place for the future operations of your API