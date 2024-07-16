import Image from 'next/image';
import { auth } from "../auth"
import {redirect} from "next/navigation"

export default async function ProductDetailSection() {
    const session = await auth()

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12">
            {!session ? (
                redirect("/login")
            ) : (
                <>
                    <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12 w-full">
                        <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2">
                            <div className="carousel w-full h-96">
                                <div className="carousel-item w-full">
                                    <Image src="/images/launchstack.jpeg" className="w-full" alt="Product 1"
                                        height={500} width={500} />
                                </div>
                                <div className="carousel-item w-full">
                                    <Image src="/images/launchstack.jpeg" className="w-full" alt="Product 2"
                                        height={500} width={500} />
                                </div>
                                <div className="carousel-item w-full">
                                    <Image src="/images/launchstack.jpeg" className="w-full" alt="Product 3"
                                        height={500} width={500} />
                                </div>
                            </div>
                            <div className="flex justify-center mt-4 space-x-2">
                                <div className="w-16 h-16">
                                    <Image src="/images/launchstack.jpeg" className="w-full" alt="Thumbnail 1"
                                        height={64} width={64} />
                                </div>
                                <div className="w-16 h-16">
                                    <Image src="/images/launchstack.jpeg" className="w-full" alt="Thumbnail 2"
                                        height={64} width={64} />
                                </div>
                                <div className="w-16 h-16">
                                    <Image src="/images/launchstack.jpeg" className="w-full" alt="Thumbnail 3"
                                        height={64} width={64} />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2">
                            <h1 className="text-4xl font-bold mb-4">Acme Baby Onesie</h1>
                            <p className="text-2xl text-blue-600 mb-4">$10.00 USD</p>
                            <div className="mb-6 w-full">
                                <h2 className="text-xl font-semibold mb-2">SIZE</h2>
                                <div className="flex space-x-2">
                                    <button className="btn btn-outline">NB</button>
                                    <button className="btn btn-outline">3M</button>
                                    <button className="btn btn-outline">6M</button>
                                    <button className="btn btn-outline">12M</button>
                                    <button className="btn btn-outline">18M</button>
                                    <button className="btn btn-outline">24M</button>
                                </div>
                            </div>
                            <div className="mb-6 w-full">
                                <h2 className="text-xl font-semibold mb-2">COLOR</h2>
                                <div className="flex space-x-2">
                                    <button className="btn btn-outline">Black</button>
                                    <button className="btn btn-outline">White</button>
                                    <button className="btn btn-outline">Beige</button>
                                </div>
                            </div>
                            <p className="mb-4 w-full">Short sleeve 5-oz, 100% combed ringspun cotton onesie</p>
                            <button className="btn btn-primary w-full">Add To Cart</button>
                        </div>
                    </div>
                </>)
            }
        </div>
    );
};
