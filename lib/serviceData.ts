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
  commonCauses: { title: string; description: string }[];
  warningSigns: { title: string; description: string }[];
  delayRisks: string;
  internalLinks: { label: string; href: string }[];
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
    metaTitle: 'Toilet Bowl Choke Repair Singapore - Fast Emergency Unblocking Service',
    metaDescription:
      'Professional toilet bowl choke repair in Singapore. RedDot Emergency provides fast toilet unblocking for HDB flats and condos. Same-day service in Tampines, Bedok, Jurong and across Singapore.',
    heroDescription: 'Fast, professional toilet choke repair for HDB flats and condos across Singapore. We clear even the most stubborn blockages quickly and get your bathroom working again.',
    heroImage: TOILET_BOWL,
    heroImageAlt: 'Toilet bowl with water backing up from choke blockage in Singapore HDB flat',
    overview:
      'A choked toilet is one of the most disruptive plumbing problems a household can face, and it demands immediate professional attention. When your toilet will not flush properly, water rises to the brim, or drains extremely slowly, it creates an unsanitary situation that affects your entire family. RedDot Emergency provides rapid toilet bowl choke repair services for HDB flats, condominiums, and private properties across Singapore. We understand the unique plumbing configurations of Singapore homes, from the narrow soil pipes in older HDB blocks in Tampines and Bedok to the modern drainage systems in newer condos in Sengkang and Punggol. Our technicians arrive equipped with professional-grade tools and expertise to diagnose the exact cause of your choke and resolve it without damaging your property. Whether the blockage is caused by excessive toilet paper, foreign objects, or buildup deeper in the drainage system, we have the skills and equipment to clear it effectively. We operate 24/7 for emergency situations and offer same-day service for most calls received during business hours.',
    commonIssues: [
      {
        title: 'Slow Draining Toilet',
        description: 'Water takes significantly longer than usual to drain after flushing, indicating a partial blockage developing in the pipes. This is often the first warning sign that your toilet needs attention before a complete blockage occurs. In HDB units, slow drainage frequently indicates buildup in the main soil stack that serves multiple units.',
      },
      {
        title: 'Complete Blockage',
        description: 'Water fills the bowl and does not drain at all, often causing the bowl to overflow when you attempt another flush. This requires immediate professional equipment to clear and prevent sewage backup into your home. Complete blockages often indicate severe obstructions that DIY methods cannot resolve safely.',
      },
      {
        title: 'Gurgling Sounds When Flushing',
        description: 'Strange gurgling, bubbling, or sucking sounds when flushing indicate trapped air caused by a blockage further down the pipe. This acoustic warning often precedes a complete blockage and suggests the choke is significant enough to trap air pockets in the drainage line.',
      },
      {
        title: 'Water Rising to the Brim',
        description: 'Water rises dangerously close to the top of the bowl after flushing, posing an immediate overflow risk and potential sewage backup into your home. This is a critical sign that requires urgent professional intervention to prevent water damage and hygiene issues.',
      },
    ],
    issueImages: [
      TOILET_FLUSH,
      TOILET_CLEAN,
      TOILET_BOWL,
      'https://images.pexels.com/photos/7031838/pexels-photo-7031838.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    process: [
      {
        step: 'Professional Inspection',
        description: 'We thoroughly assess the choke severity and identify the likely location and nature of the blockage using visual inspection and professional diagnostic techniques. We determine whether the blockage is in the toilet bowl, the S-bend, or deeper in the main soil pipe, which helps us select the most effective clearing method.',
      },
      {
        step: 'Strategic Clearing',
        description: 'Using professional-grade tools and proven techniques, we clear the blockage safely without damaging your porcelain bowl or pipes. We may use a plunger with proper sealing technique, a toilet auger for deeper blockages, or other specialized equipment depending on the obstruction type and location.',
      },
      {
        step: 'Comprehensive Testing',
        description: 'We flush test multiple times with different water volumes to ensure the blockage is fully cleared and water flows freely at normal speed. We listen for any gurgling sounds and observe drainage patterns to confirm the system is working properly before we leave your home.',
      },
      {
        step: 'Prevention Education',
        description: 'We provide detailed tips to prevent future chokes, including guidance on appropriate toilet paper usage, items that should never be flushed, and maintenance practices specific to your toilet type and HDB or condo plumbing configuration.',
      },
    ],
    processImages: [PROC_TOILET, PROC_PLUMBER, PROC_TOILET, PROC_DRAIN],
    whyUs: [
      {
        title: 'Lightning-Fast Response',
        description: 'We arrive within 30-60 minutes for emergency toilet choke situations during business hours, and maintain rapid response times 24/7 because we understand that a blocked toilet is not just inconvenient—it is a serious hygiene emergency that affects your entire household.',
      },
      {
        title: 'Professional-Grade Equipment',
        description: 'We use proper, specialized tools designed for toilet clearing that are far more effective than household plungers or commercial drain cleaners. Our equipment clears blockages without damaging your porcelain bowl or the delicate internal components of your toilet flush system.',
      },
      {
        title: 'HDB & Condo Plumbing Specialists',
        description: 'Our technicians have extensive experience with all types of toilet systems found in Singapore homes, from single-outlet HDB toilets to modern dual-flush eco-toilets. We understand the specific soil pipe configurations in different HDB blocks and condo developments across Jurong, Woodlands, and all other Singapore neighborhoods.',
      },
      {
        title: 'Transparent Upfront Pricing',
        description: 'You know the cost before we start work. We provide clear, honest quotes without hidden fees or surprise charges, so you can make informed decisions about your plumbing repair with confidence and budget certainty.',
      },
      {
        title: 'Same-Day Resolution',
        description: 'Most toilet chokes are completely resolved on the day you call us, restoring your bathroom to full functionality quickly so your family can resume normal routines without prolonged disruption.',
      },
      {
        title: 'Professional Drainage Assessment',
        description: 'Beyond clearing the immediate blockage, we assess whether recurring issues suggest deeper problems in your building drainage system, and we can recommend preventive maintenance or additional solutions if necessary.',
      },
    ],
    faqs: [
      {
        question: 'How long does it take to clear a toilet choke?',
        answer: 'Most toilet chokes can be cleared within 30-60 minutes from arrival. The timeframe depends on the blockage severity, location, and accessibility. Severe blockages deep in the main soil pipe or complex obstructions may require additional time, but we always provide an estimate after inspection.',
      },
      {
        question: 'Can I try to clear a toilet choke myself first?',
        answer: 'A standard plunger can sometimes clear minor blockages if used with proper sealing technique. However, if the choke persists after 2-3 attempts, professional help is recommended. Using excessive force or inappropriate tools can damage the toilet bowl or push the blockage deeper into your pipes, creating a more expensive problem. It is usually faster and safer to call a professional immediately.',
      },
      {
        question: 'What causes toilet bowl chokes in Singapore homes?',
        answer: 'Common causes include excessive toilet paper, accidental flushing of foreign objects like wet wipes or cotton buds, hard water mineral deposits accumulating in pipes, tree root intrusion in older HDB blocks, and buildup of decomposing organic matter in the drainage system. Singapore houses humidity and temperature also accelerate pipe deterioration in older properties.',
      },
      {
        question: 'How can I prevent toilet chokes?',
        answer: 'Only flush toilet paper and human waste. Avoid flushing wet wipes, feminine hygiene products, hair, or any other objects. Use reasonable amounts of toilet paper and consider using dual-flush technology where available. In older HDB blocks, periodic professional drain cleaning can prevent buildup and recurring blockages.',
      },
      {
        question: 'Is a choked toilet a plumbing emergency?',
        answer: 'Yes, a completely blocked toilet that will not drain is a sanitation emergency requiring immediate professional attention. If your toilet overflows, do not attempt further flushes—turn off the water supply at the toilet cistern valve and call us immediately. Overflow can damage your bathroom floor and create health hazards.',
      },
      {
        question: 'What if my entire floor drain is choked, not just the toilet?',
        answer: 'If multiple drains in your bathroom or kitchen are affected simultaneously, the blockage is likely in the main soil pipe or floor trap rather than the toilet alone. This is a more serious situation requiring professional assessment and potentially more extensive clearing work. Contact us immediately as this can indicate a building-wide drainage issue.',
      },
    ],
    commonCauses: [
      {
        title: 'Excessive Toilet Paper Usage',
        description: 'The most common cause is using more toilet paper than the toilet and drainage system can handle. Singapore water pressure and HDB pipe configurations assume normal usage, so excessive paper accumulates in the S-bend and soil pipes, creating blockages over time.',
      },
      {
        title: 'Foreign Objects Flushed Down',
        description: 'Items like wet wipes, facial tissues, cotton buds, feminine hygiene products, or children accidentally flushing toys create hard obstructions that cannot dissolve. Even "flushable" wipes do not break down properly in Singapore drainage systems and frequently cause blockages.',
      },
      {
        title: 'Mineral Buildup from Hard Water',
        description: 'Singapore water contains minerals that accumulate inside pipes over time, restricting the internal diameter and trapping other debris. This is especially common in HDB blocks over 10-15 years old where pipes have not been replaced, creating conditions for stubborn blockages.',
      },
      {
        title: 'Deteriorating Pipes in Older Properties',
        description: 'Older HDB and private properties often have corroded soil pipes with internal buildup or partial collapse, creating natural catch points where waste and paper accumulate. Tree roots can also penetrate cracks in buried pipes, creating blockages that gradually worsen.',
      },
      {
        title: 'Inadequate Water Flow Due to Low Pressure',
        description: 'If your building water pressure is low or cistern capacity is insufficient, flushing may not have enough force to completely clear waste and paper from the bowl and pipes. This causes gradual accumulation and eventual complete blockage over time.',
      },
    ],
    warningSigns: [
      {
        title: 'Slow Drainage After Flushing',
        description: 'Water taking longer than normal to drain completely is the first warning sign. This indicates buildup is beginning to restrict water flow. Address this early before it becomes a complete blockage that leaves your toilet unusable.',
      },
      {
        title: 'Unpleasant Odours from Toilet',
        description: 'Foul smells beyond normal toilet odors indicate decomposing matter or sewage backup in the drainage system. This suggests significant blockage is present and requires immediate professional attention to prevent health hazards.',
      },
      {
        title: 'Gurgling or Bubbling Sounds',
        description: 'Air trapped by blockages causes distinctive gurgling or bubbling sounds when water drains. This acoustic warning indicates blockage severity and means the toilet is on the verge of complete blockage.',
      },
      {
        title: 'Water Backed Up in Other Drains',
        description: 'If water backs up in bathroom sinks, showers, or kitchen drains when you flush the toilet, the blockage is in the main soil pipe or drainage system affecting your entire unit. This is a serious situation requiring urgent professional intervention.',
      },
      {
        title: 'Visible Water Rising in Bowl',
        description: 'Water level visibly rising toward the rim after flushing is a critical warning that complete blockage is imminent. Do not continue flushing or you risk overflow and sewage backup into your bathroom.',
      },
    ],
    delayRisks: 'Delaying toilet choke repair risks escalating the problem into a complete blockage that renders your toilet completely unusable and may cause sewage to back up into your bathroom, shower, and kitchen drains. This backup can create severe health hazards, foul odors throughout your home, and potential damage to your floor and walls if water overflows. In HDB blocks and condos, a complete blockage in the main soil pipe can affect multiple units, leading to complaints from neighbors and potential disputes. The longer you delay, the more difficult and expensive the clearing becomes, as the blockage hardens and extends deeper into the pipe system. Sewage backup also creates unsanitary conditions that pose risks to your family\'s health, potentially causing infections and illness. Emergency calls outside business hours incur additional charges, so addressing the problem quickly during normal hours is more cost-effective.',
    internalLinks: [
      { label: 'Emergency Plumbing Service', href: '/emergency-plumbing' },
      { label: 'Frequently Asked Questions', href: '/faq' },
      { label: 'Contact Us Now', href: '/contact' },
      { label: 'Sink Choke Repair', href: '/services/sink-choke-repair' },
    ],
    hdbNote: 'HDB toilet systems have specific pipe configurations and soil stack arrangements that vary by block and age. Our technicians are experienced with HDB plumbing layouts in blocks across Tampines, Bedok, Jurong, and other estates, and use methods that comply with HDB guidelines and maintenance standards.',
  },

  'pipe-leak-repair': {
    slug: 'pipe-leak-repair',
    title: 'Pipe Leak Repair',
    metaTitle: 'Pipe Leak Repair Singapore - Urgent Water Leak & Burst Pipe Service',
    metaDescription:
      'Urgent pipe leak repair in Singapore by RedDot Emergency. Fast response for burst pipes, water leaks, and pipe replacement. Available 24/7 in HDB and condo units.',
    heroDescription: 'Stop water damage fast. RedDot Emergency provides urgent pipe leak repair and water pipe replacement across Singapore with 24/7 emergency response.',
    heroImage: PIPE_LEAK_DRIP,
    heroImageAlt: 'Water leaking from residential pipe causing damage to home interior',
    overview:
      'Pipe leaks represent one of the most dangerous plumbing emergencies because water damage develops silently and rapidly, potentially destroying structural elements of your home worth tens of thousands of dollars. From small drips to burst pipes, water infiltration damages walls, floors, and ceilings, promotes mold growth that threatens your family\'s health, wastes precious water resources, and inflates your water bills dramatically. RedDot Emergency provides rapid pipe leak repair and complete water pipe replacement services to protect your home from water damage across Singapore. Our technicians understand that every minute counts in a water emergency—we offer 24/7 response for burst pipes and significant leaks that pose immediate structural or safety risks. Whether you have a slow drip that has been ongoing for months, a hidden leak behind walls discovered through unexplained water stains, or a catastrophic burst pipe flooding your home, we have the diagnostic equipment and technical expertise to locate the problem precisely and resolve it with minimal disruption to your property. We serve HDB units in neighborhoods like Sengkang, Punggol, and Woodlands, as well as private properties and condominium units across Singapore, understanding the specific pipe types and configurations used in different property types and eras.',
    commonIssues: [
      {
        title: 'Visible Pipe Leaks',
        description: 'Water visibly dripping, spraying, or trickling from exposed pipes under sinks, kitchen cabinets, or along walls indicates an active leak requiring immediate attention. Visible leaks can be more easily located and repaired, but the longer they persist, the more water damage occurs to surrounding materials like wood, drywall, and flooring. Even small drips can waste hundreds of liters of water monthly.',
      },
      {
        title: 'Hidden Leaks Behind Walls',
        description: 'Damp spots on walls or ceilings, unexplained increase in water bills, musty odours in certain rooms, or peeling paint indicate concealed pipe leaks within your walls or under the floor. These hidden leaks are dangerous because damage continues silently for weeks or months before becoming obvious, allowing mold and structural decay to develop extensively. They require professional leak detection equipment to locate.',
      },
      {
        title: 'Burst Pipes and Sudden Major Leaks',
        description: 'Sudden pipe failure causes significant water flow that requires immediate emergency response to prevent catastrophic water damage. Burst pipes in supply lines can flood your home within minutes, damaging ceilings, walls, and personal property. This is a true emergency requiring immediate professional intervention and possible main water valve shutdown.',
      },
      {
        title: 'Corroded Pipes Showing Signs of Deterioration',
        description: 'Older pipes that have deteriorated over time show rust stains, corrosion marks, or pinhole leaks in metal pipes. These pipes have reduced structural integrity and frequently develop new leaks without warning. Corroded pipes indicate that pipe replacement may be more cost-effective than repeated repairs.',
      },
    ],
    issueImages: [
      PIPE_LEAK_DRIP,
      FAUCET_DRIP,
      WATER_PIPE_OUTDOOR,
      'https://images.pexels.com/photos/17882785/pexels-photo-17882785.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    process: [
      {
        step: 'Precise Leak Detection',
        description: 'We locate the exact source of the leak using professional inspection methods including visual examination, acoustic detection, thermal imaging, and pressure testing. For hidden leaks, we use specialized equipment to pinpoint the location without guesswork, minimizing necessary disruption to find the leak.',
      },
      {
        step: 'Water Supply Isolation',
        description: 'We immediately shut off the water supply to the affected area or entire property to prevent further water damage and flooding. We clearly identify the main water valve location for future reference and show you how to shut it off yourself in emergencies.',
      },
      {
        step: 'Professional Repair or Full Replacement',
        description: 'We repair the damaged section using appropriate methods—applying epoxy seals to pinhole leaks, replacing sections of corroded pipe, or resolving connection failures. For extensively damaged pipes, we recommend and perform complete pipe replacement using quality, durable materials approved for Singapore\'s water system and building standards.',
      },
      {
        step: 'Pressure Testing and Verification',
        description: 'We test the repaired or replaced pipe under pressure to ensure the leak is fully resolved and the system maintains water integrity. We run water through the system and verify proper flow, checking all connections for any signs of seepage or recurring leaks before we complete the job.',
      },
    ],
    processImages: [PROC_PIPE_LEAK, PROC_PIPE_INSTALL, PROC_PLUMBER, PROC_PIPE_INSTALL],
    whyUs: [
      {
        title: '24/7 Rapid Emergency Response',
        description: 'We treat pipe leaks as genuine emergencies and dispatch technicians immediately, even at night and on weekends. Our rapid response can prevent tens of thousands of dollars in water damage, making the service fee minimal compared to potential structural repair costs.',
      },
      {
        title: 'Accurate Leak Detection Technology',
        description: 'We find hidden leaks without unnecessary or destructive wall demolition using professional-grade acoustic detection, thermal imaging, and pressure testing equipment. This precision saves you money by avoiding exploratory demolition and allows targeted repairs that minimize disruption.',
      },
      {
        title: 'Premium Quality Pipe Materials',
        description: 'We use durable, approved pipe materials appropriate for Singapore\'s water pressure, temperature, and mineral content. All materials comply with PUB (Public Utilities Board) standards and building codes, ensuring lasting repairs and preventing premature failure.',
      },
      {
        title: 'Complete Pipe Replacement Services Available',
        description: 'When repair is not sufficient to resolve the problem or when pipes are extensively corroded throughout your property, we offer complete pipe replacement services. We can replace individual sections or undertake whole-home re-piping projects.',
      },
      {
        title: 'Transparent Emergency Pricing',
        description: 'We provide clear pricing information even during emergency calls so you understand costs before work begins. Emergency service fees are clearly disclosed and applied only to out-of-hours calls, with standard rates during business hours.',
      },
      {
        title: 'Water Damage Prevention Expertise',
        description: 'Beyond fixing the leak, we assess water damage already sustained, advise on drying and dehumidification to prevent mold, and can connect you with professional water damage restoration services if needed.',
      },
    ],
    faqs: [
      {
        question: 'How do I know if I have a hidden pipe leak?',
        answer: 'Signs include unexplained increases in water bills without increased usage, damp spots on walls or ceilings that appear without obvious cause, peeling paint or wallpaper, musty odors in particular rooms, and soft spots in flooring. If you notice any of these signs, contact us for professional leak detection using acoustic and thermal imaging equipment that pinpoints leaks precisely.',
      },
      {
        question: 'Can a pipe leak be repaired without breaking walls?',
        answer: 'In many cases, yes. Our technicians use specialized equipment to locate and access leaks with minimal disruption. We can often access pipes through existing cavities, under flooring, or behind removable panels. However, some situations may require careful access through walls, which we minimize to the smallest necessary area.',
      },
      {
        question: 'How long does pipe replacement take?',
        answer: 'Pipe replacement timelines vary depending on scope. A single section in an accessible location can often be replaced within 2-4 hours. Whole-home re-piping projects may take 1-3 days depending on the pipe layout and accessibility in your specific HDB unit or condo. We provide timeline estimates after inspection.',
      },
      {
        question: 'What should I do if I discover a burst pipe?',
        answer: 'Immediately shut off the water supply at the main valve, usually located near the water meter in your HDB unit or at the main water entry point in your condo. Then turn off electricity to affected areas if water is near electrical outlets. Call us immediately for emergency response. Avoid walking on wet floors to prevent electrical hazards, and move valuable items away from the water.',
      },
      {
        question: 'How much does a hidden pipe leak cost to find?',
        answer: 'Leak detection charges depend on complexity. Simple visual identification may cost less than equipment-based detection for hidden leaks. We provide quotes for leak detection service separately from repair costs, so you can choose whether to authorize detection before committing to repair work.',
      },
      {
        question: 'Will my water bill decrease after the leak is fixed?',
        answer: 'Yes, fixing a leak will restore your water bill to normal levels. A significant hidden leak can add hundreds of dollars monthly to your water bill. After repair, you should see immediate improvement, with full billing corrections available from PUB upon request with documentation of the repair.',
      },
    ],
    commonCauses: [
      {
        title: 'Pipe Corrosion from Age and Hard Water',
        description: 'Older metal pipes, particularly copper and galvanized steel, corrode internally and externally due to Singapore\'s humid climate and mineral-heavy water. Corrosion creates small holes and weakens pipe walls, leading to pinhole leaks that gradually expand into larger failures. HDB units built 20+ years ago frequently show this deterioration.',
      },
      {
        title: 'High Water Pressure Stress',
        description: 'Excessive water pressure, especially in higher-floor condo units, puts continuous stress on pipe joints, valves, and weaker sections. Singapore\'s PUB water delivery system maintains high pressure to ensure reaching upper floors, but this accelerates wear on aging pipes and pipe fittings.',
      },
      {
        title: 'Physical Damage and Punctures',
        description: 'Pipes can be accidentally damaged during renovations, drilling, or construction work within walls. Sharp impacts or puncture holes from nails or screws create immediate leaks. Some damage may not leak immediately but fails later under water pressure.',
      },
      {
        title: 'Loose or Failed Pipe Connections',
        description: 'Threaded connections and soldered joints weaken over time, especially in areas with vibration or temperature fluctuations. Connections fail due to improper installation, loose fittings that gradually work themselves free, or corrosion at the joint interface.',
      },
      {
        title: 'Tree Root Intrusion in Underground Pipes',
        description: 'In landed properties and older HDB estates with large trees, tree roots penetrate small cracks in underground drain and supply pipes. Roots continuously grow, widening the crack and creating blockages and leaks. Singapore\'s tropical vegetation grows quickly, making root damage a significant issue.',
      },
    ],
    warningSigns: [
      {
        title: 'Unexplained Water Bill Increases',
        description: 'A sudden jump in your water bill without corresponding increase in usage is a strong indicator of a hidden leak. A small leak can waste 1,000+ liters daily. Check your bill immediately—this is often the first warning sign of a significant leak.',
      },
      {
        title: 'Damp Patches on Walls or Ceilings',
        description: 'Wet or stained patches on interior surfaces indicate water seeping from pipes inside walls or ceiling spaces. These patches grow and worsen over time. Early detection prevents extensive mold growth and structural damage.',
      },
      {
        title: 'Musty or Moldy Smells',
        description: 'Unpleasant, musty odours indicate water damage and mold development from persistent moisture. This smell suggests the leak has been ongoing for weeks or months, allowing mold colonies to establish. Mold poses health risks requiring professional remediation.',
      },
      {
        title: 'Visible Water Dripping or Pooling',
        description: 'Any water appearing under sinks, along pipes, or on ceilings is an active leak requiring immediate attention. Do not delay addressing visible leaks as water damage accelerates rapidly.',
      },
      {
        title: 'Soft or Discolored Flooring',
        description: 'Soft spots in flooring, warping wood, or discolored carpet indicates water saturating the floor from pipes above or below. This structural damage is serious and requires urgent professional assessment and repair.',
      },
    ],
    delayRisks: 'Delaying pipe leak repair risks catastrophic water damage to your home\'s structure, potentially requiring expensive repairs costing tens of thousands of dollars. Continuous water infiltration rots wood framing, weakens concrete, destroys electrical systems, and creates conditions for toxic mold growth that poses severe health risks to your family. In HDB units and condos, water leaking into neighboring units creates liability issues and neighbor disputes. Hidden leaks cause continuous waste of water—a significant leak can waste 1000+ liters daily—inflating your water bills by hundreds of dollars monthly while you remain unaware. The longer a leak persists, the more the damaged area spreads, making eventual repairs more invasive and expensive. Mold colonies develop rapidly in Singapore\'s humid climate, contaminating air quality and causing respiratory problems. Emergency repairs needed after extended delay cost significantly more due to additional structural restoration and mold remediation.',
    internalLinks: [
      { label: 'Emergency Plumbing Service', href: '/emergency-plumbing' },
      { label: 'Frequently Asked Questions', href: '/faq' },
      { label: 'Contact Us for Emergency Response', href: '/contact' },
      { label: 'Water Heater Repair', href: '/services/water-heater-repair' },
    ],
    hdbNote: 'HDB water pipes follow specific routing and material standards established by PUB and HDB regulations. Our repairs comply with HDB requirements and use approved materials that meet Singapore building codes. We understand the pipe layouts in different HDB blocks and can work within HDB modification guidelines.',
  },

  'water-heater-repair': {
    slug: 'water-heater-repair',
    title: 'Water Heater Repair',
    metaTitle: 'Water Heater Repair Singapore - Instant & Storage Heater Service 24/7',
    metaDescription:
      'Water heater repair and replacement in Singapore by RedDot Emergency. Service for instant and storage water heaters in HDB, condo units. Same-day repair available.',
    heroDescription: 'Expert water heater repair and replacement for HDB flats and condos across Singapore. All brands and models serviced with same-day solutions.',
    heroImage: 'https://images.pexels.com/photos/16816220/pexels-photo-16816220.jpeg?auto=compress&cs=tinysrgb&w=600',
    heroImageAlt: 'Water heater unit mounted on bathroom wall requiring repair or replacement',
    overview:
      'A malfunctioning water heater disrupts your daily routine in ways that other plumbing issues cannot—no hot water for showers, bathing, cleaning, or cooking creates genuine hardship for your entire family. Whether your unit is not heating water at all, leaking, making unusual sounds, or producing inconsistent temperatures, RedDot Emergency provides professional water heater repair and replacement services tailored to Singapore homes. We service both instant (tankless) and storage water heaters commonly installed in Singapore HDB flats and condominium units, understanding the specific requirements and failure modes of each type. Instant water heaters, popular in Singapore because of space constraints, require technical expertise with heating elements, temperature sensors, and pressure valves. Storage tank heaters require knowledge of sediment removal, anode rod replacement, and tank integrity. Our technicians have worked with all major brands distributed in Singapore, from popular Asian manufacturers to European and American models available in local markets. We understand that hot water is essential—we prioritize same-day service and maintain same-day replacement availability for heaters beyond economic repair. Whether you need a simple component replacement, complete heater replacement, or installation of a new heater after renovation, we provide transparent advice and efficient service across neighborhoods like Tampines, Jurong, Sengkang, and throughout Singapore.',
    commonIssues: [
      {
        title: 'No Hot Water Produced',
        description: 'The heater is not producing hot water at all—water runs cold from the tap even after running for extended time. This is often caused by a failed heating element, broken thermostat, or faulty temperature sensor. In instant heaters, this indicates no ignition or heating is occurring. In storage heaters, the tank itself may be failing.',
      },
      {
        title: 'Water Heater Leaking Around Base or Connections',
        description: 'Water pooling around the unit or dripping from connections indicates a tank seal failure, corroded tank, or loose plumbing connections. Even small leaks worsen gradually and eventually result in complete tank failure. Leaking tanks cannot be reliably repaired and typically require replacement.',
      },
      {
        title: 'Inconsistent Water Temperature',
        description: 'Water alternates between hot and cold, or does not reach the desired temperature even when set to maximum. This indicates thermostat failure, heating element problems, or in instant heaters, a mixing valve issue. The inconsistency makes the shower experience unpleasant and suggests the control system is failing.',
      },
      {
        title: 'Unusual Noises from the Heater',
        description: 'Rumbling, popping, whining, or whistling sounds from the heater indicate sediment buildup in storage tanks, failing heating elements, or pressure valve problems. Noise suggests internal deterioration and increases risk of imminent failure. Noisy heaters often fail completely within weeks or months.',
      },
    ],
    issueImages: [
      'https://images.pexels.com/photos/16816220/pexels-photo-16816220.jpeg?auto=compress&cs=tinysrgb&w=600',
      PIPE_LEAK_DRIP,
      DRIP_CLOSE,
      FAUCET_RUNNING,
    ],
    process: [
      {
        step: 'Comprehensive Diagnostic Testing',
        description: 'We test the unit thoroughly to identify the root cause of malfunction. For electric heaters, we test heating elements and thermostats. For gas heaters, we verify ignition, flame, and fuel supply. We check water temperature output, pressure, and any error codes on digital displays to establish exact failure causes.',
      },
      {
        step: 'Honest Repair vs. Replacement Assessment',
        description: 'We determine whether the heater can be economically repaired or whether replacement is the better option. We provide a clear, detailed quote explaining our recommendation. A heater under 5 years old with repairable components is typically worth fixing. Older heaters with multiple failures or significant corrosion are better replaced.',
      },
      {
        step: 'Professional Repair or New Installation',
        description: 'We carry out the repair using genuine replacement parts or install a new unit with proper connections, fittings, and safety devices. For replacements, we help you select an appropriate heater matching your hot water needs and space constraints. Installation includes proper gas/electrical connections, pressure relief valve installation, and insulation.',
      },
      {
        step: 'Safety Testing and Verification',
        description: 'We verify proper operation by testing hot water output, temperature consistency, and pressure relief function. We check for leaks at all connections and inspect electrical or gas connections for safety compliance. For gas heaters, we verify proper combustion and venting.',
      },
    ],
    processImages: [PROC_DRIP, PROC_PIPE_LEAK, PROC_PIPE_INSTALL, PROC_PLUMBER],
    whyUs: [
      {
        title: 'All Major Brands and Models Serviced',
        description: 'We service instant heaters from brands like Ariston, Timberk, and Daikin, plus storage heaters from Rheem, Ferroli, and other major manufacturers. Our technicians have trained experience with diverse heater technologies and can work on nearly any model found in Singapore homes.',
      },
      {
        title: 'HDB and Condo Approved Installation',
        description: 'Our installations meet specific HDB and condo management requirements for hot water systems. We understand electrical load limitations in HDB units and venting requirements for gas heaters. All installations comply with Singapore Building Code and safety standards.',
      },
      {
        title: 'Honest Repair or Replace Recommendations',
        description: 'We provide transparent advice on whether repair or replacement is more cost-effective based on heater age, failure type, and parts availability. We never push replacements when repair is reasonable or suggest repairs for heaters beyond economic repair.',
      },
      {
        title: 'Same-Day Service and Replacements',
        description: 'We aim to resolve water heater issues on the same day whenever possible. When replacement is necessary, we carry common heater models and can often install a replacement the same day your heater fails, minimizing time without hot water.',
      },
      {
        title: 'Emergency After-Hours Response',
        description: 'We understand that losing hot water during cold weather or winter months is especially uncomfortable. We provide emergency response for water heater failures, with charges disclosed for out-of-hours service.',
      },
      {
        title: 'Complete System Evaluation',
        description: 'Beyond repairing the immediate failure, we assess your hot water system overall—checking water pressure, circulation, and efficiency. We can recommend upgrades or additional components to improve performance.',
      },
    ],
    faqs: [
      {
        question: 'How long does a typical water heater repair take?',
        answer: 'Most water heater repairs are completed within 1-2 hours for diagnostics, parts replacement, and testing. If a replacement is needed, installation typically takes 2-3 hours depending on complexity of connections and heater type. We provide time estimates after inspection.',
      },
      {
        question: 'Should I repair or replace my water heater?',
        answer: 'If your heater is under 5-7 years old and the repair cost is reasonable (typically less than 40-50% of replacement cost), repair is usually the better option. Heaters over 10 years old with recurring issues, significant corrosion, or tank leaks may benefit from replacement. We provide transparent cost-benefit analysis.',
      },
      {
        question: 'Do you install both instant and storage water heaters?',
        answer: 'Yes, we install and repair both instant (tankless) and storage tank water heaters. Our technicians are experienced with the specific requirements, venting, and safety considerations of each type. We can help you decide which type is best suited to your home.',
      },
      {
        question: 'How often should water heaters be serviced?',
        answer: 'We recommend professional inspection of water heaters annually, especially in storage tanks where sediment buildup affects efficiency. Regular maintenance extends heater lifespan and prevents unexpected failures. For heavily used systems in larger families, more frequent servicing may be beneficial.',
      },
      {
        question: 'Can I repair a leaking water heater tank?',
        answer: 'Small leaks at connections can sometimes be fixed by tightening fittings or replacing seals. However, leaks from the tank body itself indicate internal corrosion and tank failure—these tanks cannot be reliably repaired and require replacement. The cost of repair attempts usually exceeds replacement cost.',
      },
      {
        question: 'What is the lifespan of a typical water heater?',
        answer: 'Quality instant heaters typically last 10-15 years with regular maintenance. Storage tank heaters generally last 8-12 years depending on water quality and usage. Factors like hard water minerals, low maintenance, and heavy usage can shorten lifespan significantly.',
      },
    ],
    commonCauses: [
      {
        title: 'Heating Element Failure in Electric Heaters',
        description: 'Electric heating elements eventually burn out after extended use, especially in instant heaters where elements operate continuously. Mineral deposits accelerate element deterioration by insulating them from water contact. Singapore\'s hard water accelerates this process.',
      },
      {
        title: 'Thermostat or Temperature Sensor Malfunction',
        description: 'Temperature control components fail due to electrical surges, age, or water damage. A failed thermostat cannot regulate temperature, resulting in either no heating or uncontrollable overheating. Digital sensor failures also disable modern smart heaters.',
      },
      {
        title: 'Sediment Accumulation in Storage Tanks',
        description: 'Minerals in Singapore water settle as sediment inside storage tanks, creating a barrier between the heating element and water. This causes poor heating efficiency and eventually burns out heating elements. Sediment also produces popping and rumbling sounds.',
      },
      {
        title: 'Tank Corrosion in Storage Water Heaters',
        description: 'The metal tank interior deteriorates due to continuous contact with water. Once rust perforation begins, the tank cannot be reliably repaired. Singapore\'s tropical humidity accelerates external corrosion if the heater is not in a protected location.',
      },
      {
        title: 'Pressure Valve Failure',
        description: 'Pressure relief valves prevent dangerous pressure buildup but fail due to mineral deposits, age, or manufacturing defects. Failed pressure valves prevent proper pressure regulation and create safety hazards. Water heaters without functional pressure relief are unsafe.',
      },
    ],
    warningSigns: [
      {
        title: 'Lukewarm or Cold Water When You Expect Hot',
        description: 'Even when the heater should have produced hot water, water remains lukewarm or cold. This is the most obvious warning sign that heating is failing. Do not delay—the heater is likely about to fail completely.',
      },
      {
        title: 'Visible Leaking or Water Pooling',
        description: 'Any water dripping or pooling around the heater indicates connection failure or tank damage. Even small leaks worsen and eventually result in complete failure. Leaking heaters must be addressed immediately.',
      },
      {
        title: 'Unusual Sounds or Vibration',
        description: 'Rumbling, popping, hissing, or whistling sounds indicate internal deterioration. These sounds worsen over time and often precede complete failure by days or weeks. Address noisy heaters promptly.',
      },
      {
        title: 'Discolored or Rusty Water',
        description: 'Water appearing rusty, brown, or discolored indicates internal tank corrosion or rust accumulation. This water quality issue is unsanitary and suggests the tank is deteriorating.',
      },
      {
        title: 'Heater Displaying Error Codes',
        description: 'Modern heaters display error codes when components fail. These codes indicate specific problems that may be repairable or may indicate the heater requires replacement. Research the code or contact us immediately.',
      },
    ],
    delayRisks: 'Delaying water heater repair leaves you without hot water for extended periods, affecting hygiene, comfort, and daily routines. A heater starting to fail often fails completely within days or weeks—early repair prevents sudden loss of hot water. A leaking heater eventually floods water into surrounding areas, damaging flooring, electrical systems, and adjacent rooms, creating repair costs far exceeding the heater replacement cost. A failed pressure relief valve creates dangerous pressure buildup that can cause heater explosion or violent failure, posing genuine safety hazards. Rusty water from a corroding tank contaminates your entire plumbing system, requiring eventual water line cleaning. For HDB units, burst water heaters can damage the unit below, creating liability and neighbor disputes. The longer you delay, the more urgent the eventual repair becomes, often requiring after-hours emergency service that costs significantly more than daytime repair.',
    internalLinks: [
      { label: 'Emergency Plumbing Service', href: '/emergency-plumbing' },
      { label: 'Frequently Asked Questions', href: '/faq' },
      { label: 'Contact Us Now', href: '/contact' },
      { label: 'Pipe Leak Repair', href: '/services/pipe-leak-repair' },
    ],
    hdbNote: 'HDB units have specific requirements for water heater installation, including electrical load calculations for electric heaters and venting requirements for gas models. Our installations comply with all HDB guidelines and building safety standards. We understand the constraints of HDB bathroom spaces and can recommend appropriate heater models.',
  },

  'sink-choke-repair': {
    slug: 'sink-choke-repair',
    title: 'Sink Choke Repair',
    metaTitle: 'Sink Choke Repair Singapore - Kitchen & Bathroom Sink Unblocking Service',
    metaDescription:
      'Professional sink choke repair in Singapore. RedDot Emergency clears blocked kitchen and bathroom sinks fast. Same-day service across HDB and condo units.',
    heroDescription: 'Fast sink choke repair for kitchen and bathroom sinks across Singapore. Professional clearing of clogs and blockages with preventive advice.',
    heroImage: KITCHEN_SINK,
    heroImageAlt: 'Kitchen sink with drain blockage and stagnant water from choke',
    overview:
      'A blocked sink disrupts your daily routine and can cause unpleasant odours, water backup, and potential water damage to cabinets and flooring beneath the sink. Whether it is your kitchen sink clogged with food debris and grease, or a bathroom basin blocked with soap scum and hair, RedDot Emergency provides fast and effective sink choke repair services for homes across Singapore. Kitchen sink blockages differ significantly from bathroom sink chokes due to the nature of debris involved—kitchen chokes typically involve hardened grease, food particles, and occasionally utensil damage, while bathroom sinks usually accumulate hair, soap scum, toothpaste, and skincare products. Both require professional expertise to clear without damaging delicate sink traps and pipes. We understand that your kitchen and bathroom sinks are essential to daily hygiene, food preparation, and cleaning, so we prioritize same-day service and rapid response. Our technicians carry professional-grade equipment including mechanical augers, plumbing snakes, and access tools that clear blockages safely without harsh chemical drain cleaners that damage pipes. We serve HDB units in all neighborhoods including Bedok, Woodlands, and Sengkang, as well as private properties and condominium units throughout Singapore.',
    commonIssues: [
      {
        title: 'Slow Draining Sink',
        description: 'Water drains slowly, often taking 30+ seconds to completely empty even with minor water volume. Slow drainage indicates a partial blockage in the drain pipe or trap. In kitchen sinks, this is often caused by grease buildup. In bathroom sinks, it indicates accumulated hair and soap residue. Slow drainage worsens over time until the sink stops draining completely.',
      },
      {
        title: 'Complete Blockage - Standing Water',
        description: 'Water does not drain at all and pools in the sink basin, forcing you to manually empty it with a cup. This indicates a complete blockage in the S-bend trap or drain pipe. Complete blockages create sanitation concerns and prevent use of the sink until cleared.',
      },
      {
        title: 'Foul and Unpleasant Odours',
        description: 'Bad smells emanating from the drain indicate decomposing organic matter trapped in the pipes. Food particles, hair, and organic buildup ferment and decompose, creating particularly unpleasant odors in kitchen sinks. These smells intensify over time as blockage worsens.',
      },
      {
        title: 'Gurgling Sounds When Draining',
        description: 'Air trapped by blockages causes distinctive gurgling, bubbling, or sucking sounds when water drains from the sink. This acoustic warning indicates significant blockage is present and the blockage forces air through narrow gaps around the blockage mass.',
      },
    ],
    issueImages: [
      KITCHEN_SINK,
      SINK_DRAIN,
      BATHROOM_SINK,
      SINK_CLEAN,
    ],
    process: [
      {
        step: 'Thorough Inspection and Diagnosis',
        description: 'We examine the sink and drain carefully to identify the type and location of the blockage. Is it in the sink trap directly below, in the visible portion of the pipe, or deeper in the drainage system? We determine whether the blockage is caused by grease, hair, food particles, or other debris, which determines our clearing approach.',
      },
      {
        step: 'Strategic Clearing Using Appropriate Methods',
        description: 'We use the most effective and pipe-safe method for your specific blockage. For minor blockages, we may use a plunger with proper technique. For grease buildup, we apply hot water treatment. For solid blockages, we use mechanical clearing with a snake or auger. We specifically avoid harsh chemical cleaners that damage pipes.',
      },
      {
        step: 'Deep Pipe Cleaning and Residue Removal',
        description: 'Beyond clearing the blockage itself, we clean the pipe surfaces to remove residual buildup that could cause future blockages. In kitchen sinks, we flush away grease residue. In bathroom sinks, we remove soap and hair accumulation that narrows the pipe.',
      },
      {
        step: 'Flow Testing and Verification',
        description: 'We run water through the drain to confirm proper flow and drainage at normal rates. We listen for any remaining gurgling sounds and observe water behavior to ensure the blockage is completely resolved and the pipe is clear.',
      },
    ],
    processImages: [PROC_SINK, PROC_PLUMBER, PROC_SINK, PROC_DRAIN],
    whyUs: [
      {
        title: 'Rapid Service Completion',
        description: 'Most sink chokes are cleared within 30-45 minutes of our arrival. We understand your sink is essential for daily routines and prioritize quick resolution. Complex blockages may take longer, but we complete most standard chokes on the same day you call.',
      },
      {
        title: 'Pipe-Safe Clearing Methods',
        description: 'We use professional clearing methods that do not damage your plumbing system. We avoid harsh chemical drain cleaners that corrode pipe interiors, and we apply appropriate force with mechanical tools to clear blockages without stressing pipe walls.',
      },
      {
        title: 'Kitchen and Bathroom Sink Expertise',
        description: 'We handle both kitchen sink chokes from grease buildup and bathroom basin chokes from hair and soap scum. Each requires different clearing strategies, and our technicians know the specific approaches for each situation.',
      },
      {
        title: 'Prevention Education and Advice',
        description: 'We advise on how to keep your sinks flowing freely, providing practical tips specific to your situation. For kitchen sinks, we recommend grease disposal methods. For bathroom sinks, we suggest appropriate drain maintenance practices.',
      },
      {
        title: 'Professional Equipment and Access',
        description: 'We have specialized tools for accessing and clearing blockages in tight spaces like under-sink areas. We have drain snakes and augers of appropriate sizes for residential pipes, and we know how to apply them effectively without causing damage.',
      },
      {
        title: 'Transparent Straightforward Pricing',
        description: 'Service costs are clearly explained with no hidden fees or surprise charges. You understand the cost before work begins, making it easy to budget for the repair.',
      },
    ],
    faqs: [
      {
        question: 'What causes sink chokes?',
        answer: 'Kitchen sinks typically choke from accumulation of grease, food particles, and soap buildup that solidify in the trap and pipes. Bathroom sinks usually choke from hair, soap scum, toothpaste residue, and skincare product buildup. Both situations develop over weeks or months as blockage gradually restricts water flow.',
      },
      {
        question: 'Can chemical drain cleaners damage my pipes?',
        answer: 'Repeated use of harsh chemical drain cleaners can corrode pipes over time, especially in older plumbing systems. Chemical cleaners work by dissolving the blockage but also slightly dissolve pipe material, weakening pipes. Professional mechanical clearing is safer and more effective for stubborn blockages without pipe damage.',
      },
      {
        question: 'How can I prevent sink chokes?',
        answer: 'Use sink strainers to catch food particles and hair before they enter the drain. Avoid pouring grease down kitchen drains—dispose of grease in trash. Periodically flush drains with very hot water to dissolve buildup. Regular maintenance prevents most chokes from developing in the first place.',
      },
      {
        question: 'Is it safe to use a plunger on my kitchen sink?',
        answer: 'Yes, a plunger can be effective for minor blockages if used with proper sealing technique. You must completely seal the drain opening and apply firm, rapid plunging motions. However, plungers work best on shallow blockages and are less effective on deep or severe blockages.',
      },
      {
        question: 'Why does my bathroom sink smell bad even though it drains?',
        answer: 'Odors can come from trapped decomposing material deep in the pipe even if water drains. Bacteria and organic matter accumulate and ferment, creating odors. Professional cleaning and clearing removes this material and the odor source, which basic drain clearing may not accomplish.',
      },
      {
        question: 'Should I use store-bought drain cleaning products?',
        answer: 'Store-bought mechanical augers or plungers are safe to try for minor blockages. Chemical drain cleaners are less recommended due to pipe damage risk. If DIY methods do not work after a few attempts, professional service is more cost-effective and safer than repeated chemical treatments.',
      },
    ],
    commonCauses: [
      {
        title: 'Grease and Oil Accumulation in Kitchen Sinks',
        description: 'Cooking oil and grease solidify as they cool in pipes, accumulating into blockages over time. Even small amounts of grease poured down drains add up—a sink used multiple times daily quickly accumulates enough grease to restrict water flow significantly. This is the leading cause of kitchen sink chokes.',
      },
      {
        title: 'Hair Accumulation in Bathroom Sinks',
        description: 'Hair from washing faces, brushing hair over sinks, and cleaning in bathroom areas gets trapped in the drain. Hair accumulates around the drain screen and in the trap, catching soap and other debris. A single bathroom sink can trap significant hair over weeks.',
      },
      {
        title: 'Soap Scum and Personal Care Product Buildup',
        description: 'Soap, shampoo, conditioner, and face wash residue accumulates in bathroom sink pipes, combining with minerals in water to create hard, crusty buildup. This soap scum narrows the pipe interior and eventually blocks flow completely.',
      },
      {
        title: 'Foreign Objects Accidentally Flushed',
        description: 'Jewelry, small toys, dental floss, and other items accidentally dropped down sinks can lodge in the trap and create blockages. In kitchen sinks, dropped utensils or food can cause blockages.',
      },
      {
        title: 'Mineral Deposits from Hard Water',
        description: 'Singapore water contains minerals that accumulate inside sink pipes. When combined with grease, soap, and other debris, mineral deposits create hard blockages resistant to simple clearing.',
      },
    ],
    warningSigns: [
      {
        title: 'Water Takes Longer to Drain',
        description: 'Slow drainage is the earliest warning sign of developing blockage. Address this before it becomes complete blockage. Hot water flushing or professional cleaning can often prevent complete choke if done early.',
      },
      {
        title: 'Visible Debris or Residue in Sink',
        description: 'Food particles, hair, or soap residue visible in the sink indicate blockage is developing. Clear visible material and consider professional cleaning to prevent worse blockage.',
      },
      {
        title: 'Unpleasant Smells from Drain',
        description: 'Bad odors from a sink indicate decomposing material and bacterial growth in the drain. This is a sign that buildup has progressed significantly and warrants professional cleaning.',
      },
      {
        title: 'Water Backing Up into the Sink',
        description: 'If water that should go down the drain instead backs up and fills the sink, significant blockage is present. This is a critical warning that the sink is nearing complete blockage.',
      },
      {
        title: 'Gurgling or Unusual Drain Sounds',
        description: 'Strange sounds from the drain indicate trapped air and significant blockage. Address these sounds before they lead to complete blockage.',
      },
    ],
    delayRisks: 'Delaying sink choke repair allows the blockage to progress from slow drainage to complete blockage, rendering your sink unusable. Continued water backup can overflow the sink, damaging cabinets, flooring, and electrical outlets beneath the sink. In HDB units, water damage to lower floors creates liability and neighbor disputes. Unpleasant drain odors intensify and spread throughout your kitchen or bathroom as bacterial growth increases. In kitchen sinks, grease blockages become harder and more difficult to clear mechanically the longer they persist. Water pooling under sinks creates mold growth in cabinet spaces, contaminating food storage areas and creating health hazards. The longer you delay, the more aggressive clearing methods may be required, increasing the risk of pipe damage during repair.',
    internalLinks: [
      { label: 'Emergency Plumbing Service', href: '/emergency-plumbing' },
      { label: 'Frequently Asked Questions', href: '/faq' },
      { label: 'Contact Us Now', href: '/contact' },
      { label: 'Toilet Bowl Choke Repair', href: '/services/toilet-bowl-choke-repair' },
    ],
    hdbNote: 'HDB kitchen and bathroom sinks have specific S-bend and trap configurations. Our technicians understand these layouts and can access them efficiently in HDB units without unnecessary cabinet demolition.',
  },

  'floor-trap-choke-repair': {
    slug: 'floor-trap-choke-repair',
    title: 'Floor Trap Choke Clearing',
    metaTitle: 'Floor Trap Choke Clearing Singapore - Bathroom Floor Drain Unblocking',
    metaDescription:
      'Professional floor trap choke clearing in Singapore by RedDot Emergency. Fast bathroom and kitchen floor drain unblocking. Same-day service for HDB and condo units.',
    heroDescription: 'Professional floor trap choke clearing to prevent water pooling and odours in your bathroom and kitchen areas across Singapore.',
    heroImage: FLOOR_DRAIN,
    heroImageAlt: 'Bathroom floor drain with water pooling from blocked floor trap',
    overview:
      'Floor trap chokes cause water to pool on bathroom and kitchen floors, creating dangerous slip hazards and unpleasant odours that indicate decomposing matter in the drainage system. Floor traps are critical components of the drainage system in Singapore homes that collect water from floor areas and direct it into the main drainage system. These blockages develop gradually from hair, soap scum, and debris accumulation in the floor trap over weeks or months. RedDot Emergency provides professional floor trap clearing to restore proper drainage and maintain hygiene in your wet areas. Floor traps require specialized knowledge—unlike sink drains or toilet systems, floor traps are accessed through floor-level openings and may be covered by floor finishes, making diagnosis more challenging. We have the expertise and tools to inspect, diagnose, and clear blockages efficiently. Water pooling on floors indicates the blockage is significant—allowing water to sit on bathroom or kitchen floors risks damage to flooring structure, electrical safety hazards if water contacts outlets or appliances, and mold growth in the floor void. We serve HDB units across neighborhoods including Punggol, Sengkang, and all other estates, as well as condominium units and private properties throughout Singapore.',
    commonIssues: [
      {
        title: 'Water Pooling on Bathroom or Kitchen Floors',
        description: 'Water accumulates on bathroom or kitchen floors instead of draining properly through the floor trap. This creates immediate safety hazards including slip risks and potential water damage to flooring and the structure beneath. Water pooling indicates significant blockage that requires urgent professional attention.',
      },
      {
        title: 'Slow Floor Drain',
        description: 'Water drains very slowly through the floor trap—a shower taking 10+ minutes to drain instead of a few seconds. This indicates a partial blockage restricting water flow. Slow drainage worsens gradually until complete blockage occurs.',
      },
      {
        title: 'Foul Odours Rising from the Floor Drain',
        description: 'Bad smells rising from the floor trap indicate trapped decomposing matter—hair, soap, food particles, and organic debris that ferment and decompose in the drainage system. These odours intensify over time as blockage worsens and more material decomposes.',
      },
      {
        title: 'Recurring Blockages That Return Quickly',
        description: 'Floor trap keeps blocking even after basic cleaning or DIY clearing attempts, suggesting deeper pipe issues or structural problems in the drainage system. Recurring blockages indicate the full depth of the blockage was not cleared, only surface material.',
      },
    ],
    issueImages: [
      FLOOR_DRAIN,
      BATHROOM_SINK,
      PLUMBING_PIPES,
      SINK_CLEAN,
    ],
    process: [
      {
        step: 'Comprehensive Floor Trap Inspection',
        description: 'We carefully remove the floor trap cover, which may be sealed by years of mineral buildup, and visually inspect the trap chamber for visible blockages. We assess whether the blockage is in the trap itself or extends into the connecting pipes below the floor.',
      },
      {
        step: 'Deep Professional Clearing',
        description: 'We use professional tools specifically designed for floor trap clearing to remove blockages deep within the trap and connecting pipes. Our equipment can reach well beyond the visible trap chamber where significant blockage often resides. This deep clearing prevents rapid re-blockage.',
      },
      {
        step: 'Complete Trap Housing Cleaning',
        description: 'We thoroughly clean the trap housing, removing any residual buildup, decomposing matter, and odor-causing bacteria. We may apply cleaning solutions if necessary to remove stubborn mineral deposits or grease buildup that contributes to odors.',
      },
      {
        step: 'Drainage System Testing',
        description: 'We test water flow to confirm the floor trap is draining properly at normal speed. We pour water through the system and observe drainage, listening for any remaining gurgling or unusual sounds that might indicate incomplete clearing.',
      },
    ],
    processImages: [PROC_DRAIN, PROC_PLUMBER, PROC_SINK, PROC_DRAIN],
    whyUs: [
      {
        title: 'Thorough Complete Clearing',
        description: 'We clear the full depth of the trap and connecting pipes, not just the surface material visible when the cover is first opened. This comprehensive approach prevents the blockage from returning within days or weeks.',
      },
      {
        title: 'Odour Elimination at the Source',
        description: 'Our cleaning removes the source of foul odours—decomposing matter and bacteria—rather than just masking symptoms with temporary solutions. After our service, unpleasant floor drain odours should be completely eliminated.',
      },
      {
        title: 'HDB and Condo Plumbing Expertise',
        description: 'We are familiar with the floor trap systems used in all Singapore property types. HDB floor traps differ from condo systems—we understand these differences and apply appropriate clearing methods for each configuration.',
      },
      {
        title: 'Quick Turnaround Time',
        description: 'Most floor trap chokes are resolved within 30-45 minutes of our arrival. We understand water pooling on floors is a safety and sanitation emergency and prioritize rapid response.',
      },
      {
        title: 'Prevention Recommendations',
        description: 'After clearing, we advise on preventive maintenance practices to reduce future blockage risk. We recommend cleaning schedules and may suggest drain covers or screens to keep hair out of floor traps.',
      },
      {
        title: 'Proper Trap Cover Sealing',
        description: 'We ensure the trap cover is properly sealed and sits flush with the floor after cleaning, preventing water from bypassing the trap or tripping hazards from raised covers.',
      },
    ],
    faqs: [
      {
        question: 'Why does my floor trap keep blocking repeatedly?',
        answer: 'Recurring blockages usually indicate that debris is accumulating deeper in the pipe system beyond the visible trap chamber. Professional clearing removes the full blockage depth rather than just surface debris. Recurring issues may also indicate that your floor has high hair volume (large family) or structural drainage problems requiring additional solutions.',
      },
      {
        question: 'Can floor trap chokes cause flooding in my bathroom?',
        answer: 'Yes, if left unaddressed, a blocked floor trap can cause water to overflow from showers or sinks onto the floor, potentially damaging adjacent rooms and the structure beneath the floor. In HDB units, water can damage the unit below, creating serious liability issues. This is a critical problem requiring urgent attention.',
      },
      {
        question: 'How often should floor traps be professionally cleaned?',
        answer: 'We recommend having floor traps professionally cleaned every 6-12 months as preventative maintenance, even if they are not currently blocked. Regular cleaning prevents blockages from forming and maintains good drainage and hygiene. Families with high hair volume may need more frequent cleaning.',
      },
      {
        question: 'What causes floor trap odors?',
        answer: 'Odors come from decomposing organic matter—hair, soap residue, food particles, and skin cells—trapped in the floor trap. Bacteria decompose this material, creating unpleasant smells. Professional cleaning removes this material and the odor source completely.',
      },
      {
        question: 'Is it safe to open my floor trap cover myself?',
        answer: 'The cover can often be opened, though sometimes mineral buildup makes it very difficult. However, professional clearing requires specialized equipment you likely do not have. We have the tools and expertise to clear deep blockages that DIY opening cannot address.',
      },
      {
        question: 'Can I prevent floor trap blockages?',
        answer: 'You can reduce blockage frequency by using drain covers or screens to trap hair before it enters the drain, regularly flushing the trap with hot water, and periodic professional maintenance. However, some blockage is nearly inevitable in active bathrooms and cannot be completely prevented.',
      },
    ],
    commonCauses: [
      {
        title: 'Hair Accumulation in the Trap',
        description: 'Hair from showers and bathroom use accumulates in the floor trap, gradually restricting water flow. Every person in the household contributes hair daily—large families or people with long hair accumulate significant hair quickly. Hair tangles around debris and traps other blockage materials.',
      },
      {
        title: 'Soap and Personal Care Product Buildup',
        description: 'Soap, shampoo, body wash residue, and skincare products wash down shower and sink drains directly into floor traps. These products combine with minerals in water and hair to create viscous buildup that restricts flow.',
      },
      {
        title: 'Food and Organic Debris in Kitchen Floor Traps',
        description: 'Kitchen floor traps receive food particles, cooking oil residue, and organic matter from cleaning activities. These materials decompose in the trap, creating odors and blockages, especially when combined with grease that solidifies.',
      },
      {
        title: 'Mineral Deposits in Hard Water Areas',
        description: 'Singapore water contains minerals that accumulate inside floor traps and pipes. When combined with hair and soap, minerals create hard deposits that restrict flow. Mineral buildup also makes traps difficult to clean.',
      },
      {
        title: 'Structural Damage or Poor Drainage Design',
        description: 'Some floor traps have poor drainage geometry or are positioned at problematic angles that encourage sediment accumulation. Older buildings may have structural settlement that changed drain slopes. Tree roots can penetrate drain pipes in older properties, creating catch points.',
      },
    ],
    warningSigns: [
      {
        title: 'Water Takes Longer to Drain from Shower or Floor Area',
        description: 'Slow drainage is the first warning sign of developing blockage. Address this before it becomes complete blockage that causes standing water and safety hazards.',
      },
      {
        title: 'Visible Hair or Debris in the Floor Trap',
        description: 'If you can see the trap cover and notice significant hair or debris accumulation visible at the opening, significant blockage is developing. Professional clearing should be performed.',
      },
      {
        title: 'Unpleasant Odours from Floor Area',
        description: 'Bad smells rising from floor traps indicate decomposing material. These odors worsen over time and spread through your home. Odors suggest blockage is significant.',
      },
      {
        title: 'Gurgling or Unusual Sounds from Floor Drain',
        description: 'Bubbling, gurgling, or sucking sounds from the floor trap indicate trapped air and significant blockage. Address these sounds promptly.',
      },
      {
        title: 'Water Visibly Pooling on Floor',
        description: 'Any visible water accumulation is a critical warning. This indicates severe blockage and immediate emergency response is necessary.',
      },
    ],
    delayRisks: 'Delaying floor trap choke clearing allows water to accumulate on bathroom and kitchen floors, creating dangerous slip hazards that risk injuries, especially for children and elderly people. Continued water pooling damages flooring materials—wood warps, laminate separates, and tiles crack. Water infiltrating the floor structure causes structural rot and decay. In HDB units, water leaking through the floor damages the unit below, creating serious neighbor disputes and liability issues. Unpleasant odors intensify as decomposing matter accumulates and bacterial colonies expand. Electrical safety hazards develop if standing water contacts outlets, switches, or appliances. Mold growth in floor voids spreads to walls and creates health hazards, particularly respiratory problems. The longer you delay, the more extensive and expensive the eventual restoration becomes.',
    internalLinks: [
      { label: 'Emergency Plumbing Service', href: '/emergency-plumbing' },
      { label: 'Frequently Asked Questions', href: '/faq' },
      { label: 'Contact Us Now', href: '/contact' },
      { label: 'Sink Choke Repair', href: '/services/sink-choke-repair' },
    ],
    hdbNote: 'HDB floor traps have specific designs that vary by block age and configuration. Our technicians are familiar with HDB drainage systems and floor trap designs across all estates. We understand how HDB floor traps connect to the main soil stack and drainage system.',
  },

  'tap-repair': {
    slug: 'tap-repair',
    title: 'Tap Repair & Replacement',
    metaTitle: 'Tap Repair & Replacement Singapore - Fix Leaking Taps & Install New Fixtures',
    metaDescription:
      'Tap repair and replacement in Singapore by RedDot Emergency. Fix leaking taps, install new fixtures, restore water flow. Same-day service for HDB and condo units.',
    heroDescription: 'Professional tap repair and replacement services. Fix dripping taps, install new fixtures, and restore proper water flow across Singapore.',
    heroImage: FAUCET_DRIP,
    heroImageAlt: 'Dripping bathroom faucet with water droplet showing tap leak problem',
    overview:
      'A leaking tap wastes water and increases your utility bills considerably—a tap dripping once per second wastes over 20 liters daily, adding hundreds of dollars annually to your water bill. A tap that will not turn on or off properly is a daily inconvenience that affects kitchen work, hygiene routines, and quality of life. RedDot Emergency provides comprehensive tap repair and replacement services for all types of taps found in Singapore homes, from kitchen mixer taps to basin taps and shower fixtures. Our technicians understand that taps are more than functional components—they are part of your home\'s appearance and comfort, so we help you select quality replacement fixtures when repair is not feasible. We handle simple washer replacements, cartridge repairs for modern taps, thermostat adjustment for temperature-controlled fixtures, and complete replacement of damaged tap bodies. Different tap types require different repair approaches—our technicians have trained expertise with mixer taps, pillar taps, ceramic disk taps, sensor taps, and shower valve systems. We serve HDB units across all Singapore neighborhoods including Tampines, Jurong, Bedok, and throughout the island, as well as condominium and private properties.',
    commonIssues: [
      {
        title: 'Continuously Dripping Tap',
        description: 'Water continues to drip even when the tap is fully closed, usually caused by worn washers or damaged cartridges that no longer seal properly. The steady dripping indicates the internal valve is not closing completely. This is the most common tap problem and usually repairable with simple component replacement.',
      },
      {
        title: 'Stiff or Jammed Tap Handle',
        description: 'The tap handle is difficult to turn or stuck in position, often due to mineral buildup from hard water or worn internal components. Mineral deposits accumulate inside the tap body, restricting movement. This problem worsens over time and eventually prevents the tap from closing at all.',
      },
      {
        title: 'Reduced Water Pressure from Tap',
        description: 'Water flow from the tap is weaker than normal, potentially caused by aerator blockage, mineral deposits restricting internal passages, or pipe-level pressure issues. If only one tap has reduced pressure while others flow normally, the problem is in that specific tap.',
      },
      {
        title: 'Visible Tap Body Damage or Corrosion',
        description: 'Cracked, corroded, or damaged tap body that affects operation or appearance. Severe damage to the tap body requires replacement rather than repair, as patching temporary fixes are unreliable.',
      },
    ],
    issueImages: [
      FAUCET_DRIP,
      DRIP_CLOSE,
      FAUCET_RUNNING,
      BATHROOM_BASIN,
    ],
    process: [
      {
        step: 'Detailed Tap Assessment',
        description: 'We identify the specific issue with your tap and determine the underlying cause. We test water pressure, examine the tap body for damage, and assess whether repair is possible or replacement is necessary. We determine the tap type and model to source appropriate replacement parts if repair is chosen.',
      },
      {
        step: 'Parts Sourcing and Selection',
        description: 'For repairs, we source the correct replacement washers, cartridges, O-rings, or other components specific to your tap model. For replacements, we help you select suitable new taps matching your plumbing style and budget. We provide options ranging from basic functional taps to premium designer fixtures.',
      },
      {
        step: 'Professional Repair or Installation',
        description: 'We carry out the repair using genuine replacement parts or install the new tap with proper connections, sealing, and alignment. For replacements, we carefully disconnect the old tap, prepare the mounting surface, connect all water lines, and install the new tap with proper sealing to prevent leaks.',
      },
      {
        step: 'Testing and Functional Verification',
        description: 'We test for leaks at all connection points, check water flow from both hot and cold sides, verify smooth tap operation, and ensure proper spray pattern for kitchen taps. We confirm there are no leaks under the sink or at wall connections before we complete the job.',
      },
    ],
    processImages: [PROC_DRIP, PROC_PIPE_INSTALL, PROC_PLUMBER, PROC_DRIP],
    whyUs: [
      {
        title: 'All Tap Types and Models Serviced',
        description: 'We service mixer taps for both kitchen and bathroom, pillar taps, ceramic disk taps, sensor-activated taps, and shower fixtures. Whether your tap is a simple traditional design or a modern thermostatic model, our technicians have the expertise and components to repair or replace it.',
      },
      {
        title: 'Quick Repair Completion',
        description: 'Most tap repairs are completed within 30 minutes of arrival. Simple washer replacements may take just 15 minutes. We minimize disruption to your daily routine by working quickly and efficiently.',
      },
      {
        title: 'Replacement Taps Available',
        description: 'If repair is not cost-effective, we supply and install quality replacement taps. We offer options suitable for HDB and condo units at competitive prices, with choices from basic functional designs to premium fixtures.',
      },
      {
        title: 'Clean Workmanship and Tidy Finish',
        description: 'We leave no mess behind. We clean up after the job and ensure your space is tidy and undisturbed. We remove old parts responsibly and leave your sink and surrounding area clean.',
      },
      {
        title: 'Warranty on Repairs and Replacements',
        description: 'Our tap repairs and installations come with service warranty, giving you confidence in the quality of our work. If issues develop within the warranty period, we address them promptly.',
      },
      {
        title: 'Water-Saving Tap Options',
        description: 'If you are replacing taps, we can recommend water-efficient models that reduce water consumption while maintaining good flow—helping you save on water bills while being environmentally responsible.',
      },
    ],
    faqs: [
      {
        question: 'How much water does a dripping tap waste?',
        answer: 'A tap dripping once per second wastes over 20 liters of water per day. That adds up to approximately 7,300 liters per year, or about 200+ dollars in additional water charges annually. Even a slower drip of once every few seconds still wastes thousands of liters yearly.',
      },
      {
        question: 'Is it better to repair or replace a leaking tap?',
        answer: 'If the tap is in good condition overall and less than 10 years old, replacing the washer or cartridge is usually sufficient and significantly cheaper. Older taps or those with multiple issues may benefit from full replacement. We provide cost-benefit analysis to help you decide.',
      },
      {
        question: 'Do you supply and install replacement taps?',
        answer: 'Yes, we supply and install new taps from quality manufacturers. We offer a range of options suitable for HDB and condo units at competitive prices. We can install taps you provide or source appropriate options for your needs and budget.',
      },
      {
        question: 'Why is my hot water tap stiff?',
        answer: 'Hard water minerals accumulate in the tap valve, restricting movement. This is especially common in taps used for hot water. Sometimes we can clean the mineral deposits and restore smooth operation. For severely stiffened taps, replacement may be more practical.',
      },
      {
        question: 'How do I clean my tap aerator?',
        answer: 'The aerator is the removable screen at the tap tip. Unscrew it by hand or with pliers wrapped in cloth to avoid scratching. Soak it in white vinegar to dissolve mineral deposits, then scrub with a brush and rinse thoroughly before reinstalling.',
      },
      {
        question: 'What is the lifespan of a typical tap?',
        answer: 'Quality taps typically last 15-20 years with normal use. Some premium taps last 25+ years. Budget taps may fail within 5-10 years. Hard water and heavy use reduce lifespan. Our recommendations consider your tap age when advising repair versus replacement.',
      },
    ],
    commonCauses: [
      {
        title: 'Worn Washers or Seals',
        description: 'Over time, rubber washers and seals inside tap valves deteriorate from constant water pressure and temperature changes. Worn washers no longer seal properly, allowing water to flow even when the tap is closed. This is the most common cause of dripping taps and is easily repaired.',
      },
      {
        title: 'Mineral Buildup from Hard Water',
        description: 'Singapore water contains minerals that accumulate inside tap bodies and valves, restricting movement and preventing proper closure. Hard water deposits gradually stiffen tap handles and prevent complete valve closure. Mineral buildup also causes discoloration and reduced flow.',
      },
      {
        title: 'Damaged or Deteriorating Cartridges',
        description: 'Modern taps use cartridges containing internal seals instead of traditional washers. Cartridges wear out from use and can crack if impacted or frozen. A failing cartridge cannot seal properly and causes continuous dripping.',
      },
      {
        title: 'Loose or Corroded Valve Seats',
        description: 'The valve seat is the surface where the washer seals. If the seat becomes pitted or corroded, the washer cannot create a watertight seal. Corroded valve seats must be replaced or the tap should be replaced entirely.',
      },
      {
        title: 'O-Ring Failure or Deterioration',
        description: 'Small rubber O-rings throughout the tap body create watertight seals. These rings degrade from exposure to chlorine, heat, and water minerals over 5-10 years of use, causing leaks that develop gradually.',
      },
    ],
    warningSigns: [
      {
        title: 'Tap Dripping Even When Fully Closed',
        description: 'This is the most obvious warning sign. Address dripping immediately as water waste accelerates with time and the problem worsens.',
      },
      {
        title: 'Reduced Water Pressure from Just One Tap',
        description: 'If one tap has noticeably lower flow while others flow normally, that specific tap needs attention. Cleaning or repair can often restore flow.',
      },
      {
        title: 'Difficulty Turning Tap Handle',
        description: 'Stiff tap handles that require effort to move indicate mineral buildup. The problem will worsen until the tap becomes difficult or impossible to fully close.',
      },
      {
        title: 'Water Leaking from Under the Sink',
        description: 'Leaks under the sink indicate pipe connection problems or tap body failure. Address these immediately as water damage develops rapidly.',
      },
      {
        title: 'Visible Corrosion or Discoloration on Tap',
        description: 'Rust, mineral deposits, or other discoloration indicates the tap is deteriorating. These taps are likely to fail soon.',
      },
    ],
    delayRisks: 'Delaying tap repair allows the constant dripping to waste increasing amounts of water and inflate your water bill continuously. What costs $20-30 to repair now will cost you hundreds of dollars in wasted water over months. A stiff tap handle that cannot fully close will eventually seize completely, preventing water shut-off for that fixture. Water leaking under the sink will gradually damage cabinet materials, causing rot and mold growth that requires expensive restoration. In HDB units, a tap leaking through the floor affects the unit below, creating serious neighbor disputes and potential liability. The longer you delay, the more extensive the damage and the costlier the eventual repair or replacement becomes.',
    internalLinks: [
      { label: 'Emergency Plumbing Service', href: '/emergency-plumbing' },
      { label: 'Frequently Asked Questions', href: '/faq' },
      { label: 'Contact Us Now', href: '/contact' },
      { label: 'Pipe Leak Repair', href: '/services/pipe-leak-repair' },
    ],
    hdbNote: 'HDB bathroom and kitchen taps have specific connection standards and mounting requirements. Our technicians understand HDB plumbing specifications and install taps that comply with HDB guidelines and building standards.',
  },

  'basin-replacement': {
    slug: 'basin-replacement',
    title: 'Basin Replacement',
    metaTitle: 'Basin Replacement Singapore - Professional Bathroom Basin Installation',
    metaDescription:
      'Professional basin replacement and installation in Singapore by RedDot Emergency. Installation for HDB and condo bathrooms and kitchens. Same-day service available.',
    heroDescription: 'Professional basin replacement and installation for HDB and condo bathrooms and kitchens across Singapore with clean, expert workmanship.',
    heroImage: BASIN_MODERN,
    heroImageAlt: 'Modern bathroom washbasin with sleek faucet requiring replacement',
    overview:
      'Whether your basin is cracked, permanently stained, or you are renovating your bathroom or kitchen, RedDot Emergency provides professional basin replacement and installation services tailored to Singapore homes. We handle the entire process from careful removal of the old basin to fitting and sealing the new one, ensuring proper plumbing connections, structural support, and a clean, professional finish. A damaged or stained basin significantly impacts your bathroom\'s appearance and functionality—a cracked basin leaks water onto flooring and cabinetry, a heavily stained basin appears unhygienic despite being clean, and a basin installed incorrectly creates ongoing plumbing problems. Our technicians understand that basin replacement is often part of larger bathroom renovation projects, so we work efficiently to minimize disruption and ensure the new basin integrates seamlessly with your plumbing and design aesthetic. We serve HDB units in neighborhoods throughout Singapore, understanding the space constraints and specific plumbing configurations of different HDB blocks. We also service condominium units and private properties, working with both standard basins and premium designer options. Whether you are replacing a functional basin or upgrading to a modern design, we ensure professional installation that will last for years.',
    commonIssues: [
      {
        title: 'Cracked or Chipped Basin',
        description: 'Visible cracks or chips in the basin body indicate damage that can leak or worsen over time. Water seeping through cracks damages the cabinetry beneath and creates mold growth. Even small cracks gradually expand from water pressure, eventually requiring replacement to prevent extensive water damage.',
      },
      {
        title: 'Permanent Stains That Resist Cleaning',
        description: 'Stubborn stains in the basin surface that cannot be removed with any cleaning method make the basin appear old and unhygienic despite the sink working fine. Hard water deposits, rust stains, or material discoloration indicate the basin surface is permanently affected and replacement is the only cosmetic solution.',
      },
      {
        title: 'Water Leaking from Basin Drain or Connections',
        description: 'Water leaking from where the basin connects to pipes or where the drain enters the basin indicates deteriorated seals or damaged fittings. These leaks damage cabinet materials and flooring beneath the sink, and worsen progressively until the basin must be replaced.',
      },
      {
        title: 'Renovation and Kitchen or Bathroom Upgrade',
        description: 'Choosing to upgrade the basin as part of a planned bathroom or kitchen renovation project, replacing an outdated basin with a modern style to improve the space\'s appearance and functionality.',
      },
    ],
    issueImages: [
      BASIN_MODERN,
      MARBLE_BASIN,
      BATHROOM_BASIN,
      BASIN_CHROME,
    ],
    process: [
      {
        step: 'Careful Old Basin Removal',
        description: 'We carefully remove the existing basin, disconnecting all plumbing connections—hot and cold water supply lines and drain pipes. We protect your bathroom finishes and cabinetry during removal, minimizing damage risk. For basins sealed with caulk or adhesive, we carefully remove these materials without damaging surrounding surfaces.',
      },
      {
        step: 'Mounting Surface Preparation',
        description: 'We prepare the mounting surface by removing old caulk, checking that walls are level and ready for the new basin. We inspect plumbing connections to ensure they are in good condition and positioned correctly for the new basin. We may make minor adjustments to connections if needed.',
      },
      {
        step: 'Professional New Basin Installation',
        description: 'We mount the new basin according to manufacturer specifications, connect all water supply lines using appropriate fittings, connect the drain pipe, and apply professional-grade silicone sealant around the basin edges. We ensure all connections are tight and watertight, with proper support underneath the basin.',
      },
      {
        step: 'Complete Quality Check and Testing',
        description: 'We test for leaks by running water through the basin and observing underneath for any seepage. We check water flow temperature and pressure. We verify the basin is securely mounted, level, and stable. We ensure the sealant is properly applied and will cure correctly.',
      },
    ],
    processImages: [PROC_PLUMBER, PROC_PIPE_INSTALL, PROC_BASIN, PROC_DRIP],
    whyUs: [
      {
        title: 'HDB and Condo Compliant Installation',
        description: 'Our installations meet the specific specifications and requirements of HDB and condo management. We understand different basin types used in various HDB blocks and condo units, and install basins that comply with building codes and management regulations.',
      },
      {
        title: 'Clean, Professional Installation',
        description: 'We ensure proper sealing around basin edges, neat plumbing connections that are accessible for future maintenance, and a finished appearance that looks professionally installed. No rough edges, improper sealing, or exposed connections.',
      },
      {
        title: 'Complete Full-Service Basin Replacement',
        description: 'From removal of the old basin through installation and cleanup, we handle the entire process. You do not need to coordinate multiple contractors—we manage everything from start to finish.',
      },
      {
        title: 'Quality Basins Supplied or Your Choice Installed',
        description: 'We can supply quality basins from reputable manufacturers at competitive prices, or we can install your own preferred basin choice. We have access to various styles and price points suitable for different budgets and design preferences.',
      },
      {
        title: 'Careful Workmanship and Attention to Detail',
        description: 'We take pride in clean installation work. We protect your bathroom fixtures and finishes during installation. We ensure sealant is applied neatly and trim work is finished properly.',
      },
      {
        title: 'Fast Turnaround',
        description: 'Most basin replacements are completed within 2-3 hours. We schedule installation to minimize disruption to your daily routine, often completing the work between morning and afternoon or afternoon and evening.',
      },
    ],
    faqs: [
      {
        question: 'How long does a basin replacement typically take?',
        answer: 'Most basin replacements are completed within 2-3 hours total, including removal of the old basin, surface preparation, installation of the new basin, connection of all plumbing, and sealant application. This assumes straightforward installation without complications or custom modifications.',
      },
      {
        question: 'Do I need to buy the basin myself or can you supply one?',
        answer: 'You can supply your own basin that you have selected, or we can provide one from our supplier. We offer basin options at various price points suitable for HDB and condo units. If you choose to supply your own, ensure it is compatible with standard plumbing connections.',
      },
      {
        question: 'Can you replace a basin in an older HDB bathroom?',
        answer: 'Yes, we are experienced with HDB bathroom layouts in blocks of all ages. We understand the specific plumbing configurations in different HDB blocks and can work within space constraints common in HDB units. We can recommend basin styles that work well in typical HDB bathrooms.',
      },
      {
        question: 'What is the cost difference between repair and replacement?',
        answer: 'For cracked basins, replacement is usually the only option. For stained basins, repair (cleaning) may not be possible if stains are permanent. The cost depends on the basin type, your location, and complexity of plumbing adjustments. We provide transparent quotes.',
      },
      {
        question: 'Can you install a larger basin than my current one?',
        answer: 'In some cases, yes. If your cabinet and plumbing connections allow, we can install a larger basin. However, some HDB bathrooms have space limitations. We assess your space and recommend appropriate basin sizes that fit your bathroom comfortably.',
      },
      {
        question: 'How long should a new basin last?',
        answer: 'Quality basins typically last 20-30+ years or longer with normal use. The basin itself is durable, but seals and plumbing connections may need maintenance or replacement over time. A properly installed basin will serve you reliably for decades.',
      },
    ],
    commonCauses: [
      {
        title: 'Impact Damage or Accidental Cracking',
        description: 'Basins crack when struck by heavy objects, impact from things dropped into the sink, or stress from improper installation. A single significant impact can create cracks that propagate and worsen over time.',
      },
      {
        title: 'Hard Water Staining and Mineral Deposits',
        description: 'Singapore water contains minerals that leave deposits and stains in basins. Over years of use, these deposits accumulate in the basin surface, creating staining that resists cleaning. Regular cleaning cannot remove mineral staining that has bonded to the basin material.',
      },
      {
        title: 'Age-Related Deterioration and Discoloration',
        description: 'Basins gradually discolor and deteriorate over 15-20 years of use. The surface glaze gradually wears away, reducing resistance to staining. The material may become brittle and prone to cracking.',
      },
      {
        title: 'Plumbing Seal Deterioration',
        description: 'The silicone or rubber seals around the basin and drain connections deteriorate over time due to exposure to water, heat, and cleaning chemicals. Failed seals allow water to escape, eventually requiring basin replacement.',
      },
      {
        title: 'Corrosion of Drainage Connections',
        description: 'Metal drain pipes or connections corrode over time, creating holes or failing seals. Water leaking from corroded connections damages cabinetry below the basin.',
      },
    ],
    warningSigns: [
      {
        title: 'Visible Cracks in Basin',
        description: 'Any crack in the basin should be addressed promptly. Cracks will propagate and worsen, eventually causing leaks and basin failure. Replacement is usually the best solution.',
      },
      {
        title: 'Stains That Will Not Come Clean',
        description: 'If cleaning cannot remove stains despite your best efforts, the stains are permanent. Replacement is the only way to restore appearance.',
      },
      {
        title: 'Water Dripping Underneath the Basin',
        description: 'Water leaking from the basin or connections indicates sealing failure. This requires prompt attention as water damage develops quickly.',
      },
      {
        title: 'Loose or Wobbly Basin',
        description: 'A basin that moves or wobbles when you press on it indicates improper installation or mounting failure. This requires immediate professional attention for safety and water damage prevention.',
      },
      {
        title: 'Visible Mold or Discoloration Under the Basin',
        description: 'Mold growth or water stains underneath the basin indicate moisture is accumulating from undetected leaks. This suggests water damage is occurring.',
      },
    ],
    delayRisks: 'Delaying basin replacement when cracks are present allows water to continue leaking through the cracks, gradually saturating cabinet materials and causing rot. Structural deterioration accelerates—wooden cabinets can become weakened and unusable within months if water damage continues. Water continuously seeping from a leaking basin creates ideal conditions for extensive mold growth in cabinet spaces, requiring professional mold remediation. In HDB units, water seeping through the floor damages the unit below, creating serious neighbor disputes and liability issues. Stains and discoloration worsen over time, making the basin increasingly difficult to keep clean. An unstable basin that has come loose can fall or shift unexpectedly, creating safety hazards. The longer you delay replacement, the more likely you are that additional water damage repair becomes necessary beyond just basin replacement.',
    internalLinks: [
      { label: 'Emergency Plumbing Service', href: '/emergency-plumbing' },
      { label: 'Frequently Asked Questions', href: '/faq' },
      { label: 'Contact Us Now', href: '/contact' },
      { label: 'Tap Repair & Replacement', href: '/services/tap-repair' },
    ],
    hdbNote: 'HDB basins have specific mounting and plumbing requirements that vary by block age and configuration. Our installations use approved methods and materials that comply with HDB standards. We understand space constraints in typical HDB bathrooms and recommend appropriately-sized basins.',
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
