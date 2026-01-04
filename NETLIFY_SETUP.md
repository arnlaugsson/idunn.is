# Netlify PR Preview Setup Guide

This guide will help you set up Netlify for automatic PR preview deployments.

## Step 1: Create a Netlify Account

1. Go to [netlify.com](https://netlify.com)
2. Sign up for a free account (you can use your GitHub account)

## Step 2: Create a New Site

1. In Netlify dashboard, click "Add new site" → "Import an existing project"
2. **Important**: Choose "Deploy manually" or skip the import
3. You'll get a **Site ID** (looks like: `abc123def-4567-8901-2345-67890abcdef1`)
4. Save this Site ID - you'll need it later

**Alternative:** Create the site via CLI (optional):
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Create a new site
netlify sites:create --name idunn-pr-previews
```

## Step 3: Get Your Netlify Auth Token

1. Go to [app.netlify.com/user/applications](https://app.netlify.com/user/applications)
2. Scroll down to "Personal access tokens"
3. Click "New access token"
4. Give it a name like "GitHub Actions PR Previews"
5. Copy the token (you won't be able to see it again!)

## Step 4: Add Secrets to GitHub

1. Go to your GitHub repository: [github.com/arnlaugsson/idunn.is](https://github.com/arnlaugsson/idunn.is)
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **"New repository secret"**

Add these two secrets:

### Secret 1: NETLIFY_AUTH_TOKEN
- Name: `NETLIFY_AUTH_TOKEN`
- Value: (paste the token from Step 3)

### Secret 2: NETLIFY_SITE_ID
- Name: `NETLIFY_SITE_ID`
- Value: (paste the Site ID from Step 2)

## Step 5: Test It Out

Once the secrets are added:

1. Create a test PR
2. The preview workflow will automatically run
3. A comment will be posted on the PR with the preview URL
4. Preview URL format: `https://pr-{number}--idunn-pr-previews.netlify.app`

## How It Works

- **On PR open/update**: Builds and deploys to Netlify with alias `pr-{number}`
- **Each PR** gets its own preview URL that updates on every commit
- **On PR close**: Deletes the Netlify deployment and posts a cleanup message
- **Production**: Still uses GitHub Pages at idunn.is (unchanged)

## Preview URL Examples

- PR #5: `https://pr-5--idunn-pr-previews.netlify.app`
- PR #12: `https://pr-12--idunn-pr-previews.netlify.app`

## Troubleshooting

### "Site ID not found"
- Double-check the `NETLIFY_SITE_ID` secret matches your site ID exactly
- Make sure there are no extra spaces

### "Authentication failed"
- Verify the `NETLIFY_AUTH_TOKEN` is correct
- Generate a new token if needed

### Build fails
- Check the workflow logs in GitHub Actions
- Ensure the site builds locally with `pnpm build`

## Cost

Netlify's free tier includes:
- 100 GB bandwidth/month
- 300 build minutes/month
- Unlimited sites

This is more than enough for PR previews!

## Need Help?

Check the [Netlify documentation](https://docs.netlify.com/) or the workflow logs in GitHub Actions.
