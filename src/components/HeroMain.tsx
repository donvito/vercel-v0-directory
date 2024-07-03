import Image from "next/image";

export default function HeroMain() {
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <Image
                    src="/images/launchstack.jpeg"
                    className="max-w-sm rounded-lg shadow-2xl"
                    width={500} height={500} alt={""}/>
          <div>
            <h1 className="text-5xl font-bold">Quickly Launch your Startup</h1>
            <p className="py-6">
            LaunchStack is going to be a NextJS starter kit that I hope will eventually have everything needed to build a startup or website with dynamic features quickly. 
            But right now, it&apos;s more of a dream and a learning goal than a finished product.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
  }
  