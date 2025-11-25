import { Check, Stars } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "29.99",
    description: "Perfect for individuals and small teams",
    features: [
      "Up to 5 team members",
      "10GB storage",
      "Basic analytics",
      "Email support",
      "API access",
      "Mobile app",
    ],
    mostPopular: false,
  },
  {
    name: "Professional",
    price: "79.99",
    description: "Best for growing businesses",
    features: [
      "Up to 25 team members",
      "100GB storage",
      "Advanced analytics",
      "Priority support",
      "API access",
      "Mobile app",
      "Custom integrations",
      "Advanced security",
    ],
    mostPopular: true,
  },
  {
    name: "Enterprise",
    price: "199.99",
    description: "For large organizations",
    features: [
      "Unlimited team members",
      "Unlimited storage",
      "Enterprise analytics",
      "24/7 phone support",
      "API access",
      "Mobile app",
      "Custom integrations",
      "Advanced security",
      "Dedicated account manager",
      "Custom SLA",
    ],
    mostPopular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-12 px-6 sm:py-18 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-15 sm:mb-12">
          <h2 className="text-6xl sm:text-4xl mb-6 sm:mb-9 font-bold leading-tight">
            <span className="bg-linear-to-b from-white to-gray-300 bg-clip-text text-transparent ">
              Simple, Transparent
            </span>
            <br />
            <span className="bg-linear-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Pricing Plans
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-gray-400 text-xl">
            Choose the perfect plan for your needs. All plans include a 14-day
            free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-13 md:gap-9 lg:gap-8">
          {plans.map((plan, key) => {
            return (
              <div
                key={key}
                className={`relative bg-slate-900 backdrop-blur-xl border rounded-xl p-6 sm:rounded-2xl flex flex-col ${
                  plan.mostPopular
                    ? "border-blue-500 shadow-2xl shadow-white/10 lg:scale-105"
                    : "border-slate-700 hover:border-slate-600"
                }`}
              >
                {plan.mostPopular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="flex items-center space-x-1.5 sm:space-x-2 text-xs sm:text-sm  font-semibold bg-linear-to-b from-bue-500 to-cyan-500 px-2 py-1 rounded-full shadow-lg">
                      <Stars className="w-3 h-3 fill-white" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                {/* Body  */}
                <div className="text-center mb-5 sm:mb-6">
                  <h2 className="text-2xl sm:text-3xl mb-2 sm:mb-3">
                    {plan.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3">
                    {plan.description}
                  </p>
                  <div className="flex items-center justify-center">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-sm sm:text-base text-gray-300 ml-1 sm:ml-2">
                      / Month
                    </span>
                  </div>
                </div>

                <ul className="space-y-1 sm:space-y-1.5 mb-5 sm:mb-7">
                  {plan.features.map((feature, key) => {
                    return (
                      <li key={key} className="text-gray-400">
                        <div className="flex space-x-1.5 items-center">
                          <Check className="w-4 sm:w-5 h-4 sm:h-5 border rounded-full" />
                          <span className="text-xs sm:text-sm">{feature}</span>
                        </div>
                      </li>
                    );
                  })}
                </ul>

                <button
                  className={`group w-full lg:w-auto ${
                    plan.mostPopular
                      ? "bg-linear-to-b from-blue-500 to-blue-300"
                      : "bg-white/10 border border-white/30 hover:border-white/10"
                  } font-semibold sm:font-base flex items-center  justify-center space-x-1 px-5 py-2 rounded-xl mb-3 trasition-all hover:scale-103 duration-200 slide-in-from-bottom`}
                >
                  <span> Get Started</span>
                </button>
              </div>
            );
          })}
        </div>
        {/* Custom plane */}
        <div className="mt-5 text-center sm:mt-10">
          <p className=" text-gray-400 text-base sm:text-sm">
            Need a custom Plane?
            <a className="text-blue-400 hover:text-blue-300" href="#">
              Contact our sales team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
