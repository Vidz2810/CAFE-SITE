import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import hero from "@/assets/hero.jpg";
import founder from "@/assets/founder.jpg";
import door from "@/assets/door.jpg";
import gathering from "@/assets/gathering.jpg";
import workshop from "@/assets/workshop.jpg";
import canopy from "@/assets/canopy.jpg";
import seasoning from "@/assets/seasoning.jpg";
import makhani from "@/assets/makhani.jpg";
import signageNight from "@/assets/signage-night.jpg";
import patio from "@/assets/patio.jpg";
import dessert from "@/assets/dessert.jpg";
import coffee from "@/assets/coffee.jpg";
import kefir from "@/assets/kefir.jpg";
import windowTable from "@/assets/window-table.jpg";
import falafel from "@/assets/falafel-tray.jpg";
import { Instagram, MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Sage Farm Cafe — Farm-to-table dining in Hyderabad" },
      { name: "description", content: "Hyderabad's first farm-to-table cafe. Seasonal menus, mindful experiences, and community gatherings rooted in nature." },
      { property: "og:image", content: hero },
    ],
  }),
});

const btnPrimary =
  "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[12px] uppercase tracking-[0.22em] bg-foreground text-cream hover:bg-sage-deep transition-colors duration-500";
const btnGhost =
  "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[12px] uppercase tracking-[0.22em] border border-cream/70 text-cream hover:bg-cream hover:text-foreground transition-colors duration-500";
