
n
export default function editTemplate(param) {
    return (
        <section className="flex min-h-screen max-sm:flex-col max-sm:justify-center max-sm:items-center">
            
                <div className=" bg-base-200 flex flex-col items-center justify-center max-sm:hidden">
                    
                    <div className=" prose m-4">
                        <h3 className=" text-2xl">Edit Template</h3>
                        <div className="divider"></div>    
                    </div>
                    
                    
                    <div className="rounded-l-lg " name='input-fields'>
                        <div className="relative p-4 overflow-y-auto menu w-80 bg-base-200 text-base-content">
                        <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs mb-2" />
                       
                        </div>
                    
                        
                    </div>

                    
                </div>

            
            <div name='template-content' className=" flex items-center ml-auto mr-auto max-sm:m-4 max-sm:rounded-l-xl">
                <div name='template' className="flex flex-col justify-center items-center bg-base-300 first:items-start p-4 rounded-xl">
                    <div name='heading-container' className=" prose ">
                        <h3 className="">Heading</h3>
                        
                    </div>
                    <div className=" divider"></div>
                    <div className=" prose">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quasi repellendus atque libero, distinctio tempora blanditiis recusandae veritatis, possimus cumque sunt saepe. Ipsum harum facilis eum? Temporibus nemo fuga dignissimos.</p>
                    </div>
                    <div className=" divider hidden max-sm:flex">Edit Template</div>
                    <div className="hidden max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center ml-auto mr-auto">
                        {/* <div className=" prose m-4">
                            <h3 className=" text-2xl"></h3>
                            <div className="divider"></div>
                        </div> */}
                        
                        
                        <div className="relative p-4 overflow-y-auto menu w-80 text-base-content">
                        <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs mb-2" />
                        
                        </div>
                        
                        
                    </div>
                    <div className="ml-auto mr-auto mt-4 mb-4"><button className='btn btn-neutral'>Copy to Clipboard</button></div> 
                </div>

                
            </div>

            {/* the below code is previously used for the sidebar, however is now placed in the template container */}
            {/* <div className=" bg-base-200 hidden max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:m-4 max-sm:rounded-l-xl"> */}

            {/* Side Bar Information here */}

            {/* </div> */}
        </section>
    );
}
