---
description: Publish the website by committing, pushing, and deploying
---
When the user sends the command "publish", execute the following sequence precisely:

1. Stage all changes and commit them with an appropriate status message:
// turbo
`git add .`
// turbo
`git commit -m "chore: publish updates to site and mascot images"` (Modify the comment based on context if obvious what changed).
2. Push the changes to the remote repository.
// turbo
`git push`
3. Automatically deploy the mkdocs static site to GitHub pages using the standard deploy command.
// turbo
`mkdocs gh-deploy`

Wait for all commands to complete and confirm the live status with the user.
