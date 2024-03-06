import React, { useState } from 'react';
import { db } from "@/dbConfig/firebase";
import { collection, addDoc } from "firebase/firestore";

const FeedBack = () => {
    const [formData, setFormData] = useState({
        subject: '',
        message: '',
        // Add more fields as needed
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, "feedback"), formData);
            console.log('Feedback added to Firestore!');
            // Optionally, you can clear the form after submission
            setFormData({
                subject: '',
                message: '',
                // Reset other fields as needed
            });
            setSubmitted(true);
        } catch (error) {
            console.error('Error adding feedback: ', error);
        }
    };

    return (
        <div className="my-6 mx-auto max-w-xl bg-gray ">
            <h1 className="text-3xl text-gold font-extrabold text-center">Feed Back 🚀</h1>
            {submitted ? (
                <div className="text-gold text-xl font-bold text-center">
                    We appreciate your participation! 😀
                </div>
            ) : (
                <form className="mt-8 text-gold space-y-4" onSubmit={handleSubmit}>
                    <input type='text' placeholder='Subject' name="subject" value={formData.subject}
                        onChange={handleChange} className="w-full rounded-md py-3 px-4 bg-darkGray text-sm outline-blue-500" />
                    <textarea placeholder='Message' rows={6} name="message" value={formData.message}
                        onChange={handleChange} className="w-full rounded-md px-4 bg-darkGray text-sm pt-3 outline-blue-500"></textarea>
                    <small className="block text-gray-500 text-xs">Please enter each item in the list separated by a comma (,) or on a new line</small>
                    <button type="submit" className="text-gold bg-royalBlue hover:text-royalBlue hover:bg-gold font-bold rounded-md text-sm px-4 py-3 w-full">Send</button>
                </form>
            )}
        </div>
    );
}

export default FeedBack;
