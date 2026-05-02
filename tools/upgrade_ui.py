import re

with open('d:/prompt-wars/Challenge-2/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. PWA & Manifest
manifest_str = """
<link rel="manifest" href='data:application/manifest+json;utf8,{"name":"ElectIQ","short_name":"ElectIQ","display":"standalone","background_color":"#0a0e1a","theme_color":"#6366f1","icons":[{"src":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48dGV4dCB5PSI4MCIgZm9udC1zaXplPSI4MCI+8J+Xsw==</text></svg>","sizes":"192x192","type":"image/svg+xml"}]}'>
</head>
"""
html = html.replace('</head>', manifest_str)

# 2. CSS Overhaul
css_patch = """
  --bg:#050510;
  --surface:rgba(17, 24, 39, 0.6);
  --surface2:rgba(30, 41, 59, 0.7);
  --border:rgba(255, 255, 255, 0.1);
  --glass-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  --glass-blur: blur(12px);
"""
html = html.replace('--bg:#0a0e1a;', css_patch)

html = html.replace('.msg-bubble{', '.msg-bubble{backdrop-filter: var(--glass-blur);box-shadow: var(--glass-shadow);')
html = html.replace('.step-card{', '.step-card{backdrop-filter: var(--glass-blur);box-shadow: var(--glass-shadow);')
html = html.replace('.welcome-card{', '.welcome-card{backdrop-filter: var(--glass-blur);box-shadow: var(--glass-shadow);')
html = html.replace('.quiz-card{', '.quiz-card{backdrop-filter: var(--glass-blur);box-shadow: var(--glass-shadow);')
html = html.replace('.overview-card{', '.overview-card{backdrop-filter: var(--glass-blur);box-shadow: var(--glass-shadow);')

high_contrast_css = """
/* High Contrast Mode */
body.high-contrast {
  --bg: #000000;
  --surface: #000000;
  --surface2: #000000;
  --text: #ffffff;
  --text2: #eeeeee;
  --text3: #dddddd;
  --border: #ffffff;
  --blue: #00ffff;
  --blue-light: #00ffff;
  --green: #00ff00;
  --green-light: #00ff00;
  --amber: #ffff00;
  --amber-light: #ffff00;
  --accent: #ff00ff;
  --accent2: #ff00ff;
  --glass-blur: none;
  --glass-shadow: none;
}
body.high-contrast * { text-shadow: none !important; box-shadow: none !important; backdrop-filter: none !important; background-image: none !important; }
body.high-contrast .welcome-card::before { display: none; }
body.high-contrast header { background: #000; border-bottom: 1px solid #fff; }

/* Emergency Button */
.emergency-btn {
  position: fixed; bottom: 20px; right: 20px; background: #ef4444; color: white; border: none; border-radius: 50px; padding: 12px 20px; font-weight: bold; box-shadow: 0 4px 15px rgba(239, 68, 68, 0.5); cursor: pointer; z-index: 1000; transition: transform 0.2s;
}
.emergency-btn:hover { transform: scale(1.05); }

/* Certificate canvas */
#cert-canvas { display: none; }
"""
html = html.replace('</style>', high_contrast_css + '</style>')

# 3. Emergency Button & Header Buttons
header_buttons = """
      <button class="btn-ghost" onclick="toggleHighContrast()">🌓 Contrast</button>
      <button class="btn-ghost" onclick="toggleTTS()" id="tts-btn">🔇 Voice Off</button>
      <button class="btn-ghost" onclick="showTimeline()">🗺️ Timeline</button>
"""
html = html.replace('<button class="btn-ghost" onclick="showTimeline()">🗺️ Timeline</button>', header_buttons)

body_extras = """
<button class="emergency-btn" onclick="showEmergency()">🚨 Poll Emergency</button>
<canvas id="cert-canvas" width="800" height="600"></canvas>
<script>
"""
html = html.replace('<script>', body_extras, 1)

# 4. JavaScript Injections
js_patch = """
// --- Inclusivity & PWA ---
let isHighContrast = false;
function toggleHighContrast() {
  isHighContrast = !isHighContrast;
  document.body.classList.toggle('high-contrast', isHighContrast);
}

let ttsEnabled = false;
function toggleTTS() {
  ttsEnabled = !ttsEnabled;
  document.getElementById('tts-btn').textContent = ttsEnabled ? '🔊 Voice On' : '🔇 Voice Off';
  if(!ttsEnabled) window.speechSynthesis.cancel();
}

function speakText(text) {
  if(!ttsEnabled) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text.replace(/<[^>]*>?/gm, ''));
  window.speechSynthesis.speak(utterance);
}

// Override addMsg to speak bot messages
const originalAddMsg = addMsg;
addMsg = function(role, htmlStr) {
  const el = originalAddMsg(role, htmlStr);
  if(role === 'bot') speakText(htmlStr);
  return el;
};

// Emergency Mode
function showEmergency() {
  addMsg('user', '🚨 I am at the polling station and need help!');
  botReply(() => {
    addMsg('bot', '<strong>🚨 EMERGENCY PROTOCOL ACTIVE</strong><br><br>1. <strong>STAY IN LINE.</strong> If you are in line before polls close, you legally have the right to vote.<br>2. <strong>Ask for a Provisional Ballot.</strong> If they say you aren\\'t registered, demand a provisional ballot.<br>3. <strong>Report Intimidation.</strong> No one can force you to vote a certain way.<br>4. Call the Election Protection Hotline (US): 866-OUR-VOTE (866-687-8683).');
  }, 300);
}

// Certificate Generator
function generateCertificate() {
  const canvas = document.getElementById('cert-canvas');
  const ctx = canvas.getContext('2d');
  
  // Background
  const grad = ctx.createLinearGradient(0, 0, 800, 600);
  grad.addColorStop(0, '#0f172a'); grad.addColorStop(1, '#1e1b4b');
  ctx.fillStyle = grad; ctx.fillRect(0, 0, 800, 600);
  
  // Border
  ctx.strokeStyle = '#6366f1'; ctx.lineWidth = 10; ctx.strokeRect(20, 20, 760, 560);
  
  // Text
  ctx.fillStyle = '#f1f5f9'; ctx.textAlign = 'center';
  ctx.font = 'bold 50px Inter, sans-serif';
  ctx.fillText('🏆 Voter Readiness Certificate', 400, 150);
  
  ctx.font = '30px Inter, sans-serif';
  ctx.fillStyle = '#60a5fa';
  ctx.fillText('This certifies that you have completed', 400, 280);
  ctx.fillText('the ElectIQ Interactive Election Guide', 400, 330);
  
  ctx.fillStyle = '#34d399';
  ctx.font = 'bold 40px Inter, sans-serif';
  ctx.fillText('You are 100% Ready to Vote!', 400, 450);
  
  ctx.fillStyle = '#94a3b8';
  ctx.font = '20px Inter, sans-serif';
  ctx.fillText('Date: ' + new Date().toLocaleDateString(), 400, 520);
  
  const link = document.createElement('a');
  link.download = 'voter-certificate.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
}

// Override renderCompleteCard to show cert button
const originalRenderCompleteCard = renderCompleteCard;
renderCompleteCard = function() {
  originalRenderCompleteCard();
  setTimeout(() => {
    const card = document.createElement('div');
    card.className = 'complete-card';
    card.style.marginTop = '16px';
    card.innerHTML = `<h3 style="color:#fbbf24">🏆 Claim Your Certificate!</h3><p>You've earned an official Voter Readiness Certificate. Download it to share with friends!</p><button class="btn-next" style="background:var(--amber)" onclick="generateCertificate()">📥 Download Certificate</button>`;
    addElement(card);
  }, 1000);
};

// PWA Service Worker Inline
if ('serviceWorker' in navigator) {
  const swCode = `
    const CACHE_NAME = 'electiq-v2';
    self.addEventListener('install', e => e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(['/']))));
    self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
  `;
  const blob = new Blob([swCode], {type: 'application/javascript'});
  navigator.serviceWorker.register(URL.createObjectURL(blob)).catch(console.error);
}

// Magic Onboarding
function autoDetectRegion() {
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  if(tz.includes('Europe/London') || tz.includes('Europe/Belfast')) return 'UK';
  if(tz.includes('Asia/Calcutta') || tz.includes('Asia/Kolkata')) return 'India';
  if(tz.includes('America/')) return 'USA';
  return '';
}
"""

html = html.replace('// ── Boot ──', js_patch + '\n// ── Boot ──')

# Update showWelcome to pre-select timezone
magic_onboarding_js = """
      <div class="region-select-row">
        <span>🌍 Your region:</span>
        <select class="region-picker" id="region-picker" onchange="setRegion(this.value)">
          <option value="">General (all countries)</option>
          <option value="USA">🇺🇸 United States</option>
          <option value="UK">🇬🇧 United Kingdom</option>
          <option value="India">🇮🇳 India</option>
        </select>
      </div>`;
    addElement(card);
    addFloatingIcons(card);
    
    // Apply Magic Onboarding
    const detected = autoDetectRegion();
    if(detected) {
        document.getElementById('region-picker').value = detected;
        setRegion(detected);
    }
"""
html = html.replace("""    <div class="region-select-row">
      <span>🌍 Your region (optional):</span>
      <select class="region-picker" id="region-picker" onchange="setRegion(this.value)">
        <option value="">General (all countries)</option>
        <option value="USA">🇺🇸 United States</option>
        <option value="UK">🇬🇧 United Kingdom</option>
        <option value="India">🇮🇳 India</option>
      </select>
    </div>`;
  addElement(card);
  addFloatingIcons(card);""", magic_onboarding_js)

# Add custom animations to chat messages
chat_animations = """
@keyframes slideIn{from{opacity:0;transform:translateY(20px) scale(0.95)}to{opacity:1;transform:translateY(0) scale(1)}}
.msg{display:flex;gap:10px;animation:slideIn .4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards}
"""
html = html.replace('@keyframes slideIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}', chat_animations)
html = html.replace('.msg{display:flex;gap:10px;animation:slideIn .3s ease}', '')

# Enhanced background
enhanced_bg = """
body{display:flex;flex-direction:column;min-height:100vh;overflow-x:hidden; background: radial-gradient(circle at 10% 20%, rgba(30, 27, 75, 1) 0%, rgba(10, 14, 26, 1) 90%);}
"""
html = html.replace('body{display:flex;flex-direction:column;min-height:100vh;overflow-x:hidden}', enhanced_bg)

with open('d:/prompt-wars/Challenge-2/index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Applied UI Overhaul and features successfully.")
