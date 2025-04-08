import Image from 'next/image';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-charcoal-1 dark:bg-[#121212]">
      <Image
        src="/icons/loading-circle.svg"
        alt="Loading..."
        width={70}
        height={70}
        className="animate-spin mb-7"
      />
      <p className="text-3xl font-extrabold text-rust-1 dark:text-gray-200">
        Loading
        <span className="dot-animation inline-block w-2">.</span>
        <span className="dot-animation inline-block w-2 delay-200">.</span>
        <span className="dot-animation inline-block w-2 delay-400">.</span>
      </p>

      <style jsx>{`
        .dot-animation {
          animation: blink 1.4s infinite;
          opacity: 0;
        }

        .dot-animation.delay-200 {
          animation-delay: 0.2s;
        }

        .dot-animation.delay-400 {
          animation-delay: 0.4s;
        }

        @keyframes blink {
          0%, 20% {
            opacity: 0;
          }
          30%, 100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
