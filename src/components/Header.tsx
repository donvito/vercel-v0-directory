import { auth } from "../auth"
import Link from "next/link"
import { SignOut } from "@/components/SignOut"

export default async function Header() {
    const session = await auth()

    return (
        <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-med" href="/">Curated v0</a>
        </div>
        <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    {!session ? (
                        <>
                            <li><Link href="/forms/animated">Contribute</Link></li>
                            <li><Link href="https://donvitocodes.com">Visit my website</Link></li>   
                        </>
                    ) : (
                        <>  
                            {/* <li><Link href="/">Generations</Link></li> */}
                            <li><Link href="/forms/animated">Contribute</Link></li>   
                            <li>
                                <details>
                                    <summary>
                                        {session.user?.name || 'Account'}
                                    </summary>
                                    <ul className="bg-base-100 rounded-t-none p-2">
                                        <li><span>{session.user?.email}</span></li>
                                        <li><Link href="/settings">Settings</Link></li>
                                        <li><SignOut /></li>
                                    </ul>
                                </details>
                            </li>                           
                        </>
                    )}
                </ul>
        </div>
      </div>
    );
  }
