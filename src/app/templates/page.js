// The Lines of code below are to import the templates from the Templates JSON file,
// However the functiion is not working correctly. Might work on it later, but for now, I am leaving it as it is
// and will start using pocketbase for the application's database.


// import fs from 'fs';
// import path from 'path';

// // Get Templates from JSON file
// async function getStaticProps() {
//     const templateDir = path.join(process.cwd(), './templates.json');
//     const files = fs.readdirSync(templateDir);
//     // function fetchTemplate(){
      
//     // }
//     const templates = files.map((files) => {
//         const filePath = path.join(templateDir, files);
//         const fileContents = fs.readFileSync(filePath, 'utf8');
//         return JSON.parse(fileContents);
//     });

//     return {
//         props: {
//             templates,
//         }
//       };
//     // return files;
// }

import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090/');



async function getStaticProps(){
// fetch a paginated records list
const resultList = await pb.collection('Templates').getList(1, 10, {
    filter: 'created >= "2022-01-01 00:00:00"',
});

// you can also fetch all records at once via getFullList
const records = await pb.collection('Templates').getFullList({
    sort: '-created',
});
return {
    props: {
        resultList,
        records
    }}
    
}

// or fetch only the first record that matches the specified filter
// const record = await pb.collection('Templates').getFirstListItem('someField="test"', {
//     expand: 'relField1,relField2.subRelField',
// });





// console.log('records');
export default function templatesCom({resultList, records}) {
  // Debugging
  // console.log(resultList);
  // 
  getStaticProps()
  return (
    <section className=" flex flex-col justify-center items-center min-h-screen">

      <div className=" prose p-4" name='head-container'>
        <h1 className=" ">Templates</h1>
      </div>
      <div className="overflow-x-auto max-w-full p-4 bg-base-200">
        {/* <div className=" flex ">
          <input type="text" placeholder="Search" className="input input-ghost" />
          <div className="dropdown">
            <label tabIndex={0} className="btn m-1">Sort By</label>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>
          <div className="dropdown">
            <label tabIndex={0} className="btn m-1">Filter</label>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>
        </div> */}

      <div className="join " >
        <div>
          <div>
            <input className="input input-bordered join-item" placeholder="Search"/>
          </div>
        </div>
        <select className="select select-bordered join-item">
          <option disabled defaultValue={'Drama'}>Filter</option>
          <option>Sci-fi</option>
          <option>Drama</option>
          <option>Action</option>
        </select>
        <div className="indicator">
          {/* <span className="indicator-item badge badge-secondary">new</span>  */}
          <button className="btn join-item">Search</button>
        </div>
      </div>
        <table className="table">
          {/* head */}

          <thead>

            <tr>
              <th>Template ID</th>
              <th>Title</th>
              <th>Tags</th>
              <th>Descriptions</th>
              
            </tr>
          </thead>
          <tbody>

            {/* {resultList.map((template) => (
              <tr key={template.id}>
                <td>{template.id}</td>
                <td>{template.title}</td>
                <td>{template.tags}</td>
                <td>{template.descriptions}</td>
              </tr>
            ))} */}



            {Array.isArray(resultList) ? resultList.map((template) => (
              <tr key={template.id}>
                <td>{template.Template_Title}</td>
                <td>{template.Template_Tags}</td>
                <td>{template.Template_Description}</td>
              </tr>
            )) : (
              <tr><td colSpan="*">No templates found.</td></tr>
            )}

            {/* <tr><td colSpan="4">Loading...</td></tr>
            <tr><td colSpan="4">Loading...</td></tr>
            <tr><td colSpan="4">Loading...</td></tr>
            <tr><td colSpan="4">Loading...</td></tr>
            <tr><td colSpan="4">Loading...</td></tr> */}

            
          </tbody>
        </table>
      </div>
    </section>
  )
}


// export const Favorites = (param) => {
//   return (
    
//   )
// }
