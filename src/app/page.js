import templates from "./templates/page"
import Link from 'next/link';
// Navigation Bar
export const NavBar = (param) => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href="./templates">Templates</a></li>
                        {/* <li>
                            <a>Categories</a>
                            <ul className="p-2">
                                <li><a>Text Messages</a></li>
                                <li><a>Emails</a></li>
                            </ul>
                        </li> */}
                        <li><a href="./favorites">Favorites</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl" href="./">SAP</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href="./templates">Templates</a></li>
                    {/* <li tabIndex={0}>
                        <details>
                            <summary>Categories</summary>
                            <ul className="p-2 hidden">
                                <li><a>Text Messages</a></li>
                                <li><a>Emails</a></li>
                            </ul>
                        </details>
                    </li> */}
                    <li><a href="./favorites">Favorites</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <input type="text" placeholder="Search for a Template" className="input input-bordered w-full max-w-xs mr-4" name="search-id" />
                <a className="btn">Search</a>
                <div className="dropdown dropdown-bottom hidden">
                    <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default function index(param) {
    return (
        <>
            {/* <section className="">
                <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Hello there</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Link href='./templates' passHref><button className="btn btn-primary">Get Started</button></Link>
                    </div>
                </div>
                </div>
            </section> */}

            <section>
            <div className="hero min-h-screen" style={{backgroundImage: 'url(/hero-img-v2.svg)'}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
            </div>
            </section>
            <section className=" flex flex-col items-center justify-center min-h-screen">
                <div className=" prose">
                    <h2 className=" p-7">Latest Templates</h2>
                </div>
                <div className=" grid grid-cols-4 p-7 gap-4 max-lg:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1" name='card-container'>
                    <div className=" card w-96 bg-base-200 text-base-content">
                        <div className=" card-body">
                            <h2 className=" card-title">Card title!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className=" grid grid-cols-4" name='tag-container'>
                                <div className="badge badge-primary badge-outline">primary</div>
                            </div>
                            <div className=" card-actions justify-end"><button className=" btn-accent">Buy Now</button></div>
                        </div>
                    </div>
                
                </div>
            </section>
        </>
    )
}


// Footer
export const FooterBar = (param) => {
    return (
        <footer className="footer footer-center p-4 bg-base-300 text-base-content ">
            <aside>
                <p>Copyright © 2024 - All right reserved by Keanu Vassell</p>
            </aside>
        </footer>
    )
}