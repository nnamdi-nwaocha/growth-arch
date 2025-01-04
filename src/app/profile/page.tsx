"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Profile - Growth Arc",
  description: "An interactive platform to learn and teach skills effectively.",
  icons: {
    icon: "/icons/favicon.png", // Path relative to the public folder
  },
};

interface UserProfile {
  email: string;
  firstname: string;
  lastname: string;
  bio: string;
  profile_picture_url: string | null;
}

export default function Profile() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("/api/profile");
        if (response.ok) {
          const data = await response.json();
          setProfile(data);
        } else {
          setError(`Failed to fetch profile: ${response.statusText}`);
        }
      } catch (err) {
        setError(
          `An error occurred: ${
            err instanceof Error ? err.message : String(err)
          }`
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (isLoading) {
    return (
      <div className="flex bg-white justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-400"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-red-50 border-l-4 border-red-400 p-4 max-w-md w-full">
          <p className="text-red-700">{error}</p>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 max-w-md w-full">
          <p className="text-yellow-700">No profile data available.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container bg-white mx-auto px-4 py-8 flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8 space-y-6">
          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <Image
                src={profile.profile_picture_url || "/icons/placeholderpfp.png"}
                alt="Profile picture"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              {profile.firstname} {profile.lastname}
            </h2>
            <p className="mt-2 text-sm text-gray-600">{profile.email}</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Bio</h3>
            <p className="text-gray-600 break-words">{profile.bio}</p>
          </div>
          <div className="pt-6 border-t border-gray-200">
            <button
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              onClick={() => {
                /* Add edit profile functionality */
              }}
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
