document.querySelector('#sidebarContainer').innerHTML = `
<aside class="vh-100 p-3">
    <h5 class="fw-bold mb-4 text-primary">
        <i class="bi bi-speedometer2 me-2"></i>Admin Panel
    </h5>

    <ul class="nav nav-pills flex-column gap-1 shadow-sm border-0">

        <li class="nav-item">
            <a href="dashboard.html" class="nav-link active">
                <i class="bi bi-grid me-2"></i> Dashboard
            </a>
        </li>

        <li class="nav-item">
            <a href="users.html" class="nav-link text-dark">
                <i class="bi bi-people me-2"></i> Bookings
            </a>
        </li>

        <li class="nav-item">
            <a href="orders.html" class="nav-link text-dark">
                <i class="bi bi-bag-check me-2"></i> Customers
            </a>
        </li>

        <li class="nav-item">
            <a href="products.html" class="nav-link text-dark">
                <i class="bi bi-box-seam me-2"></i> Products
            </a>
        </li>

        <li class="nav-item">
            <a href="reports.html" class="nav-link text-dark">
                <i class="bi bi-bar-chart me-2"></i> Reports
            </a>
        </li>

        <li class="nav-item mt-3">
            <hr>
        </li>

        <li class="nav-item">
            <a href="settings.html" class="nav-link text-dark">
                <i class="bi bi-gear me-2"></i> Settings
            </a>
        </li>

        <li class="nav-item">
            <a href="logout.php" class="nav-link text-danger">
                <i class="bi bi-box-arrow-right me-2"></i> Logout
            </a>
        </li>

    </ul>
</aside>
`;
