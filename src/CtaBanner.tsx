export default function CtaBanner(): React.ReactNode {
  return (
    <section className="px-6 py-10 lg:px-10">
      <div className="mx-auto max-w-6xl rounded-3xl bg-[#452140] px-8 py-14 text-center sm:px-16">
        <h2 className="text-2xl font-bold leading-snug text-white sm:text-3xl">
          Grade Faster, Not Harder
          <br />
          Let Automation Handle the Busywork
        </h2>
        <a
          href="/get-started"
          className="mt-7 inline-block rounded-full bg-[#F5BC0F] px-7 py-3 text-sm font-semibold text-[#2B1330] transition-transform hover:scale-105"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}