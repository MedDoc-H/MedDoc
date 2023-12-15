import React from 'react'; 
import pink from '../../../assets/pink.png';
import pink1 from '../../../assets/pink1.png';
import purple from '../../../assets/purple.png';


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
                <img src={pink} alt="" />
 
             </div>
 
             <div className='column-two-flex'>
 
                {/* <span className='mins-blog'>4 mins, Solabomi Kayode</span>
                <h3 className='title-blog'>Web5 Technology: A new dawn</h3>
                <a href='https://www.soccer24.com/' className='to-go-blog'>Read Blog</a> */}
                
                <img src={purple} alt="" />
 
             </div>
 
             <div className='column-three-flex'>
 
                {/* <span className='mins-blog'>4 mins, Solabomi Kayode</span>
                <h3 className='title-blog'>Web5 Technology: A new dawn</h3>
                <a href='https://www.soccer24.com/' className='to-go-blog'>Read Blog</a> */}
                <img src={pink1} alt="" />
 
             </div>
           </div>
 
           {/* Blog title and link section */}
 
           <div className='flex justify-around align-center al mb-12 mt-10 w-full'>
             
             <div className=' w-full mx-[50px]'>
                <span className='text-[16px] mb-48 font-light'>4 mins, Kayode Sola</span>
                <h2 className='font-bold text-[25px] mb-3'> Web5 Technology: A new dawn </h2>
                <div className='inner-flex-link'>
                   <a href='' className='column-flex-one'>Read Blog</a>
                </div>
             </div>
 
             <div className='w-full mr-[50px]'>
                <span className='text-[16px] mb-4 font-light'>2 mins, James Sultan</span>
                <h2 className='font-bold text-[25px] mb-3'> Web5 Technology: The future of Healthcare </h2>
                <div className='inner-flex-link'>
                   <a href='' className='column-flex-two'>Read Blog</a>
                </div>
             </div>
 
             <div className='w-full'>
                <span className='text-[16px] mb-5 font-light'>4 mins, Chris Ayomide</span>
                <h2 className='font-bold text-[25px] mb-3'> Web5 and AI </h2>
                <div className='inner-flex-link'>
                   <a href='' className='column-flex-three' >Read Blog</a>
                </div>
             </div>
 
          </div>
 
           {/* Feedback-Form Section */}
 
           <div className='feed-form-sect flex justify-evenly '>
 
             <div className='msg-feed-form-sect'>
                <h3 className='msg-txt font-bold text-[30px]'>We would love to hear from you</h3>
             </div>
             
             <div className='p-[30px] my-[12px] rounded-[20px] bg-[white]'>
                <div className='mb-[12px]'>
                <label htmlFor="new_allergy" className="">
                   Name
                </label>
                
                <br />
                <input type="text" placeholder='Enter your fullname' className='px-[12px]' />
                </div>
                
                <div className='mb-[12px]'>
                <label htmlFor="new_allergy" className="">
                   Email
                </label>
                <br />
                <input type="text" placeholder='Enter your email address' className='px-[12px]'/>
                </div>

                <div className='mb-[12px]'>
                <label htmlFor="new_allergy" className="">
                   Message
                </label>
                <br />
                <input type="text" placeholder='Describe how we can help you' className='px-[12px]'/>
                </div>
 
                
             </div>
 
           </div>
       </div>
 
    </div>
    );
};

export default Blog;