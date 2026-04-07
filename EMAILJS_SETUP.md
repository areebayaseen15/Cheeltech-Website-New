# EmailJS Setup Instructions

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for an account
2. Verify your email address

## Step 2: Add Email Service
1. Login to your EmailJS dashboard
2. Click "Email Services" → "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your email account
5. Copy the **Service ID** (looks like: `service_xxxxxxx`)

## Step 3: Create Email Template
1. Go to "Email Templates" → "Create New Template"
2. Design your email template with these variables:
   - `{{name}}` - Sender's name
   - `{{email}}` - Sender's email
   - `{{subject}}` - Website link
   - `{{message}}` - Message content
3. Save the template
4. Copy the **Template ID** (looks like: `template_xxxxxxx`)

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key**

## Step 5: Configure Environment Variables
Open `.env.local` file in your project root and replace the placeholder values:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_actual_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## Step 6: Restart Development Server
```bash
# Stop your dev server if running (Ctrl+C)
# Then restart
npm run dev
```

## Done! 🎉
Your contact form should now send emails via EmailJS!

## Testing
1. Fill out the contact form
2. Click "Send Message"
3. You should see a success message
4. Check your email inbox for the submitted message
