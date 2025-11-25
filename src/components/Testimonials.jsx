const testimonials = [
  {
    name: "Sarah Chen",
    role: "Senior Developer",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
    content:
      "This AI-powered development platform has revolutionized how we write code. The intelligent suggestions save us hours every day.",
  },
  {
    name: "Marcus Rodriguez",
    role: "Tech Lead",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
    content:
      "The automated testing and debugging features are game-changers. We ship code faster and with more confidence than ever before.",
  },
  {
    name: "Emily Watson",
    role: "CTO",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
    content:
      "Our development velocity increased by 300% since adopting this platform. It's like having a senior developer pair programming with every team member.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-12 px-6 sm:py-18 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-start gap-10 lg:gap-12">
          {/* Left Side  */}
          <div className="text-center lg:text-left mb-15 sm:mb-12">
            <h3 className="text-6xl sm:text-4xl mb-6 sm:mb-9 font-bold leading-tight">
              <span className="bg-linear-to-b from-white to-gray-300 bg-clip-text text-transparent lg:text-right">
                What devolopers are saying about us
              </span>
              <br />
            </h3>
            <p className="max-w-xl mx-auto text-gray-400 text-xl">
              Everything you need to build,test ans deploy applications whith
              AI-powered development tools.
            </p>
          </div>
          {/* Right Side */}
          <div className="flex-1 space-y-5">
            {testimonials.map((testi, ind) => {
              return (
                <div key={ind}>
                  <div>
                    <div className="flex gap-2 lg:gap-4">
                      <div className="shrink-0 text-3xl sm:text-4xl lg:text-5xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        "
                      </div>
                      <div>
                        <div className="mb-4 sm:mb-5">
                          <p className="text-sm leading-relaxed">
                            {testi.content}
                          </p>
                        </div>
                        <div className="mb-4 sm:mb-5 flex space-x-2 sm:space-x-2.5">
                          <img
                            src={testi.image}
                            alt={testi.role}
                            className="size-10 rounded-full object-cover"
                          />
                          <div className="leading-1">
                            <h4 className="font-bold text-sm">{testi.name}</h4>
                            <span className="text-sm text-gray-400">
                              {testi.role}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
