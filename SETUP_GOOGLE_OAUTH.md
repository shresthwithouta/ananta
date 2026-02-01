# 🔧 Quick Fix: Google OAuth Not Working

## ⚠️ Problem
Your Google OAuth credentials are still placeholders:
```
GOOGLE_CLIENT_ID=your-google-client-id-here
GOOGLE_CLIENT_SECRET=your-google-client-secret-here
```

## ✅ Solution: Get Real Google OAuth Credentials

### Step 1: Go to Google Cloud Console
**URL:** https://console.cloud.google.com/

### Step 2: Create a Project (if you don't have one)
1. Click the project dropdown at the top
2. Click "New Project"
3. Name it: "Ananta" (or whatever you like)
4. Click "Create"

### Step 3: Enable Google+ API
1. Go to: **APIs & Services** > **Library**
2. Search for "Google+ API"
3. Click it and press **Enable**

### Step 4: Create OAuth Credentials
1. Go to: **APIs & Services** > **Credentials**
2. Click **"Create Credentials"** > **"OAuth client ID"**

3. **If it asks to configure consent screen:**
   - User Type: **External**
   - App name: **Ananta**
   - User support email: **Your email**
   - Developer contact: **Your email**
   - Click **Save and Continue** (skip optional fields)
   - Click **Save and Continue** again
   - Click **Back to Dashboard**

4. **Now create the OAuth client:**
   - Go back to **Credentials**
   - Click **"Create Credentials"** > **"OAuth client ID"**
   - Application type: **Web application**
   - Name: **Ananta Web Client**
   
   - **Authorized JavaScript origins:**
     ```
     http://localhost:3000
     ```
   
   - **Authorized redirect URIs:**
     ```
     http://localhost:3000/api/auth/callback/google
     ```
   
   - Click **Create**

5. **Copy your credentials:**
   - You'll see a popup with Client ID and Client Secret
   - **COPY BOTH** (you'll paste them in the next step)

### Step 5: Update .env.local

Open: `c:\Users\shres\Desktop\ananta\.env.local`

Replace lines 13-14 with your actual credentials:
```bash
GOOGLE_CLIENT_ID=paste-your-actual-client-id-here
GOOGLE_CLIENT_SECRET=paste-your-actual-client-secret-here
```

**Example (yours will be different):**
```bash
GOOGLE_CLIENT_ID=123456789-abcdefghijklmnop.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-AbCdEfGhIjKlMnOpQrStUvWxYz
```

### Step 6: Restart Dev Server

In your terminal:
1. Press `Ctrl + C` to stop the server
2. Run: `npm run dev`
3. Go to: http://localhost:3000/login
4. Click the Google button - **should work now!** ✅

---

## 🧪 Test It

1. Visit: http://localhost:3000/login
2. Click **"Continue with Google"**
3. You should be redirected to Google's login page
4. Sign in with your Google account
5. Grant permissions
6. You'll be redirected back to your app (homepage)
7. You should be logged in! 🎉

---

## ❓ Troubleshooting

**"Invalid Client" error:**
- Double-check your Client ID and Secret in `.env.local`
- Make sure there are no extra spaces or quotes

**"Redirect URI mismatch" error:**
- Make sure you added exactly: `http://localhost:3000/api/auth/callback/google`
- Check for typos in Google Console

**Button does nothing:**
- Check browser console (F12) for errors
- Make sure dev server is running
- Verify `.env.local` has the correct credentials

**Still not working?**
- Clear browser cookies
- Try in incognito mode
- Check terminal for errors

---

## 🚀 Once It's Working

Your Google OAuth should:
1. Redirect to Google login
2. Create user in MongoDB with:
   - `role: "USER"` ✅
   - `emailVerified: true` ✅
   - `accountStatus: "ACTIVE"` ✅
   - `provider: "google"` ✅
3. Create secure JWT session (30 days)
4. Redirect back to homepage logged in

That's it! Get your credentials and you're ready to go! 🎉
