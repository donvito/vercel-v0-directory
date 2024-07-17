import React from 'react';
import { Rocket, Terminal, Code } from 'lucide-react';

const InstructionsSectionCode = () => {
  return (
    <div className="bg-base-200 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-16">
          Build using <span className="text-primary">Launch</span>Stack
        </h1>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Description Section */}
          <div className="lg:w-1/2">
            <div className="prose lg:prose-lg">
              <h2 className="text-3xl font-semibold mb-6 flex items-center">
                <Rocket className="mr-2 text-primary" />
                Quick Start Guide
              </h2>
              <p className="lead text-lg mb-6">
                Get your Next.js project up and running in minutes with LaunchStack. 
                Follow these simple steps to kickstart your development:
              </p>
              <ol className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-block bg-primary text-primary-content rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1">1</span>
                  Ensure Node.js is installed on your system.
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-primary text-primary-content rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1">2</span>
                  Open your terminal or command prompt.
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-primary text-primary-content rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1">3</span>
                  Run the LaunchStack command (see code block).
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-primary text-primary-content rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1">4</span>
                  Follow the prompts to customize your setup.
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-primary text-primary-content rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1">5</span>
                  Navigate to your new project directory.
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-primary text-primary-content rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1">6</span>
                  Start your development server and begin coding!
                </li>
              </ol>
              <div className="alert alert-success mt-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>LaunchStack handles the initial setup, so you can focus on building your app right away!</span>
              </div>
            </div>
          </div>

          {/* Code Block Section */}
          <div className="lg:w-1/2">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-2xl mb-6 flex items-center">
                  <Terminal className="mr-2 text-primary" />
                  Installation Commands
                </h3>
                <div className="mockup-code">
                  <pre data-prefix="$"><code>npx create-next-app@latest my-app \</code></pre>
                  <pre data-prefix=""><code>  --use-npm \</code></pre>
                  <pre data-prefix=""><code>  --example &quot;https://github.com/LaunchStack/next-template&quot;</code></pre>
                </div>
                <h4 className="text-xl mt-8 mb-4 flex items-center">
                  <Code className="mr-2 text-primary" />
                  Start Development Server
                </h4>
                <div className="mockup-code">
                  <pre data-prefix="$"><code>cd my-app</code></pre>
                  <pre data-prefix="$"><code>npm run dev</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructionsSectionCode;
