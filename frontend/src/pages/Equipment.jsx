import React from 'react';
import { Mail } from 'lucide-react';
import { equipmentList } from '../data/equipmentData';

// Dynamically import equipment images (if they exist)
const equipmentImages = import.meta.glob('../assets/equipment/*.{png,jpg,jpeg,svg}', { eager: true, as: 'url' });

const getImagePath = (filename) => {
  if (!filename) return null;
  const baseNameRequested = filename.split('.')[0].toLowerCase();
  const foundKey = Object.keys(equipmentImages).find(k => {
    const fileBaseName = k.split('/').pop().split('.')[0].toLowerCase();
    return fileBaseName === baseNameRequested;
  });
  return foundKey ? equipmentImages[foundKey] : null;
};

const Equipment = () => {

  const handleRequestClick = (eqName) => {
    const email = "lava@iitrpr.ac.in";
    const subject = encodeURIComponent(`Request for ${eqName}`);
    const body = encodeURIComponent(
      `Hello Sir,\n\nI would like to request access to the following equipment:\n\nEquipment Name: ${eqName}\n\nPurpose: \n\nPreferred Date:\n\nThank you.`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  const EquipmentCard = ({ equipment, index }) => {
    // Alternate top strip colors between standard RISE Orange and Yale Blue styles
    const isEven = index % 2 === 0;
    const stripColorClass = isEven ? 'bg-[#FF6600]' : 'bg-[#0B5472]';
    const buttonHoverClass = isEven ? 'hover:bg-[#CC5200]' : 'hover:bg-[#073A4F]';

    // Attempt to match image by 'name' formatted as snake_case or just fallback to placeholder
    const safeImageName = equipment.name.replace(/\s+/g, '_').toLowerCase();
    const imageSrc = getImagePath(safeImageName) || `https://placehold.co/400x300/F5F5F5/0B5472?text=${encodeURIComponent(equipment.name.substring(0, 15))}`;

    return (
      <section className="bg-[#CCCCCC] rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] overflow-hidden transition-shadow duration-300">
        
        {/* TOP COLORED STRIP WITH BUTTON */}
        <div className={`${stripColorClass} px-5 py-3 flex justify-between items-center sm:flex-row flex-col gap-3`}>
          <div className="text-white font-semibold text-sm sm:text-base hidden sm:block">
            {equipment.category} Equipment
          </div>
          <button
            onClick={() => handleRequestClick(equipment.name)}
            className={`w-full sm:w-auto bg-white/20 text-white border border-white/50 backdrop-blur-sm px-5 py-2 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-sm ${buttonHoverClass}`}
          >
            <Mail size={16} />
            Request Equipment
          </button>
        </div>

        {/* CARD CONTENT */}
        <div className="p-5 flex flex-col md:flex-row gap-6">
          
          {/* LEFT: Image */}
          <div className="w-full md:w-1/3 flex-shrink-0 bg-white rounded-lg p-3 flex items-center justify-center shadow-inner">
            <img 
              src={imageSrc} 
              alt={equipment.name} 
              className="w-full h-48 md:h-full object-contain rounded-md"
            />
          </div>

          {/* RIGHT: Details */}
          <div className="w-full md:w-2/3 flex flex-col justify-center">
            <div className="mb-2">
              <span className="text-[#FF6600] font-bold text-xs uppercase tracking-wider bg-white px-2 py-1 rounded shadow-sm inline-block mb-3">
                {equipment.category}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B5472] mb-3 leading-tight">
              {equipment.name}
            </h2>
            <p className="text-black text-base md:text-lg leading-relaxed">
              {equipment.description || "High-precision laboratory equipment used for materials research."}
            </p>
          </div>

        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 border-b border-gray-100 pb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B5472] tracking-tight mb-4">
            Equipment Inventory
          </h1>
          <p className="text-lg text-gray-600">
            Browse our state-of-the-art laboratory equipment. Click "Request Equipment" to send an email inquiry for access or collaboration details.
          </p>
          <div className="w-24 h-1 bg-[#FF6600] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Equipment Cards List */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {equipmentList.map((item, index) => (
            <EquipmentCard key={item.id} equipment={item} index={index} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Equipment;
