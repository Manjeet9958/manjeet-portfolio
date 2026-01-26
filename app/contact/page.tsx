import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Card from "@/components/Card";

export default function ContactPage() {
  return (
    <div className="py-14">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let’s work together"
          subtitle="Open to international opportunities + freelance support for U.S. solar permit plan sets."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold text-slate-100">Send a message</h3>
            <p className="mt-2 text-sm text-slate-300">
              This form is a simple front-end layout. You can connect it to Formspree, Google Forms, or a backend later.
            </p>

            <form className="mt-5 space-y-4">
              <div>
                <label className="text-sm text-slate-300">Name</label>
                <input
                  className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-slate-100 outline-none focus:border-orange-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm text-slate-300">Email</label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-slate-100 outline-none focus:border-orange-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="text-sm text-slate-300">Message</label>
                <textarea
                  className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-slate-100 outline-none focus:border-orange-500"
                  placeholder="Tell me about your solar permit project..."
                  rows={5}
                />
              </div>

              <button
                type="button"
                className="w-full rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white hover:bg-orange-600"
              >
                Send Message
              </button>
            </form>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-slate-100">Contact details</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <p>
                <span className="font-semibold text-slate-200">Location:</span> India (Remote for U.S. projects)
              </p>
              <p>
                <span className="font-semibold text-slate-200">Availability:</span> Open to freelance + international roles
              </p>
              <p>
                <span className="font-semibold text-slate-200">Email:</span>{" "}
                <a className="text-orange-400 hover:underline" href="mailto:manjeet@example.com">
                  manjeet@example.com
                </a>
              </p>
              <p>
                <span className="font-semibold text-slate-200">LinkedIn:</span>{" "}
                <a
                  className="text-orange-400 hover:underline"
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/manjeet-singh-bisht
                </a>
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-slate-300">
                <span className="font-semibold text-slate-100">Quick pitch:</span>{" "}
                5000+ plan sets • 10+ U.S. states • 24–48h turnaround • AHJ compliance focused.
              </p>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
}
