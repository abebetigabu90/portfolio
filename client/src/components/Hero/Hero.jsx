import { useEffect, useState } from "react";
import { getProfile } from "../../services/profileApi";

function Hero() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await getProfile();
        setProfile(data);
      } catch (error) {
        console.error(error);
        setError("Unable to load profile.");
      }
    };

    loadProfile();
  }, []);

  if (error) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </section>
    );
  }

  if (!profile) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="text-center">

        <p className="text-lg text-blue-600 font-semibold">
          👋 Hello, I'm
        </p>

        <h1 className="mt-4 text-6xl font-bold text-gray-900">
          {profile.name}
        </h1>

        <h2 className="mt-4 text-3xl text-gray-600">
          {profile.title}
        </h2>

        <p className="mt-4 text-lg text-gray-500">
          {profile.location}
        </p>

      </div>
    </section>
  );
}

export default Hero;