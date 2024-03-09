document.addEventListener("DOMContentLoaded", function () {
    showHomePage();
});

function showHomePage() {
    showPage("home-page");
    // Add logic to fetch and display featured job listings
}

function showJobListingsPage() {
    showPage("job-listings-page");
    // Add logic to fetch and display job listings
}

function showJobDetailPage() {
    showPage("job-detail-page");
    // Add logic to fetch and display detailed job information
}

function showEmployerDashboard() {
    showPage("employer-dashboard");
    // Add logic for employer dashboard features
}

function showCandidateDashboard() {
    showPage("candidate-dashboard");
    // Add logic for candidate dashboard features
}

function showJobApplicationPage() {
    showPage("job-application-page");
    // Add logic for job application form and resume upload
}

function showSearchPage() {
    showPage("search-page");
    // Add logic for job search functionality
}

function showNotificationsPage() {
    showPage("notifications-page");
    // Add logic to display email notifications
}

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });

    document.getElementById(pageId).style.display = 'block';
}

function searchJobs() {
    const searchInput = document.getElementById("search-input").value;
    // Add logic to fetch and display search results based on the searchInput
}

// Add more JavaScript functions as needed for additional features
