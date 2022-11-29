
function Navbar(props) {
    return (
        <header>
            <nav id="topNav">
                <div id="nameLogo">
                    <img className="" src="/imgs/noun-peace-4489687-167323.png" />
                    <h1 className="">PEACE OF MIND</h1>
                </div>

                <ul id="navList">
                    <li className=""><a className="" href="/api/about"><i
                        className=""></i>
                        About</a></li>
                    <li className=""><a className="" href="/"><i
                        className=""></i>
                        Community</a></li>
                    <li className=""><a className="" href="/api/dashboard"><i
                        className=""></i>
                        Dashboard</a></li>
                    <li className=""><a className="" href="#"
                        id="logout-link"><span className="">
                            Logout </span><i className=""></i></a></li>
                    <li className=""><a className="" href="/login"><i
                        className=""></i><span className="">
                            Login/SignUp</span></a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;