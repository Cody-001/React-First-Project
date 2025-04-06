import logo from "../assets/img/logo/logo.png";

const Header = () => {
    return (
        <div>
            <header>
                <div className=" header-area">
                    <div className="headerSticky main-header header-sticky">
                        <div className="container-fluid">
                            <div className="headerTop d-flex align-items-center justify-content-between flex-wrap">
                                <div className=" header-info-left d-flex align-items-center">

                                    <div className="logo">
                                        <a href="index.html"><img src={logo} alt="" /></a>
                                    </div>
                                </div>
                                <div className="header-righ ">

                                    <div className="main-menu d-none d-lg-block">
                                        <nav>
                                            <ul id="navigation">
                                                <li><a href="index.html">Home</a></li>
                                                <li><a href="about.html">About</a></li>
                                                <li><a href="services.html">Service</a></li>
                                                <li><a href="gallery.html">Gallery</a></li>
                                                <li><a href="#">Blog</a>
                                                    <ul className="submenu">
                                                        <li><a href="blog.html">Blog</a></li>
                                                        <li><a href="blog_details.html">Blog Details</a></li>
                                                        <li><a href="elements.html">Elements</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="contact.html">Contact</a></li>

                                                <li className="header-right-btn"><a href="#" className="header-btn">Free Quote</a> </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="mobile_menu d-block d-lg-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header