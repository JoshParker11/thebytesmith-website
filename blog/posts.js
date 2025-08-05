/**
 * Blog Posts Data
 * 
 * Instructions for adding new posts:
 * 1. Copy blog/template.html to blog/posts/YYYY-MM-DD-post-title.html
 * 2. Replace placeholders in the template with your content
 * 3. Add a new post object to this array
 * 4. Ensure the filename matches your created HTML file
 * 
 * Post object structure:
 * {
 *   id: "unique-slug-for-post",
 *   title: "Your Post Title",
 *   date: "YYYY-MM-DD",
 *   category: "Project" | "Road to $1" | "Technical" | "Learning",
 *   excerpt: "Brief description for preview cards",
 *   tags: ["tag1", "tag2", "tag3"],
 *   filename: "YYYY-MM-DD-post-title.html"
 * }
 */

const blogPosts = [
    {
        id: "distributed-task-queue",
        title: "Building a Distributed Task Queue System",
        date: "2025-01-20",
        category: "Project",
        excerpt: "Building a fault-tolerant task queue using Redis and Node.js. Exploring different patterns for handling job retries and dead letter queues.",
        tags: ["Node.js", "Redis", "Docker", "Architecture"],
        filename: "2025-7-25-test.html"
    },
    {
        id: "week-3-building-saas-mvp",
        title: "Week 3: Building My First SaaS MVP",
        date: "2025-01-18",
        category: "Road to $1",
        excerpt: "This week I'm launching a simple URL shortener with analytics. Goal is to validate the market and see if I can get my first paying customer.",
        tags: ["SaaS", "MVP", "Analytics", "Entrepreneurship"],
        filename: "2024-01-18-week-3-building-saas-mvp.html"
    },
    {
        id: "react-server-components",
        title: "Understanding React Server Components",
        date: "2025-01-16",
        category: "Technical",
        excerpt: "A deep dive into React's new Server Components architecture. How they work, when to use them, and what they mean for the future of React.",
        tags: ["React", "SSR", "Performance", "JavaScript"],
        filename: "react-server-components.html"
    },
    {
        id: "postgresql-optimization",
        title: "PostgreSQL Query Optimization Techniques",
        date: "2025-01-12",
        category: "Technical",
        excerpt: "Practical tips for optimizing slow PostgreSQL queries. Covering indexing strategies, query planning, and performance monitoring.",
        tags: ["PostgreSQL", "Database", "Performance", "SQL"],
        filename: "postgresql-optimization.html"
    },
    {
        id: "system-design-mental-models",
        title: "Building Mental Models for System Design",
        date: "2025-01-14",
        category: "Learning",
        excerpt: "Collection of mental frameworks I use when approaching system design problems. From CAP theorem to load balancing patterns.",
        tags: ["SystemDesign", "Architecture", "Patterns", "Learning"],
        filename: "system-design-mental-models.html"
    },
    {
        id: "distributed-systems-notes",
        title: "Notes on Distributed Systems",
        date: "2025-01-10",
        category: "Learning",
        excerpt: "Working through \"Designing Data-Intensive Applications\". Key insights on consistency, partitioning, and replication strategies.",
        tags: ["DistributedSystems", "Books", "Notes", "Architecture"],
        filename: "distributed-systems-notes.html"
    },
    {
        id: "week-2-market-research",
        title: "Week 2: Market Research Deep Dive",
        date: "2025-01-11",
        category: "Road to $1",
        excerpt: "Spent this week analyzing successful micro-SaaS businesses. Found some interesting patterns in pricing and customer acquisition.",
        tags: ["Research", "Business", "Strategy", "SaaS"],
        filename: "week-2-market-research.html"
    }
];

// Helper functions for working with blog posts
const BlogPostHelpers = {
    /**
     * Get all posts for a specific category
     * @param {string} category - The category to filter by
     * @returns {Array} Filtered posts
     */
    getPostsByCategory: function(category) {
        return blogPosts.filter(post => post.category === category);
    },

    /**
     * Get the most recent posts
     * @param {number} limit - Number of posts to return
     * @returns {Array} Most recent posts
     */
    getRecentPosts: function(limit = 5) {
        return blogPosts
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, limit);
    },

    /**
     * Get all unique categories
     * @returns {Array} Array of category names
     */
    getCategories: function() {
        return [...new Set(blogPosts.map(post => post.category))];
    },

    /**
     * Get all unique tags
     * @returns {Array} Array of tag names
     */
    getAllTags: function() {
        const allTags = blogPosts.flatMap(post => post.tags);
        return [...new Set(allTags)];
    },

    /**
     * Search posts by title, excerpt, or tags
     * @param {string} query - Search query
     * @returns {Array} Matching posts
     */
    searchPosts: function(query) {
        const lowerQuery = query.toLowerCase();
        return blogPosts.filter(post => 
            post.title.toLowerCase().includes(lowerQuery) ||
            post.excerpt.toLowerCase().includes(lowerQuery) ||
            post.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
        );
    }
};