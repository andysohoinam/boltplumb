import type { Metadata } from 'next';

export interface ServiceDetail {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroDescription: string;
  heroImage: string;
  heroImageAlt: string;
  overview: string;
  commonIssues: { title: string; description: string }[];
  issueImages: string[];
  process: { step: string; description: string }[];
  processImages: string[];
  whyUs: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  hdbNote?: string;
}

// Realistic residential plumbing images - showing actual problems in homes
const PIPE_LEAK_DRIP = 'https://images.pexels.com/photos/15206136/pexels-photo-15206136/free-photo-of-leaking-pipe-fixed-with-plastic.jpeg?auto=compress&cs=tinysrgb&w=600';
const FAUCET_DRIP = 'https://images.pexels.com/photos/34295406/pexels-photo-34295406.jpeg?auto=compress&cs=tinysrgb&w=600';
const FAUCET_DRIP_BW = 'https://images.pexels.com/photos/12271457/pexels-photo-12271457.jpeg?auto=compress&cs=tinysrgb&w=600';
const DRIP_CLOSE = 'https://images.pexels.com/photos/31710804/pexels-photo-31710804/free-photo-of-close-up-of-a-dripping-faucet-indoors.jpeg?auto=compress&cs=tinysrgb&w=600';
const TOILET_BOWL = 'https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=600';
const TOILET_CLEAN = 'https://images.pexels.com/photos/4239074/pexels-photo-4239074.jpeg?auto=compress&cs=tinysrgb&w=600';
const TOILET_FLUSH = 'https://images.pexels.com/photos/4239015/pexels-photo-4239015.jpeg?auto=compress&cs=tinysrgb&w=600';
const BATHROOM_SINK = 'https://images.pexels.com/photos/9462224/pexels-photo-9462224.jpeg?auto=compress&cs=tinysrgb&w=600';
const FLOOR_DRAIN = 'https://images.pexels.com/photos/9462641/pexels-photo-9462641.jpeg?auto=compress&cs=tinysrgb&w=600';
const SINK_DRAIN = 'https://images.pexels.com/photos/220612/pexels-photo-220612.jpeg?auto=compress&cs=tinysrgb&w=600';
const KITCHEN_SINK = 'https://images.pexels.com/photos/6248900/pexels-photo-6248900.jpeg?auto=compress&cs=tinysrgb&w=600';
const PLUMBER_HANDS = 'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=600';
const PIPE_CONNECT = 'https://images.pexels.com/photos/29226620/pexels-photo-29226620.jpeg?auto=compress&cs=tinysrgb&w=600';
const WATER_PIPE_OUTDOOR = 'https://images.pexels.com/photos/36571568/pexels-photo-36571568/free-photo-of-water-dripping-from-an-outdoor-pipe.jpeg?auto=compress&cs=tinysrgb&w=600';
const BATHROOM_BASIN = 'https://images.pexels.com/photos/3761559/pexels-photo-3761559.jpeg?auto=compress&cs=tinysrgb&w=600';
const BASIN_MODERN = 'https://images.pexels.com/photos/11299685/pexels-photo-11299685.jpeg?auto=compress&cs=tinysrgb&w=600';
const BASIN_CHROME = 'https://images.pexels.com/photos/33528567/pexels-photo-33528567.jpeg?auto=compress&cs=tinysrgb&w=600';
const FAUCET_RUNNING = 'https://images.pexels.com/photos/2583028/pexels-photo-2583028.jpeg?auto=compress&cs=tinysrgb&w=600';
const SINK_CLEAN = 'https://images.pexels.com/photos/4239131/pexels-photo-4239131.jpeg?auto=compress&cs=tinysrgb&w=600';
const MARBLE_BASIN = 'https://images.pexels.com/photos/15528965/pexels-photo-15528965/free-photo-of-splashing-water-into-marble-washbasin.jpeg?auto=compress&cs=tinysrgb&w=600';
const PLUMBING_PIPES = 'https://images.pexels.com/photos/87299/pexels-photo-87299.jpeg?auto=compress&cs=tinysrgb&w=600';

