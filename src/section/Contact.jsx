
/** * @copyright 2025 Looknath
 * @license Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import emailjs from "@emailjs/browser";
import TypewriterHeading from '../components/TypewriterHeading';

// --- SVG Icons and Social Links Data --- (This part is unchanged)
const socialLinks = [
    {
      href: 'https://github.com/codyn01',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48603 2 2 6.48604 2 12C2 17.514 6.48603 22 12 22C17.514 22 22 17.514 22 12C22 6.48604 17.514 2 12 2ZM12 3.5C16.7033 3.5 20.5 7.2967 20.5 12C20.5 15.8327 17.9785 19.0613 14.5 20.126V17.5684C14.5 16.6133 13.9497 15.7943 13.1543 15.3867C13.9276 15.2388 14.6457 14.9454 15.249 14.5309C15.8522 14.1165 16.3232 13.5929 16.6228 13.0037C16.9224 12.4145 17.0421 11.7765 16.9718 11.1429C16.9015 10.5093 16.6434 9.89818 16.2188 9.36035C16.4405 8.67771 16.6883 7.48034 16.0996 6.53809C14.9647 6.53809 14.2323 7.31604 13.8828 7.7998C13.2853 7.60352 12.6459 7.5017 12 7.5C11.3537 7.50057 10.7136 7.60139 10.1152 7.79688C9.76487 7.31289 9.03311 6.53809 7.90039 6.53809C7.22486 7.61941 7.64246 8.78228 7.86621 9.25684C7.41288 9.79235 7.12862 10.4078 7.03781 11.0505C6.94699 11.6931 7.05233 12.3438 7.34478 12.9468C7.63723 13.5498 8.10809 14.087 8.71698 14.5124C9.32587 14.9379 10.0546 15.2389 10.8408 15.3896C10.1877 15.7262 9.69864 16.337 9.54883 17.0781H8.8916C8.2431 17.0781 7.99112 16.8146 7.64062 16.3701C7.29463 15.9256 6.92259 15.6269 6.47559 15.5029C6.23459 15.4774 6.07223 15.6607 6.28223 15.8232C6.99173 16.3062 7.0407 17.0968 7.3252 17.6143C7.5842 18.0803 8.11484 18.5 8.71484 18.5H9.5V20.126C6.02153 19.0613 3.5 15.8327 3.5 12C3.5 7.2967 7.29669 3.5 12 3.5Z" fill="currentColor" /></svg>,
      alt: 'GitHub'
    },
    {
      href: 'https://www.linkedin.com/in/tanushri-sdev/',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 3C4.24011 3 3 4.24011 3 5.75V18.25C3 19.7599 4.24011 21 5.75 21H18.25C19.7599 21 21 19.7599 21 18.25V5.75C21 4.24011 19.7599 3 18.25 3H5.75ZM5.75 4.5H18.25C18.9491 4.5 19.5 5.05089 19.5 5.75V18.25C19.5 18.9491 18.9491 19.5 18.25 19.5H5.75C5.05089 19.5 4.5 18.9491 4.5 18.25V5.75C4.5 5.05089 5.05089 4.5 5.75 4.5ZM7.75 6.5C7.41848 6.5 7.10054 6.6317 6.86612 6.86612C6.6317 7.10054 6.5 7.41848 6.5 7.75C6.5 8.08152 6.6317 8.39946 6.86612 8.63388C7.10054 8.8683 7.41848 9 7.75 9C8.08152 9 8.39946 8.8683 8.63388 8.63388C8.8683 8.39946 9 8.08152 9 7.75C9 7.41848 8.8683 7.10054 8.63388 6.86612C8.39946 6.6317 8.08152 6.5 7.75 6.5ZM7 10C6.7235 10 6.5 10.2235 6.5 10.5V17C6.5 17.2765 6.7235 17.5 7 17.5H8.5C8.7765 17.5 9 17.2765 9 17V10.5C9 10.2235 8.7765 10 8.5 10H7ZM10.5 10C10.2235 10 10 10.2235 10 10.5V17C10 17.2765 10.2235 17.5 10.5 17.5H12C12.2765 17.5 12.5 17.2765 12.5 17V13.25C12.5 12.5605 13.0605 12 13.75 12C14.4395 12 15 12.5605 15 13.25V17C15 17.2765 15.2235 17.5 15.5 17.5H17C17.2765 17.5 17.5 17.2765 17.5 17V13C17.5 11.3455 16.1545 10 14.5 10C13.731 10 13.0315 10.293 12.5 10.7705V10.5C12.5 10.2235 12.2765 10 12 10H10.5Z" fill="currentColor" /></svg>,
      alt: 'LinkedIn'
    },
    // {
    //   href: 'https://x.com/@neuralcoder1',
    //   icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.25 3C4.46403 3 3 4.46403 3 6.25V17.75C3 19.536 4.46403 21 6.25 21H17.75C19.536 21 21 19.536 21 17.75V6.25C21 4.46403 19.536 3 17.75 3H6.25ZM6.25 4.5H17.75C18.725 4.5 19.5 5.27497 19.5 6.25V17.75C19.5 18.725 18.725 19.5 17.75 19.5H6.25C5.27497 19.5 4.5 18.725 4.5 17.75V6.25C4.5 5.27497 5.27497 4.5 6.25 4.5ZM6.91406 7L10.7822 12.5283L6.91113 17H7.93262L11.2344 13.1758L13.9102 17H17.1289L13.0127 11.1172L16.5684 7H15.5684L12.5615 10.4717L10.1328 7H6.91406ZM8.46777 7.84766H9.74902L15.5752 16.1523H14.2939L8.46777 7.84766Z" fill="currentColor" /></svg>,
    //   alt: 'Twitter X'
    // },
    // {
    //   href: 'https://www.instagram.com/csew_ala',
    //   icon: <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.75 2.5C5.58319 2.5 3 5.08319 3 8.25V15.75C3 18.9164 5.5831 21.5 8.75 21.5H16.25C19.4165 21.5 22 18.9165 22 15.75V8.25C22 5.0831 19.4164 2.5 16.25 2.5H8.75ZM8.75 4H16.25C18.6056 4 20.5 5.8939 20.5 8.25V15.75C20.5 18.1055 18.6055 20 16.25 20H8.75C6.3939 20 4.5 18.1056 4.5 15.75V8.25C4.5 5.89381 6.39381 4 8.75 4ZM17.5 6C16.9475 6 16.5 6.4475 16.5 7C16.5 7.5525 16.9475 8 17.5 8C18.0525 8 18.5 7.5525 18.5 7C18.5 6.4475 18.0525 6 17.5 6ZM12.5 7C9.74759 7 7.5 9.24759 7.5 12C7.5 14.7524 9.74759 17 12.5 17C15.2524 17 17.5 14.7524 17.5 12C17.5 9.24759 15.2524 7 12.5 7ZM12.5 8.5C14.4416 8.5 16 10.0584 16 12C16 13.9416 14.4416 15.5 12.5 15.5C10.5584 15.5 9 13.9416 9 12C9 10.0584 10.5584 8.5 12.5 8.5Z" fill="currentColor" /></svg>,
    //   alt: 'Instagram'
    // },
];

const Contact = () => {
    
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [messageCount, setMessageCount] = useState(0);
    const [isEnhancing, setIsEnhancing] = useState(false);
    const [loveCount, setLoveCount] = useState(6);
    const [isLoved, setIsLoved] = useState(false);
    const [loveLoading, setLoveLoading] = useState(true);
    const [messageLoading, setMessageLoading] = useState(true);

    useEffect(() => {
         emailjs.init(import.meta.env.VITE_EMAILJS_KEY);

        const savedIsLoved = localStorage.getItem('isLoved') === 'true';
        setIsLoved(savedIsLoved);

        // Fetch love count and message count from API
        fetch('/api/love')
            .then(res => res.json())
            .then(data => {
                setLoveCount(data.loveCount);
                setMessageCount(data.messageCount);
                setLoveLoading(false);
                setMessageLoading(false);
            })
            .catch(error => {
                console.error('Error fetching counts:', error);
                setLoveLoading(false);
                setMessageLoading(false);
            });
    }, []);

    const handleLove = async () => {
        if (!isLoved) {
            try {
                const response = await fetch('/api/love', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ type: 'love' }),
                });
                const data = await response.json();
                setLoveCount(data.loveCount);
                setIsLoved(true);
                localStorage.setItem('isLoved', 'true');
            } catch (error) {
                console.error('Error incrementing love count:', error);
            }
        }
    };

    // --- AI ENHANCE ---
    const handleEnhance = async () => {
    if (!formData.message.trim()) {
        console.warn("Please type a message first!");
        return;
    }

    setIsEnhancing(true);

    try {

        const apiKey = import.meta.env.VITE_OPENROUTER_KEY;
        if (!apiKey) {
    console.error("OpenRouter key missing");
    setIsEnhancing(false);
    return;
}

        const apiUrl = "https://openrouter.ai/api/v1/chat/completions";

        const response = await fetch(apiUrl, {
            method: "POST",
           headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`,
               "HTTP-Referer": window.location.origin,
                "X-Title": "Portfolio Contact AI",
            },
            body: JSON.stringify({
    model: "openrouter/auto",

    messages: [
        {
            role: "system",
            content: `Rewrite the following message into ONE single version that is:
- clear and concise
- polite and professional
- friendly and approachable
- natural and conversational
- occasionally include emojis (only if they feel natural)

⚠️ Do NOT explain, do NOT give multiple options, do NOT add formatting.
Just return the rewritten message itself.`,
        },
        {
            role: "user",
            content: formData.message,
        },
    ],
}),
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();

        const enhanced =
            data?.choices?.[0]?.message?.content?.trim() ||
            "Sorry, I couldn't enhance the message.";

        setFormData(prev => ({
            ...prev,
            message: enhanced
        }));

    } catch (error) {
        console.error("AI Enhance Error:", error);
    }

    setIsEnhancing(false);
};

    const labelClasses = "block text-zinc-400 text-sm font-medium mb-2";
    const textFieldClasses = "block outline-none w-full px-4 py-3 text-sm text-white bg-transparent rounded-lg border border-zinc-700 focus:border-sky-500 focus:ring-0 placeholder:text-zinc-500 transition-all duration-300 shadow-[0_0_8px_rgba(34,211,238,0.25)] focus:shadow-[0_0_15px_rgba(34,211,238,0.5)]";

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {

        await emailjs.send(
            "service_aiu749a",
            "template_akg4v1l",
            {
                name: formData.name,
                email: formData.email,
                message: formData.message,
                from_name: formData.name,
            }
        );

        const newCount = messageCount + 1;

        setMessageCount(newCount);

        localStorage.setItem(
            "messageCount",
            newCount.toString()
        );

        alert("Message sent successfully!");

        setFormData({
            name: "",
            email: "",
            message: "",
        });

    } catch (error) {

        console.error(error);

        alert("Failed to send message");
    }
};

    return (
        <section id="contact" className="px-4 pt-40 pb-12 sm:px-6 lg:px-8 w-full">
            <div className="mx-auto max-w-5xl">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                    <div className="flex flex-col h-full">
                        <div className="flex-grow">
                            <TypewriterHeading text="Contact me for collaboration" className="section-title tracking-tight" />
                            <p className="mt-6 text-lg leading-8 text-zinc-400 max-w-lg flex items-center gap-x-3">
                                <span className="relative flex h-2.5 w-2.5 translate-y-px">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.8)]"></span>
                                </span>
                                Available for new projects
                            </p>
                            <p className="mt-4 text-base text-zinc-400 flex items-center gap-x-3">
                                <span className="relative flex h-2.5 w-2.5 translate-y-px">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.8)]"></span>
                                </span>
                                Messages sent: <span className="font-semibold text-sky-400">{messageCount}</span>
                            </p>
                            <p className="mt-2 text-base text-zinc-400 flex items-center gap-x-3 cursor-pointer hover:text-green-400 transition-colors duration-300" onClick={handleLove}>
                                <svg 
                                    className={`w-8 h-15 ${isLoved ? 'fill-red-500' : 'stroke-current stroke-2'}`} 
                                    viewBox="0 0 24 24" 
                                    xmlns="http://www.w3.org/2000/svg"
                                    strokeWidth={isLoved ? 0 : 2}
                                    fill={isLoved ? 'currentColor' : 'none'}
                                >
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                                </svg>
                                {loveCount} Loves Achieved By the Viewers!
                            </p>

                        </div>
                        <div className="flex items-center gap-4 mt-8">
                            {socialLinks.map(({ href, icon, alt }, key) => (
                                <a
                                    key={key}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={alt}
                                    className="w-12 h-12 grid place-items-center text-zinc-300 ring-inset ring-1 ring-zinc-700 bg-transparent rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:bg-white/10 hover:text-white hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]"
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>

                   <form
                        className="w-full"
                        onSubmit={handleSubmit}
                    >
                        <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="name" className={labelClasses}>Name</label>
                                <input id="name" name="name" type="text" autoComplete="name" required placeholder="Lois Lane!!" className={textFieldClasses} value={formData.name} onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="email" className={labelClasses}>Email</label>
                                <input id="email" name="email" type="email" autoComplete="email" required placeholder="example@e-mail.com" className={textFieldClasses} value={formData.email} onChange={handleChange} />
                            </div>
                            <div className="sm:col-span-2 relative">
                                <label htmlFor="message" className={labelClasses}>Message</label>
                                <textarea id="message" name="message" placeholder="Hey Tanushri!!" required rows="4" className={`${textFieldClasses} resize-y min-h-32 pr-32`} value={formData.message} onChange={handleChange}></textarea>
                                <button
                                    type="button"
                                    onClick={handleEnhance}
                                    disabled={isEnhancing || !formData.message.trim()}
                                    className="absolute bottom-3 right-3 flex items-center justify-center gap-x-2 px-3 py-1.5 text-xs font-semibold text-sky-300 bg-sky-500/10 rounded-md border border-sky-500/30 hover:bg-sky-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                                    aria-label="Enhance message with AI"
                                >
                                    {isEnhancing ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-sky-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Enhancing...
                                        </>
                                    ) : (
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M9.09 9a3 3 0 0 1 5.83 1c0 1-1.5 3-3 3s-3-2-3-3" /><path d="M12 12v3" /><path d="M21 12a9 9 0 1 1-9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /></svg>
                                            Enhance with AI
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full mt-6 px-6 py-3 text-base font-semibold text-white bg-sky-500 rounded-lg shadow-md hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-sky-500 transition-colors duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};
export default Contact; 
