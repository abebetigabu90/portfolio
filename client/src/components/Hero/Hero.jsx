// // import { useEffect, useState } from "react";
// // import { getProfile } from "../../services/profileApi";

// // function Hero() {
// //   const [profile, setProfile] = useState(null);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const loadProfile = async () => {
// //       try {
// //         const data = await getProfile();
// //         setProfile(data);
// //       } catch (error) {
// //         console.error(error);
// //         setError("Unable to load profile.");
// //       }
// //     };

// //     loadProfile();
// //   }, []);

// //   if (error) {
// //     return (
// //       <section className="min-h-screen flex items-center justify-center">
// //         <p className="text-red-500">{error}</p>
// //       </section>
// //     );
// //   }

// //   if (!profile) {
// //     return (
// //       <section className="min-h-screen flex items-center justify-center">
// //         <p className="text-gray-500">Loading...</p>
// //       </section>
// //     );
// //   }

// //   return (
// //     <section className="min-h-screen flex items-center justify-center bg-slate-100">
// //       <div className="text-center">

// //         <p className="text-lg text-blue-600 font-semibold">
// //           👋 Hello, I'm
// //         </p>

// //         <h1 className="mt-4 text-6xl font-bold text-gray-900">
// //           {profile.name}
// //         </h1>

// //         <h2 className="mt-4 text-3xl text-gray-600">
// //           {profile.title}
// //         </h2>

// //         <p className="mt-4 text-lg text-gray-500">
// //           {profile.location}
// //         </p>

// //       </div>
// //     </section>
// //   );
// // }

// // export default Hero;







// import { useEffect, useState } from "react";
// import { getProfile } from "../../services/profileApi";

// function Hero() {
//   const [profile, setProfile] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const loadProfile = async () => {
//       try {
//         const data = await getProfile();
//         setProfile(data);
//       } catch (error) {
//         console.error(error);
//         setError("Unable to load profile.");
//       }
//     };

//     loadProfile();
//   }, []);

//   if (error) {
//     return (
//       <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950">
//         <div className="bg-red-500/10 backdrop-blur-sm border border-red-500/20 rounded-2xl px-8 py-6">
//           <p className="text-red-400 font-medium text-lg">{error}</p>
//         </div>
//       </section>
//     );
//   }

//   if (!profile) {
//     return (
//       <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950">
//         <div className="flex items-center gap-4">
//           <div className="w-5 h-5 border-3 border-blue-400/30 border-t-blue-400 rounded-full animate-spin" />
//           <p className="text-blue-200/70 font-medium text-lg">Loading profile...</p>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950">
//       {/* Animated background - subtle and professional */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl" />
        
//         {/* Subtle grid */}
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
//       </div>

//       {/* Main content */}
//       <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
//         {/* Status Badge */}
//         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6 animate-fade-in">
//           <span className="relative flex h-2 w-2">
//             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
//             <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
//           </span>
//           <span className="text-sm text-blue-200/80 font-medium">Available for opportunities</span>
//         </div>

//         {/* Greeting */}
//         <p className="text-base text-blue-300 font-medium tracking-wide mb-2 animate-fade-in-up">
//           👋 Hello, I'm
//         </p>

//         {/* Name */}
//         <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight animate-fade-in-up delay-100">
//           {profile.name}
//         </h1>

//         {/* Title */}
//         <div className="relative inline-block mt-3 animate-fade-in-up delay-200">
//           <h2 className="text-xl md:text-2xl font-light text-blue-200/90">
//             {profile.title}
//           </h2>
//           <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
//         </div>

//         {/* Location */}
//         <div className="flex items-center justify-center gap-2 mt-4 text-blue-200/60 animate-fade-in-up delay-300">
//           <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//           </svg>
//           <span className="text-sm">{profile.location}</span>
//         </div>

//         {/* Simple CTA - Just contact */}
//         <div className="mt-8 animate-fade-in-up delay-400">
//           <a
//             href="#contact"
//             className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
//           >
//             Get in Touch
//           </a>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
//         <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
//           <div className="w-1 h-2 rounded-full bg-white/40 animate-scroll" />
//         </div>
//       </div>

