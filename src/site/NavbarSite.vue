<script setup>
//import "../../css/style.css"
// import "../../js/jquery.js"
// import "../../js/popper.min.js"
// import "../../js/bootstrap.min.js"
// import "../../js/magnific-popup.min.js"
// import "../../js/appear.js"
// import "../../js/parallax.min.js"
// import "../../js/tilt.jquery.min.js"
// import "../../js/owl.js"
// import "../../js/wow.js"

// import "../../js/odometer.js"
// import "../../js/jquery.marquee.min.js"
// import "../../js/parallax-scroll.js"
// import "../../js/nav-tool.js"
// import "../../js/swiper.min.js"
// import "../../js/jquery-ui.js"
// import "../../js/select2.min.js"
// import "../../js/flatpickr.min.js"
// import "../../js/flatpickr.min.js"
// import "../../js/price-range.js"

// import "../../js/script.js"
</script>

<template>
    <div class="page-wrapper">
        <!-- Main Header -->
        <header class="header header_style_one">
            <div class="middle_bar">
                <div class="auto-container">
                    <div
                        class="middle_bar_inner d-flex align-items-center justify-content-center justify-content-between gap-4 flex-wrap">
                        <!-- Logo -->
                        <div class="logo">
                            <a href="index.html" class="logo_default"><img :src="('@/assets/images/logo.svg')" alt="img"></a>
                            <a href="index.html" class="logo_sticky"><img :src="('@/assets/images/sticky-logo.svg')" alt="img"></a>
                        </div>
                        <div class="mainnav d-none d-lg-block">
                            <ul class="main_menu">
                                <li class="menu-item menu-item-has-children"><a href="#">Home</a>
                                    <ul class="sub-menu">
                                        <li class="menu-item"><a href="index.html">Homepage v1</a></li>
                                        <li class="menu-item"><a href="index-2.html">Homepage v2</a></li>
                                        <li class="menu-item"><a href="index-3.html">Homepage v3</a></li>
                                        <li class="menu-item menu-item-has-children"><a href="#">Home Variation</a>
                                            <ul class="sub-menu">
                                                <li class="menu-item"><a href="index-1.html">Video Version</a></li>
                                                <li class="menu-item"><a href="index-1-1.html">Slider Version</a></li>
                                            </ul>
                                        </li>

                                    </ul>
                                </li>

                                <li class="menu-item menu-item-has-children"><a href="#">Tour</a>
                                    <ul class="sub-menu">
                                        <li class="menu-item"><a href="#">Tour Grid</a>
                                            <ul class="sub-menu">
                                                <li class="menu-item"><a href="tour-grid.html">Grid v1</a></li>
                                                <li class="menu-item"><a href="tour-grid-2.html">Grid v2</a></li>
                                            </ul>
                                        </li>
                                        <li class="menu-item"><a href="#">Tour List</a>
                                            <ul class="sub-menu">
                                                <li class="menu-item"><a href="tour-list.html">List v1</a></li>
                                                <li class="menu-item"><a href="tour-list-2.html">List v2</a></li>
                                            </ul>
                                        </li>
                                        <li class="menu-item"><a href="#">Tour Details</a>
                                            <ul class="sub-menu">
                                                <li class="menu-item"><a href="tour-details.html">Details v1</a></li>
                                                <li class="menu-item"><a href="tour-details-2.html">Details v2</a></li>
                                            </ul>
                                        </li>
                                        <li class="menu-item"><a href="tour-booking.html">Tour Booking</a></li>
                                    </ul>
                                </li>

                                <li class="menu-item menu-item-has-children"><a href="#">Hotels</a>
                                    <ul class="sub-menu">
                                        <li class="menu-item"><a href="hotels.html">Hotels</a></li>
                                        <li class="menu-item"><a href="hotel-details.html">Hotel Details</a></li>
                                        <li class="menu-item"><a href="hotel-booking.html">Hotel Booking</a></li>
                                    </ul>
                                </li>

                                <li class="menu-item menu-item-has-children"><a href="#">Destination</a>
                                    <ul class="sub-menu">
                                        <li class="menu-item"><a href="destination.html">Destination v1</a></li>
                                        <li class="menu-item"><a href="destination-2.html">Destination v2</a></li>
                                        <li class="menu-item"><a href="destination-details.html">Destination Details</a>
                                        </li>
                                    </ul>
                                </li>

                                <li class="menu-item menu-item-has-children"><a href="#">Pages</a>
                                    <ul class="sub-menu">
                                        <li class="menu-item"><a href="about.html">About</a></li>
                                        <li class="menu-item"><a href="contact.html">Contact</a></li>
                                        <li class="menu-item"><a href="login.html">Login</a></li>
                                        <li class="menu-item"><a href="signup.html">Signup</a></li>
                                    </ul>
                                </li>

                                <li class="menu-item menu-item-has-children"><a href="#">Blog</a>
                                    <ul class="sub-menu">
                                        <li class="menu-item"><a href="blog.html">Our Blog</a></li>
                                        <li class="menu-item"><a href="blog-details.html">Blog Detail</a></li>
                                    </ul>
                                </li>

                                <li class="menu-item menu-item-has-children"><a href="#">Dashboard</a>
                                    <ul class="sub-menu">
                                        <li class="menu-item"><a href="dashboard/dashboard-hotel.html">Admin Dashboard</a>
                                        </li>
                                        <li class="menu-item"><a href="dashboard/account-profile.html">User Dashboard</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div class="other_elements_wrapper d-flex align-items-center gap-4">
                            <!-- Button Box -->
                            <div class="button-box d-none d-sm-block">
                                <a class="btn-style-one theme-btn" href="login.html">
                                    <div class="btn-wrap">
                                        <span class="text-one">Sign In</span>
                                        <span class="text-two">Sign In</span>
                                    </div>
                                </a>
                                <a class="btn-style-two theme-btn" href="login.html">
                                    <div class="btn-wrap">
                                        <span class="text-one">Sign In</span>
                                        <span class="text-two">Sign In</span>
                                    </div>
                                </a>
                            </div>

                            <!-- Mobile Menu Toggle Button -->
                            <div class="mr_menu_toggle d-lg-none">
                                <span class="toggle_line"></span>
                                <span class="toggle_line"></span>
                                <span class="toggle_line"></span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </header>

        <!-- Sticky/Fixed Nav -->
        <div class="fixed_menu w-100">
            <header class="header header_style_one"></header>
        </div>

        <!-- Sticky/Fixed Nav -->
        <div class="fixed_menu w-100">
            <header class="header header_style_one"></header>
        </div>

        <!-- Mobile Responsive Menu -->
        <div class="mr_menu d-lg-none">

            <button type="button" class="mr_menu_close"><i class="fa fa-times"></i></button>
            <div class="logo"></div> <!-- Keep this div empty. Logo will come here by JavaScript -->
            <div class="mr_navmenu"></div> <!-- Keep this div empty. Menu will come here by JavaScript -->
        </div>
        <!-- End Main Header -->
    </div>
</template>