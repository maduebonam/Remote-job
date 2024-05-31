const jobs = [
    "1. Develop in-demand skills: Focus on acquiring skills that are in high demand globally, such as software development, digital marketing, and data analysis.",
    "2. Build a strong online presence: Create a professional online profile, including a Linkedln account and a personal website or blog.",
    "3. Learn English: As English is the primary language used international remote work , improving your English skills will increase your chances of landing a remote job.",
    "4. Utilize remote job boards: Websites like (link unavailable), FlexJobs, and We Work Remotely offer a range of remote job opportunities.",
    "5. Network and make connections: Attend online events, join remote work communities, and connect with professionals in your field.",
    "6. Be flexible: Be open to different time zones, work schedules, and cultural differences.",
    "7. Consider freelancing: Freelancing platforms like Upwork, Fiverr, and Freelancer offer opportunities to work on various projects."
]

const usedIndexes = new Set()
const jobElement = document.getElementById("jobs")

function getRemoteJob() {

    if (usedIndexes.size >= jobs.length) {
        usedIndexes.clear()
    }

    while (true) {
        const randomIdx = Math.floor(Math.random() * jobs.length)

        if (usedIndexes.has(randomIdx)) continue 

        const job = jobs[randomIdx]
        jobElement.innerHTML = job;
        usedIndexes.add(randomIdx)
        break
    }
}
