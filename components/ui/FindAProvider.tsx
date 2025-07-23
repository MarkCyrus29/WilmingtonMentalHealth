"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "./Button";
import { teamData } from "@/app/data/teamData";

interface Provider {
  id: string;
  name: string;
  specialties: string;
  insurance: string[];
}

export default function ProviderSearch() {
  const [name, setName] = useState<string>("");
  const [specialty, setSpecialty] = useState<string>("");
  const [insurance, setInsurance] = useState<string>("");
  const [filteredProviders, setFilteredProviders] = useState<Provider[]>([]);
  const [hasSearched, setHasSearched] = useState<boolean>(false);

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const results = teamData.filter((provider: Provider) => {
      const nameMatch = provider.name
        .toLowerCase()
        .includes(name.toLowerCase());

      const specialtyMatch = provider.specialties
        ?.toLowerCase()
        .includes(specialty.toLowerCase());

      const insuranceMatch = provider.insurance.some((ins) =>
        ins.toLowerCase().includes(insurance.toLowerCase())
      );

      return nameMatch && specialtyMatch && insuranceMatch;
    });

    setFilteredProviders(results);
    setHasSearched(true);

    if (results.length === 1) {
      router.push(`/our-team/${results[0].id}`);
    }
  };

  const allInsurances = Array.from(
    new Set(teamData.flatMap((member: Provider) => member.insurance))
  );

  const allSpecialties = Array.from(
    new Set(
      teamData.flatMap(
        (member: Provider) =>
          member.specialties?.split(",").map((s) => s.trim()) || []
      )
    )
  );

  return (
    <div className="w-screen h-auto py-10 pb-12 text-center items-center flex flex-col justify-center bg-primary/65 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[10px] border-t border-t-[rgba(255,255,255,0.18)]">
      <div className="w-[75%] flex flex-col items-center">
        <h2 className="text-xl font-semibold mb-4 !text-background">
          Find a Provider
        </h2>
        <form
          className="w-full flex flex-col sm:flex-row items-center gap-4 flex-wrap"
          onSubmit={handleSearch}
        >
          {/* Name Input */}
          <div className="relative flex-1 min-w-[200px]">
            <input
              type="text"
              list="name"
              placeholder="Search by name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-12 py-3 rounded-lg border border-background placeholder:text-background font-semibold focus:ring-2 focus:ring-primary focus:outline-none text-base text-background"
            />
            <datalist id="name">
              {teamData.map((member: Provider) => (
                <option key={member.id} value={member.name} />
              ))}
            </datalist>
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              🔍
            </span>
          </div>

          {/* Specialty Input */}
          <div className="relative flex-1 min-w-[200px]">
            <input
              type="text"
              list="specialties"
              placeholder="Search by specialty"
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              className="w-full px-12 py-3 rounded-lg border border-background placeholder:text-background font-semibold focus:ring-2 focus:ring-primary focus:outline-none text-base text-background"
            />
            <datalist id="specialties">
              {allSpecialties.map((spec) => (
                <option key={spec} value={spec} />
              ))}
            </datalist>

            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              🧠
            </span>
          </div>

          {/* Insurance Input */}
          <div className="relative flex-1 min-w-[200px]">
            <input
              type="text"
              list="insurances"
              placeholder="Search by insurance"
              value={insurance}
              onChange={(e) => setInsurance(e.target.value)}
              className="w-full px-12 py-3 rounded-lg border border-background placeholder:text-background font-semibold focus:ring-2 focus:ring-primary focus:outline-none text-base text-background"
            />
            <datalist id="insurances">
              {allInsurances.map((ins) => (
                <option key={ins} value={ins} />
              ))}
            </datalist>
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              💳
            </span>
          </div>

          <Button title="Search" type="submit" className="py-2 px-4" />
        </form>

        {/* Search Results - only shown after user searches */}
        {hasSearched && (
          <div className="w-full max-h-96 overflow-y-auto mt-10 px-2 grid grid-cols-1 gap-6">
            {filteredProviders.length > 0 ? (
              filteredProviders.map((member) => (
                <Link
                  href={`/our-team/${member.id}`}
                  key={member.id}
                  className="bg-white p-4 rounded-xl shadow-md text-left hover:shadow-lg  duration-200 hover:scale-[1.005] transition-all h-32"
                >
                  <h3 className="font-bold text-lg text-primary">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2 truncate w-full">
                    {member.specialties}
                  </p>
                </Link>
              ))
            ) : (
              <p className="!text-white mt-4">No providers found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
