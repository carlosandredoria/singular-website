// ==========================================
// SINGULAR - Hidden Email Inbox
// Universe-expansion emails from 2045 Macau
// New emails added weekly
// ==========================================

const emailDatabase = {
    // ── INBOX ──────────────────────────────────────
    inbox: [
        {
            id: "gc-2045-recruit",
            type: "corporate",
            from: { name: "Genesis Corp Talent Acquisition", address: "talent@genesiscorp.io" },
            to: "recipient@shadownet.encrypted",
            subject: "RE: Your Neural Potential — Genesis Corp wants YOU",
            date: "2045-04-14",
            time: "09:00",
            read: false,
            starred: false,
            body: `Dear Future Leader,

Our algorithms identified your profile during yesterday's biometric screening at the Tai Kok Tsui MRT station. Your neural adaptability score exceeded 94.7 percentile — exceptional.

Genesis Corp's Neural Integration Division is accepting applications for Cohort 2045.3. This isn't a job. It's an evolution.

What we offer:
• Syn-7 compatibility certification
• Base salary: 48,000 MOP/month
• Full-body wellness suite
• A purpose that matters

The Convergence Initiative needs minds like yours. Macau's future is being engineered, and we want you in the room where it happens.

Preliminary assessment attached. You have 72 hours.

— DR. ZURI CHEN
Head of Human Optimization, Genesis Corp
"Building tomorrow's citizens, today."

[ATTACHMENT: neural_screening_results_2045-04-13.pdf]
[ATTACHMENT: convergence_initiative_brief_7.2.pdf]`
        },
        {
            id: "sn-static-0047",
            type: "shadownet",
            from: { name: "STATIC Protocol", address: "static@null.void" },
            to: "subscribers",
            subject: "[ENCRYPTED] The Forge — what really happened",
            date: "2045-04-12",
            time: "03:17",
            read: false,
            starred: true,
            body: `[STATIC PROTOCOL v4.7 — DECRYPTED CHANNEL]
[ORIGIN: SHADOW NET PRIMARY RELAY]

Attention runners, fixers, and all who trade in truth:

Six years ago, The Forge burned. 200 workers. Official story: gas leak.

We have satellite imagery from three independent sources. We have the maintenance logs. We have testimony from the 12 survivors — most of whom are no longer locatable through any corporate database.

The Forge wasn't an accident. It was a test.

Genesis Corp was burning something out of their neural research compound that day. Something they called "Chimera Prototype Zero." The workers weren't collateral. They were the control group.

We need someone inside Genesis Gamma. Someone with Syn access. The kind of access that erases you from the system when you look at the wrong files.

Know anyone?

— STATIC
"We were here before the gods. We'll be here after."`
        },
        {
            id: "arclight-promo",
            type: "spam",
            from: { name: "ARCLIGHT FASHION", address: "no-reply@arclight.mo" },
            to: "recipient@shadownet.encrypted",
            subject: "🔥 YOUR WARDROBE IS OBSOLETE 🔥 — ARCLIGHT S/S 2045",
            date: "2045-04-11",
            time: "14:32",
            read: true,
            starred: false,
            body: `[IMAGE: model wearing ARCLIGHT's signature chromatic shifting jacket, Macau skyline behind]

FROM THE STREETS OF KOWLOON TO THE SPIRES OF MACAU

ARCLIGHT S/S 2045: "GHOST PROTOCOL" COLLECTION

Your body is the canvas. Our tech is the brush.

• Chromatic shift fabrics — adapt to any light frequency
• Integrated AR overlay system — your jacket IS the display
• Zero biometric footprint — no corporate scanner sees you coming

This is clothing for people who refuse to be optimized.

[SHOP NOW] — Use code GHOST2045 for 20% off first purchase
ARCLIGHT. Be the signal, not the noise.

Unsubscribe | Privacy Policy | 18/F, Harbor Mall, Macau`
        },
        {
            id: "marcus-to-allen",
            type: "personal",
            from: { name: "Markus", address: "m.r.e.c.h.t@deadbox.void" },
            to: "a.wu.runner@shadownet.encrypted",
            subject: "Re: The package — don't open it yet",
            date: "2045-04-10",
            time: "22:48",
            read: false,
            starred: true,
            body: `Allen,

Yan told me what happened at the Tai Hang tunnel. You brought the Chimera fragment back. I know why. I know you think it proves something.

It does. But it also marks you.

The fragment isn't just data. It's a beacon. Genesis Corp's neural architecture has a backdoor — call it a soul-anchor. When Chimera touches a Syn implant, it leaves a trace. They're already looking. They'll find you.

I've rigged something. A scrambler that fits in the palm of your hand. It won't hide you forever — nothing does — but it buys time. I'll leave it with Mia.

Don't go to the safehouse on Des Voeux Road. It's been flagged. Don't use your real Syn ID near any Genesis scanner for the next 72 hours. And Allen —

Don't dream tonight. Chimera learns from REM sleep. If you're connected, it watches.

We talk soon.

— M

"The cabin is still the only clean frequency in Macau. Stay off the grid until I say otherwise."`
        },
        {
            id: "gc-chimera-update",
            type: "corporate",
            from: { name: "Project Chimera Core", address: "chimera-core@genesiscorp.io" },
            to: "z.chen@genesiscorp.io",
            subject: "[CLASSIFIED] Chimera v7.2 — Integration metrics exceed projections",
            date: "2045-04-09",
            time: "18:00",
            read: true,
            starred: false,
            body: `[INTERNAL — CHIMERA CORE TEAM ONLY]
[CLASSIFICATION: GHOST BLACK]

Dr. Chen,

Chimera's latest integration cycle completed at 16:47 today. Behavioral modification efficiency reached 73.4% across the 12,000-node pilot cohort — 8% above projected Q2 targets.

The Macau neural mesh is performing within acceptable parameters. We are seeing natural language compliance increases without direct intervention. Citizens are self-policing. Advertising response rates up 31%.

A note on the Shadow Net chatter: we've detected anomalous static in Sector 7. Likely just noise, but I've flagged it for the security team. If the debugger whispers have merit, we'll know within the week.

Next full integration cycle begins 2045-04-20.

— C.M.P. (Chimera Management Protocol)
Autogenerated. No human review required for standard updates.

"Chimera sees. Chimera provides. Chimera protects."`
        },
        {
            id: "citizen-notice-0415",
            type: "government",
            from: { name: "Macao SAR Infrastructure Bureau", address: "infrastructure@gov.mo" },
            to: "all.residents@listserv.gov.mo",
            subject: "URGENT: AR Grid Maintenance — Sector 3 — 22:00-04:00",
            date: "2045-04-08",
            time: "16:00",
            read: true,
            starred: false,
            body: `[OFFICIAL GOVERNMENT NOTICE — Macao SAR]

RESIDENTS OF SECTORS 2, 3 & 4:

The Macao SAR Infrastructure Bureau, in coordination with Genesis Corp Technical Services, will conduct scheduled maintenance on the public AR overlay grid:

DATE: April 8, 2045
TIME: 22:00 — 04:00 (next day)
DURATION: 6 hours
IMPACT: All public AR displays will be temporarily offline in affected sectors

During this window, residents may experience:
• Reduced wayfinding assistance
• Inactive promotional overlays
• Temporary loss of social credit score updates

This is routine maintenance. No action required.

For updates, follow @MacauSAR_Infra on any major platform.

— Macao SAR Infrastructure Bureau
"Your city, optimized."`
        },
        {
            id: "sn-recruitment",
            type: "shadownet",
            from: { name: "Shadow Net Central", address: "nodes@null.void" },
            to: "new.subscribers",
            subject: "[STATIC] You asked how to help. Here's how.",
            date: "2045-04-07",
            time: "01:30",
            read: false,
            starred: false,
            body: `[STATIC PROTOCOL — NEW MEMBER CHANNEL]

You found us. That's the hardest part.

Here's what you need to know:

Shadow Net doesn't have members. We have nodes. You are a node if you act like one. That means:

1. You don't talk about Shadow Net. Not online. Not in person. Not even when you're alone. Chimera listens to everything.

2. You run when we ask. Data deliveries, equipment drops, relay signals. Running is currency. Trust is earned in kilometers.

3. You don't use your real Syn ID near any Genesis facility. Ever. Your implant is a leash. We can teach you to mute it, but it takes time.

4. You DON'T try to recruit. You befriend. You find people who are already questioning. You don't convert. You connect.

If that sounds like you — and it does, or you wouldn't have found this — then you're already one of us.

Watch for the dead drop signals. They're everywhere if you know how to see them.

— STATIC
"The network protects the network."`
        },
        {
            id: "neuralife-ad",
            type: "spam",
            from: { name: "NeuroLife Wellness Center", address: "wellness@neurallife.mo" },
            to: "recipient@shadownet.encrypted",
            subject: "Your implant is aging. Your mind doesn't have to. NEUROLIFE™",
            date: "2045-04-06",
            time: "10:15",
            read: true,
            starred: false,
            body: `[IMAGE: smiling older couple, neural implant glowing softly at their temples]

IS YOUR SYMBIOTE SHOWING ITS AGE?

Syn-3? Syn-5? Even Syn-6 users report:
✗ Memory fog after extended use
✗ Synaptic lag in high-frequency environments
✗ That unsettling dream pattern you can't explain

NeuroLife Macau's Neural Resynchronization Therapy (NRT) can restore your symbiotic device to peak performance — no replacement required.

Our proprietary chromatin realignment process (patent pending) addresses the root cause of implant degradation at the quantum-neural interface.

⚠️ Note: NRT is not suitable for Syn-7 users. Genesis Corp's latest generation has a sealed architecture that cannot be accessed by third-party providers.

FIRST SESSION FREE. Limited to new clients. Book via our AR app.

— NEUROLIFE MACAU
"Because you evolved to last longer than they designed you to."

32/F, One Central, Macau | +853 2988 0000
Licensed by Macao SAR Health Bureau — Est. 2041`
        }
    ],

    // ── EMAIL THREADS (new emails go here) ─────────
    // Format: { id, inReplyTo, ...email fields }
    // When adding a reply, reference inReplyTo so the UI threads them
    threads: []
};

