

const ContactUs = () => {
    return (
        <div className="grid sm:grid-cols-2 bg-[#F8FAFB] items-center gap-5 p-11">
            <div >
                <h3 className='text-3xl font-bold  my-3'>We aim to <span className="text-blue-500">streamline</span> your <br /> job search</h3>
                <p className='text-sm font-semibold  my-3 text-gray-700 '>Our AI-powered job portal helps you find the right job faster and more efficiently.</p>
                <div className="sm:flex gap-6 my-1">
                    <div className="my-1">
                        <label className=" fieldset-label text-sm font-bold text-gray-700 my-1">Name</label>
                        <input type="text" name="name" className="input lg:w-68 my-1" required placeholder="Name" />
                    </div>

                    <div className="my-1">
                        <label className=" fieldset-label text-sm font-bold my-1 text-gray-700">Email</label>
                        <input type="text" name="email" className="input lg:w-68 my-1" required placeholder="Your Email" />
                    </div>
                </div>
                <label className=" fieldset-label text-sm font-bold text-gray-700 my-1">Message</label>
                <textarea className="textarea md:w-[330px] lg:w-[568px] my-1" name="massage" placeholder="Type Your Message Here"></textarea>
                <p><button className="px-2 py-1 bg-blue-500 text-sm font-bold text-white rounded-lg mt-3 m ">Contact Us</button></p>
            </div>

            <div>
                
                <div className="collapse collapse-plus my-2 bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-lg font-extrabold">🔍 Advanced Job Search</div>
                    <div className="collapse-content text-sm font-bold text-gray-600"> Filter jobs by location, industry, experience level, and salary.
                         Get AI-powered recommendations for the best job matches.
                         Find the perfect position based on your skills and expertise.</div>
                </div>
                <div className="collapse collapse-plus my-2 bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-lg font-extrabold">📄 Resume & Job Posting Builder</div>
                    <div className="collapse-content text-sm font-bold text-gray-600">Use our smart resume generator to create professional CVs and craft engaging job postings for recruiters.</div>
                </div>
                <div className="collapse collapse-plus my-2 bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-lg font-extrabold">📚 Resources & Guides</div>
                    <div className="collapse-content text-sm font-bold text-gray-600">Explore expert career guides, interview tips, and skill development resources to enhance your career growth.</div>
                </div>
                <div className="collapse collapse-plus my-2 bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-lg font-extrabold">🌍 Community Support</div>
                    <div className="collapse-content text-sm font-bold text-gray-600"> Join our job-seeker community and get advice from professionals.</div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;