export default function Header() {
    return (
        <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">LaunchStack</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><a>Login</a></li>
            <li>
              <details>
                <summary>Account</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li><a>Settings</a></li>
                  <li><a>Log out</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  