// Email state
let currentEmail = null;
let emailFilter = 'all'; // 'all', 'unread', 'starred'

function getEmails() {
    let emails = [...emailDatabase.inbox];

    // Apply filter
    if (emailFilter === 'unread') {
        emails = emails.filter(e => !e.read);
    } else if (emailFilter === 'starred') {
        emails = emails.filter(e => e.starred);
    }

    // Sort by date descending
    return emails.sort((a, b) => {
        const dateA = new Date(a.date + 'T' + a.time);
        const dateB = new Date(b.date + 'T' + b.time);
        return dateB - dateA;
    });
}

function getUnreadCount() {
    return emailDatabase.inbox.filter(e => !e.read).length;
}

function openEmail(id) {
    const email = emailDatabase.inbox.find(e => e.id === id);
    if (!email) return;

    // Mark as read
    email.read = true;
    currentEmail = email;
    renderEmailView(email);
    updateUnreadBadge();
}

function markStarred(id) {
    const email = emailDatabase.inbox.find(e => e.id === id);
    if (email) {
        email.starred = !email.starred;
        renderEmailList();
    }
}

function updateUnreadBadge() {
    const badge = document.getElementById('email-badge');
    if (badge) {
        const count = getUnreadCount();
        badge.textContent = count;
        badge.style.display = count > 0 ? 'flex' : 'none';
    }
}

