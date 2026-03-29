// ==========================================
// SINGULAR - Universe Expansion Posts
// Daily updates to the Singular universe
// ==========================================

const universePosts = [
    {
        date: "2026-03-30",
        title: "The Forge Incident",
        category: "HISTORY",
        excerpt: "Six years before Singular begins, a catastrophic explosion at a Genesis Corp facility known as The Forge killed 200 workers. Official reports called it an accident. Shadow Net has a different theory."
    },
    {
        date: "2026-03-29",
        title: "How Syn Works",
        category: "TECH",
        excerpt: "Allen Wu's symbiotic implant isn't just a data interface—it rewrites portions of his nervous system, creating permanent neural pathways that can never be fully removed."
    },
    {
        date: "2026-03-28",
        title: "The Three Spires of Macau",
        category: "LORE",
        excerpt: "Genesis Corp's Macau headquarters consists of three towers: Genesis Alpha (public operations), Genesis Beta (R&D), and Genesis Gamma (the facility no one talks about)."
    },
    {
        date: "2026-03-27",
        title: "Shadow Net Origins",
        category: "HISTORY",
        excerpt: "Shadow Net didn't start as a rebel group. Founded by three disillusioned Genesis Corp engineers, they initially called themselves 'The Debuggers' and just wanted accountability."
    },
    {
        date: "2026-03-26",
        title: "Macau's AR Infrastructure",
        category: "TECH",
        excerpt: "Every surface in Macau is an active display. The AR layer overlays advertising, navigation, and social credit scores onto the physical world—but only for those with implants."
    },
    {
        date: "2026-03-25",
        title: "Allen Wu's First Run",
        category: "CHARACTER",
        excerpt: "At 16, Allen made his first corporate data run—delivering encrypted medical records across the border. He earned enough to buy his mother a new hip. He never told her how."
    }
];

// Today's post (simulating daily expansion)
const todayPost = {
    date: new Date().toISOString().split('T')[0],
    title: "The Resistance's Communication Network",
    category: "SHADOW NET",
    excerpt: "How do you coordinate a rebellion in a city where every communication is monitored? Shadow Net uses dead drops, ultrasonic bursts, and a protocol called 'Static' that routes messages through corrupted AR displays."
};

function formatDate(dateStr) {
    const date = new Date(dateStr);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options).toUpperCase();
}

function getDateBasedIndex() {
    // Use the day of year to cycle through posts
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    return dayOfYear;
}

function loadPosts() {
    const container = document.getElementById('posts-container');
    if (!container) return;

    // Show today's featured post first
    const featuredPost = `
        <div class="post-card" style="grid-column: 1 / -1; border-color: var(--neon-magenta);">
            <div class="post-date">${formatDate(todayPost.date)} — FEATURED TODAY</div>
            <div class="post-title">${todayPost.title}</div>
            <div class="post-excerpt">${todayPost.excerpt}</div>
            <span class="post-tag">${todayPost.category}</span>
        </div>
    `;

    // Show other posts
    let postsHtml = featuredPost;
    
    // Rotate posts based on day
    const dayIndex = getDateBasedIndex();
    
    universePosts.forEach((post, index) => {
        const adjustedIndex = (index + dayIndex) % universePosts.length;
        const p = universePosts[adjustedIndex];
        
        postsHtml += `
            <div class="post-card" style="animation-delay: ${index * 0.1}s;">
                <div class="post-date">${formatDate(p.date)}</div>
                <div class="post-title">${p.title}</div>
                <div class="post-excerpt">${p.excerpt}</div>
                <span class="post-tag">${p.category}</span>
            </div>
        `;
    });

    container.innerHTML = postsHtml;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', loadPosts);

// Update date display
document.addEventListener('DOMContentLoaded', () => {
    const dateEl = document.createElement('div');
    dateEl.id = 'current-date';
    dateEl.textContent = new Date().toISOString().split('T')[0].replace(/-/g, '/');
    const universeSection = document.querySelector('#universe .section-title');
    if (universeSection) {
        universeSection.parentNode.insertBefore(dateEl, universeSection.nextSibling);
    }
});
