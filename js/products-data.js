// ============================================================
// SGS INSTRUMENTS - PRODUCTS DATA FILE
// To add a new product: copy one product block, change the values,
// add the product image to /images/products/ folder.
// To remove a product: delete its block from the array.
// ============================================================

const PRODUCTS = [
  {
    id: "laboratory-jaw-crusher",
    name: "Laboratory Jaw Crusher",
    category: "Crushing & Grinding",
    hsnCode: "8474",
    tagline: "Heavy-duty primary size reduction for laboratory rock & mineral samples",
    shortDesc: "Robust jaw crusher for crushing mineral ores and coal from large lumps to fine particles. Alloy steel reversible jaw plates ensure long service life and consistent output.",
    fullDesc: "The SGS Laboratory Jaw Crusher is engineered for demanding primary crushing applications in research, quality control, and educational laboratories. The machine features a heavy-duty MS fabricated body fitted with swing and fixed jaws machined from high alloy steel — both reversible and replaceable for extended service life. The eccentric shaft is supported by self-aligned double gun-metal bush housings on both sides, and a pair of well-balanced flywheels (designed as V-pulleys) ensures smooth, uniform operation. A pre-fitted feed hopper accepts large lump feed and channels it between the crushing jaws. Supplied complete with motor (Kirloskar/Crompton/Bharat Bijlee), BCH make starter, V-belt pulley drive, and feed hopper.",
    image: "images/products/laboratory-jaw-crusher.jpg",
    models: [
      { modelNo: "MEC-262",     jawSize: "4\" × 6\"",  feedSize: "0–30 mm",  outputSize: "5–15 mm",   motor: "2 HP" },
      { modelNo: "MEC-391 (3)", jawSize: "6\" × 8\"",  feedSize: "0–60 mm",  outputSize: "8–20 mm",   motor: "3 HP" },
      { modelNo: "MEC-391 (5)", jawSize: "6\" × 8\"",  feedSize: "0–60 mm",  outputSize: "8–20 mm",   motor: "5 HP" },
      { modelNo: "MEC-392 (8)", jawSize: "8\" × 12\"", feedSize: "0–80 mm",  outputSize: "12.5–25 mm", motor: "5 HP" },
      { modelNo: "MEC-392 (9)", jawSize: "9\" × 12\"", feedSize: "0–100 mm", outputSize: "12.5–30 mm", motor: "7.5 HP" },
      { modelNo: "MEC-392 (12)",jawSize: "12\" × 16\"",feedSize: "0–150 mm", outputSize: "30–50 mm",  motor: "10 HP" }
    ],
    modelHeaders: ["Model No.", "Jaw Size (in)", "Feed Size (mm)", "Output Size (mm)", "Motor"],
    keyFeatures: [
      "High alloy steel reversible & replaceable jaw plates",
      "Self-aligned double gun-metal bush on eccentric shaft",
      "Balanced flywheel V-pulleys for smooth operation",
      "BCH make starter supplied as standard",
      "6 models covering 4\"×6\" to 12\"×16\" jaw sizes",
      "Feed hopper fitted as standard"
    ],
    applications: ["Mineral ore crushing", "Coal sample preparation", "Rock & aggregate testing", "Geological laboratories", "Quality control labs"],
    feedMaterial: "Mineral Ore / Coal"
  },
  {
    id: "lab-roll-crusher",
    name: "Lab Roll Crusher",
    category: "Crushing & Grinding",
    hsnCode: "8474",
    tagline: "Precision compression crushing with adjustable gap for controlled particle size",
    shortDesc: "Twin smooth-faced alloy steel rolls for precise compression crushing of ores and coal. Adjustable roll gap gives exact control over product discharge size from 2.36 mm to 12.5 mm.",
    fullDesc: "The SGS Lab Roll Crusher operates on the principle of compression crushing between two heavy, smooth-faced alloy steel rolls rotating on parallel horizontal axes. Material fed via the top hopper is drawn between the rolls and broken under compression, discharging below. Both rolls turn inward at the same speed. The relatively wide diameter-to-face ratio allows nipping of moderately large lumps. Loading bolts are provided for safety and for precise roll-gap adjustment — the gap directly sets the maximum product particle size. Supplied complete with motor (Kirloskar/Crompton/Bharat Bijlee), BCH make starter, V-belt pulley drive, and feed hopper.",
    image: "images/products/lab-roll-crusher.jpg",
    models: [
      { modelNo: "MEC-397",      rollSize: "200 × 100 mm", feedSize: "0–15 mm", outputSize: "2.36–4.75 mm", motor: "2 HP" },
      { modelNo: "MEC-398",      rollSize: "250 × 150 mm", feedSize: "0–20 mm", outputSize: "3.35–4.75 mm", motor: "3 HP" },
      { modelNo: "MEC-398 (12)", rollSize: "300 × 200 mm", feedSize: "0–25 mm", outputSize: "6–12.5 mm",    motor: "5 HP" }
    ],
    modelHeaders: ["Model No.", "Roll Size (mm)", "Feed Size (mm)", "Output Size (mm)", "Motor"],
    keyFeatures: [
      "Smooth-faced alloy steel rolls for uniform compression",
      "Adjustable roll gap via loading bolts",
      "In-built safety through loading bolt mechanism",
      "Parallel horizontal roll axes for even nipping",
      "3 models covering 200×100 mm to 300×200 mm roll sizes",
      "Suitable for brittle minerals and coal"
    ],
    applications: ["Mineral ore size reduction", "Coal sample preparation", "Secondary crushing after jaw crusher", "Quality control laboratories"],
    feedMaterial: "Mineral Ore / Coal"
  },
  {
    id: "lab-pulverizer",
    name: "Lab Pulverizer",
    category: "Crushing & Grinding",
    hsnCode: "8474",
    tagline: "Disc-type grinder producing fine mesh samples in a single pass",
    shortDesc: "Self-contained rotary disc pulverizer with planetary movement for ultra-fine grinding up to 100 mesh. Ideal for mining, metallurgical, chemical, and geological labs.",
    fullDesc: "The SGS Lab Pulverizer is a disc-type grinder designed to reduce virtually any brittle material to fine mesh powder in a single operation. Its rotating disc executes a planetary movement in the vertical plane — a unique action that distributes wear evenly across the disc surface, extending service life while delivering samples of uniform fineness. The self-contained unit is suited to assaying, mining, metallurgical, quarrying, aggregate processing, chemical, geological and industrial laboratory applications. Supplied complete with motor (Kirloskar/Crompton/Bharat Bijlee), BCH make starter, V-belt pulley drive, and belt guard.",
    image: "images/products/lab-pulverizer.jpg",
    models: [
      { modelNo: "MEC-261",  discDia: "175 mm", feedSize: "0–8 mm",  outputMesh: "Up to 100 mesh", motor: "3 HP" },
      { modelNo: "MEC-261A", discDia: "250 mm", feedSize: "0–15 mm", outputMesh: "Up to 100 mesh", motor: "5 HP" }
    ],
    modelHeaders: ["Model No.", "Disc Diameter", "Feed Size", "Output Fineness", "Motor"],
    keyFeatures: [
      "Planetary disc movement for uniform fineness",
      "Grinds to 100 mesh in a single pass",
      "Self-contained design — compact footprint",
      "Even disc wear for consistent sample quality",
      "2 models: 175 mm and 250 mm disc diameters",
      "Suitable for a wide range of brittle materials"
    ],
    applications: ["Mining & mineral assaying", "Metallurgical laboratories", "Chemical & geological labs", "Aggregate & quarry testing", "Industrial R&D"],
    feedMaterial: "Mineral Ore / Coal"
  },
  {
    id: "lab-coal-pulverizer",
    name: "Lab Coal Pulverizer (Hammer Type)",
    category: "Crushing & Grinding",
    hsnCode: "8474",
    tagline: "High-throughput hammer pulverizer for powdering coal to 72/100 mesh",
    shortDesc: "Mini hammer mill designed specifically for powdering laboratory coal samples to 212 microns (72 mesh). Ratchet-teeth chamber liner and bottom screen deliver consistent, fine coal powder.",
    fullDesc: "The SGS Lab Coal Pulverizer (Hammer Type) is a compact, standard-design hammer mill for powdering laboratory coal samples to 72/100 mesh (212 microns). The grinding chamber is inlaid with a ratchet-teeth liner on the top and a bottom screen that controls final particle size. Rotors and beaters are mounted on a shaft coupled directly to a 2 HP (1.5 kW), 440V, 3-phase, 50 Hz AC motor. The complete unit is mounted on a strong steel stand and supplied with a full set of screens and a cotton collection bag. Four spare 212-micron wire mesh screens are included as standard. Motor options: Kirloskar / Bharat Bijlee / Crompton; BCH make starter.",
    image: "images/products/lab-coal-pulverizer.jpg",
    models: [
      { modelNo: "MEC-394 (6)", chamberSize: "150 mm", feedSize: "0–6 mm", outputSize: "212 µm (72 mesh)", motor: "2 HP" },
      { modelNo: "MEC-394 (8)", chamberSize: "200 mm", feedSize: "0–8 mm", outputSize: "212 µm (72 mesh)", motor: "3 HP" }
    ],
    modelHeaders: ["Model No.", "Chamber Size (mm)", "Feed Size (mm)", "Output Size", "Motor"],
    keyFeatures: [
      "Ratchet-teeth grinding chamber liner for efficient pulverization",
      "Bottom screen for controlled 212-micron output",
      "4 spare wire mesh screens supplied as standard",
      "Cotton collection bag included",
      "Compact, strong steel stand mounting",
      "2 chamber sizes: 150 mm and 200 mm"
    ],
    applications: ["Laboratory coal sample preparation", "Power plant fuel analysis", "Coal quality control", "Coal research laboratories"],
    feedMaterial: "Mineral Ore / Coal"
  },
  {
    id: "raymond-mini-mill",
    name: "Raymond Mini Mill",
    category: "Crushing & Grinding",
    hsnCode: "8474",
    tagline: "High-speed swing-hammer pulveriser for fine coal powder production",
    shortDesc: "Compact Raymond-type swing-hammer mill for producing 212–250 micron coal fine powder from 3.35 mm inlet coal. Self-contained unit with integral hand-operated screw feeder.",
    fullDesc: "The SGS Raymond Mini Mill (Model MEC-433A) is a high-speed swing-hammer pulveriser designed for small-scale production of fine coal powder in the 212–250 micron range from inlet coal of up to 3.35 mm with an approximate HGI of 50. The fabricated steel construction features forged steel hammers that deliver consistent pulverisation. An integral hand-operated screw-type feeder ensures controlled, even feed. Product collects in the supplied container via a cloth delivery chute. Powered by a continuous-rated 0.5 HP motor (synchronous speed ~2800 RPM), 440V, 3-phase, 50 Hz AC.",
    image: "images/products/raymond-mini-mill.jpg",
    models: [
      { modelNo: "MEC-433A", feedSize: "≤ 3.35 mm", outputSize: "212–250 µm", motor: "0.5 HP / 2800 RPM", power: "440V, 3Ph, 50Hz" }
    ],
    modelHeaders: ["Model No.", "Feed Size", "Output Size", "Motor", "Power Supply"],
    keyFeatures: [
      "High-speed forged steel swing hammers",
      "Integral hand-operated screw feeder for controlled feed",
      "Cloth delivery chute with product collection container",
      "Fabricated steel body — robust & durable",
      "Continuous-rated 0.5 HP motor",
      "Ideal for HGI ~50 coal"
    ],
    applications: ["Fine coal powder production", "Power plant laboratory testing", "Coal grindability studies", "Small-scale fuel research"],
    feedMaterial: "Coal (HGI ~50)"
  },
  {
    id: "laboratory-ball-mill",
    name: "Laboratory Ball Mill",
    category: "Crushing & Grinding",
    hsnCode: "8474",
    tagline: "Precision ball milling for cement, pigments, paints & fine powder production",
    shortDesc: "Laboratory ball mill for grinding pigments, cement, paint, plastic, and tile materials using assorted steel balls. 4-digit auto-stop revolution counter ensures reproducible results.",
    fullDesc: "The SGS Laboratory Ball Mill is primarily designed for grinding pigments and for producing ground cement samples in the laboratory. The material is ground at a defined speed using a specific quantity of assorted steel balls for a set number of revolutions — conditions that ensure highly reproducible results. Beyond cement, the mill finds wide application in the paint, plastic, granite, tile, and mineral processing industries. A 4-digit digital auto-stop revolution counter is fitted as standard, allowing the operator to preset and automatically stop the mill at the exact revolution count required. Sets of assorted steel balls are available at additional cost.",
    image: "images/products/laboratory-ball-mill.jpg",
    models: [
      { modelNo: "MEC-263",   capacity: "5 kg",  drumSize: "300 Dia × 350 L (mm)", steelBalls: "20 kg", motor: "1 HP" },
      { modelNo: "MEC-262A",  capacity: "10 kg", drumSize: "450 Dia × 450 L (mm)", steelBalls: "40 kg", motor: "2 HP" }
    ],
    modelHeaders: ["Model No.", "Capacity", "Drum Size (mm)", "Steel Ball Set", "Motor"],
    keyFeatures: [
      "4-digit digital auto-stop revolution counter",
      "Assorted steel ball sets for optimum grinding",
      "Two drum sizes: 5 kg and 10 kg capacity",
      "Suitable for cement, paint, plastic, granite & tile",
      "Motor options: Kirloskar / Crompton / Bharat Bijlee",
      "Reproducible results through revolution-based control"
    ],
    applications: ["Cement industry grinding", "Pigment & paint grinding", "Plastic & granite powder production", "Tile industry", "Mineral processing R&D"],
    feedMaterial: "Cement / Pigments / Minerals"
  },
  {
    id: "abrasive-index-machine",
    name: "Abrasive Index Machine",
    category: "Testing Instruments",
    hsnCode: "9024",
    tagline: "IS 9949-1986 compliant machine for determining coal abrasive index",
    shortDesc: "Purpose-built tester for determining the abrasive index of coal used in power plants, compliant with IS 9949:1986. Handles high-ash coal up to 45% and stops automatically at preset revolutions.",
    fullDesc: "The SGS Abrasive Index Machine (Model MEC-406) is specifically designed to determine the abrasive index of coal as specified under IS 9949:1986 (Reaffirmed 1994) — Methods of Test for Abrasive Properties of Coal and Associated Minerals. The machine handles high-ash coal with ash content up to 45% in its steel blade mill pot. The blade assembly comprises 4 steel blades driven by a 3 HP, 3-phase motor running at approximately 1450 RPM. Precision gauges are provided for checking the gap between blade edges and the internal wall/bottom of the mill pot. Supplied with a 5-digit auto-stop digital counter that halts the machine at a fixed, pre-set revolution count. Power supply: 415V, 3-phase, 50 Hz AC.",
    image: "images/products/abrasive-index-machine.jpg",
    models: [
      { modelNo: "MEC-406", blades: "4 No. steel blades", motor: "3 HP / 1450 RPM", power: "415V, 3Ph, 50Hz", counter: "5-digit auto-stop" }
    ],
    modelHeaders: ["Model No.", "Blade Assembly", "Motor", "Power Supply", "Counter"],
    keyFeatures: [
      "Compliant with IS 9949:1986 (Reaffirmed 1994)",
      "Handles high-ash coal up to 45% ash content",
      "Steel blade mill pot with 4-blade assembly",
      "5-digit auto-stop digital revolution counter",
      "Precision gap gauges supplied as standard",
      "3 HP motor at ~1450 RPM for controlled testing"
    ],
    applications: ["Coal abrasiveness testing for power plants", "Coal quality control", "Fuel research laboratories", "Mineral testing"],
    feedMaterial: "Coal (up to 45% ash)"
  },
  {
    id: "hgi-machine",
    name: "HGI Machine",
    category: "Testing Instruments",
    hsnCode: "9024",
    tagline: "Precision Hardgrove Grindability Index tester for coal characterisation",
    shortDesc: "Automatic Hardgrove Grindability Index (HGI) tester per standard specifications. Ball-bearing operation with 8 steel balls, 29 kg loading, 19–21 RPM, and 3-digit auto-stop digital counter.",
    fullDesc: "The SGS HGI Machine (Model MEC-396) is designed for the determination of the Hardgrove Grindability Index (HGI) of coal — a critical parameter for power plant fuel management and mill selection. The machine operates on ball-bearing principles with a stationary grinding ring and eight 25 mm diameter steel balls driven by a rotating ring at 19–21 RPM under a load of 29 kg ± 225 g. Motor operation, revolution counting, and automatic stopping are all controlled by an automatic device fitted with a 3-digit digital auto-stop counter. Motor: Lawkin/Eletek make.",
    image: "images/products/hgi-machine.jpg",
    models: [
      { modelNo: "MEC-396", steelBalls: "8 No. × 25 mm dia", speed: "19–21 RPM", load: "29 kg ± 225 g", counter: "3-digit auto-stop" }
    ],
    modelHeaders: ["Model No.", "Steel Balls", "Operating Speed", "Applied Load", "Counter"],
    keyFeatures: [
      "Standard 8-ball, 25 mm diameter grinding configuration",
      "Precise 29 kg ± 225 g applied load",
      "Automatic 3-digit revolution counter with auto-stop",
      "Ball-bearing operation for smooth, consistent results",
      "Lawkin/Eletek make motor for reliability",
      "Speed controlled at 19–21 RPM"
    ],
    applications: ["Hardgrove Grindability Index testing", "Power plant coal characterisation", "Fuel selection & mill design", "Coal quality control laboratories"],
    feedMaterial: "Coal"
  },
  {
    id: "proving-ring",
    name: "Integral Type Compression Proving Ring",
    category: "Testing Instruments",
    hsnCode: "9024",
    tagline: "High-accuracy forged steel proving rings for load calibration from 50 kgf to 200,000 kgf",
    shortDesc: "Precisely forged integral-type proving rings available from 50 kgf to 200,000 kgf. Supplied complete with Mercer/Baker dial gauge, calibration chart, loading pads, and polished wooden box.",
    fullDesc: "SGS Integral Type Compression Proving Rings are manufactured from special steel, carefully forged to deliver high and stable accuracy, dependability, and repeatability across the full load range. The dial gauge and anvil are mounted on U-brackets clamped to the ring body by set screws — the dial indicator has a sensitivity of 0.002 mm/div and deflection is directly proportional to applied load, making calibration straightforward. Each ring is supplied complete with a Mercer or Baker make dial gauge, Works Calibration Chart, a separate pair of loading pads, and packed in a polished wooden box. NPL (India) / NCCBM Calibration Certificates can be arranged at additional cost. All rings are the integral type; capacities from 50 kgf to 200,000 kgf are available.",
    image: "images/products/proving-ring.jpg",
    models: [
      { capacity: "50 kgf to 200,000 kgf", type: "Integral Compression", gaugeType: "Mercer / Baker", sensitivity: "0.002 mm/div", certification: "NPL / NCCBM (optional)" }
    ],
    modelHeaders: ["Capacity Range", "Type", "Dial Gauge Make", "Gauge Sensitivity", "Certification"],
    keyFeatures: [
      "Forged special steel for high accuracy & repeatability",
      "0.002 mm/div dial gauge sensitivity",
      "U-bracket dial gauge & anvil mounting",
      "Deflection directly proportional to applied load",
      "Supplied with Mercer/Baker dial gauge & calibration chart",
      "NPL India / NCCBM calibration certificates available"
    ],
    applications: ["Universal testing machine calibration", "Compression load verification", "Civil engineering laboratories", "Quality control & R&D"],
    feedMaterial: "N/A — Load measurement instrument"
  },
  {
    id: "coal-mill-fineness-collector",
    name: "Coal Mill Fineness Sample Collector (Cyclone Type)",
    category: "Testing Instruments",
    hsnCode: "9024",
    tagline: "Standard cyclone-type sampler for collecting fine coal powder from mill outlets",
    shortDesc: "Brass/copper fabricated cyclone-type sample collector for capturing coal fineness samples from mill outlets. Includes sampling probe, vent pipe, and sample collection bottle.",
    fullDesc: "The SGS Coal Mill Fineness Sample Collector (Cyclone Type) is a standard-design, cyclone-type isokinetic sampler for collecting representative fine-coal powder samples at mill outlets in power plants and coal processing facilities. Fabricated from 18-gauge brass/copper sheet with standard brazing, the unit includes a sampling probe, vent pipe, and sample collection bottle — all in brass/copper construction. The funnel-type folded design conforms to standard specifications for coal fineness sampling, ensuring representative and reproducible sample collection.",
    image: "images/products/coal-mill-fineness-collector.jpg",
    models: [
      { construction: "18-gauge brass/copper sheet", design: "Cyclone / funnel-type", probe: "18-gauge brass/copper", includes: "Probe, vent pipe, collection bottle" }
    ],
    modelHeaders: ["Construction", "Design Type", "Probe Material", "Supplied With"],
    keyFeatures: [
      "Standard cyclone / isokinetic sampler design",
      "18-gauge brass/copper sheet construction",
      "Standard brazing for robust, leak-free assembly",
      "18-gauge brass/copper sampling probe",
      "Sample collection bottle included",
      "Complies with standard coal fineness sampling specifications"
    ],
    applications: ["Power plant mill outlet sampling", "Coal fineness testing", "Pulverised fuel quality monitoring", "Coal processing plant QC"],
    feedMaterial: "Pulverised Coal"
  },
  {
    id: "rotap-sieve-shaker",
    name: "Rotap Sieve Shaker",
    category: "Testing Instruments",
    hsnCode: "9024",
    tagline: "Rotary & tapping sieve shaker for accurate particle size analysis",
    shortDesc: "Heavy-duty Rotap sieve shaker combining rotary and tapping motion for thorough, reproducible particle size analysis of aggregates, minerals, coal, and powders.",
    fullDesc: "The SGS Rotap Sieve Shaker (Model MES-045) delivers precise particle size analysis through a combined rotary and tapping (Ro-Tap) motion that ensures thorough stratification of sample material through the sieve stack. The dual-motion mechanism — a rotary circular motion combined with vertical tapping — provides more effective sieving than simple vibratory shakers, reducing analysis time while improving reproducibility. The robust construction supports standard test sieves and is widely used for gradation analysis of coal, minerals, aggregates, and powders in quality control and research laboratories.",
    image: "images/products/rotap-sieve-shaker.jpg",
    models: [
      { modelNo: "MES-045", motion: "Rotary + Tapping (Ro-Tap)", application: "Particle size analysis", sieves: "Accepts standard test sieves" }
    ],
    modelHeaders: ["Model No.", "Motion Type", "Application", "Compatibility"],
    keyFeatures: [
      "Combined rotary and tapping (Ro-Tap) motion",
      "More effective than single-motion vibratory shakers",
      "Accepts standard test sieves",
      "Reproducible particle size analysis",
      "Heavy-duty robust construction",
      "Suitable for coal, mineral, aggregate & powder analysis"
    ],
    applications: ["Particle size analysis of coal", "Mineral gradation testing", "Aggregate sieve analysis", "Powder particle distribution", "Quality control laboratories"],
    feedMaterial: "Coal / Minerals / Aggregates / Powders"
  },
  {
    id: "muffle-furnace",
    name: "Laboratory High Temperature Muffle Furnace",
    category: "Thermal Equipment",
    hsnCode: "8514",
    tagline: "Grooved-type muffle furnace reaching 1150°C with precision digital control",
    shortDesc: "High-temperature laboratory muffle furnace (grooved type) with ceramic fibre insulation, operating up to 1150°C. Digital temperature controller with E.R. device for precise fine control.",
    fullDesc: "The SGS Laboratory High Temperature Muffle Furnace (Grooved Type) is designed for high-temperature applications including ashing, heat treatment, annealing, and sintering in laboratory environments. The furnace is fitted with high-quality grooved ceramic tile sets and ceramic fibre insulation for energy efficiency and thermal stability up to a maximum of 1200°C (working temperature 1150°C). The outer casing is fabricated from thick mild steel and finished with powder coating for durability. Temperature across the 50–1150°C range is precisely controlled by a digital temperature cum indicator with an E.R. (Electrical Resistance) control device for fine, stable adjustment. Optional accessories include spare thermocouple and digital memory timer (0–999 min).",
    image: "images/products/muffle-furnace.jpg",
    models: [
      { interior: "100×100×225 mm (4\"×4\"×9\")",  loadKW: "2.50 kW", capacity: "2.33 litres" },
      { interior: "125×125×250 mm (5\"×5\"×10\")", loadKW: "3.00 kW", capacity: "4 litres"    },
      { interior: "150×150×300 mm (6\"×6\"×12\")", loadKW: "3.50 kW", capacity: "7 litres"    },
      { interior: "200×200×300 mm (8\"×8\"×12\")", loadKW: "5.00 kW", capacity: "12.5 litres" }
    ],
    modelHeaders: ["Interior (W×D×H)", "Load Rating (kW)", "Capacity (litres)"],
    keyFeatures: [
      "Working temperature up to 1150°C (max 1200°C)",
      "Grooved ceramic tile set with ceramic fibre insulation",
      "Digital temperature controller with E.R. fine control",
      "Powder-coated thick mild steel outer casing",
      "4 interior sizes: 2.33 L to 12.5 L",
      "Optional: spare thermocouple & digital memory timer (0–999 min)"
    ],
    applications: ["Coal proximate analysis — ash determination", "Heat treatment & annealing", "Ceramic & refractory testing", "Chemical analysis & ashing", "Sintering & calcination"],
    feedMaterial: "N/A — Thermal processing equipment"
  },
  {
    id: "hot-air-oven",
    name: "Laboratory Hot Air Oven",
    category: "Thermal Equipment",
    hsnCode: "8514",
    tagline: "Thermostatically controlled hot air oven from 50°C to 250°C with ±1°C accuracy",
    shortDesc: "Double-walled laboratory hot air oven with anodised aluminium or stainless steel inner chamber. Thermostatic control from 50°C to 250°C ±1°C. Six chamber sizes from 28 litres to 125 litres.",
    fullDesc: "The SGS Laboratory Hot Air Oven features a double-walled construction with an inner chamber of anodised aluminium or stainless steel and an outer chamber of powder-coated mild steel. Beaded heating elements placed in the bottom and side ribs ensure even heat distribution throughout the chamber. Temperature is thermostatically controlled from 50°C to 250°C ±1°C, with an L-shape thermometer, two indicators, thermostat, and on/off switch supplied as standard. Designed to operate on 220/230V AC supply. Optional accessories include air circulation fan, digital temperature controller, microprocessor-based PID temperature control, and digital timer. Available in six chamber sizes from 28 litres to 125 litres.",
    image: "images/products/hot-air-oven.jpg",
    models: [
      { interior: "300×300×300 mm (12\"×12\"×12\")", capacity: "28 L",  loadKW: "1.5 kW", shelves: "2" },
      { interior: "350×350×350 mm (14\"×14\"×14\")", capacity: "45 L",  loadKW: "2.0 kW", shelves: "2" },
      { interior: "450×450×450 mm (18\"×18\"×18\")", capacity: "95 L",  loadKW: "2.5 kW", shelves: "2" },
      { interior: "450×450×605 mm (18\"×18\"×24\")", capacity: "125 L", loadKW: "3.0 kW", shelves: "2" },
      { interior: "605×605×605 mm (24\"×24\"×24\")", capacity: "95 L",  loadKW: "2.5 kW", shelves: "2" },
      { interior: "605×605×900 mm (24\"×24\"×36\")", capacity: "125 L", loadKW: "3.0 kW", shelves: "3" }
    ],
    modelHeaders: ["Interior (W×D×H)", "Capacity (L)", "Load Rating (kW)", "Shelves"],
    keyFeatures: [
      "Double-walled construction: SS/anodised Al inner, MS outer",
      "Temperature control: 50°C to 250°C ±1°C",
      "Beaded heating elements in bottom and side ribs",
      "L-shape thermometer + dual indicators supplied",
      "6 sizes from 28 L to 125 L",
      "Optional: PID control, air circulation fan, digital timer"
    ],
    applications: ["Sample drying & moisture removal", "Sterilisation", "Coal proximate analysis", "Material testing & conditioning", "Research & educational labs"],
    feedMaterial: "N/A — Thermal processing equipment"
  }
];

// Category list (used for filtering on products page)
const CATEGORIES = ["All", "Crushing & Grinding", "Testing Instruments", "Thermal Equipment"];
