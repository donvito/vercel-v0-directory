import { auth } from "../auth"
import Link from "next/link"
import { SignOut } from "@/components/SignOut"
import { SignIn } from "@/components/SignIn";

export default async function Header() {
    const session = await auth()

    return (
        <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl" href="/">LaunchStack</a>
        </div>
        <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    {!session ? (
                        <>
                            <li><SignIn/></li>
                        </>
                    ) : (
                        <>
                            <li><Link href="/product">Product</Link></li>
                            <li><Link href="/blogs">Blogs</Link></li>
                            <li><Link href="/forms/animated">Forms</Link></li>
                            <li>
                                <details>
                                    <summary>
                                        {session.user?.name || 'Account'}
                                    </summary>
                                    <ul className="bg-base-100 rounded-t-none p-2">
                                        <li><span>{session.user?.email}</span></li>
                                        <li><Link href="/settings">Settings</Link></li>
                                    </ul>
                                </details>
                            </li>
                            <li><SignOut /></li>
                        </>
                    )}
                </ul>
        </div>
      </div>
    );
  }
  
