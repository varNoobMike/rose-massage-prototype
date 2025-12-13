document.querySelector('#navbarContainer').innerHTML = `
<nav class="navbar navbar-white bg-white shadow-sm border-0 py-3">
    <div class="container">
        <a class="navbar-brand text-primary fs-3" href="index.html">Rose Massage</a>

        <!-- Offcanvas trigger for small screens -->
        <button class="btn btn-outline-primary d-lg-none" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar">
            <i class="bi bi-list"></i>
        </button>

        <!-- Navbar links for large screens -->
        <div class="d-none d-lg-flex">
            <ul class="navbar-nav flex-row align-items-center gap-3">
                <li class="nav-item me-3"><a class="nav-link active" href="index.html">Home</a></li>
                <li class="nav-item me-3"><a class="nav-link" href="services.html">Services</a></li>
                <li class="nav-item me-3"><a class="nav-link" href="about.html">About</a></li>
                <li class="nav-item me-3"><a class="nav-link" href="contact.html">Contact</a></li>
                <li class="nav-item me-3"><a class="nav-link" href="my-bookings.html">My Bookings</a></li>

                <!-- Profile dropdown -->
                <li class="nav-item dropdown position-relative">
                    <a class="nav-link dropdown-toggle p-0" href="#" role="button"
                       data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="../images/dummy-profile-pic-1.webp" alt="Profile"
                             class="rounded-circle border" width="40" height="40">
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end shadow position-absolute top-100 right-0">
                        <li>
                            <a class="dropdown-item" href="account.html">
                                <i class="bi bi-person me-2"></i> View Account
                            </a>
                        </li>
                        <li><hr class="dropdown-divider"></li>
                        <li>
                            <a class="dropdown-item text-danger" href="logout.html">
                                <i class="bi bi-box-arrow-right me-2"></i> Logout
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

        <!-- Offcanvas menu -->
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title text-primary">Rose Massage</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
            </div>
            <div class="offcanvas-body">

                <!-- Profile for mobile offcanvas -->
                <div class="d-flex align-items-center mb-3 border-bottom pb-2">
                    <img src="../images/dummy-profile-pic-1.webp" alt="Profile"
                         class="rounded-circle border me-2" width="50" height="50">
                    <div>
                        <a href="account.html" class="d-block text-decoration-none text-dark fw-semibold">
                            View Account
                        </a>
                        <a href="logout.html" class="d-block text-danger small mt-1 text-decoration-none">
                            Logout
                        </a>
                    </div>
                </div>

                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link active" href="index.html">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="services.html">Services</a></li>
                    <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
                    <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
                    <li class="nav-item"><a class="nav-link" href="my-bookings.html">My Bookings</a></li>
                </ul>
            </div>
        </div>
    </div>
</nav>
`;
