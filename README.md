# Github pages

### Deploy new code

To deploy changes, merge PR to master and run from master branch:

```sh
git checkout master
git pull
npm run deploy
```

### Verify settings page:

GitHub Pages

GitHub Pages is designed to host your personal, organization, or project pages from a GitHub repository.
Your site is live at https://etzba.com/ **Last deployed by @etzba etzba 2 minutes ago** (Make sure it appreas after running `npm run deploy`)
Build and deployment

Source          **Deploy from branch**

Branch          **master**              **/root**

Your GitHub Pages site is currently being built from the master branch. Learn more about configuring the publishing source for your site.

Your site was last deployed to the github-pages environment by the pages build and deployment workflow.

Learn more about deploying to GitHub Pages using custom workflows
Custom domain

Custom domain

    Etzba.com
Custom domains allow you to serve your site from a domain other than etzba.github.io. Learn more about configuring custom domains.

    DNS check successful

Enforce HTTPS **V**

HTTPS provides a layer of encryption that prevents others from snooping on or tampering with traffic to your site.
When HTTPS is enforced, your site will only be served over HTTPS. Learn more about securing your GitHub Pages site with HTTPS.
Visibility
GitHub Enterprise


### Notes

- In `package.json` file `homepage` should be set to:
```json
{
  "name": "etz",
  "version": "0.2.0",
  "homepage": "https://etzba.com/",
}
```

- Update minor versions before merging to master.

- When browsing to http://etzba.com do not try to navigate to other URL paths (like http://etzba.com/install) because you'll get 404 