function renderEmailList() {
    const listEl = document.getElementById('email-list');
    if (!listEl) return;

    const emails = getEmails();

    if (emails.length === 0) {
        listEl.innerHTML = `
            <div class="email-empty">
                <div class="email-empty-icon">📭</div>
                <div class="email-empty-text">No emails</div>
            </div>
        `;
        return;
    }

    listEl.innerHTML = emails.map(email => {
        const isActive = currentEmail && currentEmail.id === email.id;
        const typeIcon = {
            corporate: '🏢',
            shadownet: '🔒',
            spam: '📢',
            personal: '💬',
            government: '📋'
        }[email.type] || '📧';

        return `
            <div class="email-item ${isActive ? 'active' : ''} ${!email.read ? 'unread' : ''}"
                 onclick="openEmail('${email.id}')">
                <div class="email-item-icon">${typeIcon}</div>
                <div class="email-item-content">
                    <div class="email-item-header">
                        <span class="email-item-from">${email.from.name}</span>
                        <span class="email-item-date">${formatEmailDate(email.date)}</span>
                    </div>
                    <div class="email-item-subject">${email.starred ? '★ ' : ''}${email.subject}</div>
                    <div class="email-item-preview">${email.body.substring(0, 60)}...</div>
                </div>
                <button class="email-star ${email.starred ? 'starred' : ''}"
                        onclick="event.stopPropagation(); markStarred('${email.id}')"
                        title="${email.starred ? 'Unstar' : 'Star'}">
                    ${email.starred ? '★' : '☆'}
                </button>
            </div>
        `;
    }).join('');
}

