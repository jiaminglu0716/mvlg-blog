## Github Pages

### Deploy with Github Actions

#### Set Github Page Branch For Github Repository

1. Enter your <repo>
2. Settings > Pages > Build and deployment[Deploy from a branch] > Branch[gh-pages] (If no branches, pls create new branch with this name 'gh-pages')

#### Create Github Actions For Repository

All workflow actions scripts should be created in the below directory. And they will be executed automaticly according to their event conditions.

> local repo: .github/workflows/

```yml
# Define Script Name
name: Actions CI - Next.js version 12 static site export, GitHub Actions Build and Deploy
# Define Execute Condition
on:
  # If u want to manual exec in github actions page
  workflow_dispatch:
  # Trigger Event: Push to master branch
  # > git push origin master
  push:
    branches: [master]
# Script Body For CI
jobs:
  build-and-deploy:
    # Run Platform
    # 运行在虚拟机环境ubuntu-latest
    # https://docs.github.com/zh/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idruns-on
    runs-on: ubuntu-latest
    # Run Steps
    steps:
      - name: Check Out  🛎️
        uses: actions/checkout@v3
      - name: Setup Node.js ⚙️
        uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Install Yarn 🧬
        uses: borales/actions-yarn@v4
        with:
          cmd: install # will run `yarn install` command
      - name: Install Deps ⚙️
        run: yarn install
      - name: Package 🏗️
        run: |
          npm run build
          touch out/.nojekyll
      - name: Deploy 🚀
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          branch: gh-pages
          folder: out
          clean: true
```
