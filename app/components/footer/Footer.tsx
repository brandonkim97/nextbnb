'use client';

import { useRouter } from "next/navigation";
import Image from "next/image";

const Footer = () => {
    const router = useRouter();

    return ( 
        <div className="flex flex-row w-full z-10 mt-6 bg-gray-50">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="flex justify-center md:items-center md:justify-between">
                    <Image 
                        onClick={() => router.push('/')} 
                        alt="Logo"
                        className="hidden md:block cursor-pointer"
                        height="100"
                        width="150"
                        src="/images/logo.png"
                    />
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Contact</a>
                        </li>
                        <li>
                            <a href="https://nextjs.org/" className="hover:underline me-4 md:me-6">Next.js</a>
                        </li>
                        <li>
                            <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400"><a href="https://nextbnb-six.vercel.app/" className="hover:underline">Nextbnb</a>. This is a personal website created for testing purposes.</span>
            </div>
        </div>
    );
}
 
export default Footer;