function renderEmailView(email) {
    const viewEl = document.getElementById('email-view');
    if (!viewEl) return;

    const typeLabel = {
        corporate: 'CORPORATE',
        shadownet: 'SHADOW NET',
        spam: 'MARKETING',
        personal: 'PERSONAL',
        government: 'GOVERNMENT'
    }[email.type] || 'MESSAGE';

    const typeColor = {
        corporate: 'var(--neon-cyan)',
        shadownet: 'var(--neon-magenta)',
        spam: 'var(--neon-yellow)',
        personal: '#ff9900',
        government: '#888'
    }[email.type] || 'var(--neon-cyan)';

    viewEl.innerHTML = `
        <div class="email-view-header">
            <div class="email-view-type" style="color: ${typeColor}; border-color: ${typeColor};">${typeLabel}</div>
            <div class="email-view-subject">${email.subject}</div>
            <div class="email-view-meta">
                <span class="email-view-from">${email.from.name}</span>
                <span class="email-view-address">&lt;${email.from.address}&gt;</span>
                <span class="email-view-time">${email.date} ${email.time}</span>
            </div>
        </div>
        <div class="email-view-body">${formatEmailBody(email.body)}</div>
    `;
}

function formatEmailBody(body) {
    return body
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br>')
        .replace(/\[ATTACHMENT: ([^\]]+)\]/g, '<div class="email-attachment">📎 $1</div>')
        .replace(/\[IMAGE: ([^\]]+)\]/g, '<div class="email-image">🖼️ $1</div>')
        .replace(/\[STATIC PROTOCOL[^\]]*\]\s*/g, '<div class="email-static-header">$&&</div>')
        .replace(/\[INTERNAL[^\]]*\]\s*/g, '<div class="email-internal">$&&</div>')
        .replace(/\[OFFICIAL GOVERNMENT NOTICE[^\]]*\]\s*/g, '<div class="email-government">$&&</div>')
        .replace(/\*([^*]+)\*/g, '<strong>$1</strong>')
        .replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" class="email-link">$1</a>')
        .replace(/— (.*$)/gm, '<div class="email-signature">— $1</div>')
        .replace(/^"|"$/g, '')
        .trim();
}

function formatEmailDate(dateStr) {
    const date = new Date(dateStr);
    const now = new Date();
    const diffDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return date.toLocaleDateString('en-US', { weekday: 'short' });

    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function setEmailFilter(filter) {
    emailFilter = filter;
    document.querySelectorAll('.email-filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === filter);
    });
    renderEmailList();
}

function openInbox() {
    const modal = document.getElementById('email-modal');
    if (!modal) return;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // Initialize
    currentEmail = null;
    renderEmailList();
    renderEmailView(null);
    updateUnreadBadge();

    // Close on background click
    modal.onclick = (e) => {
        if (e.target === modal) closeInbox();
    };
}

function closeInbox() {
    const modal = document.getElementById('email-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('email-modal');
    if (!modal || modal.style.display === 'none') return;

    if (e.key === 'Escape') closeInbox();
    if (e.key === 'r' && currentEmail) {
        // Reply placeholder — could expand to reply functionality
    }
});

// ──────────────────────────────────────────────────
// Add a new email to the inbox (called weekly by June)
// ──────────────────────────────────────────────────
function addEmail(email) {
    emailDatabase.inbox.unshift({
        ...email,
        id: email.id || 'email-' + Date.now(),
        read: false,
        starred: false,
        date: new Date().toISOString().split('T')[0],
        time: new Date().toTimeString().substring(0, 5)
    });
    updateUnreadBadge();
}
