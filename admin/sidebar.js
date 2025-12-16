document.querySelector('#sidebarContainer').innerHTML = `
<aside class="vh-100 p-3">
    <h5 class="fw-bold mb-4 text-primary">
        <i class="bi bi-speedometer2 me-2"></i>Admin Panel
    </h5>

    <ul class="nav nav-pills flex-column gap-1 shadow-sm border-0">

        <!-- Dashboard -->
        <li class="nav-item">
            <a href="dashboard.html" class="nav-link active">
                <i class="bi bi-grid me-2"></i> Dashboard
            </a>
        </li>

        <!-- Bookings -->
        <li class="nav-item">
            <a href="bookings.html" class="nav-link text-dark">
                <i class="bi bi-calendar-check me-2"></i> Bookings
            </a>
        </li>

        <!-- Customers -->
        <li class="nav-item">
            <a href="customers.html" class="nav-link text-dark">
                <i class="bi bi-people me-2"></i> Customers
            </a>
        </li>

        <!-- Services -->
        <li class="nav-item">
            <a href="services.html" class="nav-link text-dark">
                <i class="bi bi-flower1 me-2"></i> Services
            </a>
        </li>

        <!-- Therapists -->
        <li class="nav-item">
            <a href="therapists.html" class="nav-link text-dark">
                <i class="bi bi-person-badge me-2"></i> Therapists
            </a>
        </li>

        <!-- Payments (optional / future scope) -->
        <li class="nav-item">
            <a href="payments.html" class="nav-link text-dark">
                <i class="bi bi-credit-card me-2"></i> Payments
            </a>
        </li>

        <!-- Reports -->
        <li class="nav-item">
            <a href="reports.html" class="nav-link text-dark">
                <i class="bi bi-bar-chart-line me-2"></i> Reports
            </a>
        </li>

        <!-- Audit Logs (IMPORTANT for 2.3) -->
        <li class="nav-item">
            <a href="audit-logs.html" class="nav-link text-dark">
                <i class="bi bi-journal-text me-2"></i> Audit Logs
            </a>
        </li>

        <li class="nav-item mt-3">
            <hr>
        </li>

        <!-- Settings -->
        <li class="nav-item">
            <a href="settings.html" class="nav-link text-dark">
                <i class="bi bi-gear me-2"></i> Settings
            </a>
        </li>

        <!-- Logout -->
        <li class="nav-item">
            <a href="logout.php" class="nav-link text-danger">
                <i class="bi bi-box-arrow-right me-2"></i> Logout
            </a>
        </li>

    </ul>
</aside>
`;


// Auto-active sidebar link based on current page
const currentPage = window.location.pathname.split('/').pop();

document.querySelectorAll('#sidebarContainer .nav-link').forEach(link => {
    const linkPage = link.getAttribute('href');

    if (linkPage === currentPage) {
        link.classList.add('active');
        link.classList.remove('text-dark');
    } else {
        link.classList.remove('active');
    }
});
