# Google Search Console Setup Guide

## 🎯 Why Google Search Console?

Google Search Console (GSC) helps you:
- Monitor search performance
- Submit sitemaps
- Request indexing
- Fix crawl errors
- See what keywords bring traffic
- Check mobile usability
- Monitor Core Web Vitals

## Step 1: Access Google Search Console

1. Go to https://search.google.com/search-console
2. Sign in with your Google account
3. Click "Start now" or "Add property"

## Step 2: Add Your Property

### Option A: Domain Property (Recommended)
1. Select "Domain" on the left
2. Enter: `shashicaterers.com` (without https://)
3. Click "Continue"
4. You'll need to verify via DNS (see Step 3)

### Option B: URL Prefix Property
1. Select "URL prefix" on the right
2. Enter: `https://shashicaterers.com`
3. Click "Continue"
4. Choose verification method (see Step 3)

## Step 3: Verify Ownership

### Method 1: HTML Tag (Easiest)

1. GSC will provide a meta tag like:
   ```html
   <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE_HERE" />
   ```

2. Open `index.html` in your project

3. Add the meta tag in the `<head>` section, after the charset meta tag:
   ```html
   <head>
     <meta charset="UTF-8" />
     <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE_HERE" />
     <!-- rest of your head content -->
   </head>
   ```

4. Save and deploy your website

5. Go back to GSC and click "Verify"

### Method 2: HTML File Upload

1. Download the HTML verification file from GSC
2. Upload it to your `public/` folder
3. Deploy your website
4. Verify in GSC

### Method 3: DNS Verification (For Domain Property)

1. GSC will provide a TXT record
2. Go to your domain registrar (GoDaddy, Namecheap, etc.)
3. Add the TXT record to your DNS settings
4. Wait 10-60 minutes for DNS propagation
5. Verify in GSC

## Step 4: Submit Your Sitemap

After verification:

1. In GSC, go to "Sitemaps" in the left menu
2. Enter your sitemap URL: `https://shashicaterers.com/sitemap.xml`
3. Click "Submit"
4. Wait for Google to process (can take a few days)

## Step 5: Request Indexing

To get your pages indexed quickly:

1. Go to "URL Inspection" in the left menu
2. Enter your homepage URL: `https://shashicaterers.com`
3. Click "Test Live URL"
4. Click "Request Indexing"
5. Repeat for important pages:
   - https://shashicaterers.com/about
   - https://shashicaterers.com/menu
   - https://shashicaterers.com/packages
   - https://shashicaterers.com/gallery
   - https://shashicaterers.com/testimonials
   - https://shashicaterers.com/contact

**Note:** You can request indexing for ~10 URLs per day

## Step 6: Set Up Settings

### Performance Settings
1. Go to Settings (gear icon)
2. Set up email notifications
3. Add additional users if needed

### Rich Results
1. Check "Enhancements" section
2. Ensure all rich results are valid:
   - FAQ
   - Local Business
   - Breadcrumbs
   - Reviews

## Step 7: Monitor Key Metrics

### 1. Performance Report
Check daily/weekly:
- **Clicks** - How many people clicked your site
- **Impressions** - How many times your site appeared in search
- **CTR** - Click-through rate (clicks/impressions)
- **Position** - Average ranking position

### 2. Coverage Report
Monitor:
- **Valid pages** - Should increase over time
- **Errors** - Should be 0
- **Warnings** - Fix as soon as possible
- **Excluded** - Check why pages are excluded

### 3. Core Web Vitals
Ensure all pages are "Good":
- **LCP** (Largest Contentful Paint) < 2.5s
- **FID** (First Input Delay) < 100ms
- **CLS** (Cumulative Layout Shift) < 0.1

### 4. Mobile Usability
- Check for mobile errors
- Ensure all pages are mobile-friendly
- Fix any clickable elements that are too close

## Step 8: Fix Common Issues

### Issue 1: Pages Not Indexed
**Solution:**
- Check robots.txt isn't blocking
- Ensure sitemap is submitted
- Request indexing manually
- Check for noindex tags

### Issue 2: Low CTR
**Solution:**
- Improve title tags
- Write compelling meta descriptions
- Add structured data

### Issue 3: High Impressions, Low Clicks
**Solution:**
- Title not matching search intent
- Meta description not compelling
- Update page content for better relevance

### Issue 4: Mobile Usability Errors
**Solution:**
- Text too small
- Clickable elements too close
- Viewport not set correctly

## Step 9: Set Up Email Reports

1. Go to Settings > Users and permissions
2. Add your email
3. Enable notifications for:
   - New issues detected
   - Site improvements
   - Manual action notifications
   - Security issues

## Step 10: Link with Google Analytics

1. In GSC, go to Settings
2. Click "Associations"
3. Select "Associate Google Analytics property"
4. Choose your GA4 property
5. Confirm association

Benefits:
- See search queries in GA4
- Better understanding of user behavior
- Combined reporting

## Weekly Tasks

### Monday
- [ ] Check Performance report
- [ ] Monitor keyword rankings
- [ ] Check for new errors

### Wednesday
- [ ] Review Coverage report
- [ ] Check mobile usability
- [ ] Request indexing for new pages

### Friday
- [ ] Review Core Web Vitals
- [ ] Check for manual actions
- [ ] Export weekly report

## Monthly Tasks

- [ ] Deep dive into Performance data
- [ ] Analyze top-performing pages
- [ ] Identify low-performing pages and optimize
- [ ] Review and update sitemap
- [ ] Check backlinks
- [ ] Monitor competitors

## Key Reports to Generate

### 1. Keyword Performance Report
Export queries showing:
- Keywords driving most traffic
- Keywords with high impressions but low clicks
- Position changes over time

### 2. Page Performance Report
Export pages showing:
- Most visited pages
- Pages with best CTR
- Pages needing optimization

### 3. Mobile vs Desktop Report
Compare:
- Mobile traffic vs desktop
- Mobile rankings vs desktop
- Mobile usability issues

## Advanced Features

### 1. Search Appearance
Check enhancements for:
- ✅ FAQ (implemented)
- ✅ Local Business (implemented)
- ✅ Breadcrumbs (implemented)
- ✅ Logo (implemented)

### 2. Removals
Temporarily remove URLs from search if needed

### 3. Change of Address
Use when changing domain (not applicable now)

### 4. International Targeting
Set geographic target to India (Karnataka/Udupi)

## Troubleshooting

### Problem: "URL is not on Google"
**Solutions:**
1. Request indexing
2. Check robots.txt
3. Wait 2-4 weeks for natural crawling
4. Check for penalties

### Problem: "Discovered - currently not indexed"
**Solutions:**
1. Improve page quality
2. Add more internal links
3. Update content
4. Request indexing

### Problem: "Crawled - currently not indexed"
**Solutions:**
1. Page may be low quality
2. Duplicate content
3. Add more unique content
4. Improve page value

### Problem: "Server error (5xx)"
**Solutions:**
1. Check hosting provider
2. Test server response
3. Check error logs

## Target Metrics (3 Months)

- **Total Clicks:** 500+ per month
- **Total Impressions:** 10,000+ per month
- **Average CTR:** 5%+
- **Average Position:** Top 10 for main keywords
- **Indexed Pages:** 100% of submitted pages

## Important URLs to Monitor

1. Homepage: https://shashicaterers.com/
2. About: https://shashicaterers.com/about
3. Menu: https://shashicaterers.com/menu
4. Packages: https://shashicaterers.com/packages
5. Gallery: https://shashicaterers.com/gallery
6. Testimonials: https://shashicaterers.com/testimonials
7. Contact: https://shashicaterers.com/contact

## Data to Export Monthly

- Performance data (clicks, impressions, CTR, position)
- Top queries
- Top pages
- Countries
- Devices
- Search appearance data

---

## Quick Reference

**GSC URL:** https://search.google.com/search-console  
**Sitemap URL:** https://shashicaterers.com/sitemap.xml  
**Support:** https://support.google.com/webmasters/

---

## Next Steps After Setup

1. ✅ Verify ownership
2. ✅ Submit sitemap
3. ✅ Request indexing for all pages
4. ✅ Set up email notifications
5. ✅ Link with Google Analytics
6. ✅ Monitor weekly
7. ✅ Export monthly reports
8. ✅ Fix any issues immediately

---

**Status:** Ready to implement  
**Time Required:** 1-2 hours initial setup  
**Ongoing:** 30 minutes per week

Check `SEO-CHECKLIST.md` after completing setup!
