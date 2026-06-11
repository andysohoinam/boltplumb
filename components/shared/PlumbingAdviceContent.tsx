'use client';

import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { WhatsAppFloat } from '@/components/shared/WhatsAppFloat';
import { PageHero } from '@/components/shared/PageHero';
import { CTASection } from '@/components/shared/CTASection';
import { Button } from '@/components/ui/button';
import { WHATSAPP_FULL_LINK } from '@/lib/constants';
import { MessageCircle, CheckCircle, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export function PlumbingAdviceContent() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Plumbing Advice for Singapore Homeowners"
          description="Expert plumbing tips and emergency guides from RedDot Emergency's experienced technicians. Learn how to protect your home from plumbing emergencies."
          breadcrumbs={[{ label: 'Plumbing Advice' }]}
        />

        <div className="max-w-4xl mx-auto px-4 py-12 space-y-16">
          {/* Emergency Plumbing Checklist */}
          <section className="bg-secondary/50 rounded-xl border border-border p-8">
            <h2 className="text-3xl font-bold text-foreground mb-6">Emergency Plumbing Checklist</h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Plumbing emergencies can occur at any time, and knowing how to respond promptly can minimize water damage and protect your home and loved ones. Whether you're in an HDB apartment, a landed property, or a condominium, having a clear action plan is essential. Every minute counts when water is actively flowing from burst pipes or overflowing fixtures, so familiarize yourself with these critical steps today.
              </p>
              <p>
                The first and most critical action is to locate and turn off your main water shutoff valve immediately. In most HDB units, this valve is typically located under the kitchen sink or in a corner of your home marked with a small valve. For some HDB flats, especially older blocks, the main shutoff valve may be installed near the water meter location. Turn the valve clockwise to shut off the water supply to your entire home. This single action can prevent thousands of dollars in water damage. If you're unsure where your main shutoff valve is located, spend time today finding it with your family members—this knowledge could save your home during an emergency.
              </p>
              <p>
                Once you've shut off the water, immediately contain the water that has already leaked. Use towels, buckets, and mops to absorb water and direct it away from electronics, furniture, and other valuables. If the water has spread to multiple rooms, open windows and doors to improve ventilation and prevent mold growth. Close any interior doors to compartmentalize the water damage to specific areas. Remove electrical appliances, documents, and valuables from affected areas to prevent damage.
              </p>
              <p>
                Next, turn off electrical appliances and electronics in the affected area to prevent electrical hazards. If water has come into contact with electrical outlets or appliances, do not touch them. If necessary, switch off the main electrical circuit breaker to ensure safety. Never wade through water or attempt repairs if there's any risk of electrical shock.
              </p>
              <p>
                Document all damage immediately using your smartphone or camera. Take photos and videos of affected areas, damaged items, and water levels. This documentation will be crucial for insurance claims and for our technicians to assess the situation. Note the time the emergency began and any visible damage to plumbing fixtures or pipes.
              </p>
              <p>
                Contact RedDot Emergency immediately at +65 9677 3465. Our emergency plumbers are available 24/7 to respond to your situation. Provide clear details about the nature of the emergency, the affected areas, and any damage you've observed. If you suspect a gas leak or smell gas from your water heater, also contact the PUB emergency hotline at 1800-2255-226 and SCDF at 995 if there's a risk of flooding affecting neighboring units.
              </p>
              <p>
                For HDB residents, if flooding affects common areas or is spreading to neighboring units, contact your Town Council and PUB immediately. The PUB emergency number is 1800-2255-226. If the situation involves severe flooding or risk to life, contact SCDF (Singapore Civil Defence Force) at 995. These agencies can provide additional support and guidance for managing large-scale water emergencies.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                <p className="text-sm font-semibold text-blue-900 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Important Emergency Numbers
                </p>
                <ul className="text-sm text-blue-800 mt-2 space-y-1">
                  <li>RedDot Emergency: +65 9677 3465 (24/7)</li>
                  <li>PUB Emergency: 1800-2255-226</li>
                  <li>SCDF: 995</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Signs of Hidden Water Leaks */}
          <section className="bg-white rounded-xl border border-border p-8">
            <h2 className="text-3xl font-bold text-foreground mb-6">Signs of Hidden Water Leaks</h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Hidden water leaks are one of the most insidious plumbing problems facing Singapore homeowners. Unlike visible leaks, these leaks can damage your home for weeks or months before you notice them, leading to extensive and costly repairs. Singapore's tropical climate, with high humidity and temperatures, accelerates both the leak and the resulting damage. By learning to recognize the early warning signs, you can catch these leaks before they cause catastrophic damage.
              </p>
              <p>
                An unexplained increase in your PUB water bill is often the first sign of a hidden leak. If your monthly water bill has suddenly increased by 20-30% or more without any change in your household's water usage patterns, a leak is likely the culprit. Even small leaks—those as tiny as a pinhole—can waste hundreds of liters of water monthly. Review your PUB billing history and compare current usage with previous months. If usage has spiked unexpectedly, contact RedDot Emergency for a professional leak detection inspection.
              </p>
              <p>
                Damp spots on walls, ceilings, or floors are visual indicators of water leaks within your walls or above suspended ceilings. These wet patches may appear as dark stains or discoloration on painted surfaces. In HDB units, common leak locations include the areas around kitchens, bathrooms, and near water pipes. If you notice damp patches that don't correspond to recent cleaning or rain, investigate immediately. The longer a leak persists within walls, the greater the risk of structural damage and mold growth.
              </p>
              <p>
                Musty or unpleasant odors in specific areas of your home often indicate hidden moisture problems. When water accumulates within walls or under flooring, it creates an environment where mold and mildew thrive. These organisms produce a distinctive earthy smell that becomes more pronounced in Singapore's humid climate. If you detect musty odors that persist despite opening windows and increasing ventilation, hidden moisture is likely present.
              </p>
              <p>
                Peeling paint, wallpaper, or bubbling surfaces are caused by moisture seeping through walls from hidden leaks. As water builds up behind painted surfaces, it pushes the paint away from the wall, creating bubble-like formations. In older HDB units with multiple decades of paint layers, this sign may be particularly noticeable. Any sudden changes in wall or ceiling surfaces warrant investigation.
              </p>
              <p>
                The sound of running water when all taps are turned off is a definitive sign of a leak somewhere in your plumbing system. Listen carefully throughout your home, especially near walls, under sinks, and in toilet areas. Even the faint sound of trickling or dripping water indicates active leakage that requires professional attention.
              </p>
              <p>
                Visible mold growth on walls, ceilings, or in bathroom areas indicates prolonged moisture exposure. While some mold can appear in bathrooms naturally due to shower moisture, excessive or spreading mold suggests a hidden leak. Mold is not just unsightly—it poses health risks, particularly for children, elderly family members, and those with respiratory conditions.
              </p>
              <p>
                Singapore's high humidity amplifies the damage caused by hidden leaks. In our tropical climate, moisture accelerates mold growth, wood rot, and rust formation. A small leak that might cause minor damage in a drier climate can rapidly escalate into serious structural damage in Singapore. This is why swift action is crucial.
              </p>
              <p>
                If you notice any of these signs, contact RedDot Emergency's professional leak detection service. Our technicians use advanced equipment to locate leaks without invasive wall-breaking methods whenever possible. Early detection can save thousands of dollars in repairs and prevent health hazards from mold.
              </p>
            </div>
          </section>

          {/* WhatsApp CTA Block */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 flex flex-col items-center justify-center text-center gap-4">
            <MessageCircle className="w-12 h-12 text-primary" />
            <h3 className="text-xl font-bold text-foreground">Need Immediate Plumbing Advice?</h3>
            <p className="text-foreground/70 max-w-md">
              Chat with RedDot Emergency's team on WhatsApp for quick answers to your plumbing questions. Available 24/7.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              <a href={WHATSAPP_FULL_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 w-5 h-5" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>

          {/* Common Toilet Choke Causes */}
          <section className="bg-secondary/50 rounded-xl border border-border p-8">
            <h2 className="text-3xl font-bold text-foreground mb-6">Common Toilet Choke Causes</h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Toilet choking is one of the most common plumbing issues affecting Singapore homes, and understanding the root causes can help you prevent blockages from occurring. Modern toilets are designed to handle human waste and toilet paper only—nothing else should go down the drain. Unfortunately, many households dispose of items that should go in the trash, leading to stubborn and recurring blockages.
              </p>
              <p>
                Excessive toilet paper usage is a primary cause of toilet choking, particularly in families with young children or elderly members who may use more paper than necessary. While modern toilet paper is designed to break down in water, excessive amounts can accumulate and form blockages in older pipes or in S-bends where the paper can bunch up. If you have a septic tank system (which is rare in Singapore but exists in some landed properties), excess toilet paper can also cause septic tank overflow issues. Consider teaching family members about appropriate paper usage and installing a bidet to reduce reliance on toilet paper.
              </p>
              <p>
                Wet wipes have become increasingly problematic despite marketing labels claiming they're "flushable." These wipes do not break down like toilet paper and accumulate within pipes, creating stubborn blockages. Even so-called "flushable" wipes cause problems because they don't disintegrate. Additionally, wet wipes can combine with grease and other debris to form larger, more difficult blockages. The only items that should go down toilets are human waste and toilet paper—everything else belongs in the trash.
              </p>
              <p>
                Sanitary products including pads, tampons, and applicators should never be flushed. These items are specifically designed not to break down in water, and they frequently cause blockages in both residential plumbing and municipal sewage systems. They can lodge in toilet bends or get caught on rough spots inside pipes. Always dispose of sanitary products in designated waste bins.
              </p>
              <p>
                Hard water deposits accumulate on toilet bowl surfaces and within pipes over time, particularly in Singapore where water hardness varies by location. These mineral deposits (primarily calcium and magnesium) can narrow pipe passages and contribute to blockages. Regular descaling of toilets using mild acid cleaners helps prevent these deposits from restricting water flow. In severe cases, professional pipe cleaning may be necessary.
              </p>
              <p>
                Aging HDB pipes deserve special attention. Many HDB units constructed in the 1970s and 1980s still have original plumbing systems. Over decades, internal pipe corrosion creates rough surfaces and deposits that catch debris and cause blockages. If your unit is in an older HDB block and experiences recurring toilet issues, it may be time to consider pipe replacement or at least professional inspection of your system.
              </p>
              <p>
                Many people instinctively reach for a plunger when toilet troubles begin, but plungers often fail to resolve blockages, particularly when the obstruction is in the main drain line rather than the toilet trap itself. A plunger creates pressure that can move water but may not dislodge the actual blockage. Using a plunger excessively or with improper technique can actually push the blockage deeper into your pipes.
              </p>
              <p>
                Chemical drain cleaners are tempting because they promise quick solutions, but they pose serious risks. These harsh chemicals can damage pipes, particularly older ones, create dangerous toxic fumes, and may not actually resolve the blockage. If a chemical sits in pipes without moving, it can corrode pipes from the inside. For your safety and your plumbing's longevity, avoid chemical cleaners entirely.
              </p>
              <p>
                When a toilet remains clogged after a reasonable plunging attempt or when blockages recur frequently, contact RedDot Emergency. Our technicians use professional-grade equipment including plumbing snakes and high-pressure water jets to safely clear blockages without damaging your pipes. We can also identify underlying issues like aging pipes or structural problems that contribute to recurring choking.
              </p>
            </div>
          </section>

          {/* Water Heater Maintenance Tips */}
          <section className="bg-white rounded-xl border border-border p-8">
            <h2 className="text-3xl font-bold text-foreground mb-6">Water Heater Maintenance Tips</h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Water heaters are essential appliances in Singapore homes, providing hot water for bathing, cleaning, and cooking. Whether you have a storage tank heater or an instant water heater system, regular maintenance extends the appliance's lifespan, ensures efficiency, and prevents unexpected breakdowns. Many homeowners neglect water heater maintenance until problems develop, resulting in premature failure and expensive replacements.
              </p>
              <p>
                Annual descaling is the most important maintenance task for water heaters in Singapore. Hard water minerals accumulate inside tanks and heating elements, forming a scale layer that reduces heating efficiency and eventually leads to element failure. Over time, this scale buildup forces your heater to work harder, consuming more electricity and taking longer to heat water. Professional descaling removes this mineral deposit, restoring efficiency and extending the heater's life. Most manufacturers recommend annual descaling in hard water areas; your location and water hardness determine the exact frequency needed.
              </p>
              <p>
                The anode rod is a sacrificial metal component inside storage water heaters designed to corrode instead of the tank itself. As the anode rod deteriorates, it should be inspected annually and replaced every 3-5 years, depending on usage patterns and water quality. If the anode rod is not maintained, the tank itself begins corroding, leading to leaks and complete heater failure. During servicing, always ask technicians to check the anode rod's condition and replace it if necessary.
              </p>
              <p>
                Temperature settings should be calibrated appropriately for Singapore conditions. Most heaters are set to 60°C (140°F), which is optimal for preventing bacterial growth while conserving energy. Setting temperatures above 65°C increases energy consumption without providing significant benefits. However, never set temperatures below 50°C as this allows Legionella bacteria to potentially develop. Find a balance that meets your hot water needs while maintaining safety and efficiency.
              </p>
              <p>
                Signs of element failure include significantly longer heating times, insufficient hot water, or complete failure to produce hot water. The heating element is responsible for warming water inside the tank and will eventually fail. When this happens, you'll notice gradual performance degradation. Professional servicing can sometimes involve element replacement, which is more cost-effective than replacing the entire unit if the tank is still in good condition. However, if your heater is over 10 years old, replacement may be more economical than ongoing repairs.
              </p>
              <p>
                Storage and instant heaters have different maintenance requirements. Storage tank heaters require descaling, anode rod inspection, and tank pressure relief valve testing. Instant heaters primarily need descaling and filter cleaning. If you have an instant heater, ensure the inlet filter is cleaned regularly to prevent mineral buildup from restricting water flow. Different manufacturers provide specific maintenance schedules in the user manual—follow these guidelines for optimal performance.
              </p>
              <p>
                PUB regulations require that all water heaters operate safely and meet health standards. If your heater is over 15 years old, consider proactive replacement even if it's still functioning. Older heaters become less efficient and more prone to failures at inconvenient times. Modern heaters are significantly more energy-efficient, which reduces electricity bills and environmental impact.
              </p>
              <p>
                When your heater reaches end-of-life, replacement is often better than attempting repairs. The cost of repairing an old heater—particularly when multiple components are failing—can approach or exceed the cost of a new unit. A new heater provides warranty protection, improved efficiency, and peace of mind. RedDot Emergency can assess your heater and recommend whether repair or replacement is the best choice for your situation.
              </p>
            </div>
          </section>

          {/* Preventing Drain Blockages */}
          <section className="bg-secondary/50 rounded-xl border border-border p-8">
            <h2 className="text-3xl font-bold text-foreground mb-6">Preventing Drain Blockages</h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Drain blockages are frustrating and expensive to resolve, but many can be prevented through simple maintenance practices and awareness. By implementing preventative measures in your kitchen and bathrooms, you can significantly reduce the likelihood of blockages and keep your plumbing system flowing smoothly. Prevention is always easier and more cost-effective than dealing with emergency blockages.
              </p>
              <p>
                Install sink strainers in kitchen and bathroom sinks to catch food particles, hair, and debris before they enter the drainage system. These inexpensive devices act as a first line of defense, catching larger particles that would otherwise accumulate inside pipes. Empty sink strainers regularly—daily in the kitchen, weekly in bathrooms—and dispose of collected debris in the trash. This simple habit prevents a significant portion of blockages from occurring in the first place.
              </p>
              <p>
                Never dispose of grease or cooking oil down the kitchen sink, as they solidify inside pipes as they cool. Even small amounts of grease accumulate over time, narrowing pipe passages and trapping food particles. Instead, let grease cool and solidify, then scrape it into a disposable container for trash disposal. Wipe greasy pans with paper towels before washing them, removing excess grease before water contact.
              </p>
              <p>
                Regular hot water flushing helps prevent minor blockages from developing into major problems. Once weekly, pour a kettle of boiling water down each drain to flush away accumulated debris and keep pipes clear. This simple practice costs nothing and takes just minutes, yet it dramatically reduces blockage risk. For stubborn accumulations, use a combination of baking soda (½ cup down the drain) followed by vinegar (½ cup), let it sit for 15 minutes, then flush with hot water.
              </p>
              <p>
                Hair traps in shower drains and floor traps in bathrooms and kitchens prevent hair and large particles from entering main drainage pipes. Hair is a primary cause of bathroom drain blockages, and a simple hair trap or drain cover costs just a few dollars and takes seconds to empty. Check these traps weekly, remove accumulated hair, and dispose of it in the trash. In apartments with shared plumbing, maintaining your individual unit's traps prevents problems from affecting neighbors.
              </p>
              <p>
                Floor trap maintenance is crucial in HDB apartments and other properties with floor drains. These traps are designed to hold water and prevent odors and pests from entering through drains, but they can become blockage points themselves. Pour water into floor traps weekly to maintain the water seal, and periodically clean them to remove accumulated debris. If a floor trap becomes blocked, it can cause flooding of adjacent areas, making prevention essential in shared housing complexes.
              </p>
              <p>
                Kitchen and bathroom drains have different primary blockage causes and require different prevention strategies. Kitchen blockages typically result from grease, food particles, and soap scum accumulation. Emphasize grease prevention, use sink strainers religiously, and regularly flush with hot water and baking soda. Bathroom blockages are usually caused by hair, soap scum, and toothpaste. Use drain covers, clean floor traps weekly, and flush occasionally with vinegar and baking soda solutions.
              </p>
              <p>
                In HDB apartments with shared drainage systems, blockages in your unit can affect multiple neighbors, making prevention even more important. Be particularly mindful of what enters your drains, maintain traps and strainers diligently, and avoid flushing anything except toilet paper down toilets. If a blockage develops despite prevention efforts, address it promptly before it worsens and potentially affects shared systems.
              </p>
            </div>
          </section>

          {/* When To Call An Emergency Plumber */}
          <section className="bg-white rounded-xl border border-border p-8">
            <h2 className="text-3xl font-bold text-foreground mb-6">When To Call An Emergency Plumber</h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Not all plumbing issues constitute emergencies, but some situations require immediate professional attention to prevent catastrophic damage, safety hazards, or health risks. Understanding the difference between urgent situations and non-emergencies helps you respond appropriately and get the right help when you need it most. RedDot Emergency is available 24/7 for true emergencies, while non-emergency issues can often wait for regular business hours.
              </p>
              <p>
                Active flooding is the most obvious emergency requiring immediate response. If water is actively pouring from burst pipes, overflowing fixtures, or leaking fixtures into living spaces, contact RedDot Emergency immediately at +65 9677 3465. Every minute of delay results in more water damage. While waiting for the plumber, shut off your main water valve and use towels to contain the water. If flooding is spreading to multiple units in an HDB building, also contact your Town Council and the PUB emergency number.
              </p>
              <p>
                Burst pipes are true emergencies requiring immediate response. Burst pipes indicate catastrophic plumbing failure and can flood your home rapidly. Signs include sudden loss of water pressure combined with water spraying from walls or ceilings, or water dripping from ceiling areas where pipes run. If you suspect a burst pipe, shut off your main water immediately and call RedDot Emergency. Do not attempt to repair burst pipes yourself—professional equipment and expertise are essential for safe, proper repairs.
              </p>
              <p>
                Complete fixture failure where nothing comes out of a tap, shower, or toilet may indicate a burst line or main valve closure. If multiple fixtures lose water simultaneously, the issue is likely in the main supply line, making professional diagnosis essential. While not immediately damaging like flooding, complete fixture failure indicates a serious underlying problem requiring professional attention. If this occurs during business hours, prompt same-day service is usually available; for after-hours occurrences, contact our emergency line.
              </p>
              <p>
                A strong gas smell emanating from your water heater or gas lines is a serious safety hazard and emergency requiring immediate action. Do not use any electrical switches or create sparks. Leave your home immediately, move to a safe location, and call 999 (SCDF). Gas leaks pose explosion and poisoning risks, so this is never a situation to attempt DIY inspection. Even if you think the smell might be minor, err on the side of caution and evacuate.
              </p>
              <p>
                Water coming into contact with electrical outlets, appliances, or wiring creates electrical hazard requiring emergency response. Do not touch water, electrical outlets, or wet appliances. Switch off the main electrical breaker if you can do so safely. If water is actively on electrical systems, evacuate the affected area and call 995 (SCDF) for guidance in addition to calling RedDot Emergency. This combines both plumbing and electrical emergency considerations.
              </p>
              <p>
                Situations that are urgent but not necessarily emergencies include single fixture blockages that don't respond to plunging, slow drains affecting daily function, or minor leaks under sinks. These issues require professional attention but can generally wait until business hours. Contact RedDot Emergency during regular hours to schedule prompt service. We strive to respond to non-emergency calls within 24 hours, often much sooner.
              </p>
              <p>
                RedDot Emergency's response times for true emergencies are typically within 30-60 minutes depending on traffic and our dispatch schedule. Our 24/7 availability ensures that whenever a genuine emergency strikes—day, night, weekday, or weekend—professional help is just a phone call away. We understand that emergencies cause stress and property damage, so we prioritize rapid response and efficient resolution.
              </p>
              <p>
                When in doubt about whether your situation qualifies as an emergency, call us anyway. Our experienced team can assess your situation over the phone and advise whether immediate response is necessary or if you can wait for regular service hours. It's always better to call and learn it's not an emergency than to delay calling during a genuine crisis.
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-secondary/50 rounded-xl border border-border p-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Frequently Asked Plumbing Questions</h2>
            <div className="space-y-6">
              {[
                {
                  question: "How often should I have my plumbing system professionally inspected?",
                  answer: "We recommend professional plumbing inspections every 1-2 years for systems in good condition. Older HDB units (over 20 years) should be inspected annually to catch developing issues early. If you experience recurring problems like blockages or leaks, more frequent inspections help identify root causes that can be addressed through repair or replacement."
                },
                {
                  question: "What should I do if I smell sewage in my home?",
                  answer: "Sewage odors indicate a serious problem, typically a failed drain trap seal, cracked drain line, or blocked vent pipe. Check all floor traps to ensure they contain water. If the odor persists, do not ignore it—contact RedDot Emergency for professional diagnosis. Sewage odors aren't just unpleasant; they indicate potential health hazards that require prompt professional attention."
                },
                {
                  question: "Is it normal to hear water running in my pipes at night?",
                  answer: "Occasional water sounds are normal and usually result from thermal expansion of pipes as temperatures change. However, continuous trickling or rushing sounds when no one is using water suggest an active leak or toilet running constantly. Listen carefully—if the sound persists, contact us for leak detection. A toilet running 24/7 can waste hundreds of liters monthly."
                },
                {
                  question: "How can I tell if I have a water leak versus a high water bill?",
                  answer: "A leak typically shows a continuous increase in water usage even when you've made no changes to routines. Check your water meter reading at night before bed, then again first thing in the morning without using water. If the meter increases overnight, a leak is present. Alternatively, if your PUB bill jumps 20-30% or more compared to previous months, leakage is likely. Contact us for professional leak detection."
                },
                {
                  question: "Can I use chemical drain cleaners to solve blockages?",
                  answer: "We strongly advise against chemical drain cleaners. These caustic substances can damage pipes, create toxic fumes, and often fail to resolve blockages. If a chemical sits in pipes without moving the obstruction, it corrodes pipes from the inside. Professional plumbing snakes and water jets safely clear blockages without risking damage. Contact RedDot Emergency instead of reaching for chemicals."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 border border-border">
                  <h3 className="text-lg font-semibold text-foreground flex items-center gap-3 mb-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed ml-8">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Internal Links Section */}
          <section className="bg-white rounded-xl border border-border p-8">
            <h2 className="text-3xl font-bold text-foreground mb-6">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { href: '/services', label: 'Our Services', description: 'Explore all plumbing services we offer' },
                { href: '/emergency-plumbing', label: 'Emergency Plumbing', description: '24/7 emergency response available' },
                { href: '/faq', label: 'FAQ', description: 'Answers to common questions' },
                { href: '/contact', label: 'Contact Us', description: 'Get in touch with our team' },
                { href: '/blog', label: 'Blog', description: 'Latest plumbing tips and news' }
              ].map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="p-4 bg-secondary/50 hover:bg-secondary rounded-lg border border-border transition-colors group"
                >
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {link.label}
                  </h3>
                  <p className="text-sm text-foreground/70 mt-1">
                    {link.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </div>

        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
