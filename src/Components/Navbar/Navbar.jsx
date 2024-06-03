
const Navbar = () => {

    const navItems = (
        <>
            <li>
                <a href="">
                    Home
                </a>
            </li>
            <li>
                <a href="">About us</a>

            </li>
            <li>
                <a href="">Pricing</a>

            </li>
            <li>
                <a href="">Features</a>

            </li>
        </>
    )


    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <div className="flex items-center justify-between">
                        <svg width="28" height="34" viewBox="0 0 28 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.3829 10.8852C23.1564 10.6651 22.8387 10.5651 22.5277 10.6163C22.2162 10.6672 21.9472 10.8628 21.8027 11.1434C21.3057 12.1089 20.6745 12.9961 19.9318 13.7805C20.0058 13.2139 20.0431 12.6439 20.0431 12.0724C20.0431 10.9759 19.8961 9.84742 19.6061 8.71805C18.6527 5.00853 16.1525 1.87144 12.7468 0.111205C12.4503 -0.0419942 12.097 -0.0366153 11.8053 0.125549C11.5136 0.287779 11.3226 0.585213 11.2964 0.917908C11.0309 4.28895 9.2945 7.35586 6.52981 9.33424C6.49322 9.3606 6.4569 9.38729 6.42057 9.41386C6.34534 9.46891 6.27441 9.52097 6.20814 9.56467C6.19778 9.57157 6.18749 9.57861 6.17739 9.58585C4.43861 10.8308 3.00391 12.4903 2.0282 14.3854C1.03675 16.3131 0.534058 18.3818 0.534058 20.5336C0.534058 21.6299 0.681015 22.7583 0.970878 23.8879C2.50055 29.8417 7.85847 33.9999 14.0004 33.9999C21.4253 33.9999 27.4659 27.9589 27.4659 20.5336C27.4659 16.872 26.0159 13.4454 23.3829 10.8852Z" fill="#FF5555" />
                        </svg>

                        <a className="btn btn-ghost text-xl">uifry <sup className="text-xs">TM</sup></a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-neutral">Download</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;