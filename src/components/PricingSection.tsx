export default function PricingSection() {
  return (
    <div className="bg-base-200 py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <h3 className="card-title text-2xl font-bold">Basic</h3>
              <p className="text-4xl font-bold my-4">$9.99<span className="text-xl font-normal">/month</span></p>
              <ul className="list-disc list-inside text-left mb-6">
                <li>10GB Storage</li>
                <li>2 Users</li>
                <li>Basic Support</li>
              </ul>
              <div className="card-actions">
                <button className="btn btn-primary">Choose Plan</button>
              </div>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="card bg-primary text-primary-content shadow-xl">
            <div className="card-body items-center text-center">
              <h3 className="card-title text-2xl font-bold">Pro</h3>
              <p className="text-4xl font-bold my-4">$29.99<span className="text-xl font-normal">/month</span></p>
              <ul className="list-disc list-inside text-left mb-6">
                <li>50GB Storage</li>
                <li>5 Users</li>
                <li>Priority Support</li>
                <li>Advanced Features</li>
              </ul>
              <div className="card-actions">
                <button className="btn btn-secondary">Choose Plan</button>
              </div>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <h3 className="card-title text-2xl font-bold">Enterprise</h3>
              <p className="text-4xl font-bold my-4">$99.99<span className="text-xl font-normal">/month</span></p>
              <ul className="list-disc list-inside text-left mb-6">
                <li>Unlimited Storage</li>
                <li>Unlimited Users</li>
                <li>24/7 Premium Support</li>
                <li>Custom Features</li>
                <li>Analytics Dashboard</li>
              </ul>
              <div className="card-actions">
                <button className="btn btn-primary">Choose Plan</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};