// Process images (smaller, showing work-in-progress)
const PROC_PIPE_LEAK = 'https://images.pexels.com/photos/15206136/pexels-photo-15206136/free-photo-of-leaking-pipe-fixed-with-plastic.jpeg?auto=compress&cs=tinysrgb&w=400';
const PROC_PLUMBER = 'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=400';
const PROC_PIPE_INSTALL = 'https://images.pexels.com/photos/29226620/pexels-photo-29226620.jpeg?auto=compress&cs=tinysrgb&w=400';
const PROC_TOILET = 'https://images.pexels.com/photos/4239015/pexels-photo-4239015.jpeg?auto=compress&cs=tinysrgb&w=400';
const PROC_SINK = 'https://images.pexels.com/photos/220612/pexels-photo-220612.jpeg?auto=compress&cs=tinysrgb&w=400';
const PROC_DRIP = 'https://images.pexels.com/photos/34295406/pexels-photo-34295406.jpeg?auto=compress&cs=tinysrgb&w=400';
const PROC_BASIN = 'https://images.pexels.com/photos/3761559/pexels-photo-3761559.jpeg?auto=compress&cs=tinysrgb&w=400';
const PROC_DRAIN = 'https://images.pexels.com/photos/9462224/pexels-photo-9462224.jpeg?auto=compress&cs=tinysrgb&w=400';

