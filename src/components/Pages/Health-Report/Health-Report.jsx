import React from "react";

const Health = () => {
    return (
        <div className="App">
          <h1 className="text-center text-[30px] ">My Medical Report</h1>
          <h2 className='text-[30px] ml-8'>Cobbs, Sarah</h2>
          <span className="leading-10 ml-8">Last Updated, November 28, 2023</span>
          <div className="grid grid-cols-3 gap-5 ml-8">
            <div className='row-span-2 col-span-1 bg-white text-black rounded-xl mb-14'>
              
              <div className='grid grid-cols-2 gap-5 pl-8 pt-4 pb-4'>
                <div className='first-name'>
                  <span> First name </span>
                  <h3 className='font-bold'>Sarah</h3>
                </div>
    
                <div className='last-name'>
                  <span> Last name </span>
                  <h3 className='font-bold'>Cobbs</h3>
                </div>
    
                <div className='gender'>
                  <span> Gender </span>
                  <h3 className='font-bold'>Female</h3>
                </div>
    
                <div className='marital'>
                  <span> Marital status </span>
                  <h3 className='font-bold'>Married</h3>
                </div>
    
                <div className='Religion'>
                  <span> Religion </span>
                  <h3 className='font-bold'>Christian</h3>
                </div>
    
                <div className='country'>
                  <span> Country </span>
                  <h3 className='font-bold'>Ghana</h3>
                </div>
    
                <div className='bdate'>
                  <span> Date of birth </span>
                  <h3 className='font-bold'>October 12 1990</h3>
                </div>
    
                <div className='language-spoken'>
                  <span> Language Spoken </span>
                  <h3 className='font-bold'>English</h3>
                </div>
    
                <div className='Telephone'>
                  <span> Telephone </span>
                  <h3 className='font-bold'>+234 28728782</h3>
                </div>
    
              </div>
            </div>
    
            <div className='grid grid-cols-2 gap-2 bg-white col-span-2 rounded-xl w-11/12 text-black p-8'>
    
                <div className='next-of-kin'>
                  <span> Next Of Kin </span>
                  <h3 className='font-bold'>Husband</h3>
                </div>
    
                <div className='country'>
                  <span>  </span>
                  <span>  </span>
                </div>
    
                <div className='first-name'>
                  <span> First Name </span>
                  <h3 className='font-bold'>James</h3>
                </div>
    
                <div className='last-name'>
                  <span> Last Name </span>
                  <h3 className='font-bold'>Cobbs</h3>
                </div>
    
                <div className='Address'>
                  <span> Address </span>
                  <h3 className='font-bold'>7, Bank Rd, Lagos, Nigeria</h3>
                </div>
    
                <div className='Tel'>
                  <span> Telephone </span>
                  <h3 className='font-bold'>+234 5434 232</h3>
                </div>
    
            </div>
    
            <div className='bg-white text-black grid grid-cols-2 col-span-2 rounded-xl w-11/12 p-8'>
              
                <div className='name-of-provider'>
                  <span> Name Of Provider </span>
                  <h3 className='font-bold'>Leana Medical Centre</h3>
                </div>
    
                <div className='country'>
                  <span>  </span>
                  <span>  </span>
                </div>
    
                <div className='address'>
                  <span> Address </span>
                  <h3 className='font-bold'>12, Don Peppe Street, Ikr</h3>
                </div>
    
                <div className='tel'>
                  <span> Telephone </span>
                  <h3 className='font-bold'>+234 2131 313</h3>
                </div>
                
            </div>
          </div>
    
          {/* Allergies Section */}
          <div className='allergies flex bg-white text-black w-11/12 rounded-xl ml-8 mt-20'>
            <div className='icon bg-pink-500 w-20 h-auto rounded-l-xl'></div>
            <div className='allergy-section-parent grid w-full '>
              <div className='allergy-section-grid-one inline-grid grid-cols-3 pl-5'>
              
                <div className='first-grid'>
                  <h3 className='text-xl font-bold'>Allergies</h3>
                  <p>Nuts</p>
                </div>
    
                <div className='second-grid'>
                  <h3 className='text-xl font-bold'>Outcomes</h3>
                  <p>Skin Breakouts</p>
                </div>
    
                <div className='third-grid'>
                  <h3 className='text-xl font-bold'>Severity</h3>
                  <div className='allergy-severity inline-flex'>
                    <div className='severity-none bg-pink-400 w-12 h-1'></div>
                    <div className='severity-low bg-pink-700 w-12 h-1'></div>
                    <div className='severity-moderate bg-yellow-600 w-12 h-1'></div>
                    <div className='severity-severe bg-red-700 w-12 h-1'></div>
                  </div>     
      
                </div>
    
              </div>
              <div className='allergy-section-grid-two inline-grid grid-cols-3 pl-5'>
              
                <div className='first-grid'>
                  <p>Penicilin</p>
                </div>
    
                <div className='second-grid'>
                  <p>Hives</p>
                </div>
    
                <div className='third-grid'>
                  <div className='allergy-severity inline-flex'>
                    <div className='severity-none bg-pink-400 w-12 h-1'></div>
                    <div className='severity-low bg-pink-700 w-12 h-1'></div>
                    <div className='severity-moderate bg-yellow-600 w-12 h-1'></div>
                    <div className='severity-severe bg-red-700 w-12 h-1'></div>
                  </div>     
      
                </div>
    
              </div>
    
              <div className='allergy-section-grid-three inline-grid grid-cols-3 pl-5'>
              
                <div className='first-grid'>
                  <p>Codeine</p>
                </div>
    
                <div className='second-grid'>
                  <p>Shortness of Breath</p>
                </div>
    
                <div className='third-grid'>
                  <div className='allergy-severity inline-flex'>
                    <div className='severity-none bg-pink-400 w-12 h-1'></div>
                    <div className='severity-low bg-pink-700 w-12 h-1'></div>
                    <div className='severity-moderate bg-yellow-600 w-12 h-1'></div>
                    <div className='severity-severe bg-red-700 w-12 h-1'></div>
                  </div>     
      
                </div>
    
              </div>
            </div>
    
          </div>
    
          {/* Yearly Activities */}
    
          <div className='yearly-activities mt-10 mb-10 bg-white p-4 rounded-xl w-11/12 ml-8'>
            <div className='year'>
              <h3 className='font-bold text-black text-center text-xl'> 2023's Activities </h3>
            </div>
          </div>
    
          {/* Yearly Activities section */}
    
          <div className='yearly-activities flex bg-white text-black w-11/12 rounded-xl ml-8 mt-20'>
            <div className='icon bg-pink-500 w-20 h-auto rounded-l-xl'></div>
            <div className='allergy-section-parent grid w-full '>
              <div className='allergy-section-grid-one inline-grid grid-cols-3 pl-5'>
              
                <div className='first-grid'>
                  <h3 className='text-xl font-bold'>November 28, 2023</h3>
                  <span> Acetaminophen with Codeine</span>
                </div>
    
                <div className='second-grid'>
                  <span className='text-lg font-bold'>Liquid</span>
                  
                  <div className='yearly-activities '>
                    <b className='dose pr-4'>Dose</b>
                    <span className='dose-text'> 2 Spoonful </span>
                  </div>
    
                  <div className='yearly-activities '>
                    <b className='rate pr-4'>Rate</b>
                    <span className='rate-text'> 2/day </span>
                  </div>
    
                </div>
    
                <div className='second-grid'>
                  <div className='yearly-activities '>
                    <b className='instruction pr-4'>Instruction</b>
                    <span className='instruction-text'> 2 Spoonful twice a day </span>
                  </div>
    
                  <div className='yearly-activities '>
                    <b className='prescriber pr-4'>Prescriber</b>
                    <span className='prescriber-text'> Leane Medical Centre </span>
                  </div>
    
                </div>  
    
              </div>
              
    
            </div>
    
          </div>
    
          {/* Yearly Activities section 2 */}
    
          <div className='yearly-activities flex bg-white text-black w-11/12 rounded-xl ml-8 mt-20'>
            <div className='icon bg-pink-500 w-20 h-auto rounded-l-xl'></div>
            <div className='yearly-activities-section-parent grid w-full'>
              <div className='yearly-activities-section-grid-one inline-grid grid-cols-2 pl-5'>
              
                <div className='first-grid'>
                  <h3 className='text-xl font-bold'>August 18, 2023</h3>
                  <p>X-ray Examination</p>
                </div>
    
                <div className='second-grid'>
                  <div className='yearly-activities '>
                    <b className='provider pr-4'>Provider</b>
                    <span className='provider-text'> Dr. Felicia Parker </span>
                  </div>
    
                  <div className='yearly-activities '>
                    <b className='location pr-4'>Location</b>
                    <span className='location-text'> Community Hospital </span>
                  </div>
                </div>
    
              </div>
             
            </div>
    
          </div>
    
          {/* Yearly Activities section 3 */}
    
          <div className='yearly-activities flex bg-white text-black w-11/12 rounded-xl ml-8 mt-20'>
            <div className='icon bg-pink-500 w-20 h-auto rounded-l-xl'></div>
            <div className='yearly-activities-section-parent grid w-full'>
              <div className='yearly-activities-section-grid-one inline-grid grid-cols-2 pl-5'>
              
                <div className='first-grid'>
                  <h3 className='text-xl font-bold'>October 11, 2023</h3>
                  <p>Annual Physical Examination</p>
                </div>
    
                <div className='second-grid'>
                  <div className='yearly-activities '>
                    <b className='provider pr-4'>Provider</b>
                    <span className='provider-text'> Dr. John Momoh </span>
                  </div>
    
                  <div className='yearly-activities '>
                    <b className='location pr-4'>Location</b>
                    <span className='location-text'> Leane Medical Centre </span>
                  </div>
                </div>
    
              </div>
             
            </div>
    
          </div>
    
    
        </div>
        
      );
};

export default Health;