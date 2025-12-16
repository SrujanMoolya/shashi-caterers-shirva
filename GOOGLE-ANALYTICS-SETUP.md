# Google Analytics 4 (GA4) Setup Guide

## Step 1: Create Google Analytics Account

1. Go to https://analytics.google.com/
2. Sign in with your Google account
3. Click "Start measuring"
4. Enter Account Name: "Shashi Caterers"
5. Configure account data sharing (recommended: all enabled)
6. Click "Next"

## Step 2: Set Up Property

1. Property Name: "Shashi Caterers Website"
2. Reporting Time Zone: "India Standard Time (IST)"
3. Currency: "Indian Rupee (₹)"
4. Click "Next"

## Step 3: Business Information

1. Industry Category: "Food & Beverage"
2. Business Size: "Small"
3. How you use Analytics: "Get customer insights", "Measure website traffic"
4. Click "Create"
5. Accept Terms of Service

## Step 4: Set Up Data Stream

1. Select Platform: "Web"
2. Website URL: "https://shashicaterers.com"
3. Stream Name: "Shashi Caterers Website"
4. Enable "Enhanced measurement" (recommended)
5. Click "Create stream"

## Step 5: Get Your Measurement ID

After creating the stream, you'll see your **Measurement ID** (format: G-XXXXXXXXXX)

**Copy this ID!** You'll need it for the next step.

## Step 6: Add GA4 to Your Website

### Option A: Add to index.html (Recommended)

Open `index.html` and add this code in the `<head>` section, right after the opening `<head>` tag:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  
  gtag('config', 'G-XXXXXXXXXX', {
    'cookie_flags': 'SameSite=None;Secure',
    'anonymize_ip': true
  });
</script>
```

**Replace `G-XXXXXXXXXX` with your actual Measurement ID!**

### Option B: Using Google Tag Manager (Advanced)

If you want more control and flexibility:

1. Go to https://tagmanager.google.com/
2. Create a new account for "Shashi Caterers"
3. Create a web container
4. Get the GTM code snippet
5. Add it to your index.html

Then add GA4 through GTM interface.

## Step 7: Set Up Important Events

### Event 1: Contact Form Submission
```javascript
gtag('event', 'contact_form_submit', {
  'event_category': 'engagement',
  'event_label': 'Contact Form'
});
```

### Event 2: Phone Click
```javascript
gtag('event', 'phone_click', {
  'event_category': 'engagement',
  'event_label': 'Phone Number Click'
});
```

### Event 3: WhatsApp Click
```javascript
gtag('event', 'whatsapp_click', {
  'event_category': 'engagement',
  'event_label': 'WhatsApp Button'
});
```

### Event 4: Package View
```javascript
gtag('event', 'view_package', {
  'event_category': 'engagement',
  'event_label': 'Package Name',
  'value': 'package_id'
});
```

## Step 8: Set Up Conversions

In Google Analytics:

1. Go to Admin > Data display > Events
2. Mark important events as conversions:
   - contact_form_submit
   - phone_click
   - whatsapp_click

## Step 9: Create Custom Dimensions

1. Go to Admin > Data display > Custom definitions
2. Create custom dimensions:
   - User Type (New/Returning)
   - Traffic Source Category
   - Device Category

## Step 10: Set Up Goals & Audiences

### Goal 1: Contact Form Completions
- Conversion event: contact_form_submit
- Value: Assign a value (e.g., ₹5000)

### Goal 2: Phone Calls
- Conversion event: phone_click
- Value: ₹3000

### Audience 1: Wedding Planners
- Users who viewed packages page
- Time on page > 2 minutes

### Audience 2: Corporate Clients
- Users who visited from business hours
- Viewed corporate catering pages

## Step 11: Verify Installation

1. Go to GA4 dashboard
2. Click "Reports" > "Realtime"
3. Open your website in a new tab
4. Check if you see your visit in Realtime report
5. Wait 24-48 hours for data to populate

## Step 12: Create Dashboard

### Key Metrics to Track:
- Total Users
- New Users
- Sessions
- Bounce Rate
- Average Session Duration
- Conversion Rate
- Top Pages
- Traffic Sources
- Geographic Location
- Device Category

## Recommended Reports to Create

### Report 1: Marketing Overview
- Users by Source/Medium
- Conversions by Channel
- ROI by Campaign

### Report 2: Customer Behavior
- User Flow
- Page Navigation
- Exit Pages
- Time on Site

### Report 3: Conversion Funnel
- Homepage → Menu → Packages → Contact
- Track drop-off at each stage

## Privacy & GDPR Compliance

Add a cookie consent banner:

```html
<div id="cookie-banner" style="display:none; position:fixed; bottom:0; width:100%; background:#000; color:#fff; padding:20px; z-index:9999;">
  <p>We use cookies to improve your experience. By continuing to visit this site you agree to our use of cookies.</p>
  <button onclick="acceptCookies()">Accept</button>
</div>

<script>
function acceptCookies() {
  document.getElementById('cookie-banner').style.display = 'none';
  localStorage.setItem('cookieConsent', 'true');
}

if (!localStorage.getItem('cookieConsent')) {
  document.getElementById('cookie-banner').style.display = 'block';
}
</script>
```

## Integration with Search Console

1. In GA4, go to Admin > Property > Product Links
2. Click "Link Search Console"
3. Select your Search Console property
4. Confirm linking

This will show search queries in GA4!

## Monthly Reports to Generate

1. **Traffic Report** - Total visitors, sources, pages
2. **Conversion Report** - Contact forms, calls, WhatsApp clicks
3. **User Behavior** - Most viewed pages, time on site
4. **Mobile vs Desktop** - Performance comparison
5. **Geographic Report** - Where visitors are from

## Important Notes

- Data appears with 24-48 hour delay
- Realtime shows immediate data
- Keep Measurement ID confidential
- Enable IP anonymization for privacy
- Set up weekly/monthly email reports
- Create custom alerts for traffic drops

## Useful Links

- GA4 Dashboard: https://analytics.google.com/
- GA4 Documentation: https://support.google.com/analytics/
- GA4 Academy: https://analytics.google.com/analytics/academy/

---

**After Setup:** Check `SEO-CHECKLIST.md` and mark "Add Google Analytics 4" as complete!

**Questions?** Email: shashi.caterers.shirva@gmail.com
