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
                <ul class="navbar-nav flex-row gap-3">
                    <li class="nav-item me-3"><a class="nav-link active" href="index.html">Home</a></li>
                    <li class="nav-item me-3"><a class="nav-link" href="services.html">Services</a></li>
                    <li class="nav-item me-3"><a class="nav-link" href="about.html">About</a></li>
                    <li class="nav-item me-3"><a class="nav-link" href="contact.html">Contact</a></li>
                    <li class="nav-item me-3"><a class="nav-link" href="signin.html">Signin</a></li>
                    <li class="nav-item me-3"><a class="nav-link" href="signup.html">Signup</a></li>
                    <li class="nav-item"><a class="btn btn-primary text-white" href="book.html">Book Now</a></li>
                </ul>
            </div>

            <!-- Offcanvas menu -->
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title text-primary">Rose Massage</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav">
                        <li class="nav-item"><a class="nav-link active" href="index.html">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="services.html">Services</a></li>
                        <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
                        <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
                        <li class="nav-item"><a class="nav-link" href="signin.html">Signin</a></li>
                        <li class="nav-item"><a class="nav-link" href="signup.html">Signup</a></li>
                        <li class="nav-item mt-3"><a class="btn btn-primary w-100" href="book.html">Book Now</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    
`;