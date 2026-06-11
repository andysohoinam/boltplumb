export interface Testimonial {
  name: string;
  estate: string;
  service: string;
  rating: number;
  text: string;
}

export interface ProjectCaseStudy {
  id: number;
  title: string;
  location: string;
  problem: string;
  diagnosis: string;
  repairProcess: string;
  outcome: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Mr Tan",
    estate: "Tampines",
    service: "Toilet Choke",
    rating: 5,
    text: "Our toilet was completely clogged and we couldn't use it for hours. Called RedDot Emergency at 2am and they arrived within 45 minutes! The technician was professional, quickly cleared the blockage, and explained what caused it. Highly impressed with their emergency response and reasonable pricing for a night call. Definitely calling them again if needed."
  },
  {
    name: "Mdm Lim",
    estate: "Bedok",
    service: "Pipe Leak",
    rating: 5,
    text: "I noticed water stains appearing on my living room ceiling and was worried about major damage. RedDot Emergency located the source quickly with their diagnostic equipment and fixed the hidden pipe leak without unnecessary damage to my walls. They were courteous, explained the problem clearly, and the repair has held up perfectly for 8 months now."
  },
  {
    name: "Mr Wong",
    estate: "Jurong",
    service: "Water Heater",
    rating: 5,
    text: "My water heater stopped working in the morning and I had a house full of guests. RedDot Emergency responded same-day and efficiently replaced the faulty unit. The technician was knowledgeable about different heater models and recommended the best option for my condo. Excellent service and fair pricing compared to other contractors."
  },
  {
    name: "Mrs Rajah",
    estate: "Woodlands",
    service: "Floor Trap",
    rating: 5,
    text: "The floor trap in my kitchen was constantly overflowing with foul smells permeating the whole apartment. RedDot Emergency's team investigated thoroughly, found the root cause was improper installation, and completely redesigned the drainage system. The problem is completely resolved and my kitchen smells fresh again. Very satisfied with their workmanship."
  },
  {
    name: "Mr Ng",
    estate: "Punggol",
    service: "Tap Repair",
    rating: 5,
    text: "My kitchen tap was dripping constantly and wasting so much water. I called RedDot Emergency expecting an expensive replacement, but the technician found the issue was just a worn washer. They fixed it in 15 minutes at a very reasonable cost. Honest service with no unnecessary upselling—that's rare nowadays!"
  },
  {
    name: "Mdm Ong",
    estate: "Sengkang",
    service: "Sink Choke",
    rating: 5,
    text: "My bathroom sink was draining very slowly and I tried several DIY methods before calling RedDot Emergency. They used professional equipment to clear the complete blockage and even cleaned the pipes. The sink drains perfectly now and they gave me practical tips to prevent future clogs. Great value for money!"
  },
  {
    name: "Mr Lee",
    estate: "Hougang",
    service: "Burst Pipe",
    rating: 5,
    text: "A pipe burst under my kitchen during dinner time, causing water to spray everywhere. Panic-stricken, I called RedDot Emergency and they treated it as a true emergency. Within 30 minutes they were at my door, stopped the water, and repaired the section immediately. Calm, efficient, and professional under pressure. These are the people you want in a crisis!"
  },
  {
    name: "Mrs Tan",
    estate: "Ang Mo Kio",
    service: "Basin Replacement",
    rating: 5,
    text: "I wanted to upgrade my bathroom with a new basin but was unsure about the plumbing complexity. RedDot Emergency not only installed the new basin perfectly but also gave me excellent advice on design and functionality. They cleaned up thoroughly after the job, and the installation looks professionally done. Exceeded my expectations!"
  },
  {
    name: "Mr Chan",
    estate: "Bukit Batok",
    service: "Water Heater",
    rating: 5,
    text: "My water heater kept having temperature issues and wasting gas. RedDot Emergency diagnosed a faulty mixing valve and replaced it with proper calibration. The shower temperature is now stable and consistent. Their technician was friendly and patient in answering all my questions about maintaining the unit for longevity."
  },
  {
    name: "Mdm Chua",
    estate: "Clementi",
    service: "Toilet Choke",
    rating: 5,
    text: "As a single elderly resident, dealing with a clogged toilet was overwhelming and embarrassing. RedDot Emergency treated me with utmost respect and dignity, clearing the issue quickly and thoroughly. They were patient with my questions and even left printed maintenance tips for me. Compassionate service that goes beyond just fixing pipes!"
  },
  {
    name: "Mr Koh",
    estate: "Yishun",
    service: "Pipe Leak",
    rating: 5,
    text: "I had a slow leak in my wall that I kept ignoring until the damage became visible. RedDot Emergency cut into the wall minimally, found the problematic section, and replaced it with quality pipes. They sealed and patched everything professionally, and the leak hasn't recurred even after heavy monsoon season. Truly reliable work!"
  },
  {
    name: "Mrs Seah",
    estate: "Pasir Ris",
    service: "Floor Trap",
    rating: 5,
    text: "Our ground floor unit had persistent drainage issues and unpleasant odours affecting our living experience. RedDot Emergency investigated and installed a trap primer and air valve system to solve the root cause. The smell is gone and drainage is perfect. They also explained why this solution works, showing genuine expertise."
  },
  {
    name: "Mr Lim",
    estate: "Toa Payoh",
    service: "Tap Repair",
    rating: 5,
    text: "I had three taps in my flat that needed repair and I was quoted expensive prices elsewhere. RedDot Emergency gave me a competitive quote and fixed all three in one visit, saving me multiple service calls. They work efficiently without compromising quality, and I saved a significant amount compared to other contractors."
  },
  {
    name: "Mdm Wong",
    estate: "Bishan",
    service: "Sink Choke",
    rating: 5,
    text: "My kitchen sink wouldn't drain at all, and I have a busy family that depends on a working kitchen. RedDot Emergency responded quickly, cleared the severe blockage professionally, and even checked the connected pipes to prevent future problems. Same-day service meant my life could return to normal immediately. Lifesaver!"
  },
  {
    name: "Mr Goh",
    estate: "Queenstown",
    service: "Water Heater",
    rating: 5,
    text: "Living in a condo, I needed expert advice on water heater options and installation. RedDot Emergency provided detailed recommendations based on my usage patterns and space constraints, then installed everything flawlessly. The new heater works brilliantly and they provided a warranty document with clear maintenance requirements."
  },
  {
    name: "Mrs Teo",
    estate: "Marine Parade",
    service: "Burst Pipe",
    rating: 5,
    text: "A pipe burst in my condo's wall late at night, and water was pooling inside my unit. RedDot Emergency answered immediately and sent a technician urgently. They shut off the main water, located and patched the burst quickly, preventing further damage. The next day they did a permanent repair. Absolutely brilliant emergency service!"
  },
  {
    name: "Mr Yap",
    estate: "Serangoon",
    service: "Basin Replacement",
    rating: 5,
    text: "During my bathroom renovation, RedDot Emergency handled the plumbing aspect seamlessly. They coordinated with my contractor, installed the new basin and pipes perfectly, and ensured everything was up to code. Their professionalism made the renovation process smooth and stress-free. Highly recommended for renovation projects!"
  },
  {
    name: "Mdm Ho",
    estate: "Novena",
    service: "Toilet Choke",
    rating: 5,
    text: "A toilet blockage at the worst possible time—guests arriving in two hours! RedDot Emergency dropped everything and came over immediately, cleared the choke without any mess or damage, and cleaned the area spotlessly. Their quick response and professional execution saved my day. Worth every cent and then some!"
  },
  {
    name: "Mr Sim",
    estate: "Choa Chu Kang",
    service: "Pipe Leak",
    rating: 5,
    text: "I discovered a leak in one of my water pipes and was worried about hidden damage inside the walls. RedDot Emergency used thermal imaging to assess the full extent of the problem, then replaced the damaged section with quality pipes. The transparency and technology-driven approach gave me complete peace of mind."
  },
  {
    name: "Mrs Lim",
    estate: "Tiong Bahru",
    service: "Floor Trap",
    rating: 5,
    text: "My floor trap kept backing up despite multiple cleaning attempts, and the smell was unbearable. RedDot Emergency traced the problem to a downstream blockage in the shared drainage system, worked with the management corporation, and got everything cleared. They kept me informed throughout and the issue is permanently solved now."
  }
];

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    id: 1,
    title: "Burst Pipe Emergency Response",
    location: "Tampines HDB",
    problem: "A burst water pipe in the kitchen wall caused water to spray out at 11:30 PM, flooding the lower cabinets and damaging kitchen flooring.",
    diagnosis: "RedDot Emergency arrived within 45 minutes despite the late hour. Inspection revealed the galvanized steel pipe had corroded and failed under water pressure. The exact location was pinpointed behind the false ceiling.",
    repairProcess: "The team immediately shut off the main water valve to stop the spray. They carefully cut into the wall to access the damaged section, removed the corroded pipe, and installed new copper piping with proper support brackets and insulation.",
    outcome: "The emergency was resolved within 2 hours. No further leaks occurred, and the homeowner learned that periodic pipe inspection could have prevented this costly emergency. Water damage was contained and the kitchen was functional again by morning."
  },
  {
    id: 2,
    title: "Family's Only Toilet Overflowing",
    location: "Bedok HDB",
    problem: "The family's sole toilet became severely clogged and overflowed during peak morning hours, making it unusable for four family members preparing for work and school.",
    diagnosis: "RedDot Emergency assessed the blockage and discovered a combination of waste buildup and flushed items creating a complete obstruction approximately 2 meters down the pipe.",
    repairProcess: "Using professional-grade plumbing equipment, the technician carefully removed the blockage without damaging the pipe. The bowl was thoroughly cleaned and disinfected afterward, and the team provided guidance on preventing future blockages.",
    outcome: "The toilet was restored to full functionality within 90 minutes. The family avoided having to use public facilities and learned about proper flushing practices. No recurrence of the problem has occurred in the 6 months since repair."
  },
  {
    id: 3,
    title: "Cold Shower Crisis on Sunday Morning",
    location: "Jurong Condo",
    problem: "A resident's water heater failed completely on a Sunday morning, leaving no hot water for shower, washing, or cooking—and no other contractors were readily available.",
    diagnosis: "RedDot Emergency's technician performed a comprehensive diagnostic and found the heating element had burned out due to mineral buildup inside the tank. The unit was beyond economical repair.",
    repairProcess: "The technician provided several replacement options suited to the condo's space and usage patterns, then professionally installed a new energy-efficient water heater with proper venting and safety features.",
    outcome: "Full hot water service was restored the same day. The new heater proved to be more efficient, resulting in lower utility bills. The customer appreciated the weekend service availability and expert guidance on heater maintenance."
  },
  {
    id: 4,
    title: "Kitchen Sink Grease Blockage",
    location: "Punggol HDB",
    problem: "The kitchen sink was draining extremely slowly, then stopped completely. Grease and food particles had accumulated in the pipe, creating an impassable blockage.",
    diagnosis: "RedDot Emergency inspected the pipes and confirmed the blockage was due to years of grease buildup that had hardened inside the drainage line, preventing water flow entirely.",
    repairProcess: "The team used high-pressure jetting equipment to break down and flush out the hardened grease deposits. They cleared the entire drainage line, not just the immediate blockage, ensuring optimal flow throughout.",
    outcome: "The sink now drains quickly and efficiently. The customer received practical advice about disposing of grease properly and was given information about regular preventive drain maintenance to avoid future blockages."
  },
  {
    id: 5,
    title: "Concealed Pipe Leak Detection",
    location: "Woodlands HDB",
    problem: "Brown water stains appeared on the living room ceiling with no obvious source of water. The resident feared structural damage from a hidden pipe leak.",
    diagnosis: "RedDot Emergency used moisture detection equipment to identify the exact location of the leak inside the wall—a pinhole leak in a copper pipe caused by corrosion.",
    repairProcess: "Minimal wall cutting was performed to access the affected pipe section. The corroded section was removed and replaced with new copper piping, properly supported and insulated, then the wall was sealed and patched.",
    outcome: "The leak was completely eliminated with minimal structural disruption. The ceiling stains stopped expanding immediately. The homeowner was relieved that the damage was caught early and the repair was minimally invasive."
  },
  {
    id: 6,
    title: "Floor Trap Choke with Odour Issues",
    location: "Sengkang Condo",
    problem: "The kitchen floor trap was backing up with water pooling around it, creating foul odours that spread throughout the unit. The problem worsened despite attempts to clean it.",
    diagnosis: "Inspection revealed the floor trap had a design flaw and the downstream main drainage line had a blockage. The trap wasn't functioning as an effective water seal due to improper installation.",
    repairProcess: "RedDot Emergency reinstalled the trap with correct gradient and added an air valve system to allow proper water seal and drainage. The downstream blockage was also cleared using jetting equipment.",
    outcome: "Water pooling stopped immediately and odours disappeared completely. The proper water seal now prevents sewer gas from entering the unit. The condo's drainage system now meets proper plumbing standards."
  },
  {
    id: 7,
    title: "Dripping Tap Water Wastage Repair",
    location: "Hougang HDB",
    problem: "A kitchen tap dripped persistently, wasting water 24/7 and significantly increasing the monthly water bill. The resident expected an expensive replacement.",
    diagnosis: "RedDot Emergency diagnosed a worn-out internal washer and cartridge. The tap was otherwise structurally sound and didn't require replacement.",
    repairProcess: "The technician disassembled the tap, replaced the worn internal components with quality parts, and reassembled it. The repair took approximately 20 minutes with minimal disruption.",
    outcome: "The tap now operates perfectly with no drips or leaks. The resident's water bill returned to normal levels, and the repair cost was a fraction of a full replacement. The tap has remained problem-free for over a year."
  },
  {
    id: 8,
    title: "Basin Installation for Bathroom Upgrade",
    location: "Ang Mo Kio HDB",
    problem: "A homeowner wanted to upgrade their bathroom with a modern new basin as part of a renovation project but needed professional plumbing installation.",
    diagnosis: "RedDot Emergency assessed the existing plumbing infrastructure, including supply pipes and drainage, to determine compatibility with the new basin design.",
    repairProcess: "The team carefully removed the old basin, inspected and cleaned the supply and drainage pipes, installed the new basin with proper sealing and caulking, and tested all connections for leaks.",
    outcome: "The new basin was installed flawlessly and integrates perfectly with the existing plumbing. The bathroom renovation looks professionally finished. The drainage and water supply function optimally, and the basin has proven durable with no leaks or issues."
  },
  {
    id: 9,
    title: "Running Toilet Water Waste Problem",
    location: "Bukit Batok HDB",
    problem: "A toilet continuously ran water into the bowl, creating a constant hissing sound and significantly increasing water consumption each month.",
    diagnosis: "RedDot Emergency identified that the fill valve and flush mechanism were both malfunctioning, causing water to continuously refill the bowl.",
    repairProcess: "The technician replaced both the fill valve and flush valve with high-quality components. The toilet was thoroughly tested to ensure proper filling, holding, and flushing cycles.",
    outcome: "The toilet now operates silently and efficiently, with no continuous water flow. The homeowner's water bill decreased noticeably in the following months. The toilet has functioned perfectly for two years without any recurrence."
  },
  {
    id: 10,
    title: "Shower Mixer Temperature Fluctuation",
    location: "Clementi Condo",
    problem: "The shower mixer produced erratic temperature changes—suddenly switching from hot to cold during use—making showering uncomfortable and potentially dangerous.",
    diagnosis: "RedDot Emergency found that the thermostatic mixing valve had internal sediment buildup causing the temperature sensor to malfunction, resulting in unstable water temperature.",
    repairProcess: "The team removed and cleaned the mixing valve, flushing out mineral deposits. They replaced worn seals and recalibrated the temperature setting for optimal performance.",
    outcome: "The shower now maintains a consistent, comfortable temperature throughout use. Hot and cold water blend smoothly without fluctuations. The condo resident enjoys comfortable showers once again after months of frustration."
  },
  {
    id: 11,
    title: "Galvanized Pipe Replacement Project",
    location: "Yishun HDB",
    problem: "Multiple taps throughout the HDB flat produced rust-colored water, indicating severe corrosion inside the old galvanized steel pipes installed decades ago.",
    diagnosis: "RedDot Emergency inspected the entire piping system and found extensive internal corrosion in the original galvanized pipes, which was contaminating the water supply and restricting flow.",
    repairProcess: "The team systematically replaced the corroded galvanized pipes with modern copper piping throughout the unit. All connection points were properly sealed and tested for pressure and water quality.",
    outcome: "Water now runs clear and clean from every tap. Water pressure has improved noticeably. The replacement pipes are expected to last 50+ years, and the resident has clean, safe water for consumption and use."
  },
  {
    id: 12,
    title: "Water Heater Installation After Unit Failure",
    location: "Pasir Ris HDB",
    problem: "A resident's old water heater suddenly failed on a cold morning, and with no hot water available, they needed urgent replacement of the aging unit.",
    diagnosis: "RedDot Emergency assessed the unit and found it had reached end-of-life with internal corrosion and poor heating performance. The unit was not economical to repair.",
    repairProcess: "The technician removed the old unit safely, inspected the installation space and connections, installed a new high-efficiency water heater with proper venting, and performed safety checks.",
    outcome: "The new water heater provides abundant hot water with improved energy efficiency. The installation was clean and professional, with all safety features properly installed. The unit is expected to provide reliable service for many years."
  }
];
