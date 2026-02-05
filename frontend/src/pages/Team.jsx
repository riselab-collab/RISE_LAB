import React from 'react';

// Use import.meta.glob to dynamically load images from assets
// This ensures the build process knows about them and hashes them correctly.
const teamImages = import.meta.glob('../assets/team/*.{png,jpg,jpeg,svg}', { eager: true, as: 'url' });

const getImagePath = (filename) => {
  const key = `../assets/team/${filename}`;

  if (teamImages[key]) {
    return teamImages[key];
  }

  // Silent fallback for case-insensitivity
  const lowerKey = key.toLowerCase();
  const foundKey = Object.keys(teamImages).find(k => k.toLowerCase() === lowerKey);

  return foundKey ? teamImages[foundKey] : null;
};

// Fallback image path (make sure this exists or use a robust fallback)
const PLACEHOLDER_IMG = teamImages['../assets/team/placeholder.jpg'] || null;

import { groupHead, researchStaff, phdStudents, btechStudents, alumni } from '../data/teamData';

const Team = () => {
  // --- Data imported from @/data/teamData.js ---

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-rise-deep tracking-tight">Our Team</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* --- GROUP PHOTO (New) --- */}
        <section className="w-full">
          <div className="w-full h-auto md:h-[500px] rounded-xl overflow-hidden shadow-lg border border-gray-200 relative">
            <img
              src={getImagePath('group.jpg') || PLACEHOLDER_IMG || "https://placehold.co/1200x500?text=Team+Group+Photo"}
              alt="RISE Lab Team"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h2 className="text-white text-2xl font-bold">RISE Lab Team</h2>
            </div>
          </div>
        </section>

        {/* --- SECTION 1: GROUP HEAD --- */}
        <section>
          <h2 className="text-2xl font-bold text-rise-deep border-l-4 border-rise-ocean pl-3 mb-8 uppercase">Group Head</h2>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col md:flex-row">
            {/* 1:1 Aspect Ratio or properly contained */}
            <div className="md:w-1/3 flex-shrink-0 bg-gray-50 relative">
              <div className="w-full h-full min-h-[300px] md:min-h-full">
                <img
                  src={getImagePath(groupHead.image) || PLACEHOLDER_IMG}
                  alt={groupHead.name}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <div className="md:w-2/3 p-8 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-rise-deep mb-2">{groupHead.name}</h3>
              <p className="text-xl font-medium text-rise-ocean mb-1">{groupHead.title}</p>
              <p className="text-gray-600 mb-6">{groupHead.dept}</p>

              <div>
                <h4 className="text-sm font-bold text-rise-deep uppercase tracking-wide mb-2">Research Interest</h4>
                <p className="text-gray-700 leading-relaxed">{groupHead.interest}</p>
              </div>

              {/* BOTTOM ACCENT WAVE */}
              <div className="w-full mt-6 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
                <svg className="w-full h-3 text-orange-400 fill-none stroke-current stroke-[3]" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M0,6 C30,12 70,0 100,6" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: RESEARCH STAFF (Alternating Tint) --- */}
        <section className="bg-rise-mist -mx-4 px-4 py-12 sm:-mx-8 sm:px-8 rounded-3xl">
          <h2 className="text-2xl font-bold text-rise-deep border-l-4 border-rise-ocean pl-3 mb-8 uppercase">Research Staff</h2>
          <div className="flex flex-col gap-8">
            {researchStaff.map((staff, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-rise-frost p-8 flex flex-col md:flex-row gap-8 items-start hover:border-rise-surf transition-colors">
                <div className="md:w-1/3 flex-shrink-0 flex justify-center md:justify-start">
                  {/* Large Avatar 1:1 */}
                  <div className="w-64 h-64 bg-gray-50 rounded-lg overflow-hidden border-4 border-white shadow-sm relative">
                    <img
                      src={getImagePath(staff.image) || PLACEHOLDER_IMG}
                      alt={staff.name}
                      className="absolute inset-0 w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-rise-deep mb-1">{staff.name}</h3>
                  <p className="text-lg font-medium text-rise-ocean mb-4">{staff.role}</p>

                  <div className="mb-4">
                    <span className="font-bold text-rise-deep">Research area:</span>
                    <p className="text-gray-700 inline ml-2">{staff.area}</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-justify">{staff.bio}</p>

                  {/* BOTTOM ACCENT WAVE */}
                  <div className="w-full mt-4 opacity-40 group-hover:opacity-70 transition-opacity duration-500">
                    <svg className="w-full h-3 text-orange-400 fill-none stroke-current stroke-[3]" viewBox="0 0 100 12" preserveAspectRatio="none">
                      <path d="M0,6 C30,12 70,0 100,6" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECTION 3: Ph.D. STUDENTS (ZIGZAG LAYOUT) --- */}
        <section>
          <h2 className="text-2xl font-bold text-rise-deep border-l-4 border-rise-ocean pl-3 mb-8 uppercase">Ph.D. Students</h2>
          <div className="flex flex-col gap-12 md:gap-24">
            {phdStudents.map((student, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}>
                  {/* Photo Side */}
                  <div className="w-full md:w-1/3 flex-shrink-0 flex justify-center">
                    <div className="w-72 h-72 md:w-80 md:h-80 bg-gray-50 rounded-lg overflow-hidden shadow-sm relative border border-gray-100">
                      <img
                        src={getImagePath(student.image) || PLACEHOLDER_IMG}
                        alt={student.name}
                        className="absolute inset-0 w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={`w-full md:w-2/3 flex flex-col justify-center ${isEven ? 'md:text-left' : 'md:text-left'}`}>
                    <div className={`flex flex-col ${isEven ? 'items-start' : 'items-start'}`}> {/* Always align text left for readability */}
                      <h3 className="text-3xl font-bold text-rise-deep mb-1">{student.name}</h3>
                      <p className="text-xl font-medium text-rise-ocean mb-6">{student.role}</p>

                      <div className="mb-4 bg-gray-50 px-4 py-2 rounded-lg border-l-4 border-rise-ocean w-full">
                        <span className="font-bold text-rise-deep text-sm uppercase tracking-wide">Research Area</span>
                        <p className="text-gray-700 mt-1">{student.area}</p>
                      </div>

                      <p className="text-gray-700 leading-relaxed text-justify">
                        {student.bio}
                      </p>

                      {/* BOTTOM ACCENT WAVE */}
                      <div className="w-full mt-6 opacity-40 group-hover:opacity-70 transition-opacity duration-500">
                        <svg className="w-full h-3 text-orange-400 fill-none stroke-current stroke-[3]" viewBox="0 0 100 12" preserveAspectRatio="none">
                          <path d="M0,6 C30,12 70,0 100,6" strokeLinecap="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* --- SECTION 4: B.Tech. STUDENTS (Alternating Tint) --- */}
        <section className="bg-rise-mist -mx-4 px-4 py-12 sm:-mx-8 sm:px-8 rounded-3xl">
          <h2 className="text-2xl font-bold text-rise-deep border-l-4 border-rise-ocean pl-3 mb-8 uppercase">B.Tech. Students</h2>
          {/* Grid Layout - Larger Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {btechStudents.map((student, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-rise-frost overflow-hidden flex flex-col h-full hover:shadow-md hover:border-rise-surf transition group">
                {/* Image Area */}
                <div className="w-full aspect-square bg-gray-50 relative">
                  <img
                    src={getImagePath(student.image) || PLACEHOLDER_IMG}
                    alt={student.name}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-bold text-rise-deep text-lg mb-1">{student.name}</h3>
                  <p className="text-sm font-semibold text-gray-500 mb-3">{student.batch}</p>

                  <div className="mt-auto pt-3 border-t border-gray-100">
                    <span className="text-xs font-bold text-rise-ocean uppercase tracking-wide">Research area</span>
                    <p className="text-sm text-gray-700 mt-1 leading-snug">{student.area}</p>
                  </div>

                  {/* BOTTOM ACCENT WAVE */}
                  <div className="w-full mt-3 opacity-40 group-hover:opacity-70 transition-opacity duration-500">
                    <svg className="w-full h-2 text-orange-400 fill-none stroke-current stroke-[3]" viewBox="0 0 100 12" preserveAspectRatio="none">
                      <path d="M0,6 C30,12 70,0 100,6" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECTION 5: ALUMINI / ASSOCIATED MEMBERS --- */}
        <section>
          <h2 className="text-2xl font-bold text-rise-deep border-l-4 border-rise-ocean pl-3 mb-8 uppercase">Alumni / Associated Members</h2>
          {/* Using similar Grid Layout as B.Tech for consistent visual size */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {alumni.map((member, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-rise-frost overflow-hidden flex flex-col h-full hover:shadow-md hover:border-rise-surf transition group">
                {/* Size: 1:1 Aspect ratio image */}
                <div className="w-full aspect-square bg-gray-50 relative">
                  <img
                    src={getImagePath(member.image) || PLACEHOLDER_IMG}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow bg-white">
                  <span className="text-base font-bold text-rise-deep mb-1">{member.name}</span>
                  <span className="text-sm text-gray-600 italic mt-auto">{member.place}</span>

                  {/* BOTTOM ACCENT WAVE */}
                  <div className="w-full mt-2 opacity-40 group-hover:opacity-70 transition-opacity duration-500">
                    <svg className="w-full h-2 text-orange-400 fill-none stroke-current stroke-[3]" viewBox="0 0 100 12" preserveAspectRatio="none">
                      <path d="M0,6 C30,12 70,0 100,6" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Team;
