import React from 'react'; 

function Blog () {
    return (
        <div className="App">
        <div className='app-container'>
           <h1 className='sub-info mt-5 ml-5 font-semibold text-lg'> Read the latest and Web5 blog</h1>
 
           {/* Blog main section */}
           <div className='three-column-flex flex justify-around mt-10'>
 
             <div className='column-one-flex '>
 {/* 
                <span className='mins-blog'>4 mins, Solabomi Kayode</span>
                <h3 className='title-blog'>Web5 Technology: A new dawn</h3>
                <a href='https://www.soccer24.com/' className='to-go-blog'>Read Blog</a> */}
                <div className='border-blog-one w-[256px] h-[233px] border-pink-600 border-[10px]'></div>
 
             </div>
 
             <div className='column-two-flex'>
 
                {/* <span className='mins-blog'>4 mins, Solabomi Kayode</span>
                <h3 className='title-blog'>Web5 Technology: A new dawn</h3>
                <a href='https://www.soccer24.com/' className='to-go-blog'>Read Blog</a> */}
                <div className='border-blog-two w-[256px] h-[233px] border-pink-600 border-[10px]'></div>
 
             </div>
 
             <div className='column-three-flex'>
 
                {/* <span className='mins-blog'>4 mins, Solabomi Kayode</span>
                <h3 className='title-blog'>Web5 Technology: A new dawn</h3>
                <a href='https://www.soccer24.com/' className='to-go-blog'>Read Blog</a> */}
                <div className='border-blog-three w-[256px] h-[233px] border-pink-600 border-[10px]'></div>
 
             </div>
           </div>
 
           {/* Blog title and link section */}
 
           <div className='three-column-flex-two flex justify-around mb-12 mt-10 w-full'>
             
             <div className='w-full ml-10'>
                <span className='text-[16px] mb-48 font-light'>4 mins, Kayode Sola</span>
                <h2 className='font-bold text-[25px] mb-3'> Web5 Technology: A new dawn </h2>
                <div className='inner-flex-link'>
                   <a href='' className='column-flex-one'>Read Blog</a>
                </div>
             </div>
 
             <div className='w-full ml-14'>
                <span className='text-[16px] mb-4 font-light'>2 mins, James Sultan</span>
                <h2 className='font-bold text-[25px] mb-3'> Web5 Technology: The future of Healthcare </h2>
                <div className='inner-flex-link'>
                   <a href='' className='column-flex-two'>Read Blog</a>
                </div>
             </div>
 
             <div className='w-full mr-10 ml-20'>
                <span className='text-[16px] mb-5 font-light'>4 mins, Chris Ayomide</span>
                <h2 className='font-bold text-[25px] mb-3'> Web5 and AI </h2>
                <div className='inner-flex-link'>
                   <a href='' className='column-flex-three' >Read Blog</a>
                </div>
             </div>
 
          </div>
 
           {/* Feedback-Form Section */}
 
           <div className='feed-form-sect flex justify-evenly'>
 
             <div className='msg-feed-form-sect'>
                <h3 className='msg-txt font-bold text-[30px]'>We would love to hear from you</h3>
             </div>
             
             <div className='feed-form'>
 
                <label htmlFor="new_allergy" className="">
                   Name
                </label>
                <br />
                <input type="text" placeholder='Enter your fullname' />
 
                <label htmlFor="new_allergy" className="">
                   Email
                </label>
                <br />
                <input type="text" placeholder='Enter your email address' />
 
                <label htmlFor="new_allergy" className="">
                   Message
                </label>
                <br />
                <input type="text" placeholder='Describe how we can help you' />
                
             </div>
 
           </div>
       </div>
 
    </div>
    );
};

export default Blog;