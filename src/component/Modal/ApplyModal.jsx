
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react';
import { GoUpload } from 'react-icons/go';



const ApplyModal = ({isOpen,close,handlefileChange,fileInfo}) => {
  const [visible,setvisible]=useState(false)
   
    return (
        <div>
           

      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white p-6 shadow-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle as="h3" className="text-2xl  font-medium ">
              Applying for Web Devloper job
              </DialogTitle>
              <h1></h1>
              <p>MediaCom Bangladesh</p> 
              <div className="divider"></div>
              <div className=''>
                <h3 className='mb-2'>Confirm your availability</h3>
               <label className='flex gap-2 mb-2'>
               <input type="radio" name="radio-1" onChange={()=>setvisible(false)} className="radio" defaultChecked /> <p>Yes, I am avialable to join immediately</p> <br />
               </label>
             
               <label className=''>
               <input type="radio" name="radio-1" className="radio" onChange={()=>setvisible(true)} /> No <span className='text-gray-500'>(Please specify your avialability)</span> <br />
           {
            visible &&  <textarea type="text" placeholder="eg. I am avialable for in-office work in Pune immediately, but will require a week to relocate" className="textarea textarea-success w-full mt-4"></textarea>
           }
               
               
               </label>
             {/* resume */}
             <div className='mt-2 space-y-3'>
              <h3>Custom resume <span className='text-gray-500'>(Optional)</span></h3>
              <p className='text-gray-500'>Employer can download and view this resume</p>
      
            <div className='file_upload px-5 py-3 relative border-2 border-dotted border-gray-300 rounded-lg'>
                <div className='flex flex-col w-max mx-auto text-center'>
                  <label>
                    <input
                  onChange={handlefileChange}
                     
                      className='text-sm cursor-pointer w-36 hidden'
                      type='file'
                      name='resume'
                      id='image'
                     
                    
                    />
                    {
                      fileInfo ?
                      <div className="flex gap-2 items-center ">
                      <p className='bg-red-600 py-2 rounded-md text-white uppercase text-xl px-2'> {fileInfo.type.split("/")[1]}</p> {/* Extracting the extension */}
                     <div>
                     <p> {fileInfo.name}</p>
                     <p>{fileInfo.size}</p> {/* File size in KB or MB */}
                     </div>
                    </div>
                      :
                      <div className='flex gap-2 text-xl font-bold text-gray-500 items-center'>
                      
                      <GoUpload /> Upload File
                      </div>
                      

                    }
                 
                  </label>
                </div>
              </div>

             </div>
             
              </div>
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={close}
                >
                 Submit Application
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
        </div>
    );
};

export default ApplyModal;