import React from 'react';
import Image from 'next/image'

const ContributePage = () => {
    return (
        <div className="container mx-auto px-4 py-8 text-center">
            <h1 className="text-5xl font-bold mb-4">Share your v0 generation</h1>
            <div className="p-4">
                <h2 className="text-2xl mb-4">Get the link from <a href="https://v0.dev" target="_blank" className="text-blue-500 underline">v0.dev</a></h2>
                <Image src="/images/sharev0.png" alt="Share v0" layout="fixed" width={500} height={300} className="mb-6 mx-auto border-4 border-gray-700" />                        
            </div>
            <div className="p-4">
                <h2 className="text-2xl mb-4">Then tweet the generation link with <strong>#v0share</strong></h2>
                <br/>
                <Image src="/images/v0share.png" alt="Tweet the link" layout="fixed" width={500} height={300} className="mb-6 mx-auto border-4 border-gray-700" />
            </div>
        </div>
    );
};

export default ContributePage;
