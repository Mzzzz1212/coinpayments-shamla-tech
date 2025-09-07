import { Button } from "@/components/ui/button";

export default function Features() {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center">
          <h3 className="xl:text-7xl text-5xl font-light">
            KEY <span className="font-bold">FEATURES</span>
          </h3>
          <div className="grid grid-cols-1 xl:grid-cols-3 max-w-7xl gap-6 p-6 xl:mt-28 mt-12">
            <div className="bg-[#080e1b] text-white p-8">
              <h4 className="uppercase xl:text-4xl text-2xl font-semibold">
                Multi-User Account Delegation
              </h4>
              <p className="xl:mt-6 mt-3 text-white/70">
                Secure management, streamlined. New permissions system enables
                shared access while keeping your account safe. Empower larger
                teams with confidence and control.
              </p>
            </div>
            <div className="bg-[#010101] outline-1 outline-white text-white p-8">
              <h4 className="uppercase xl:text-4xl text-2xl font-semibold">
                mpc-backed node infrastructure
              </h4>
              <p className="xl:mt-6 mt-3 text-white/70">
                Next-gen security, built in. With multi-party computation (MPC),
                private keys are never stored in one place or exposed in full -
                even during signing. Each transaction is authorized by multiple
                independent nodes working together, making it nearly impossible
                to hack or compromise. This ensures secure, decentralized
                signing without a single point of failure.
              </p>
            </div>
            <div className="bg-[#080e1b] text-white p-8">
              <h4 className="uppercase xl:text-4xl text-2xl font-semibold">
                in-house blockchain intelligence, evolved
              </h4>
              <p className="xl:mt-6 mt-3 text-white/70">
                Track funds, assess risk, and detect fraud with precision. Our
                proprietary system analyzes transactions in real time - flagging
                tainted or darknet-linked assets before settlement. With 98%
                mempool-level confirmation, checkout becomes instant, secure and
                seamless.
              </p>
            </div>
          </div>
          <div className="xl:mt-32 mt-12 flex flex-col gap-6 items-center justify-center">
            <p className="xl:text-xl text-lg p-4 text-center">
              Connect with our sales team to explore tailored crypto payment
              solutions for your buisness.
            </p>
            <Button
              variant="secondary"
              className="rounded-full hover:bg-white/90 transition-colors text-xl font-semibold xl:mt-2 mt-0 py-6 px-12"
              size="lg"
            >
              Book a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