export const serviceDetails: Record<string, ServiceDetail> = {
  'toilet-bowl-choke-repair': {
    slug: 'toilet-bowl-choke-repair',
    title: 'Toilet Bowl Choke Repair',
    metaTitle: 'Toilet Bowl Choke Repair Singapore - Fast Unblocking Service',
    metaDescription:
      'Professional toilet bowl choke repair in Singapore. Homeaspect provides fast toilet unblocking for HDB and condo units. WhatsApp +65 9677 3465 for same-day service.',
    heroDescription: 'Fast, professional toilet choke repair for HDB flats and condos across Singapore. We clear even the most stubborn blockages quickly.',
    heroImage: TOILET_BOWL,
    heroImageAlt: 'Toilet bowl with water backing up from choke blockage in Singapore HDB flat',
    overview:
      'A choked toilet is one of the most disruptive plumbing problems a household can face. When your toilet will not flush properly or water rises to the brim, you need a professional who can resolve the issue fast. Homeaspect provides rapid toilet bowl choke repair services for all property types in Singapore.',
    commonIssues: [
      { title: 'Slow Draining Toilet', description: 'Water takes longer than usual to drain after flushing, indicating a partial blockage in the pipes.' },
      { title: 'Complete Blockage', description: 'Water fills the bowl and does not drain at all. This often requires professional equipment to clear.' },
      { title: 'Gurgling Sounds', description: 'Strange sounds when flushing indicate trapped air caused by a blockage further down the pipe.' },
      { title: 'Water Rising to the Brim', description: 'Water rises dangerously close to the top of the bowl, posing an overflow risk.' },
    ],
    issueImages: [
      TOILET_FLUSH,
      TOILET_CLEAN,
      TOILET_BOWL,
      'https://images.pexels.com/photos/7031838/pexels-photo-7031838.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    process: [
      { step: 'Inspection', description: 'We assess the choke severity and identify the likely location of the blockage.' },
      { step: 'Clearing', description: 'Using professional-grade tools, we clear the blockage safely without damaging your pipes.' },
      { step: 'Testing', description: 'We flush test multiple times to ensure the blockage is fully cleared and water flows freely.' },
      { step: 'Prevention Advice', description: 'We provide tips to prevent future chokes and keep your toilet functioning properly.' },
    ],
    processImages: [PROC_TOILET, PROC_PLUMBER, PROC_TOILET, PROC_DRAIN],
    whyUs: [
      { title: 'Fast Response', description: 'We arrive within 30-60 minutes for emergency toilet choke situations.' },
      { title: 'Professional Equipment', description: 'We use proper tools that clear blockages without damaging your plumbing.' },
      { title: 'HDB & Condo Specialists', description: 'Experienced with all types of toilet systems found in Singapore homes.' },
      { title: 'Upfront Pricing', description: 'You know the cost before we start. No surprises on the bill.' },
    ],
    faqs: [
      { question: 'How long does it take to clear a toilet choke?', answer: 'Most toilet chokes can be cleared within 30-60 minutes. Severe blockages may take longer depending on the cause and location.' },
      { question: 'Can I clear a toilet choke myself?', answer: 'A plunger can sometimes clear minor blockages. However, if the choke persists after basic attempts, professional help is recommended to avoid damaging the pipes.' },
      { question: 'What causes toilet bowl chokes?', answer: 'Common causes include excessive toilet paper, foreign objects, hard water deposits, and tree root intrusion in older pipes.' },
    ],
    hdbNote: 'HDB toilet systems have specific pipe configurations. Our technicians are experienced with HDB plumbing layouts and use methods that comply with HDB guidelines.',
  },
  'pipe-leak-repair': {
    slug: 'pipe-leak-repair',
    title: 'Pipe Leak Repair',
    metaTitle: 'Pipe Leak Repair Singapore - Stop Water Leaks Fast',
    metaDescription:
      'Urgent pipe leak repair in Singapore by Homeaspect. Fast response for burst pipes, water leaks, and pipe replacement. WhatsApp +65 9677 3465 now.',
    heroDescription: 'Stop water damage fast. Homeaspect provides urgent pipe leak repair and water pipe replacement across Singapore.',
    heroImage: PIPE_LEAK_DRIP,
    heroImageAlt: 'Water leaking from residential pipe causing damage to home interior',
    overview:
      'Pipe leaks can cause extensive water damage if not addressed quickly. From small drips to burst pipes, water infiltration damages walls, floors, and ceilings, promotes mould growth, and wastes water. Homeaspect provides rapid pipe leak repair and water pipe replacement services to protect your home.',
    commonIssues: [
      { title: 'Visible Pipe Leaks', description: 'Water visibly dripping or spraying from exposed pipes under sinks or along walls.' },
      { title: 'Hidden Leaks', description: 'Damp spots on walls or ceilings, unexplained increase in water bills, or musty odours indicating concealed pipe leaks.' },
      { title: 'Burst Pipes', description: 'Sudden pipe failure causing significant water flow that requires immediate emergency response.' },
      { title: 'Corroded Pipes', description: 'Older pipes that have deteriorated over time, leading to pinhole leaks and reduced water quality.' },
    ],
    issueImages: [
      PIPE_LEAK_DRIP,
      FAUCET_DRIP,
      WATER_PIPE_OUTDOOR,
      'https://images.pexels.com/photos/17882785/pexels-photo-17882785.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    process: [
      { step: 'Leak Detection', description: 'We locate the exact source of the leak using professional inspection methods.' },
      { step: 'Isolation', description: 'We shut off the water supply to the affected area to prevent further damage.' },
      { step: 'Repair or Replace', description: 'We repair the damaged section or replace the pipe if necessary, using quality materials.' },
      { step: 'Pressure Testing', description: 'We test the repaired pipe under pressure to ensure the leak is fully resolved.' },
    ],
    processImages: [PROC_PIPE_LEAK, PROC_PIPE_INSTALL, PROC_PLUMBER, PROC_PIPE_INSTALL],
    whyUs: [
      { title: 'Rapid Response', description: 'We treat pipe leaks as emergencies and dispatch technicians fast.' },
      { title: 'Accurate Detection', description: 'We find hidden leaks without unnecessary wall demolition.' },
      { title: 'Quality Materials', description: 'We use durable, approved pipe materials for lasting repairs.' },
      { title: 'Full Replacement Available', description: 'When repair is not enough, we offer complete pipe replacement services.' },
    ],
    faqs: [
      { question: 'How do I know if I have a hidden pipe leak?', answer: 'Signs include unexplained increases in water bills, damp spots on walls or ceilings, peeling paint, or musty odours. If you suspect a hidden leak, contact us for professional leak detection.' },
      { question: 'Can a pipe leak be repaired without breaking walls?', answer: 'In many cases, yes. Our technicians use specialised equipment to locate and access leaks with minimal disruption. However, some situations may require access through walls.' },
      { question: 'How long does pipe replacement take?', answer: 'Pipe replacement timelines vary depending on the scope of work. A single section can often be replaced within a few hours. Whole-pipe replacements may take longer.' },
    ],
    hdbNote: 'HDB water pipes follow specific routing and material standards. Our repairs comply with HDB requirements and use approved materials.',
  },
  'water-heater-repair': {
    slug: 'water-heater-repair',
    title: 'Water Heater Repair',
    metaTitle: 'Water Heater Repair Singapore - Instant & Storage Heater Service',
    metaDescription:
      'Water heater repair and replacement in Singapore by Homeaspect. Service for instant and storage water heaters in HDB and condo units. WhatsApp +65 9677 3465.',
    heroDescription: 'Expert water heater repair and replacement for HDB flats and condos across Singapore. All brands and models serviced.',
    heroImage: 'https://images.pexels.com/photos/16816220/pexels-photo-16816220.jpeg?auto=compress&cs=tinysrgb&w=600',
    heroImageAlt: 'Water heater unit mounted on bathroom wall requiring repair or replacement',
    overview:
      'A malfunctioning water heater disrupts your daily routine. Whether your unit is not heating, leaking, or making unusual sounds, Homeaspect provides professional water heater repair and replacement services. We service both instant and storage water heaters commonly installed in Singapore homes.',
    commonIssues: [
      { title: 'No Hot Water', description: 'The heater is not producing hot water at all, often caused by a failed heating element or thermostat.' },
      { title: 'Water Heater Leaking', description: 'Water pooling around the unit or dripping from connections, indicating a tank or pipe seal failure.' },
      { title: 'Inconsistent Temperature', description: 'Water alternates between hot and cold, or does not reach the desired temperature.' },
      { title: 'Unusual Noises', description: 'Rumbling, popping, or whining sounds from the heater, often indicating sediment buildup or element issues.' },
    ],
    issueImages: [
      'https://images.pexels.com/photos/16816220/pexels-photo-16816220.jpeg?auto=compress&cs=tinysrgb&w=600',
      PIPE_LEAK_DRIP,
      DRIP_CLOSE,
      FAUCET_RUNNING,
    ],
    process: [
      { step: 'Diagnostic Check', description: 'We test the unit thoroughly to identify the root cause of the malfunction.' },
      { step: 'Repair Assessment', description: 'We determine whether the heater can be repaired or needs replacement, and provide a clear quote.' },
      { step: 'Repair or Replace', description: 'We carry out the repair or install a new unit with proper fittings and safety checks.' },
      { step: 'Safety Testing', description: 'We verify proper operation, check for leaks, and ensure electrical connections are safe.' },
    ],
    processImages: [PROC_DRIP, PROC_PIPE_LEAK, PROC_PIPE_INSTALL, PROC_PLUMBER],
    whyUs: [
      { title: 'All Brands & Models', description: 'We service major water heater brands used in Singapore homes.' },
      { title: 'HDB & Condo Approved', description: 'Our installations meet HDB and condo management requirements.' },
      { title: 'Repair or Replace Options', description: 'We offer honest advice on whether repair or replacement is more cost-effective.' },
      { title: 'Same-Day Service', description: 'We aim to resolve water heater issues on the same day whenever possible.' },
    ],
    faqs: [
      { question: 'How long does a water heater repair take?', answer: 'Most water heater repairs are completed within 1-2 hours. If a replacement is needed, installation typically takes 2-3 hours.' },
      { question: 'Should I repair or replace my water heater?', answer: 'If your heater is under 5-7 years old and the repair cost is reasonable, repair is usually the better option. Older units with recurring issues may benefit from replacement.' },
      { question: 'Do you install instant and storage water heaters?', answer: 'Yes, we install and repair both instant (tankless) and storage tank water heaters. Our technicians are experienced with the specific requirements of each type.' },
    ],
    hdbNote: 'HDB units have specific requirements for water heater installation, including electrical load and mounting specifications. Our installations comply with all HDB guidelines.',
  },
  'sink-choke-repair': {
    slug: 'sink-choke-repair',
    title: 'Sink Choke Repair',
    metaTitle: 'Sink Choke Repair Singapore - Kitchen & Bathroom Sink Unblocking',
    metaDescription:
      'Professional sink choke repair in Singapore. Homeaspect clears blocked kitchen and bathroom sinks fast. WhatsApp +65 9677 3465 for same-day service.',
    heroDescription: 'Fast sink choke repair for kitchen and bathroom sinks across Singapore. Professional clearing of clogs and blockages.',
    heroImage: KITCHEN_SINK,
    heroImageAlt: 'Kitchen sink with drain blockage and stagnant water from choke',
    overview:
      'A blocked sink disrupts your daily routine and can cause unpleasant odours and water damage. Whether it is your kitchen sink clogged with food debris or a bathroom basin blocked with soap scum and hair, Homeaspect provides fast and effective sink choke repair services for homes across Singapore.',
    commonIssues: [
      { title: 'Slow Draining Sink', description: 'Water drains slowly, indicating a partial blockage in the drain pipe or trap.' },
      { title: 'Complete Blockage', description: 'Water does not drain at all and pools in the sink basin.' },
      { title: 'Foul Odours', description: 'Bad smells emanating from the drain, caused by decomposing organic matter in the pipes.' },
      { title: 'Gurgling Drains', description: 'Air trapped by blockages causes gurgling sounds when water drains.' },
    ],
    issueImages: [
      KITCHEN_SINK,
      SINK_DRAIN,
      BATHROOM_SINK,
      SINK_CLEAN,
    ],
    process: [
      { step: 'Inspection', description: 'We examine the sink and drain to identify the type and location of the blockage.' },
      { step: 'Clearing', description: 'We use appropriate methods — mechanical or chemical — to clear the blockage safely.' },
      { step: 'Pipe Cleaning', description: 'We clean the pipe surfaces to remove residue that could cause future blockages.' },
      { step: 'Flow Testing', description: 'We run water through the drain to confirm proper flow and drainage.' },
    ],
    processImages: [PROC_SINK, PROC_PLUMBER, PROC_SINK, PROC_DRAIN],
    whyUs: [
      { title: 'Quick Service', description: 'Most sink chokes are cleared within 30-45 minutes.' },
      { title: 'Safe Methods', description: 'We use pipe-safe clearing methods that do not damage your plumbing.' },
      { title: 'Kitchen & Bathroom', description: 'We handle both kitchen sink and bathroom basin chokes.' },
      { title: 'Prevention Tips', description: 'We advise on how to keep your sinks flowing freely.' },
    ],
    faqs: [
      { question: 'What causes sink chokes?', answer: 'Kitchen sinks typically choke from grease, food particles, and soap buildup. Bathroom sinks usually choke from hair, soap scum, and toothpaste residue.' },
      { question: 'Can chemical drain cleaners damage my pipes?', answer: 'Repeated use of harsh chemical cleaners can corrode pipes over time. Professional mechanical clearing is safer and more effective for stubborn blockages.' },
      { question: 'How can I prevent sink chokes?', answer: 'Use sink strainers, avoid pouring grease down the drain, and periodically flush drains with hot water. Regular maintenance prevents most chokes.' },
    ],
  },
  'floor-trap-choke-repair': {
    slug: 'floor-trap-choke-repair',
    title: 'Floor Trap Choke Clearing',
    metaTitle: 'Floor Trap Choke Clearing Singapore - Bathroom Drain Unblocking',
    metaDescription:
      'Floor trap choke clearing in Singapore by Homeaspect. Fast bathroom and kitchen floor drain unblocking. WhatsApp +65 9677 3465 now.',
    heroDescription: 'Professional floor trap choke clearing to prevent water pooling and odours in your bathroom and kitchen areas.',
    heroImage: FLOOR_DRAIN,
    heroImageAlt: 'Bathroom floor drain with water pooling from blocked floor trap',
    overview:
      'Floor trap chokes cause water to pool on bathroom and kitchen floors, creating slip hazards and unpleasant odours. These blockages develop gradually from hair, soap scum, and debris accumulation in the floor trap. Homeaspect provides professional floor trap clearing to restore proper drainage and hygiene.',
    commonIssues: [
      { title: 'Water Pooling on Floors', description: 'Water accumulates on bathroom or kitchen floors instead of draining properly.' },
      { title: 'Slow Floor Drain', description: 'Water drains very slowly through the floor trap, indicating a partial blockage.' },
      { title: 'Foul Odours from Drain', description: 'Bad smells rising from the floor trap, caused by trapped decomposing matter.' },
      { title: 'Recurring Blockages', description: 'Floor trap keeps blocking even after basic cleaning, suggesting deeper pipe issues.' },
    ],
    issueImages: [
      FLOOR_DRAIN,
      BATHROOM_SINK,
      PLUMBING_PIPES,
      SINK_CLEAN,
    ],
    process: [
      { step: 'Trap Inspection', description: 'We remove the floor trap cover and inspect for visible blockages.' },
      { step: 'Deep Clearing', description: 'We use professional tools to clear blockages deep within the trap and connecting pipes.' },
      { step: 'Trap Cleaning', description: 'We clean the trap housing and replace the cover securely.' },
      { step: 'Drainage Testing', description: 'We test water flow to confirm the floor trap is draining properly.' },
    ],
    processImages: [PROC_DRAIN, PROC_PLUMBER, PROC_SINK, PROC_DRAIN],
    whyUs: [
      { title: 'Thorough Clearing', description: 'We clear the full depth of the trap and connecting pipes, not just the surface.' },
      { title: 'Odour Elimination', description: 'Our cleaning removes the source of foul odours, not just the blockage.' },
      { title: 'HDB & Condo Expertise', description: 'We are familiar with the floor trap systems used in all Singapore property types.' },
      { title: 'Quick Turnaround', description: 'Most floor trap chokes are resolved within 30-45 minutes.' },
    ],
    faqs: [
      { question: 'Why does my floor trap keep blocking?', answer: 'Recurring blockages usually indicate that debris is accumulating deeper in the pipe system. Professional clearing removes the full blockage rather than just the surface debris.' },
      { question: 'Can floor trap chokes cause flooding?', answer: 'Yes, if left unaddressed, a blocked floor trap can cause water to overflow from showers or sinks onto the floor, potentially damaging adjacent rooms.' },
      { question: 'How often should floor traps be cleaned?', answer: 'We recommend having floor traps professionally cleaned every 6-12 months as preventative maintenance, even if they are not blocked.' },
    ],
  },
  'tap-repair': {
    slug: 'tap-repair',
    title: 'Tap Repair & Replacement',
    metaTitle: 'Tap Repair & Replacement Singapore - Fix Leaking Taps Fast',
    metaDescription:
      'Tap repair and replacement in Singapore by Homeaspect. Fix leaking taps, install new fixtures, restore water flow. WhatsApp +65 9677 3465.',
    heroDescription: 'Professional tap repair and replacement services. Fix dripping taps, install new fixtures, and restore proper water flow.',
    heroImage: FAUCET_DRIP,
    heroImageAlt: 'Dripping bathroom faucet with water droplet showing tap leak problem',
    overview:
      'A leaking tap wastes water and increases your utility bills. A tap that will not turn on or off properly is a daily inconvenience. Homeaspect provides tap repair and replacement services for all types of taps found in Singapore homes, from kitchen mixer taps to bathroom basin taps and shower fixtures.',
    commonIssues: [
      { title: 'Dripping Tap', description: 'Water continues to drip even when the tap is fully closed, usually caused by worn washers or cartridges.' },
      { title: 'Stiff or Jammed Tap', description: 'The tap handle is difficult to turn or stuck, often due to mineral buildup or worn components.' },
      { title: 'Low Water Pressure', description: 'Reduced water flow from the tap, potentially caused by aerator blockage or pipe issues.' },
      { title: 'Tap Body Damage', description: 'Cracked or corroded tap body that requires replacement rather than repair.' },
    ],
    issueImages: [
      FAUCET_DRIP,
      DRIP_CLOSE,
      FAUCET_RUNNING,
      BATHROOM_BASIN,
    ],
    process: [
      { step: 'Assessment', description: 'We identify the specific issue with your tap and determine whether repair or replacement is the best option.' },
      { step: 'Parts Sourcing', description: 'For repairs, we source the correct washers, cartridges, or components. For replacements, we help you select suitable new taps.' },
      { step: 'Repair or Install', description: 'We carry out the repair or install the new tap with proper sealing and connection.' },
      { step: 'Testing', description: 'We test for leaks, check water flow, and ensure smooth operation.' },
    ],
    processImages: [PROC_DRIP, PROC_PIPE_INSTALL, PROC_PLUMBER, PROC_DRIP],
    whyUs: [
      { title: 'All Tap Types', description: 'We service mixer taps, pillar taps, sensor taps, and shower fixtures.' },
      { title: 'Quick Fixes', description: 'Most tap repairs are completed within 30 minutes.' },
      { title: 'Replacement Available', description: 'If repair is not cost-effective, we supply and install quality replacements.' },
      { title: 'No Mess Left Behind', description: 'We clean up after the job and ensure your space is tidy.' },
    ],
    faqs: [
      { question: 'How much water does a dripping tap waste?', answer: 'A tap dripping once per second can waste over 20 litres of water per day. That adds up significantly on your water bill over time.' },
      { question: 'Is it better to repair or replace a leaking tap?', answer: 'If the tap is in good condition overall, replacing the washer or cartridge is usually sufficient. Older or damaged taps may benefit from full replacement.' },
      { question: 'Do you supply replacement taps?', answer: 'Yes, we can supply and install new taps. We offer a range of options suitable for HDB and condo units at competitive prices.' },
    ],
  },
  'basin-replacement': {
    slug: 'basin-replacement',
    title: 'Basin Replacement',
    metaTitle: 'Basin Replacement Singapore - Professional Basin Installation',
    metaDescription:
      'Basin replacement and installation in Singapore by Homeaspect. Professional fitting for HDB and condo bathrooms and kitchens. WhatsApp +65 9677 3465.',
    heroDescription: 'Professional basin replacement and installation for HDB and condo bathrooms and kitchens across Singapore.',
    heroImage: BASIN_MODERN,
    heroImageAlt: 'Modern bathroom washbasin with sleek faucet requiring replacement',
    overview:
      'Whether your basin is cracked, stained, or you are renovating your bathroom or kitchen, Homeaspect provides professional basin replacement and installation services. We handle the entire process from removal of the old basin to fitting and sealing the new one, ensuring proper plumbing connections and a clean finish.',
    commonIssues: [
      { title: 'Cracked Basin', description: 'Cracks in the basin body that can leak or worsen over time, requiring replacement.' },
      { title: 'Persistent Stains', description: 'Stains that cannot be removed with cleaning, making the basin look old and unhygienic.' },
      { title: 'Leaking Basin', description: 'Water leaking from the basin drain or connections, often caused by deteriorated seals or damaged fittings.' },
      { title: 'Renovation Upgrade', description: 'Upgrading the basin as part of a bathroom or kitchen renovation project.' },
    ],
    issueImages: [
      BASIN_MODERN,
      MARBLE_BASIN,
      BATHROOM_BASIN,
      BASIN_CHROME,
    ],
    process: [
      { step: 'Removal', description: 'We carefully remove the existing basin, disconnecting all plumbing connections.' },
      { step: 'Surface Preparation', description: 'We prepare the mounting surface and check that wall and plumbing connections are ready for the new basin.' },
      { step: 'Installation', description: 'We mount the new basin, connect all water supply and drain pipes, and apply proper sealing.' },
      { step: 'Quality Check', description: 'We test for leaks, check water flow, and ensure the basin is securely mounted and level.' },
    ],
    processImages: [PROC_PLUMBER, PROC_PIPE_INSTALL, PROC_BASIN, PROC_DRIP],
    whyUs: [
      { title: 'HDB & Condo Compliant', description: 'Our installations meet the specifications and requirements of HDB and condo management.' },
      { title: 'Clean Installation', description: 'We ensure proper sealing and neat plumbing connections for a professional finish.' },
      { title: 'Full Service', description: 'From removal to installation and cleanup, we handle the entire process.' },
      { title: 'Quality Basins', description: 'We can supply quality basins or install your preferred choice.' },
    ],
    faqs: [
      { question: 'How long does a basin replacement take?', answer: 'Most basin replacements are completed within 2-3 hours, including removal of the old basin, installation of the new one, and all plumbing connections.' },
      { question: 'Do I need to buy the basin myself?', answer: 'You can supply your own basin, or we can provide one for you. We offer basin options suitable for HDB and condo units.' },
      { question: 'Can you replace a basin in an HDB bathroom?', answer: 'Yes, we are experienced with HDB bathroom layouts and plumbing configurations. Our installations comply with HDB requirements.' },
    ],
    hdbNote: 'HDB basins have specific mounting and plumbing requirements. Our installations use approved methods and materials that comply with HDB standards.',
  },
};

export function getServiceDetail(slug: string): ServiceDetail | undefined {
  return serviceDetails[slug];
}

export function generateServiceMetadata(slug: string): Metadata {
  const service = serviceDetails[slug];
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `https://homeaspect.com.sg/services/${slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://homeaspect.com.sg/services/${slug}`,
    },
  };
}
