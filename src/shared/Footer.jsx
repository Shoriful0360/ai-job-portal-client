 import pic from '../../public/Photo/icons8-permanent-job-96.png'

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-gray-200 p-10">
            <aside>
                <img src={pic} alt="" />
                <p className="text-lg font-bold p-0 m-0 md:text-2xl  lg:text-3xl sm:font-extrabold bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent">
                  <i> JobVision AI.com</i>
                </p>
            </aside>
            <nav>
                <h6 className="footer-title font-extrabold">Company</h6>
                <a className="link link-hover font-bold">About us</a>
                <a className="link link-hover font-bold">Contact</a>
                <a className="link link-hover font-bold">Jobs</a>
                <a className="link link-hover font-bold">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title font-extrabold">Legal</h6>
                <a className="link link-hover font-bold">Terms of use</a>
                <a className="link link-hover font-bold">Privacy policy</a>
                <a className="link link-hover font-bold">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;