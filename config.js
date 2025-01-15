require("dotenv").config(); // Load environment variables

module.exports = {
    prefix: process.env.PREFIX || ".", // Command prefix

    ownerName: process.env.OWNER_NAME || "Toxxic-Boy", // Owner name

    ownerNumber: process.env.OWNER_NUMBER || "2348165846414", // Your WhatsApp number

    mode: process.env.MODE || "public", // Bot mode: 'public' or 'private'

    region: process.env.REGION || "Nigeria", // Region

    botName: process.env.BOT_NAME || "Rias Gremory V3", // Bot name

    exifPack: process.env.EXIF_PACK || "RIAS V3 LOVES", // Sticker pack name

    exifAuthor: process.env.EXIF_AUTHOR || "Toxxic", // Author of the sticker pack

    timeZone: process.env.TIME_ZONE || "Africa/Lagos", // Time zone

    presenceStatus: process.env.PRESENCE_STATUS || "available", // Bot presence status

    autoRead: process.env.AUTO_READ === "true", // Auto-read messages (true or false)

    autoViewStatus: process.env.AUTO_VIEW_STATUS === "true", // Auto-view statuses (true or false)

    autoReact: process.env.AUTO_REACT === "true", // Auto-react (true or false)

    sessionId: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0FYcDVSL0tkSmpYZWtlZm9vSEtRTEloY1AwRGd0NHBWbW9Sc2ZrREJIST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieFNKRzBoVFZYckZBeHhqcjUyVkJPVTVqV1REZDlURGNWa3BVRWp2SzBtYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSk9jZDFaeDNzelZVNHpFVjhQRmpCUWJpbGpXNEVZUkhvc280Qzg5djI4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2bFdCYjNvUzRER0hqUkEyeHQ5UmJOdGNpYXlzb2hjSmdyNjdkaHRxb1g0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNJS3JOWnlTQlBXZWtibkoxU0JNK3crSU05YlNET28yRFkxWW1Zc3RBMG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZkYXNRQUNwV0QrRXhDTCtxMFFMZU9lQVhLUXJ1ekpKL0J5Yk9DTnliM0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0hoSEl2blBIdVRUTjdJSFVMWDNJYTBlUFJ4a0I0L0xkRHo5STJjUGtrQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRlVzUGNwaVQ0R2owZXVDTWlXSVBDM3NiZ2FyWWxSRDk3MGZPVnRBeS9HND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InkxUFN4RXo4WEh4djBuK1Iwam9GSzlRL0tkS2w1bjBjdndpL0lBQ3g1UDVzNWRxcHI5ZHJBY0F6bC9qenYzazFFMmJ3bTcwTDVSSlgvcHlPOHppU2lnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTEsImFkdlNlY3JldEtleSI6IlVnN3JETHlocVlkdnMxVHdkTU45dkhONUJ0RzVMYTgxdHpFODNDengxa2s9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTAyMTIzNTE5N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzOTFFRTRBREJCMUUxNkI4NEYxODI0Q0M2QzUzQkNBRiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM2OTAwMzI5fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiI5UEdXWDlWSiIsIm1lIjp7ImlkIjoiMjM0OTAyMTIzNTE5Nzo3MkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjM0OTUyOTgwNzUwNDk4OjcyQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSlRrNDVzQkVObjltN3dHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQ3RieTlwaFRGOVpVVjZNQXRZK0xIKyszMnQxWlI2N1ZRSXlwTkZBS1dCaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoibys0eVA2aEpMSHpETVFkM2VtN2w5cU1sRkEreGJlZkJMaXFoeFFYOElBYjU4SUQ0WWpDV3pmdDZzK3pWbVR0VnZiS2dubC92NFFHdE1rNDFqeGRIQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6ImVHNS8vY0UyNU10NnRUZnlGYk5UWW0zK2UxMWV4MFJkUk5Ed3FyaHBnV1pMNHBWZ2R3TFBIdzVMUE1ZeFozN0tYV0JtMCt1ZS9maGJkaHZuWU9EQ2d3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTAyMTIzNTE5Nzo3MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRclc4dmFZVXhmV1ZGZWpBTFdQaXgvdnQ5cmRXVWV1MVVDTXFUUlFDbGdaIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzY5MDAzMjYsImxhc3RQcm9wSGFzaCI6Im5tM0JiIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGbE8ifQ==", // Add Your Session ID here

    autoRejectEnabled: process.env.AUTO_REJECT_ENABLED || "false", // Auto-reject calls feature (true or false)
};
