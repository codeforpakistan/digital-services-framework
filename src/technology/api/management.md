# Managing live APIs 

When you make your API live, you'll make it available online for all your users. You can publicise this by adding it to the government API catalogue. You should let your beta users know about this change, as well as those who have participated in your user research.

You might choose to describe your API as **stable** rather than **live** if there are still areas you're working on from your beta testing.

If your API relies on another API that is not in a **live** stage, you should consider whether you describe your API as **live** or **stable**.

## Your API delivery team in live
Your API delivery team might reduce in size when it reaches the live stage, but you will need to make sure the team can still support the API. [User research](/guides/user-research/) should still continue to investigate how useful the API is, to help iterate the service. With any iteration, your technical writer will need to update your [API documentation](./documentation).

Ideally, the delivery team will manage your API in a DevOps environment so they can respond to bugs as they occur.

If you're handing over the management of your API to a new team, you will need to transfer your development team's knowledge of your API. This will include previous documentation drafts and versions, your user research file, and an understanding of why API design decisions were made, for example, why you chose a particular authentication model.

## Iterating your live API service
You might have to deliver any breaking API changes as a new version of your API, as outlined in the government API technical and data standards.

If you are delivering a new version of your API, then you will need to communicate this to all your users. You will also need to deliver a test environment in advance so users can test the update against their software.

## Deprecating your API or a version of it
You will need to give your users notice before you deprecate or retire your API, or an older version of it, so they have time to transfer over to your current version.

You should try to give users 6 months notice if your API is **live**. You do not need to give as much notice if your API is in alpha or beta where your users are expecting breaking changes.

You will usually only deprecate or retire your whole API when it has become obsolete and nobody is using it anymore.

Normally, you will deprecate your API first and this will still allow users to access it, even though you will not be actively supporting their use. You should then retire your API so it is no longer visible from your API development portal, or accessible to calls.

When deprecating a version of your API, be aware that some of your users might have limited resources to manage updates. Keep older versions of your API running to allow your users time to migrate.

You should also:

- clearly label your API as deprecated and link to the new version - you might choose to put a deprecation notice in your API headers
- consider maintaining old versions of your API until the number of users falls to a certain threshold - this will involve clearly versioning your documentation along with your API to avoid developers using the wrong documentation
- update your API documentation to say when you're deprecating and retiring the API
- have your API support team communicate with your users about timelines for the deprecation and retirement
- update your entry in the API catalogue with an end date for the deprecated version