import React, { useState } from 'react';
import { SignIn } from '@/components/SignIn';
import { auth } from "@/auth";
import { SignOut } from '@/components/SignOut';

export default async function LoginSocial() {

    const session = await auth()

    if (session?.user) {
        return (
          UserProfileCard({ session })
        )
    }

    return (
        <div className="min-h-[70vh] bg-base-200 flex items-center">
            <div className="card mx-auto w-full max-w-xs shadow-2xl bg-base-100">
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold mb-2">You need to sign in</h2>
                    <SignIn />
                </div>
            </div>
        </div>
    );
}

export const UserProfileCard = ({ session }: { session: any }) => {
    return (
        <>
            <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
                    <div className="card w-full max-w-sm shadow-2xl bg-base-10">
                        <div className="flex flex-col items-center text-center">
                            <h2 className="card-title text-2xl font-bold mb-2">
                                {session?.user?.name || 'Welcome, User!'}
                            </h2>
                            <p className="text-base-content/70 mb-4">
                                {session?.user?.email || 'No email provided'}
                            </p>
                        </div>
                        <div className="card-actions justify-center mt-6">
                            <SignOut />
                        </div>
                    </div>
                </div>
        </>
    )
}
