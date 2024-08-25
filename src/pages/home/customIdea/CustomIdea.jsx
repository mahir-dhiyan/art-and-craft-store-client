
const CustomIdea = () => {
    return (
        <div>
             <div className="bg-[#ECECF2] dark:bg-gray-300 p-4 rounded-3xl border-dashed border-2 border-[#C56652] text-center m-4">
                <h2 className="text-5xl font-semibold">Need <span className="text-[#C56652]">Custom </span>Solutions?...</h2>
            </div>
            <div className="container mx-auto p-4 pt-0 text-black dark:text-fuchsia-50 font-bold">
            <h3 className="text-4xl font-bold text-center mt-6">Book an Appointment</h3>
                <p className="text-xl text-center mt-4">
                    To book an appointment, please call us during our business hours, or Email us. Our team is available to assist you with all your real estate needs.
                </p>
                {/*  */}

                <div className="text-center space-y-2 mt-6">
                    <h4 className="text-3xl font-semibold">Calling Hours</h4>

                    <p className="text-lg">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-lg">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-lg">Sunday: Closed</p>
                    <p className="text-lg">Email: <a href="mailto:contact@realstate.com" className="text-blue-500">contact@realstate.com</a></p>
                    <p className="text-lg">Phone: <a href="tel:123-456-7890" className="text-blue-500">123-456-7890</a></p>
                </div>
            </div>
        </div>
    );
};

export default CustomIdea;