//       <style dangerouslySetInnerHTML={{
//         __html: `
//           @keyframes fade-in {
//             from { opacity: 0; transform: translateY(-10px); }
//             to { opacity: 1; transform: translateY(0); }
//           }
//           @keyframes fade-in-up {
//             from { opacity: 0; transform: translateY(15px); }
//             to { opacity: 1; transform: translateY(0); }
//           }
//           @keyframes scroll {
//             0% { transform: translateY(0); opacity: 1; }
//             100% { transform: translateY(6px); opacity: 0; }
//           }
//           .animate-fade-in { animation: fade-in 0.6s ease-out forwards; }
//           .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; opacity: 0; }
//           .delay-100 { animation-delay: 0.1s; }
//           .delay-200 { animation-delay: 0.2s; }
//           .delay-300 { animation-delay: 0.3s; }
//           .delay-400 { animation-delay: 0.4s; }
//           .animate-scroll { animation: scroll 1.5s ease-in-out infinite; }
//           .delay-1000 { animation-delay: 1s; }
//         `
//       }} />
//     </section>
//   );
// }

// export default Hero;





import { useEffect, useState } from "react";
import { getProfile } from "../../services/profileApi";

function Hero() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await getProfile();

        // Profile exists
        if (data) {
          setProfile(data);
        }
      } catch (error) {
        console.error("Error loading profile:", error);

        // Profile does not exist
        if (error.response?.status === 404) {
          setProfile(null);
          setError(null);
        } else {
          setError("Unable to load profile.");
        }
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  // --------------------------------------------------
  // Loading
  // --------------------------------------------------

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950">
        <p className="text-blue-200/70 font-medium text-lg">
          Loading...
        </p>
      </section>
    );
  }

  // --------------------------------------------------
  // API Error
  // --------------------------------------------------

  if (error) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950">
        <div className="bg-red-500/10 backdrop-blur-sm border border-red-500/20 rounded-2xl px-8 py-6">
          <p className="text-red-400 font-medium text-lg">
            {error}
          </p>
        </div>
      </section>
    );
  }

  // --------------------------------------------------
  // Profile does not exist
  // --------------------------------------------------

  if (!profile) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950">

        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">

          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />

          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl" />

          {/* Subtle grid */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />

        </div>

        {/* Fallback content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

          <p className="text-base text-blue-300 font-medium tracking-wide mb-2">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
            Abebe Tigabu
          </h1>

          <h2 className="mt-4 text-xl md:text-2xl font-light text-blue-200/90">
            Full Stack Developer
          </h2>

          <p className="mt-4 text-sm text-blue-200/60">
            Welcome to my portfolio.
          </p>

          <div className="mt-8">
            <a
              href="#contact"
              className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>

        </div>

      </section>
    );
  }

  // --------------------------------------------------
  // Profile exists
  // --------------------------------------------------

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950">

      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />

        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl" />

        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />

      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6 animate-fade-in">

          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>

          <span className="text-sm text-blue-200/80 font-medium">
            Available for opportunities
          </span>

        </div>

        {/* Greeting */}
        <p className="text-base text-blue-300 font-medium tracking-wide mb-2 animate-fade-in-up">
          👋 Hello, I'm
        </p>

        {/* Name */}
        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight animate-fade-in-up delay-100">
          {profile.name}
        </h1>

        {/* Title */}
        <div className="relative inline-block mt-3 animate-fade-in-up delay-200">

          <h2 className="text-xl md:text-2xl font-light text-blue-200/90">
            {profile.title}
          </h2>

          <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />

        </div>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 mt-4 text-blue-200/60 animate-fade-in-up delay-300">

          <svg
            className="w-4 h-4 text-blue-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />

            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>

          <span className="text-sm">
            {profile.location}
          </span>

        </div>

        {/* CTA */}
        <div className="mt-8 animate-fade-in-up delay-400">

          <a
            href="#contact"
            className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
          >
            Get in Touch
          </a>

        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">

        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">

          <div className="w-1 h-2 rounded-full bg-white/40 animate-scroll" />

        </div>

      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(15px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes scroll {
            0% {
              transform: translateY(0);
              opacity: 1;
            }

            100% {
              transform: translateY(6px);
              opacity: 0;
            }
          }

          .animate-fade-in {
            animation: fade-in 0.6s ease-out forwards;
          }

          .animate-fade-in-up {
            animation: fade-in-up 0.6s ease-out forwards;
            opacity: 0;
          }

          .delay-100 {
            animation-delay: 0.1s;
          }

          .delay-200 {
            animation-delay: 0.2s;
          }

          .delay-300 {
            animation-delay: 0.3s;
          }

          .delay-400 {
            animation-delay: 0.4s;
          }

          .animate-scroll {
            animation: scroll 1.5s ease-in-out infinite;
          }

          .delay-1000 {
            animation-delay: 1s;
          }
        `
      }} />

    </section>
  );
}

export default Hero;