const btnOutline =
  "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[12px] uppercase tracking-[0.22em] border border-foreground/30 text-foreground hover:bg-foreground hover:text-cream transition-colors duration-500";

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] ${light ? "text-cream/80" : "text-sage-deep"}`}>
      <span className={`h-px w-8 ${light ? "bg-cream/50" : "bg-sage-deep/60"}`} />
      {children}
    </span>
  );
}

function Home() {
  return (
    <div className="bg-background text-foreground">
      <Nav />

      {/* HERO */}
      <section id="home" className="relative min-h-[100svh] flex items-end overflow-hidden">
        <img
          src={hero}
          alt="Sage Farm Cafe community gathering under green canopy"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 35%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/70" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pb-20 md:pb-28 pt-32">
          <Reveal>
            <span className="text-cream/85 text-[11px] uppercase tracking-[0.4em]">Hyderabad · Est. 2017</span>
          </Reveal>
          <Reveal delay={150}>
            <h1 className="mt-6 font-serif text-cream text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.02] max-w-4xl text-balance">
              Rooted in nature. <br />
              <span className="italic font-light">Crafted with intention.</span>
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-8 text-cream/85 max-w-xl text-base md:text-lg font-light leading-relaxed">
              Farm-to-table dining, seasonal menus, mindful experiences, and community gatherings in the heart of Hyderabad.
            </p>
          </Reveal>
          <Reveal delay={450}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#menu" className={btnPrimary} style={{ background: "var(--cream)", color: "var(--foreground)" }}>
                Explore Menu
              </a>
              <a href="#visit" className={btnGhost}>Visit Sage</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="py-20 md:py-28 border-b border-border/60">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
          <Reveal>
            <Eyebrow>Soil to Soul</Eyebrow>
            <p className="mt-8 font-serif text-2xl md:text-4xl leading-[1.35] text-balance text-foreground/90">
              A sustainable farm-to-table cafe where seasonal produce, slow living and community come together — quietly, intentionally.
            </p>
          </Reveal>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 md:gap-16 items-center">
          <Reveal className="md:col-span-6">
            <div className="overflow-hidden">
              <img src={founder} alt="Kavitha Mantha, founder of Sage Farm Cafe" className="w-full aspect-[4/5] object-cover img-zoom" />
            </div>
          </Reveal>
          <div className="md:col-span-6 md:pl-6">
            <Reveal>
              <Eyebrow>Our Story</Eyebrow>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-[1.1] text-balance">
                A garden table set <span className="italic">by Kavitha Mantha.</span>
              </h2>
              <div className="mt-8 space-y-5 text-foreground/75 leading-relaxed font-light">
                <p>
                  Founded in 2017, Sage Farm Cafe is Hyderabad's first farm-to-table cafe — a quiet rebellion against fast food, built around a simple belief: <em>nature already provides the answer.</em>
                </p>
                <p>
                  Seasonal produce, dairy, and herbs travel directly from Baby Elephant Farm to our kitchen. Cheese, vinegar, and ferments are made in-house. The menu is global, fusion, and unapologetically local.
                </p>
                <p>
                  Beyond a cafe, Sage is a gathering ground for wellness, conscious living, and slow, mindful experiences.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 mt-24 md:mt-32 grid md:grid-cols-12 gap-12 md:gap-16 items-center">
          <div className="md:col-span-6 md:order-2">
            <Reveal>
              <div className="overflow-hidden">
                <img src={door} alt="Entrance to Sage Farm Cafe" className="w-full aspect-[3/4] object-cover img-zoom" />
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:order-1">
            <Reveal>
              <Eyebrow>The Space</Eyebrow>
              <h3 className="mt-6 font-serif text-3xl md:text-4xl leading-[1.15] text-balance">
                A farm-to-table doorway in Jubilee Hills.
              </h3>
              <p className="mt-6 text-foreground/75 leading-relaxed font-light">
                Step past the palms, into shelves lined with house ferments, herbs and pantry jars. The cafe unfolds beneath a living green canopy — a space designed for community, wellness, and conscious eating.
              </p>
              <ul className="mt-8 grid grid-cols-2 gap-y-3 text-sm text-foreground/70">
                {["Community", "Wellness", "Seasonal eating", "Organic farming", "Conscious living", "Mindful gatherings"].map((t) => (
                  <li key={t} className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-sage" />{t}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* IMMERSIVE BREATHER — window/table */}
      <section className="relative">
        <Reveal>
          <div className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
            <img src={windowTable} alt="A long table set beneath a window opening onto the garden at Sage Farm Cafe" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 px-6 md:px-10 pb-12 md:pb-16">
              <div className="max-w-7xl mx-auto">
                <p className="font-serif italic text-cream text-2xl md:text-4xl max-w-2xl leading-snug text-balance">
                  Long mornings, open windows, the garden inside.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* MENU */}
      <section id="menu" className="bg-secondary py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal className="max-w-3xl">
            <Eyebrow>Featured Menu</Eyebrow>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05] text-balance">
              Seasonal plates, <span className="italic">made with what the earth gives today.</span>
            </h2>
          </Reveal>

          <div className="mt-16 md:mt-20 grid md:grid-cols-12 gap-10 md:gap-14">
            <Reveal className="md:col-span-7">
              <div className="overflow-hidden">
                <img src={seasoning} alt="Seasoning being sprinkled on a Sage Farm Cafe dish" className="w-full aspect-[4/5] object-cover img-zoom" />
              </div>
            </Reveal>
            <div className="md:col-span-5 md:pt-10 space-y-12">
              <MenuList
                title="Salads"
                items={[
                  ["Sesame Tossed Sweet Potato Salad", "Roasted, seeded, lightly charred"],
                  ["Pumpkin & Podi Salad", "Warm spice, cool greens"],
                  ["Pomelo Salad", "Citrus, herbs, crunch"],
                ]}
              />
              <MenuList
                title="Mains"
                items={[
                  ["Mediterranean Bowl", "Grains, hummus, garden vegetables"],
                  ["Burrito Bowl", "House beans, salsa, lime crema"],
                  ["Seedy Stir Fry", "Wok-tossed seasonal greens"],
                ]}
              />
            </div>
          </div>

          <div className="mt-20 md:mt-24 grid md:grid-cols-12 gap-10 md:gap-14">
            <div className="md:col-span-5 md:pt-10 space-y-12 md:order-1 order-2">
              <MenuList
                title="Small Plates"
                items={[
                  ["Falafel Tasting Box", "Garden herbs, rose petals, hummus"],
                  ["Chicken Makhani Tarts", "Buttery, spiced, hand-finished"],
                ]}
              />
              <MenuList
                title="Desserts"
                items={[
                  ["Vegan Chocolate Pumpkin Cake", "Plant-based indulgence"],
                  ["Eggless Basque Cheesecake", "Burnished, creamy"],
                  ["Coffee Walnut Bites", "Espresso ganache, candle-lit nights"],
                ]}
              />
              <MenuList
                title="Drinks"
                items={[
                  ["Kombucha Cold Brew", "House-fermented"],
                  ["Coconut Iced Coffee", "Slow-pulled, dairy-free"],
                  ["Blue Lemongrass", "Butterfly pea, citrus"],
                ]}
              />
            </div>
            <Reveal className="md:col-span-7 md:order-2 order-1">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="overflow-hidden col-span-2">
                  <img src={makhani} alt="Chicken Makhani Tarts at Sage Farm Cafe" className="w-full aspect-[16/10] object-cover img-zoom" />
                </div>
                <div className="overflow-hidden">
                  <img src={falafel} alt="Falafel tasting tray on rose petals" className="w-full aspect-square object-cover img-zoom" />
                </div>
                <div className="overflow-hidden">
                  <img src={dessert} alt="Coffee walnut bites plated by candlelight" className="w-full aspect-square object-cover img-zoom" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* HOUSE CRAFT — kefir + coffee editorial */}
      <section className="py-24 md:py-36 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal className="max-w-3xl">
            <Eyebrow>House Craft</Eyebrow>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-[1.1] text-balance">
              Ferments, brews, <span className="italic">and small wellness rituals.</span>
            </h2>
            <p className="mt-6 text-foreground/70 font-light leading-relaxed max-w-xl">
              Kefirs are cultured in-house. Coffees are pulled slow. Each bottle, each cup is a quiet act of fermentation, patience and care.
            </p>
          </Reveal>

          <div className="mt-14 md:mt-20 grid md:grid-cols-12 gap-8 md:gap-10 items-stretch">
            <Reveal className="md:col-span-5">
              <div className="overflow-hidden h-full">
                <img src={kefir} alt="Handcrafted kefir bottles from Sage Farm Cafe" className="w-full h-full aspect-[3/4] object-cover img-zoom" />
              </div>
            </Reveal>
            <div className="md:col-span-3 flex flex-col justify-end">
              <Reveal>
                <p className="text-[11px] uppercase tracking-[0.32em] text-sage-deep">Wellness</p>
                <p className="mt-4 font-serif text-2xl md:text-3xl leading-snug">
                  Living cultures, bottled by hand.
                </p>
                <p className="mt-4 text-sm text-foreground/65 font-light leading-relaxed">
                  Kefirs, kombuchas, vinegars and ferments — built slowly, the way nature intends.
                </p>
              </Reveal>
            </div>
            <Reveal className="md:col-span-4" delay={120}>
              <div className="overflow-hidden h-full">
                <img src={coffee} alt="Latte and cookie on a wooden table at Sage Farm Cafe" className="w-full h-full aspect-[3/4] object-cover img-zoom" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VIDEO — cinematic vertical frame */}
      <section className="relative py-28 md:py-40 bg-foreground text-cream overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]" style={{ background: "radial-gradient(ellipse at center, var(--cream) 0%, transparent 60%)" }} />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 md:gap-20 items-center">
          <div className="md:col-span-5 md:pl-6 order-2 md:order-1">
            <Reveal>
              <Eyebrow light>In the Kitchen</Eyebrow>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance text-cream">
                Slow hands, <span className="italic font-light">seasonal plates.</span>
              </h2>
              <p className="mt-8 text-cream/75 leading-relaxed font-light max-w-md">
                Every dish is plated with intention — sauces poured slowly, herbs torn by hand, ingredients chosen the morning they're picked.
              </p>
              <p className="mt-6 text-[11px] uppercase tracking-[0.32em] text-cream/55">
                Filmed at Sage · Jubilee Hills
              </p>
            </Reveal>
          </div>
          <Reveal className="md:col-span-7 order-1 md:order-2 flex justify-center">
            <div
              className="relative rounded-xl overflow-hidden shadow-[0_50px_120px_-30px_rgba(0,0,0,0.6)] ring-1 ring-cream/10"
              style={{ maxWidth: "min(420px, 100%)", aspectRatio: "9 / 16" }}
            >
              <video
                src="/videos/sage.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-contain bg-black"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* TASTING THURSDAYS — featured editorial event */}
      <section className="py-24 md:py-36 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-stretch">
            <Reveal className="md:col-span-7">
              <div className="overflow-hidden h-full">
                <img src={patio} alt="Open-air patio under bamboo canopy at Sage Farm Cafe" className="w-full h-full min-h-[420px] md:min-h-[560px] object-cover img-zoom" />
              </div>
            </Reveal>
            <div className="md:col-span-5 flex flex-col justify-center md:pl-4">
              <Reveal>
                <Eyebrow>Featured Experience</Eyebrow>
                <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
                  Tasting <span className="italic">Thursdays.</span>
                </h2>
                <p className="mt-6 text-foreground/75 font-light leading-relaxed">
                  An intimate weekly table where seasonal ingredients and experimental flavors are explored through specially crafted menus — slow, shared, and quietly experimental.
                </p>
                <p className="mt-5 text-foreground/70 font-light leading-relaxed">
                  Mindful eating. Community gathering. Farm-to-table produce served at its most alive.
                </p>
                <div className="mt-8 grid grid-cols-3 gap-6 border-t border-border pt-6">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-sage-deep">When</p>
                    <p className="mt-2 font-serif text-lg">Every Thursday</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-sage-deep">Setting</p>
                    <p className="mt-2 font-serif text-lg">Garden Table</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-sage-deep">Seats</p>
                    <p className="mt-2 font-serif text-lg">Limited</p>
                  </div>
                </div>
                <div className="mt-10">
                  <a href="#visit" className={btnOutline}>Enquire <ArrowUpRight className="w-4 h-4" /></a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section id="experiences" className="py-24 md:py-36 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal className="max-w-3xl">
            <Eyebrow>Experiences</Eyebrow>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05] text-balance">
              Gather, learn, <span className="italic">slow down.</span>
            </h2>
          </Reveal>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {[
              ["Pickling Workshops", "Seasonal preserves, taught by hand."],
              ["Community Cooking", "Cook, share and gather around the table."],
              ["Weekly Organic Market", "Fresh from Baby Elephant Farm."],
              ["Wellness Gatherings", "Mindful conversations, herbal rituals."],
              ["Pet-Friendly Cafe", "Bring your companions to the garden."],
              ["Seasonal Experiences", "Menus and moments built around the calendar."],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 60}>
                <div className="bg-secondary p-10 md:p-12 h-full min-h-56 flex flex-col justify-between hover:bg-background/60 transition-colors duration-500">
                  <span className="text-[11px] uppercase tracking-[0.3em] text-sage-deep">0{i + 1}</span>
                  <div className="mt-10">
                    <h3 className="font-serif text-2xl md:text-3xl">{t}</h3>
                    <p className="mt-4 text-sm text-foreground/70 leading-relaxed font-light">{d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 md:gap-16 items-center">
          <Reveal className="md:col-span-7">
            <div className="overflow-hidden">
              <img src={workshop} alt="Mango pickling workshop at Sage Farm Cafe" className="w-full aspect-[4/3] object-cover img-zoom" />
            </div>
          </Reveal>
          <div className="md:col-span-5">
            <Reveal>
              <Eyebrow>Community</Eyebrow>
              <h2 className="mt-6 font-serif text-3xl md:text-5xl leading-[1.1] text-balance">
                Mango summers, <span className="italic">slow food, shared hands.</span>
              </h2>
              <p className="mt-6 text-foreground/75 leading-relaxed font-light">
                From mango pickling sessions to seasonal gatherings and mindful cooking circles — Sage is a space for slow food, organic learning and community to take root.
              </p>
            </Reveal>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-10 mt-12 md:mt-16">
          <Reveal>
            <div className="overflow-hidden">
              <img src={gathering} alt="Community gathering at Sage Farm Cafe" className="w-full aspect-[16/9] object-cover img-zoom" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-32 md:py-44 bg-foreground text-cream">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <Reveal>
            <p className="font-serif italic text-3xl md:text-5xl lg:text-6xl leading-[1.2] text-balance">
              "Nature already provides the answer."
            </p>
            <p className="mt-10 text-[11px] uppercase tracking-[0.4em] text-cream/70">— Kavitha Mantha</p>
          </Reveal>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 md:py-36 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal className="max-w-3xl">
            <Eyebrow>Gallery</Eyebrow>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05] text-balance">
              Light, leaves, <span className="italic">long afternoons.</span>
            </h2>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-12 gap-6 md:gap-8">
            <Reveal className="md:col-span-8">
              <div className="overflow-hidden">
                <img src={canopy} alt="Living green canopy above the cafe" className="w-full aspect-[4/3] object-cover img-zoom" />
              </div>
            </Reveal>
            <Reveal className="md:col-span-4" delay={120}>
              <div className="overflow-hidden h-full">
                <img src={patio} alt="Bamboo-shaded patio at Sage Farm Cafe" className="w-full h-full aspect-[3/4] md:aspect-auto object-cover img-zoom" />
              </div>
            </Reveal>
            <Reveal className="md:col-span-5">
              <div className="overflow-hidden">
                <img src={door} alt="Cafe entrance" className="w-full aspect-[3/4] object-cover img-zoom" />
              </div>
            </Reveal>
            <Reveal className="md:col-span-7" delay={120}>
              <div className="overflow-hidden">
                <img src={windowTable} alt="Garden window above the long table" className="w-full aspect-[4/3] object-cover img-zoom" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SIGNAGE TRANSITION — cinematic night ambience before footer */}
      <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <img src={signageNight} alt="Sage Farm Cafe illuminated signage at night" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/55" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <Reveal>
            <Eyebrow light>An Evening at Sage</Eyebrow>
            <p className="mt-6 font-serif italic text-cream text-3xl md:text-5xl lg:text-6xl leading-[1.2] max-w-3xl text-balance">
              When the lights come on, the garden grows quieter.
            </p>
          </Reveal>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="py-24 md:py-36 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-5">
            <Reveal>
              <Eyebrow>Visit</Eyebrow>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-[1.1] text-balance">
                Find us under the canopy.
              </h2>
              <p className="mt-6 text-foreground/75 font-light leading-relaxed">
                Walk in any day. Stay for the slow afternoons, the garden light, and an unhurried table.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://maps.google.com/?q=Sage+Farm+Cafe+Jubilee+Hills+Hyderabad"
                  target="_blank"
                  rel="noreferrer"
                  className={btnPrimary}
                >
                  Get Directions
                </a>
                <a href="tel:+919849427575" className={btnOutline}>Contact Sage</a>
                <a
                  href="https://instagram.com/sagefarmcafe"
                  target="_blank"
                  rel="noreferrer"
                  className={btnOutline}
                >
                  Follow on Instagram
                </a>
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-7 md:pl-10">
            <Reveal>
              <div className="space-y-8 border-l border-border pl-8 md:pl-10">
                <InfoRow icon={<MapPin className="w-4 h-4" />} title="Address">
                  Sage Farm Cafe<br />
                  1227, Rd Number 62A, Jubilee Hills<br />
                  Hyderabad, Telangana 500033
                </InfoRow>
                <InfoRow icon={<Phone className="w-4 h-4" />} title="Phone">
                  <a href="tel:+919849427575" className="hover:text-sage-deep">+91 98494 27575</a>
                </InfoRow>
                <InfoRow icon={<Clock className="w-4 h-4" />} title="Hours">
                  Open daily · Closes at 11 PM
                </InfoRow>
                <InfoRow icon={<Instagram className="w-4 h-4" />} title="Instagram">
                  <a href="https://instagram.com/sagefarmcafe" target="_blank" rel="noreferrer" className="hover:text-sage-deep">
                    @sagefarmcafe
                  </a>
                </InfoRow>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-background py-16 md:py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <p className="font-serif text-2xl">Sage <span className="italic">Farm Cafe</span></p>
            <p className="mt-4 text-sm text-foreground/65 max-w-sm font-light leading-relaxed">
              Soil to soul — rooted in mindful living and seasonal experiences.
            </p>
          </div>
          <div className="md:col-span-4">
            <ul className="grid grid-cols-2 gap-3 text-sm text-foreground/70">
              {["Story", "Menu", "Experiences", "Gallery", "Visit"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-sage-deep">{l}</a></li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3 md:text-right">
            <a
              href="https://instagram.com/sagefarmcafe"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-sage-deep"
            >
              <Instagram className="w-4 h-4" /> @sagefarmcafe
            </a>
            <p className="mt-6 text-xs text-foreground/50">© {new Date().getFullYear()} Sage Farm Cafe</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function MenuList({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <Reveal>
      <div>
        <h3 className="text-[11px] uppercase tracking-[0.32em] text-sage-deep">{title}</h3>
        <ul className="mt-6 divide-y divide-border/70">
          {items.map(([name, desc]) => (
            <li key={name} className="py-4">
              <p className="font-serif text-xl md:text-2xl leading-snug">{name}</p>
              <p className="mt-1 text-sm text-foreground/60 font-light">{desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

function InfoRow({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center gap-3 text-sage-deep">
        {icon}
        <span className="text-[11px] uppercase tracking-[0.3em]">{title}</span>
      </div>
      <div className="mt-3 font-serif text-xl md:text-2xl leading-snug text-foreground">{children}</div>
    </div>
  );
}
