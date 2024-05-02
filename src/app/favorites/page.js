// import { Favorites } from './templates/page';

export default function favoritesPage(param) {
    return (
        <section className=" flex flex-col justify-center items-center min-h-screen">

            <div className=" prose p-4" name='head-container'>
                <h1 className=" ">Favorites</h1>
            </div>
            <div className="overflow-x-auto max-w-full p-4 bg-base-200">
                <div className="join">
                    <div>
                        <div>
                            <input className="input input-bordered join-item" placeholder="Search" />
                        </div>
                    </div>
                    <select className="select select-bordered join-item">
                        <option disabled selected>Filter</option>
                        <option>Sci-fi</option>
                        <option>Drama</option>
                        <option>Action</option>
                    </select>
                    <div className="indicator">
                        {/* <span className="indicator-item badge badge-secondary">new</span> */}
                        <button className="btn join-item">Search</button>
                    </div>
                </div>
                <table className="table">
                    {/* head */}

                    <thead>

                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}