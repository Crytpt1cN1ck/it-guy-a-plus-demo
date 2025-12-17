// ----------------------------
// Data: add decks/cards here
// ----------------------------
const DECKS = [
  {
    id: "a-plus-core-1",
    name: "A+ Core 1 (Starter)",
    cards: [
  {
  type: "mcq",
  q: "A desktop powers on but shows no video. Fans spin and you hear one long beep followed by two short beeps. What is the MOST likely issue?",
  choices: [
    "A. Faulty power supply",
    "B. RAM not seated properly",
    "C. Video adapter failure",
    "D. Corrupted bootloader"
  ],
  correct: "C",
  a: "C. Video adapter failure",
  explainByChoice: {
    A: "A power supply problem usually causes no power, random shutdowns, or failure to start. Here the system powers on and provides a beep code, which points to POST hardware detection rather than a dead PSU.",
    B: "Bad or unseated RAM often triggers memory-related beep codes and may prevent POST entirely. This pattern (1 long + 2 short) does not indicate a RAM issue.",
    C: "This beep pattern commonly points to a video adapter/GPU problem. Reseat the GPU, verify PCIe power connectors, and test with known-good video output or integrated graphics if available.",
    D: "A corrupted bootloader happens after POST when the system tries to load the OS. Beep codes occur during POST, before the bootloader is even used."
  }
},
{
  type: "mcq",
  q: "A user complains that printing is slow only when sending large color PDFs over Wi-Fi. Smaller documents print normally. What should you try FIRST?",
  choices: [
    "A. Replace the printer fuser",
    "B. Switch the printer to a 5 GHz SSID or use Ethernet",
    "C. Reinstall the operating system",
    "D. Replace the toner cartridge"
  ],
  correct: "B",
  a: "B. Switch the printer to a 5 GHz SSID or use Ethernet",
  explainByChoice: {
    A: "A failing fuser usually causes print-quality issues like smearing or toner not bonding properly. It doesn’t typically cause “slow only on large Wi-Fi jobs.”",
    B: "Large PDFs are more sensitive to Wi-Fi congestion/interference. Moving to 5 GHz or using Ethernet is a fast, low-risk step to improve throughput.",
    C: "Reinstalling the OS is a last resort and doesn’t match the symptom pattern.",
    D: "Low or bad toner affects print quality (fading/streaks), not transfer speed of large print jobs over a wireless connection."
  }
},
{
  type: "mcq",
  q: "A laptop has a swollen battery and the trackpad is difficult to click. What is the BEST immediate action?",
  choices: [
    "A. Continue using it until the next maintenance window",
    "B. Discharge the battery completely and keep using it",
    "C. Power off the device and replace the battery following safety procedures",
    "D. Update BIOS and retest"
  ],
  correct: "C",
  a: "C. Power off the device and replace the battery following safety procedures",
  explainByChoice: {
    A: "A swollen lithium battery is a safety hazard (fire/rupture risk). This is urgent and should not wait for a maintenance window.",
    B: "Continuing to use or intentionally discharging a swollen lithium battery increases risk.",
    C: "Shut the device down and handle the battery per safety policy. Replace the battery and dispose of it according to approved procedures.",
    D: "BIOS updates can help with compatibility or firmware bugs, but they do not fix physical battery swelling."
  }
},
{
  type: "mcq",
  q: "A user upgraded to a faster CPU but the system now powers on and immediately shuts off. What should you verify FIRST?",
  choices: [
    "A. The CPU is compatible with the motherboard socket and BIOS supports it",
    "B. The SSD has enough free space",
    "C. The monitor supports the new refresh rate",
    "D. The operating system is activated"
  ],
  correct: "A",
  a: "A. CPU compatibility and BIOS support",
  explainByChoice: {
    A: "Instant shutdown after a CPU swap often points to incompatibility or missing BIOS microcode support. Verify socket, chipset support, and required BIOS version.",
    B: "SSD space affects OS performance and updates, but it won’t cause an immediate shutdown right after a CPU change.",
    C: "Monitor refresh rate has nothing to do with power-on shutdown behavior. The system is failing at or near POST.",
    D: "Activation is an OS-level issue after boot. This problem occurs before the OS loads."
  }
},
{
  type: "mcq",
  q: "A workstation frequently loses network connectivity and self-assigns an address in the 169.254.x.x range. What service is MOST likely unavailable?",
  choices: [
    "A. DNS",
    "B. DHCP",
    "C. NAT",
    "D. NTP"
  ],
  correct: "B",
  a: "B. DHCP",
  explainByChoice: {
    A: "DNS issues cause name resolution failures, but the client would still have a valid IP configuration. APIPA (169.254.x.x) specifically indicates failure to get an IP lease.",
    B: "169.254.x.x is APIPA, typically assigned when a device cannot reach DHCP to obtain an IP address. Check DHCP server, relay, VLAN, or connectivity to the DHCP scope.",
    C: "NAT affects traffic translation, usually at the router/firewall edge. It does not cause a client to self-assign APIPA.",
    D: "NTP affects time synchronization. Incorrect time can break authentication, but it won’t cause APIPA self-assignment."
  }
},
{
  type: "mcq",
  q: "A PC randomly reboots under heavy load (gaming). Temperatures look normal. Which component should you test NEXT?",
  choices: [
    "A. Power supply (PSU)",
    "B. Hard drive",
    "C. Monitor",
    "D. Keyboard"
  ],
  correct: "A",
  a: "A. Power supply (PSU)",
  explainByChoice: {
    A: "Correct. Random reboots under load often point to unstable power delivery. Test with a known-good PSU or a PSU tester.",
    B: "A failing drive usually causes slow performance, read/write errors, or boot issues, not sudden power resets under load.",
    C: "A monitor problem affects display output, not system power stability.",
    D: "A keyboard cannot cause the system to reboot under load."
  }
},
{
  type: "mcq",
  q: "A user installs additional RAM, but the PC now powers on with no display. What should you do FIRST?",
  choices: [
    "A. Reinstall the operating system",
    "B. Reseat the RAM and verify it is in the correct slots",
    "C. Replace the CPU",
    "D. Update printer drivers"
  ],
  correct: "B",
  a: "B. Reseat the RAM and verify it is in the correct slots",
  explainByChoice: {
    A: "An OS issue happens after POST. No display right after a RAM change suggests that the OS has not yet loaded.",
    B: "Correct. A partially seated DIMM or wrong slot population is a common cause of no-post/no-display after a RAM upgrade.",
    C: "CPU replacement is not the first step when the symptom started immediately after installing RAM.",
    D: "Printer drivers are unrelated to boot/display problems."
  }
},
{
  type: "mcq",
  q: "A technician needs the FASTEST storage for a laptop that supports it. Which option is BEST?",
  choices: [
    "A. 5400 RPM SATA HDD",
    "B. 7200 RPM SATA HDD",
    "C. SATA SSD (2.5-inch)",
    "D. NVMe SSD (M.2)"
  ],
  correct: "D",
  a: "D. NVMe SSD (M.2)",
  explainByChoice: {
    A: "A 5400 RPM HDD is typically the slowest option listed.",
    B: "A 7200 RPM HDD is faster than 5400 RPM, but still much slower than other options.",
    C: "A SATA SSD is fast, but limited by SATA interface speeds.",
    D: "Correct. NVMe uses PCIe lanes and offers the highest throughput/lowest latency among these choices."
  }
},
{
  type: "mcq",
  q: "A user reports they can reach websites by IP address but not by name. What is the MOST likely issue?",
  choices: [
    "A. DHCP failure",
    "B. DNS misconfiguration",
    "C. GPU driver corruption",
    "D. Faulty RAM"
  ],
  correct: "B",
  a: "B. DNS misconfiguration",
  explainByChoice: {
    A: "If DHCP failed, the system may have APIPA (169.254.x.x) and likely would not browse reliably by IP.",
    B: "Correct. IP works but names fail strongly indicates a DNS problem (bad DNS server, blocked DNS, wrong settings).",
    C: "GPU drivers don’t affect name resolution.",
    D: "RAM issues cause crashes/instability, not consistent “names don’t resolve” behavior."
  }
},
{
  type: "mcq",
  q: "A user’s phone connects to Wi-Fi but has no internet access. Other devices work fine. What should you try FIRST?",
  choices: [
    "A. Forget the network and reconnect",
    "B. Replace the access point",
    "C. Upgrade the router firmware immediately",
    "D. Replace the ISP modem"
  ],
  correct: "A",
  a: "A. Forget the network and reconnect",
  explainByChoice: {
    A: "Correct. A bad saved config, captive portal issue, or stale lease can be fixed quickly by forgetting and reconnecting.",
    B: "Since other devices work, the AP is likely fine.",
    C: "Firmware upgrades can help but are not the first troubleshooting step for a single device.",
    D: "If other devices have internet, the modem/ISP is likely not the issue."
  }
},
{
  type: "mcq",
  q: "Which connector is MOST commonly used for modern internal laptop storage (high speed) on many systems?",
  choices: [
    "A. Molex",
    "B. eSATA",
    "C. M.2",
    "D. RJ-45"
  ],
  correct: "C",
  a: "C. M.2",
  explainByChoice: {
    A: "Molex is a legacy power connector typically used in older desktop components.",
    B: "eSATA is an external SATA interface and is uncommon on modern laptops.",
    C: "Correct. M.2 is commonly used for SSDs (SATA or NVMe) in laptops and desktops.",
    D: "RJ-45 is an Ethernet network connector."
  }
},
{
  type: "mcq",
  q: "A laser printer is printing faded output consistently. What should you check FIRST?",
  choices: [
    "A. Toner level / toner cartridge",
    "B. Paper type setting in BIOS",
    "C. CPU temperature",
    "D. GPU power connectors"
  ],
  correct: "A",
  a: "A. Toner level / toner cartridge",
  explainByChoice: {
    A: "Correct. Faded print is commonly caused by low toner or a failing toner cartridge.",
    B: "BIOS settings do not control printer paper type settings.",
    C: "CPU temperature is unrelated to printer output quality.",
    D: "GPU connectors are unrelated to printer output quality."
  }
},
{
  type: "mcq",
  q: "A user’s PC receives an IP address, but cannot reach resources on another network (internet). Other PCs work. What should you verify FIRST?",
  choices: [
    "A. Default gateway settings",
    "B. Monitor resolution",
    "C. Printer spooler service",
    "D. Keyboard layout"
  ],
  correct: "A",
  a: "A. Default gateway settings",
  explainByChoice: {
    A: "Correct. Without the correct default gateway, the PC can talk locally but won’t route traffic to other networks.",
    B: "Resolution does not affect routing.",
    C: "Spooler affects printing, not network routing.",
    D: "Keyboard layout does not affect routing."
  }
},
{
  type: "mcq",
  q: "A desktop has no display and the keyboard LEDs do not flash during startup. Fans spin. What is a good FIRST step?",
  choices: [
    "A. Verify the monitor input and cable connection",
    "B. Replace the motherboard immediately",
    "C. Reinstall Windows",
    "D. Clear browser cache"
  ],
  correct: "A",
  a: "A. Verify the monitor input and cable connection",
  explainByChoice: {
    A: "Correct. Start with the simplest external checks: correct input, cable seated, power to monitor.",
    B: "Motherboard replacement is not a first step without basic verification.",
    C: "OS reinstall is irrelevant if you can’t even confirm display output/POST behavior.",
    D: "Browser cache is unrelated."
  }
},
{
  type: "mcq",
  q: "Which tool is BEST for testing continuity of a network cable you just crimped?",
  choices: [
    "A. Cable tester",
    "B. Tone generator only",
    "C. Multimeter set to AC voltage",
    "D. Loopback plug for HDMI"
  ],
  correct: "A",
  a: "A. Cable tester",
  explainByChoice: {
    A: "Correct. A cable tester verifies wire map/continuity and detects miswires/split pairs.",
    B: "A tone generator helps trace cables, but does not confirm correct pinout/continuity on its own.",
    C: "AC voltage is not the proper method for checking cable pin mapping.",
    D: "HDMI loopback is unrelated to Ethernet cable crimping."
  }
},
{
  type: "mcq",
  q: "Which connector is MOST commonly used to connect a monitor to a modern desktop PC for both video and audio?",
  choices: [
    "A. VGA",
    "B. DVI-D",
    "C. HDMI",
    "D. PS/2"
  ],
  correct: "C",
  a: "C. HDMI",
  explainByChoice: {
    A: "VGA is an older analog connector and does not carry audio.",
    B: "DVI-D carries digital video only and does not support audio.",
    C: "Correct. HDMI carries both digital video and audio and is widely used on modern systems.",
    D: "PS/2 is used for keyboards and mice, not displays."
  }
},
{
  type: "mcq",
  q: "A technician needs the FASTEST external storage connection for a modern laptop. Which option is BEST?",
  choices: [
    "A. USB 2.0",
    "B. USB 3.2 / USB-C",
    "C. FireWire 400",
    "D. eSATA (legacy)"
  ],
  correct: "B",
  a: "B. USB 3.2 / USB-C",
  explainByChoice: {
    A: "USB 2.0 is much slower and not suitable for high-speed external storage.",
    B: "Correct. USB 3.2 over USB-C provides very high throughput and is common on modern laptops.",
    C: "FireWire 400 is obsolete and slower than modern USB standards.",
    D: "eSATA is legacy and rarely supported on modern laptops."
  }
},
{
  type: "mcq",
  q: "Which connector is MOST likely used for wired network connectivity?",
  choices: [
    "A. RJ-11",
    "B. RJ-45",
    "C. LC",
    "D. SC"
  ],
  correct: "B",
  a: "B. RJ-45",
  explainByChoice: {
    A: "RJ-11 is used for telephone lines, not Ethernet networking.",
    B: "Correct. RJ-45 connectors are used with Ethernet network cables.",
    C: "LC is a fiber connector, not standard copper Ethernet.",
    D: "SC is also a fiber connector."
  }
},
{
  type: "mcq",
  q: "Which cable type is MOST commonly used for connecting internal SATA storage devices?",
  choices: [
    "A. Molex",
    "B. SATA",
    "C. Thunderbolt",
    "D. IDE (PATA)"
  ],
  correct: "B",
  a: "B. SATA",
  explainByChoice: {
    A: "Molex provides power, not data, to devices.",
    B: "Correct. SATA cables are used for data connections to internal storage devices.",
    C: "Thunderbolt is used primarily for external devices.",
    D: "IDE/PATA is an older, largely obsolete interface."
  }
},
{
  type: "mcq",
  q: "A user wants to connect a laptop to an older projector that only supports analog input. Which connector should you expect?",
  choices: [
    "A. HDMI",
    "B. DisplayPort",
    "C. VGA",
    "D. DVI-D"
  ],
  correct: "C",
  a: "C. VGA",
  explainByChoice: {
    A: "HDMI is digital and not supported by many older projectors.",
    B: "DisplayPort is digital and newer than most legacy projectors.",
    C: "Correct. VGA is an analog connector commonly used by older projectors.",
    D: "DVI-D is digital-only and would not work without an active adapter."
  }
},
{
  type: "mcq",
  q: "Which connector is MOST commonly associated with fiber-optic networking?",
  choices: [
    "A. RJ-45",
    "B. BNC",
    "C. LC",
    "D. DB-9"
  ],
  correct: "C",
  a: "C. LC",
  explainByChoice: {
    A: "RJ-45 is used for copper Ethernet cabling.",
    B: "BNC is used with coaxial cable, not fiber.",
    C: "Correct. LC connectors are common for fiber-optic networking.",
    D: "DB-9 is a serial connector."
  }
},
{
  type: "mcq",
  q: "Which cable type uses a central conductor surrounded by shielding?",
  choices: [
    "A. Twisted pair",
    "B. Coaxial",
    "C. Fiber optic",
    "D. Ribbon cable"
  ],
  correct: "B",
  a: "B. Coaxial",
  explainByChoice: {
    A: "Twisted pair uses pairs of wires twisted together to reduce interference.",
    B: "Correct. Coaxial cable has a single central conductor with shielding around it.",
    C: "Fiber optic uses glass or plastic fibers to transmit light.",
    D: "Ribbon cables contain multiple parallel conductors."
  }
},
{
  type: "mcq",
  q: "Which connector is MOST commonly used for legacy keyboard and mouse connections?",
  choices: [
    "A. USB-A",
    "B. PS/2",
    "C. RJ-45",
    "D. HDMI"
  ],
  correct: "B",
  a: "B. PS/2",
  explainByChoice: {
    A: "USB-A is common today but is not considered legacy.",
    B: "Correct. PS/2 connectors were traditionally used for keyboards and mice.",
    C: "RJ-45 is used for networking.",
    D: "HDMI is used for video/audio output."
  }
},
{
  type: "mcq",
  q: "Which port would you MOST likely use to connect a docking station to a modern laptop?",
  choices: [
    "A. VGA",
    "B. USB-C / Thunderbolt",
    "C. RJ-11",
    "D. Serial (DB-9)"
  ],
  correct: "B",
  a: "B. USB-C / Thunderbolt",
  explainByChoice: {
    A: "VGA is a display-only connector and cannot support docking station functionality.",
    B: "Correct. USB-C/Thunderbolt supports power, video, data, and peripherals through a single cable.",
    C: "RJ-11 is used for telephone connections.",
    D: "Serial ports are legacy and not used for docking stations."
  }
},
{
  type: "mcq",
  q: "Which connector is MOST commonly used to provide power to internal desktop components such as fans or older drives?",
  choices: [
    "A. SATA data",
    "B. Molex",
    "C. RJ-45",
    "D. DisplayPort"
  ],
  correct: "B",
  a: "B. Molex",
  explainByChoice: {
    A: "SATA data cables do not provide power.",
    B: "Correct. Molex connectors supply power to internal components.",
    C: "RJ-45 is used for networking.",
    D: "DisplayPort is used for video output."
  }
},
{
  type: "mcq",
  q: "Which 802.11 Wi-Fi standard operates exclusively on the 5 GHz frequency band?",
  choices: [
    "A. 802.11b",
    "B. 802.11a",
    "C. 802.11g",
    "D. 802.11n"
  ],
  correct: "B",
  a: "B. 802.11a",
  explainByChoice: {
    A: "802.11b uses the 2.4 GHz band and is an older, slower standard.",
    B: "Correct. 802.11a operates in the 5 GHz band only. :contentReference[oaicite:1]{index=1}",
    C: "802.11g operates in the 2.4 GHz band and is backward compatible with 802.11b.",
    D: "802.11n can operate in both 2.4 GHz and 5 GHz bands."
  }
},
{
  type: "mcq",
  q: "Which Wi-Fi standard was the first to achieve significantly higher speeds (up to ~600 Mbps) and support both 2.4 GHz and 5 GHz bands?",
  choices: [
    "A. 802.11g",
    "B. 802.11ac",
    "C. 802.11n",
    "D. 802.11b"
  ],
  correct: "C",
  a: "C. 802.11n",
  explainByChoice: {
    A: "802.11g improved over 802.11b but stayed on 2.4 GHz with ~54 Mbps.",
    B: "802.11ac focuses on 5 GHz with higher throughput.",
    C: "Correct. 802.11n supports both 2.4 GHz and 5 GHz and can reach higher speeds. :contentReference[oaicite:2]{index=2}",
    D: "802.11b is older and much slower (~11 Mbps)."
  }
},
{
  type: "mcq",
  q: "Which Wi-Fi standard is also known as Wi-Fi 5?",
  choices: [
    "A. 802.11ax",
    "B. 802.11ac",
    "C. 802.11g",
    "D. 802.11b"
  ],
  correct: "B",
  a: "B. 802.11ac",
  explainByChoice: {
    A: "802.11ax is Wi-Fi 6, the next generation after Wi-Fi 5.",
    B: "Correct. 802.11ac is commonly marketed as Wi-Fi 5 and operates on 5 GHz. :contentReference[oaicite:3]{index=3}",
    C: "802.11g predates the Wi-Fi 4/5/6 naming.",
    D: "802.11b is an older 2.4 GHz standard."
  }
},
{
  type: "mcq",
  q: "Which Wi-Fi standard is also marketed as Wi-Fi 6?",
  choices: [
    "A. 802.11n",
    "B. 802.11a",
    "C. 802.11ax",
    "D. 802.11ac"
  ],
  correct: "C",
  a: "C. 802.11ax",
  explainByChoice: {
    A: "802.11n is earlier and sometimes called Wi-Fi 4.",
    B: "802.11a is older and not part of the Wi-Fi 4/5/6 naming.",
    C: "Correct. 802.11ax is Wi-Fi 6 and can operate on 2.4GHz and 5GHz. :contentReference[oaicite:4]{index=4}",
    D: "802.11ac is Wi-Fi 5."
  }
},
{
  type: "mcq",
  q: "Which Wi-Fi standard supports both the 2.4 GHz AND 5 GHz frequency bands?",
  choices: [
    "A. 802.11b only",
    "B. 802.11a only",
    "C. 802.11n",
    "D. 802.11ac only"
  ],
  correct: "C",
  a: "C. 802.11n",
  explainByChoice: {
    A: "802.11b operates only on the 2.4 GHz band.",
    B: "802.11a operates only on the 5 GHz band.",
    C: "Correct. 802.11n can operate on both 2.4 GHz and 5 GHz. :contentReference[oaicite:5]{index=5}",
    D: "802.11ac operates only on 5 GHz."
  }
},
{
  type: "mcq",
  q: "Which Wi-Fi standard typically has the slowest maximum throughput?",
  choices: [
    "A. 802.11b",
    "B. 802.11g",
    "C. 802.11ac",
    "D. 802.11ax"
  ],
  correct: "A",
  a: "A. 802.11b",
  explainByChoice: {
    A: "Correct. 802.11b has the lowest theoretical max (~11 Mbps). :contentReference[oaicite:6]{index=6}",
    B: "802.11g is faster (~54 Mbps).",
    C: "802.11ac can reach multiple hundreds of Mbps or more.",
    D: "802.11ax (Wi-Fi 6) can go even higher."
  }
},
{
  type: "mcq",
  q: "Which technology introduced in newer Wi-Fi standards allows antennas to send/receive multiple data streams for better performance?",
  choices: [
    "A. MIMO",
    "B. HDMI",
    "C. DSSS",
    "D. USB"
  ],
  correct: "A",
  a: "A. MIMO",
  explainByChoice: {
    A: "Correct. MIMO (Multiple-Input Multiple-Output) improves throughput by using multiple antennas. :contentReference[oaicite:7]{index=7}",
    B: "HDMI is a video/audio connector, not a Wi-Fi transmission method.",
    C: "DSSS is an older spread-spectrum technique used in some wireless standards, not the multi-antenna technology.",
    D: "USB is unrelated to Wi-Fi RF performance."
  }
},
{
  type: "mcq",
  q: "A device is connecting to a 5 GHz Wi-Fi network but suffers short range compared to 2.4 GHz. Why might this happen?",
  choices: [
    "A. Lower frequency has better penetration and range",
    "B. Higher frequency always travels farther",
    "C. The SSID is wrong",
    "D. DHCP conflict"
  ],
  correct: "A",
  a: "A. Lower frequency has better penetration and range",
  explainByChoice: {
    A: "Correct. Lower frequencies (2.4 GHz) generally penetrate obstacles better and have longer range. :contentReference[oaicite:8]{index=8}",
    B: "Higher frequency tends to have shorter range and less penetration.",
    C: "SSID mismatch doesn’t explain range characteristics.",
    D: "DHCP conflicts affect addressing, not RF propagation."
  }
},
{
  type: "mcq",
  q: "You want the fastest theoretical Wi-Fi speed on a home network. Which standard should you choose?",
  choices: [
    "A. 802.11b",
    "B. 802.11g",
    "C. 802.11ac",
    "D. 802.11ax"
  ],
  correct: "D",
  a: "D. 802.11ax",
  explainByChoice: {
    A: "802.11b is slowest of these options.",
    B: "802.11g is faster than b but slower than newer standards.",
    C: "802.11ac is fast but not as fast as the newest standard.",
    D: "Correct. 802.11ax (Wi-Fi 6) offers higher theoretical throughput and efficiency. :contentReference[oaicite:9]{index=9}"
  }
},
{
  type: "mcq",
  q: "Which Wi-Fi standard is MOST susceptible to interference from microwave ovens and Bluetooth devices in the 2.4 GHz band?",
  choices: [
    "A. 802.11b/g/n",
    "B. 802.11a/ac",
    "C. Fiber optic",
    "D. RJ-45 Ethernet"
  ],
  correct: "A",
  a: "A. 802.11b/g/n",
  explainByChoice: {
    A: "Correct. Standards that use 2.4 GHz (b/g/n) can suffer interference from other devices in that band. :contentReference[oaicite:10]{index=10}",
    B: "802.11a/ac operate in 5 GHz which is less affected by 2.4 GHz interference.",
    C: "Fiber optic uses light, not RF.",
    D: "Ethernet uses wired networking."
  }
},
{
  type: "mcq",
  q: "A laser printer consistently produces faded output across the entire page. What should you check FIRST?",
  choices: [
    "A. Fuser assembly",
    "B. Toner cartridge",
    "C. Transfer belt",
    "D. Pickup rollers"
  ],
  correct: "B",
  a: "B. Toner cartridge",
  explainByChoice: {
    A: "A failing fuser usually causes smearing or toner not bonding, not uniformly faded prints.",
    B: "Correct. Low or depleted toner is the most common cause of faded laser printer output.",
    C: "A transfer belt issue affects color alignment or missing colors, not overall fading.",
    D: "Pickup rollers affect paper feeding, not print darkness."
  }
},
{
  type: "mcq",
  q: "A printer produces vertical lines or streaks that repeat at regular intervals down the page. What component is MOST likely faulty?",
  choices: [
    "A. Pickup roller",
    "B. Drum unit",
    "C. Duplexer",
    "D. Paper tray"
  ],
  correct: "B",
  a: "B. Drum unit",
  explainByChoice: {
    A: "Pickup rollers cause paper jams or misfeeds, not repeating print defects.",
    B: "Correct. Repeating defects often match the drum’s circumference, indicating a damaged drum.",
    C: "The duplexer handles double-sided printing, not image quality.",
    D: "Paper trays do not affect image formation."
  }
},
{
  type: "mcq",
  q: "Which printer type uses heat to fuse toner onto paper?",
  choices: [
    "A. Inkjet",
    "B. Dot matrix",
    "C. Laser",
    "D. Thermal"
  ],
  correct: "C",
  a: "C. Laser",
  explainByChoice: {
    A: "Inkjet printers spray liquid ink and do not use heat to fuse toner.",
    B: "Dot matrix printers strike an ink ribbon against paper.",
    C: "Correct. Laser printers use a fuser assembly to apply heat and bond toner to paper.",
    D: "Thermal printers use heat-sensitive paper, not toner."
  }
},
{
  type: "mcq",
  q: "A color laser printer prints everything except magenta. What component should you check?",
  choices: [
    "A. Fuser",
    "B. Magenta toner cartridge",
    "C. Pickup roller",
    "D. Duplex unit"
  ],
  correct: "B",
  a: "B. Magenta toner cartridge",
  explainByChoice: {
    A: "A bad fuser affects all colors equally.",
    B: "Correct. Missing a single color typically indicates an empty or faulty toner cartridge for that color.",
    C: "Pickup rollers affect feeding, not color output.",
    D: "Duplex units affect double-sided printing only."
  }
},
{
  type: "mcq",
  q: "Which printer type is MOST commonly used for multipart forms such as carbon copies?",
  choices: [
    "A. Inkjet",
    "B. Laser",
    "C. Thermal",
    "D. Impact (dot matrix)"
  ],
  correct: "D",
  a: "D. Impact (dot matrix)",
  explainByChoice: {
    A: "Inkjet printers cannot reliably print through multiple layers.",
    B: "Laser printers do not apply impact force to paper.",
    C: "Thermal printers require special paper.",
    D: "Correct. Impact printers physically strike the paper, making them ideal for multipart forms."
  }
},
{
  type: "mcq",
  q: "A printer frequently jams when pulling paper from the tray. Which component should be replaced FIRST?",
  choices: [
    "A. Fuser",
    "B. Pickup roller",
    "C. Drum unit",
    "D. Toner cartridge"
  ],
  correct: "B",
  a: "B. Pickup roller",
  explainByChoice: {
    A: "Fuser issues affect output quality, not paper feeding.",
    B: "Correct. Worn pickup rollers commonly cause misfeeds and paper jams.",
    C: "Drum units affect image quality.",
    D: "Toner cartridges do not affect paper feeding."
  }
},
{
  type: "mcq",
  q: "Which printer component applies electrical charge to the toner so it adheres to the paper?",
  choices: [
    "A. Fuser",
    "B. Drum",
    "C. Transfer belt",
    "D. Duplexer"
  ],
  correct: "B",
  a: "B. Drum",
  explainByChoice: {
    A: "The fuser applies heat to bond toner to paper.",
    B: "Correct. The drum uses electrostatic charge to attract toner in the image pattern.",
    C: "Transfer belts move toner between color drums, not apply charge.",
    D: "Duplexers handle double-sided printing."
  }
},
{
  type: "mcq",
  q: "Which printer type is BEST suited for high-quality photo printing?",
  choices: [
    "A. Dot matrix",
    "B. Laser",
    "C. Inkjet",
    "D. Thermal"
  ],
  correct: "C",
  a: "C. Inkjet",
  explainByChoice: {
    A: "Dot matrix printers have very low resolution.",
    B: "Laser printers are optimized for speed and text, not photos.",
    C: "Correct. Inkjet printers produce high-resolution images and smooth color gradients.",
    D: "Thermal printers are limited in color and resolution."
  }
},
{
  type: "mcq",
  q: "A printer prints smudged output that can be wiped off the page. What is the MOST likely cause?",
  choices: [
    "A. Low toner",
    "B. Faulty fuser",
    "C. Dirty pickup rollers",
    "D. Incorrect paper size"
  ],
  correct: "B",
  a: "B. Faulty fuser",
  explainByChoice: {
    A: "Low toner causes faded output, not smearing.",
    B: "Correct. A failing fuser does not properly bond toner, allowing it to smear.",
    C: "Pickup rollers affect feeding, not toner bonding.",
    D: "Incorrect paper size does not cause smudging."
  }
},
{
  type: "mcq",
  q: "Which maintenance task should be performed REGULARLY to extend the life of an inkjet printer?",
  choices: [
    "A. Replace the fuser",
    "B. Clean print heads",
    "C. Replace pickup rollers weekly",
    "D. Reinstall printer drivers"
  ],
  correct: "B",
  a: "B. Clean print heads",
  explainByChoice: {
    A: "Inkjet printers do not use fusers.",
    B: "Correct. Cleaning print heads prevents clogging and improves print quality.",
    C: "Pickup rollers do not need frequent replacement.",
    D: "Drivers affect communication, not mechanical lifespan."
  }
},
{
  type: "mcq",
  q: "A smartphone battery is swollen and the screen is separating from the frame. What should you do FIRST?",
  choices: [
    "A. Continue using the device until replacement arrives",
    "B. Fully discharge the battery",
    "C. Power off the device and replace the battery safely",
    "D. Update the operating system"
  ],
  correct: "C",
  a: "C. Power off the device and replace the battery safely",
  explainByChoice: {
    A: "Swollen batteries are a fire hazard and should not continue to be used.",
    B: "Discharging a damaged lithium battery increases risk.",
    C: "Correct. Power off immediately and replace the battery following safety procedures.",
    D: "OS updates do not address physical battery hazards."
  }
},
{
  type: "mcq",
  q: "Which mobile device feature allows users to unlock their phone using fingerprints or facial recognition?",
  choices: [
    "A. NFC",
    "B. Biometrics",
    "C. GPS",
    "D. Tethering"
  ],
  correct: "B",
  a: "B. Biometrics",
  explainByChoice: {
    A: "NFC is used for short-range wireless communication, such as contactless payments.",
    B: "Correct. Biometrics use physical characteristics like fingerprints or facial features for authentication.",
    C: "GPS is used for location services.",
    D: "Tethering shares a device’s internet connection."
  }
},
{
  type: "mcq",
  q: "A user reports their phone battery drains very quickly even when not in use. What should you check FIRST?",
  choices: [
    "A. Background apps and battery usage",
    "B. Replace the charging cable",
    "C. Factory reset the device immediately",
    "D. Replace the screen"
  ],
  correct: "A",
  a: "A. Background apps and battery usage",
  explainByChoice: {
    A: "Correct. Apps running in the background are a common cause of rapid battery drain.",
    B: "A bad cable affects charging, not battery drain when idle.",
    C: "A factory reset is a last resort.",
    D: "The screen affects battery only when actively in use."
  }
},
{
  type: "mcq",
  q: "Which mobile connection type is MOST commonly used for contactless payments?",
  choices: [
    "A. Bluetooth",
    "B. NFC",
    "C. Infrared",
    "D. Cellular"
  ],
  correct: "B",
  a: "B. NFC",
  explainByChoice: {
    A: "Bluetooth is used for peripherals like headphones.",
    B: "Correct. NFC enables short-range communication for contactless payments.",
    C: "Infrared is largely obsolete on modern phones.",
    D: "Cellular is used for voice and data communication."
  }
},
{
  type: "mcq",
  q: "A mobile device connects to Wi-Fi but cannot access the internet. Other devices work fine. What should you try FIRST?",
  choices: [
    "A. Replace the access point",
    "B. Forget the Wi-Fi network and reconnect",
    "C. Replace the phone",
    "D. Disable cellular data permanently"
  ],
  correct: "B",
  a: "B. Forget the Wi-Fi network and reconnect",
  explainByChoice: {
    A: "Since other devices work, the access point is likely fine.",
    B: "Correct. Forgetting and reconnecting refreshes saved credentials and network settings.",
    C: "Replacing the device is not a first troubleshooting step.",
    D: "Cellular data does not affect Wi-Fi authentication."
  }
},
{
  type: "mcq",
  q: "Which connector is MOST commonly used on modern Android phones for charging and data transfer?",
  choices: [
    "A. Micro-USB",
    "B. USB-A",
    "C. USB-C",
    "D. Lightning"
  ],
  correct: "C",
  a: "C. USB-C",
  explainByChoice: {
    A: "Micro-USB is older and being phased out.",
    B: "USB-A is typically used on the host device, not the phone.",
    C: "Correct. USB-C is the standard for most modern Android devices.",
    D: "Lightning is proprietary to Apple devices."
  }
},
{
  type: "mcq",
  q: "Which feature allows a smartphone to share its cellular internet connection with other devices?",
  choices: [
    "A. Hotspot / tethering",
    "B. NFC",
    "C. VPN",
    "D. Biometrics"
  ],
  correct: "A",
  a: "A. Hotspot / tethering",
  explainByChoice: {
    A: "Correct. Tethering allows a phone to share its internet connection over Wi-Fi, USB, or Bluetooth.",
    B: "NFC is used for short-range data exchange.",
    C: "VPN encrypts traffic but does not share connectivity.",
    D: "Biometrics are used for authentication."
  }
},
{
  type: "mcq",
  q: "A user reports that their phone frequently overheats while charging. What is the BEST action?",
  choices: [
    "A. Ignore it if the phone still works",
    "B. Use the phone heavily while charging",
    "C. Stop charging and inspect the charger and battery",
    "D. Increase screen brightness"
  ],
  correct: "C",
  a: "C. Stop charging and inspect the charger and battery",
  explainByChoice: {
    A: "Overheating can damage the battery and pose a safety risk.",
    B: "Using the phone while charging increases heat.",
    C: "Correct. Overheating during charging can indicate a bad charger or battery.",
    D: "Higher brightness increases heat and worsens the issue."
  }
},
{
  type: "mcq",
  q: "Which mobile security feature allows administrators to remotely erase a lost or stolen device?",
  choices: [
    "A. Screen rotation",
    "B. Remote wipe",
    "C. Tethering",
    "D. Airplane mode"
  ],
  correct: "B",
  a: "B. Remote wipe",
  explainByChoice: {
    A: "Screen rotation affects display orientation only.",
    B: "Correct. Remote wipe allows data to be erased remotely to protect sensitive information.",
    C: "Tethering shares internet access.",
    D: "Airplane mode disables radios but does not erase data."
  }
},
{
  type: "mcq",
  q: "A technician needs to access a mobile device’s internal components. What is MOST important to do FIRST?",
  choices: [
    "A. Power off the device",
    "B. Enable Bluetooth",
    "C. Update the OS",
    "D. Increase screen timeout"
  ],
  correct: "A",
  a: "A. Power off the device",
  explainByChoice: {
    A: "Correct. Powering off prevents electrical damage and improves technician safety.",
    B: "Bluetooth is unrelated to device disassembly.",
    C: "OS updates should not be performed before hardware service.",
    D: "Screen timeout does not affect hardware safety."
  }
}
,
      ]   // <-- closes Core 1 cards array
  },    // <-- closes Core 1 deck
  {
    id: "a-plus-core-2",
    name: "A+ Core 2 (Starter)",
    cards: [
      {
  type: "mcq",
  q: "Which Windows feature allows users to revert system files to a previous working state?",
  choices: [
    "A. Disk Cleanup",
    "B. System Restore",
    "C. Task Manager",
    "D. BitLocker"
  ],
  correct: "B",
  a: "B. System Restore",
  explainByChoice: {
    A: "Disk Cleanup removes unnecessary files but does not roll back system changes.",
    B: "Correct. System Restore rolls back system files and settings to a restore point.",
    C: "Task Manager monitors and manages running processes.",
    D: "BitLocker encrypts storage drives."
  }
},
{
  type: "mcq",
  q: "Which Windows edition is MOST commonly used in business environments?",
  choices: [
    "A. Home",
    "B. Pro",
    "C. Education",
    "D. S Mode"
  ],
  correct: "B",
  a: "B. Pro",
  explainByChoice: {
    A: "Home lacks business features such as domain join.",
    B: "Correct. Windows Pro supports business features like BitLocker and domain join.",
    C: "Education is used primarily in academic institutions.",
    D: "S Mode is restricted to app store software."
  }
},
{
  type: "mcq",
  q: "Which file system is MOST commonly used by modern Windows systems?",
  choices: [
    "A. FAT32",
    "B. exFAT",
    "C. NTFS",
    "D. EXT4"
  ],
  correct: "C",
  a: "C. NTFS",
  explainByChoice: {
    A: "FAT32 has size and security limitations.",
    B: "exFAT is commonly used on removable media.",
    C: "Correct. NTFS supports permissions, encryption, and large files.",
    D: "EXT4 is used by Linux systems."
  }
},
{
  type: "mcq",
  q: "Which tool allows a technician to manage startup applications in Windows?",
  choices: [
    "A. Device Manager",
    "B. Task Manager",
    "C. Control Panel",
    "D. Disk Management"
  ],
  correct: "B",
  a: "B. Task Manager",
  explainByChoice: {
    A: "Device Manager manages hardware drivers.",
    B: "Correct. Task Manager includes a Startup tab for managing startup apps.",
    C: "Control Panel provides system configuration options.",
    D: "Disk Management manages storage volumes."
  }
},
{
  type: "mcq",
  q: "Which Windows utility is used to manage partitions and volumes?",
  choices: [
    "A. Disk Cleanup",
    "B. Disk Management",
    "C. Event Viewer",
    "D. Resource Monitor"
  ],
  correct: "B",
  a: "B. Disk Management",
  explainByChoice: {
    A: "Disk Cleanup removes temporary files.",
    B: "Correct. Disk Management handles partitions, volumes, and drive letters.",
    C: "Event Viewer logs system events.",
    D: "Resource Monitor tracks system performance."
  }
},
{
  type: "mcq",
  q: "Which command-line tool is used to verify and repair disk errors in Windows?",
  choices: [
    "A. sfc",
    "B. chkdsk",
    "C. ipconfig",
    "D. netstat"
  ],
  correct: "B",
  a: "B. chkdsk",
  explainByChoice: {
    A: "sfc checks system file integrity.",
    B: "Correct. chkdsk scans and repairs disk errors.",
    C: "ipconfig displays network configuration.",
    D: "netstat shows network connections."
  }
},
{
  type: "mcq",
  q: "Which Windows feature encrypts an entire drive to protect data?",
  choices: [
    "A. NTFS permissions",
    "B. BitLocker",
    "C. Firewall",
    "D. UAC"
  ],
  correct: "B",
  a: "B. BitLocker",
  explainByChoice: {
    A: "NTFS permissions control access, not encryption.",
    B: "Correct. BitLocker encrypts entire drives.",
    C: "Firewall controls network traffic.",
    D: "UAC manages privilege elevation."
  }
},
{
  type: "mcq",
  q: "Which OS feature prevents unauthorized system changes by prompting for administrator approval?",
  choices: [
    "A. Group Policy",
    "B. UAC",
    "C. Event Viewer",
    "D. Windows Defender"
  ],
  correct: "B",
  a: "B. UAC",
  explainByChoice: {
    A: "Group Policy enforces system settings.",
    B: "Correct. User Account Control prompts before elevated actions.",
    C: "Event Viewer logs events.",
    D: "Windows Defender is antivirus software."
  }
},
{
  type: "mcq",
  q: "Which operating system is MOST commonly used on servers?",
  choices: [
    "A. Windows Home",
    "B. Windows Server",
    "C. Windows S Mode",
    "D. Chrome OS"
  ],
  correct: "B",
  a: "B. Windows Server",
  explainByChoice: {
    A: "Windows Home is for personal use.",
    B: "Correct. Windows Server is designed for server workloads.",
    C: "S Mode is restricted and consumer-focused.",
    D: "Chrome OS is lightweight and cloud-focused."
  }
},
{
  type: "mcq",
  q: "Which tool provides detailed logs for diagnosing system errors?",
  choices: [
    "A. Task Manager",
    "B. Event Viewer",
    "C. Disk Cleanup",
    "D. msconfig"
  ],
  correct: "B",
  a: "B. Event Viewer",
  explainByChoice: {
    A: "Task Manager monitors processes.",
    B: "Correct. Event Viewer provides detailed system and application logs.",
    C: "Disk Cleanup removes temporary files.",
    D: "msconfig manages startup settings."
  }
},
{
  type: "mcq",
  q: "Which security principle ensures users receive only the access necessary to perform their job?",
  choices: [
    "A. Least privilege",
    "B. Multifactor authentication",
    "C. Encryption",
    "D. Auditing"
  ],
  correct: "A",
  a: "A. Least privilege",
  explainByChoice: {
    A: "Correct. Least privilege minimizes access to reduce risk.",
    B: "MFA strengthens authentication but does not limit permissions.",
    C: "Encryption protects data confidentiality.",
    D: "Auditing tracks activity."
  }
},
{
  type: "mcq",
  q: "Which authentication factor represents something you HAVE?",
  choices: [
    "A. Password",
    "B. PIN",
    "C. Smart card",
    "D. Fingerprint"
  ],
  correct: "C",
  a: "C. Smart card",
  explainByChoice: {
    A: "Passwords are something you know.",
    B: "PINs are also something you know.",
    C: "Correct. Smart cards are something you have.",
    D: "Fingerprints are something you are."
  }
},
{
  type: "mcq",
  q: "Which technology encrypts data in transit over the internet?",
  choices: [
    "A. HTTPS",
    "B. FTP",
    "C. Telnet",
    "D. HTTP"
  ],
  correct: "A",
  a: "A. HTTPS",
  explainByChoice: {
    A: "Correct. HTTPS uses TLS encryption.",
    B: "FTP transmits data in plaintext.",
    C: "Telnet is insecure.",
    D: "HTTP does not encrypt traffic."
  }
},
{
  type: "mcq",
  q: "Which type of malware disguises itself as legitimate software?",
  choices: [
    "A. Worm",
    "B. Trojan",
    "C. Ransomware",
    "D. Rootkit"
  ],
  correct: "B",
  a: "B. Trojan",
  explainByChoice: {
    A: "Worms self-propagate across networks.",
    B: "Correct. Trojans appear legitimate but contain malicious code.",
    C: "Ransomware encrypts files.",
    D: "Rootkits hide malicious activity."
  }
},
{
  type: "mcq",
  q: "Which security feature protects against unauthorized network access?",
  choices: [
    "A. Firewall",
    "B. Patch management",
    "C. Antivirus",
    "D. Encryption"
  ],
  correct: "A",
  a: "A. Firewall",
  explainByChoice: {
    A: "Correct. Firewalls filter incoming and outgoing network traffic.",
    B: "Patching fixes vulnerabilities.",
    C: "Antivirus detects malware.",
    D: "Encryption protects data."
  }
},
{
  type: "mcq",
  q: "Which attack attempts to trick users into revealing personal information?",
  choices: [
    "A. Phishing",
    "B. DDoS",
    "C. Brute force",
    "D. Spoofing"
  ],
  correct: "A",
  a: "A. Phishing",
  explainByChoice: {
    A: "Correct. Phishing uses deceptive messages to steal information.",
    B: "DDoS overwhelms systems with traffic.",
    C: "Brute force guesses credentials.",
    D: "Spoofing impersonates identities."
  }
},
{
  type: "mcq",
  q: "Which security control logs system activity for review?",
  choices: [
    "A. Encryption",
    "B. Auditing",
    "C. Authentication",
    "D. Authorization"
  ],
  correct: "B",
  a: "B. Auditing",
  explainByChoice: {
    A: "Encryption protects data confidentiality.",
    B: "Correct. Auditing records system and user activity.",
    C: "Authentication verifies identity.",
    D: "Authorization grants permissions."
  }
},
{
  type: "mcq",
  q: "Which security measure requires two or more authentication factors?",
  choices: [
    "A. Least privilege",
    "B. Single sign-on",
    "C. Multifactor authentication",
    "D. Role-based access"
  ],
  correct: "C",
  a: "C. Multifactor authentication",
  explainByChoice: {
    A: "Least privilege limits permissions.",
    B: "SSO reduces login frequency.",
    C: "Correct. MFA requires multiple authentication factors.",
    D: "RBAC assigns permissions by role."
  }
},
{
  type: "mcq",
  q: "Which tool protects systems by detecting and removing malicious software?",
  choices: [
    "A. Firewall",
    "B. Antivirus",
    "C. VPN",
    "D. IDS"
  ],
  correct: "B",
  a: "B. Antivirus",
  explainByChoice: {
    A: "Firewalls control network traffic.",
    B: "Correct. Antivirus detects and removes malware.",
    C: "VPN encrypts network traffic.",
    D: "IDS detects intrusions."
  }
},
{
  type: "mcq",
  q: "Which security concept ensures data is not altered without authorization?",
  choices: [
    "A. Confidentiality",
    "B. Availability",
    "C. Integrity",
    "D. Non-repudiation"
  ],
  correct: "C",
  a: "C. Integrity",
  explainByChoice: {
    A: "Confidentiality prevents unauthorized disclosure.",
    B: "Availability ensures access to systems.",
    C: "Correct. Integrity ensures data accuracy and trustworthiness.",
    D: "Non-repudiation prevents denial of actions."
  }
},
{
  type: "mcq",
  q: "What is the FIRST step in the CompTIA troubleshooting methodology?",
  choices: [
    "A. Establish a theory",
    "B. Identify the problem",
    "C. Implement a solution",
    "D. Verify functionality"
  ],
  correct: "B",
  a: "B. Identify the problem",
  explainByChoice: {
    A: "Theories come after identifying the problem.",
    B: "Correct. Identifying the problem is the first step.",
    C: "Solutions come later.",
    D: "Verification is near the end."
  }
},
{
  type: "mcq",
  q: "After implementing a solution, what should you do NEXT?",
  choices: [
    "A. Document findings",
    "B. Establish a theory",
    "C. Verify functionality",
    "D. Escalate the issue"
  ],
  correct: "C",
  a: "C. Verify functionality",
  explainByChoice: {
    A: "Documentation comes after verification.",
    B: "Theory comes earlier.",
    C: "Correct. Always verify full system functionality.",
    D: "Escalation is not the next step."
  }
},
{
  type: "mcq",
  q: "Which practice ensures issues and solutions are recorded for future reference?",
  choices: [
    "A. Auditing",
    "B. Documentation",
    "C. Authorization",
    "D. Encryption"
  ],
  correct: "B",
  a: "B. Documentation",
  explainByChoice: {
    A: "Auditing logs activity.",
    B: "Correct. Documentation records problems and resolutions.",
    C: "Authorization grants access.",
    D: "Encryption protects data."
  }
},
{
  type: "mcq",
  q: "Which action should be taken BEFORE replacing hardware?",
  choices: [
    "A. Power cycle the device",
    "B. Order replacement parts",
    "C. Update BIOS",
    "D. Reinstall the OS"
  ],
  correct: "A",
  a: "A. Power cycle the device",
  explainByChoice: {
    A: "Correct. Power cycling is a simple first step.",
    B: "Ordering parts comes later.",
    C: "BIOS updates are advanced steps.",
    D: "OS reinstall is a last resort."
  }
},
{
  type: "mcq",
  q: "Which step of troubleshooting involves testing possible causes?",
  choices: [
    "A. Identify the problem",
    "B. Establish a theory",
    "C. Test the theory",
    "D. Implement the solution"
  ],
  correct: "C",
  a: "C. Test the theory",
  explainByChoice: {
    A: "Identification comes first.",
    B: "Theory establishment comes before testing.",
    C: "Correct. Testing validates or rejects theories.",
    D: "Implementation comes after testing."
  }
},
{
  type: "mcq",
  q: "Which action is MOST appropriate if a problem cannot be resolved quickly?",
  choices: [
    "A. Ignore the issue",
    "B. Escalate to higher support",
    "C. Reboot repeatedly",
    "D. Replace random components"
  ],
  correct: "B",
  a: "B. Escalate to higher support",
  explainByChoice: {
    A: "Ignoring issues is improper practice.",
    B: "Correct. Escalation ensures timely resolution.",
    C: "Repeated rebooting is ineffective.",
    D: "Random replacement wastes resources."
  }
},
{
  type: "mcq",
  q: "Which practice minimizes downtime during maintenance?",
  choices: [
    "A. Performing work during peak hours",
    "B. Change management",
    "C. Skipping documentation",
    "D. Ignoring user communication"
  ],
  correct: "B",
  a: "B. Change management",
  explainByChoice: {
    A: "Peak hours increase impact.",
    B: "Correct. Change management plans maintenance to reduce disruption.",
    C: "Documentation is essential.",
    D: "Users should be informed."
  }
},
{
  type: "mcq",
  q: "What should be done after resolving a user issue?",
  choices: [
    "A. Immediately close the ticket",
    "B. Verify user satisfaction",
    "C. Delete logs",
    "D. Power off the system"
  ],
  correct: "B",
  a: "B. Verify user satisfaction",
  explainByChoice: {
    A: "Tickets should not be closed prematurely.",
    B: "Correct. Confirm the issue is fully resolved from the user’s perspective.",
    C: "Logs should be retained.",
    D: "Powering off is unnecessary."
  }
},
{
  type: "mcq",
  q: "Which concept ensures technicians follow approved procedures?",
  choices: [
    "A. Least privilege",
    "B. Change management",
    "C. MFA",
    "D. Encryption"
  ],
  correct: "B",
  a: "B. Change management",
  explainByChoice: {
    A: "Least privilege limits access.",
    B: "Correct. Change management enforces approval and tracking.",
    C: "MFA is authentication-related.",
    D: "Encryption protects data."
  }
},
{
  type: "mcq",
  q: "Why is documentation important after troubleshooting?",
  choices: [
    "A. It reduces system performance",
    "B. It prevents future issues",
    "C. It provides reference for similar problems",
    "D. It replaces user training"
  ],
  correct: "C",
  a: "C. It provides reference for similar problems",
  explainByChoice: {
    A: "Documentation does not affect performance.",
    B: "It may help prevent issues, but that’s not the primary purpose.",
    C: "Correct. Documentation helps resolve future incidents faster.",
    D: "Documentation does not replace training."
  }
}
    ]
  }
];

// ----------------------------
// Leitner scheduling config
// ----------------------------
const BOX_INTERVALS_MS = {
  1: 5 * 60 * 1000,          // 5 minutes
  2: 24 * 60 * 60 * 1000,    // 1 day
  3: 4 * 24 * 60 * 60 * 1000 // 4 days
};

const STORAGE_KEY = "itguy_a_plus_progress_v1";

// ----------------------------
// State
// ----------------------------
let deckId = DECKS[0].id;
let deck = getDeck(deckId);

let order = [];      // indices of cards, used for navigation
let cursor = 0;      // current position in "order"
let flipped = false; // card flip state
let selectedLetter = null;
let checked = false;
let wasCorrect = null;

// ----------------------------
// DOM
// ----------------------------
const deckSelect = document.getElementById("deckSelect");
const resetBtn = document.getElementById("resetBtn");

const cardEl = document.getElementById("card");
const cardInner = document.getElementById("cardInner");
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const answerEl = document.getElementById("answer");
const explainEl = document.getElementById("explain");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const checkBtn = document.getElementById("checkBtn");
const reviewBtn = document.getElementById("reviewBtn");
const masterBtn = document.getElementById("masterBtn");

const dueNowEl = document.getElementById("dueNow");
const learningEl = document.getElementById("learning");
const masteredEl = document.getElementById("mastered");
const cardMetaEl = document.getElementById("cardMeta");

// ----------------------------
// Progress model
// progress[deckId][cardIndex] = { box: 1|2|3, due: timestamp_ms }
// ----------------------------
function loadProgress(){
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}
function saveProgress(progress){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}
function ensureDeckProgress(progress, deckId, cardCount){
  if (!progress[deckId]) progress[deckId] = {};
  for (let i = 0; i < cardCount; i++){
    if (!progress[deckId][i]){
      progress[deckId][i] = { status: "unanswered" };
    }
  }
  return progress;
}

function getDeck(id){
  const d = DECKS.find(x => x.id === id);
  if (!d) throw new Error("Deck not found: " + id);
  return d;
}

// ----------------------------
// Scheduling helpers
// ----------------------------
function now(){ return Date.now(); }

function isDue(cardProg){
  return cardProg.due <= now();
}

function scheduleNext(box){
  const interval = BOX_INTERVALS_MS[box] ?? BOX_INTERVALS_MS[1];
  return now() + interval;
}

function shuffle(arr){
  for (let i = arr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ----------------------------
// Build "due order"
// ----------------------------
function buildOrder(progress){
  const dp = progress[deckId] || {};
  const unanswered = [];
  const review = [];

  for (let i = 0; i < deck.cards.length; i++){
    const st = dp[i]?.status ?? "unanswered";
    if (st === "mastered") continue;
    if (st === "review") review.push(i);
    else unanswered.push(i);
  }

  // Shuffle within groups (keeps intent, adds randomness)
  shuffle(unanswered);
  shuffle(review);

  return [...unanswered, ...review];
}

function clearChoices(){
  if (choicesEl) choicesEl.innerHTML = "";
}

function updateButtons(){
  // Check Answer is enabled only when user selected something AND we haven't checked yet
  checkBtn.disabled = !(selectedLetter && !checked);

  // After checking, user can always add to review or mastered (if correct)
  reviewBtn.disabled = !checked;
  masterBtn.disabled = !(checked && wasCorrect);
}

function renderMCQChoices(choices, correctLetter, showAnswer, revealCorrect){
  if (!choicesEl) return;
  choicesEl.innerHTML = "";

  const correct = String(correctLetter).toUpperCase();

  for (const line of choices){
    const li = document.createElement("li");
    li.textContent = line;

    const letter = line.trim().slice(0, 1).toUpperCase();
    li.dataset.letter = letter;

    // Neutral selection highlight (before checking)
    if (selectedLetter && letter === selectedLetter) {
      li.classList.add("selected");
    }

    // After checking: color ONLY the user's selected choice
    if (showAnswer && selectedLetter && letter === selectedLetter) {
      if (letter === correct) li.classList.add("correct");
      else li.classList.add("incorrect");
    }

    // Reveal the real correct answer ONLY if you want to (i.e., only when correct)
    if (showAnswer && revealCorrect && letter === correct) {
      li.classList.add("correct");
    }

    choicesEl.appendChild(li);
  }
}

// ----------------------------
// UI updates
// ----------------------------
function setFlipped(val){
  flipped = val;
  cardEl.classList.toggle("flipped", flipped);

  // When the card is flipped back to the front, we can re-enable the answer selection
  if (!flipped) {
    checkBtn.disabled = false; // Allow checking the answer again
    updateButtons();           // Update button states
  }
}

function render(progress){
  deck = getDeck(deckId);

  // Rebuild order (should exclude mastered cards in buildOrder)
  order = buildOrder(progress);

  // If everything is mastered, show a friendly end state
  if (order.length === 0) {
    questionEl.textContent = "All cards mastered 🎉";
    clearChoices();
    answerEl.textContent = "";
    explainEl.textContent = "Hit Reset to start over, or switch decks.";
    setFlipped(false);

    // Buttons / controls
    selectedLetter = null;
    checked = false;
    wasCorrect = null;
    updateButtons();

    // Meta + stats
    cardMetaEl.textContent = "";
    dueNowEl.textContent = "0";
    learningEl.textContent = "0";
    masteredEl.textContent = String(deck.cards.length);

    return;
  }

  // Keep cursor in range
  if (cursor >= order.length) cursor = 0;

  const idx = order[cursor];
  const card = deck.cards[idx];

  // Reset per-card state
  selectedLetter = null;
  checked = false;
  wasCorrect = null;

  // Front content
  questionEl.textContent = card.q;

  if (card.type === "mcq" && Array.isArray(card.choices)) {
    // 4th arg is revealCorrect; false on normal render
    renderMCQChoices(card.choices, card.correct, false, false);
  } else {
    clearChoices();
  }

  // Back content should start hidden
  answerEl.textContent = "";
  explainEl.textContent = "";

  // Always start on front when rendering a new card
  setFlipped(false);

  // Buttons reflect "must pick an answer first"
  updateButtons();

  // Meta line (no more box/due system)
  cardMetaEl.textContent = `Card ${cursor + 1} / ${order.length}`;

  // Stats (Unanswered/Review/Mastered)
  let unansweredCount = 0, reviewCount = 0, masteredCount = 0;
  for (let i = 0; i < deck.cards.length; i++){
    const st = progress[deckId][i]?.status ?? "unanswered";
    if (st === "mastered") masteredCount++;
    else if (st === "review") reviewCount++;
    else unansweredCount++;
  }

  dueNowEl.textContent = String(unansweredCount);   // label = Unanswered
  learningEl.textContent = String(reviewCount);     // label = Review
  masteredEl.textContent = String(masteredCount);
}

// ----------------------------
// Grading
// ----------------------------
function findNextCursor(progress, justReviewedIdx){
  // rebuild order based on updated due times
  order = buildOrder(progress);

  // start from the card *after* the one we just reviewed
  const startPos = Math.max(0, order.indexOf(justReviewedIdx));

  // Prefer the next DUE card
  for (let step = 1; step <= order.length; step++){
    const pos = (startPos + step) % order.length;
    const idx = order[pos];
    if (isDue(progress[deckId][idx])) return pos;
  }

  // If nothing is due, just go to the next card in the order
  return (startPos + 1) % order.length;
}

function gradeCard(grade){ // "again" | "good" | "easy"
  const progress = ensureDeckProgress(loadProgress(), deckId, deck.cards.length);
  const idx = order[cursor];
  const cp = progress[deckId][idx];

  if (grade === "again"){
    cp.box = 1;
  } else if (grade === "good"){
    cp.box = Math.min(3, cp.box + 1);
  } else if (grade === "easy"){
    cp.box = 3;
  }

  cp.due = scheduleNext(cp.box);

  saveProgress(progress);

  // Move to next card automatically (prefer next due card)
  cursor = findNextCursor(progress, idx);
  render(progress);

}

// ----------------------------
// Navigation
// ----------------------------
function nextCard(){
  const progress = ensureDeckProgress(loadProgress(), deckId, deck.cards.length);
  cursor = (cursor + 1) % order.length;
  render(progress);
}
function prevCard(){
  const progress = ensureDeckProgress(loadProgress(), deckId, deck.cards.length);
  cursor = (cursor - 1 + order.length) % order.length;
  render(progress);
}

// ----------------------------
// Init
// ----------------------------
function init(){
  // Populate deck dropdown
  deckSelect.innerHTML = "";
  for (const d of DECKS){
    const opt = document.createElement("option");
    opt.value = d.id;
    opt.textContent = d.name;
    deckSelect.appendChild(opt);
  }
  deckSelect.value = deckId;

  // Load & ensure progress
  let progress = ensureDeckProgress(loadProgress(), deckId, getDeck(deckId).cards.length);
  saveProgress(progress);

  // ----------------------------
  // Wire events
  // ----------------------------

  // Deck change
  deckSelect.addEventListener("change", () => {
    deckId = deckSelect.value;
    deck = getDeck(deckId);
    cursor = 0;

    const p = ensureDeckProgress(loadProgress(), deckId, deck.cards.length);
    saveProgress(p);
    render(p);
  });

  // Reset progress for current deck
  resetBtn.addEventListener("click", () => {
    const ok = confirm("This will reset your progress for this deck. Continue?");
    if (!ok) return;

    const progress = loadProgress();
    delete progress[deckId];
    saveProgress(progress);

    const p2 = ensureDeckProgress(loadProgress(), deckId, deck.cards.length);
    cursor = 0;
    render(p2);
  });


  // Card flip rules:
  // - Do NOT allow free flipping (prevents blank backs)
  // - Allow flip-back ONLY after a wrong answer so they can retry
  cardEl.addEventListener("click", (e) => {
    // Ignore clicks on choices/buttons inside the card area
    if (e.target.closest("#choices")) return;
    if (e.target.closest("button")) return;

    // Only allow flipping back to retry if the last checked answer was wrong
    if (flipped && checked && wasCorrect === false) {
      setFlipped(false);

      // Reset check state so they can try again
      checked = false;
      wasCorrect = null;

      // Keep selection or wipe it — you asked to wipe it:
      selectedLetter = null;

      // Re-render choices with NO grading colors
      const p = ensureDeckProgress(loadProgress(), deckId, deck.cards.length);
      const idx = order[cursor];
      const card = deck.cards[idx];

      renderMCQChoices(card.choices, card.correct, false, false);

      // Clear the back content so it never "sticks"
      answerEl.textContent = "";
      explainEl.textContent = "";

      updateButtons();
    }

    // Otherwise: do nothing (no manual flipping)
  });

  // Next/Prev browsing
  nextBtn.addEventListener("click", () => nextCard());
  prevBtn.addEventListener("click", () => prevCard());

  // Choose an answer (A/B/C/D) by clicking a choice
  choicesEl.addEventListener("click", (e) => {
	e.stopPropagation();  
	
    const li = e.target.closest("li");
    if (!li) return;

    // After checking, lock choices until the user moves on
    if (checked) return;

    const letter = li.dataset.letter;
    if (!letter) return;

    selectedLetter = letter;

    // Re-render to show selection highlight
    const p = ensureDeckProgress(loadProgress(), deckId, deck.cards.length);
    const idx = order[cursor];
    const card = deck.cards[idx];

    if (card && card.type === "mcq" && Array.isArray(card.choices)) {
      renderMCQChoices(card.choices, card.correct, false);
    }

    updateButtons();
  });

  // A) Check Answer
  checkBtn.addEventListener("click", (e) => {
    // Prevent any parent click handler from also toggling flip
    e.preventDefault();
    e.stopPropagation();

    if (!selectedLetter || checked) return;

    const progress = ensureDeckProgress(loadProgress(), deckId, deck.cards.length);
    const idx = order[cursor];
    const card = deck.cards[idx];

    checked = true;
    wasCorrect = (selectedLetter.toUpperCase() === String(card.correct).toUpperCase());

    // Only reveal the correct answer if they got it right
    if (wasCorrect) {
      answerEl.textContent = card.a || "";
    } else {
      answerEl.textContent = "";
    }

    // Explanation: prefer per-choice explanation, fallback to card.explain, fallback to a non-blank message
    const chosen = selectedLetter.toUpperCase();
    let expl =
      (card.explainByChoice && card.explainByChoice[chosen]) ||
      card.explain ||
      "";

    // If still blank, force a non-empty explanation so you never get an empty back
    if (!expl || !expl.trim()) {
      expl = wasCorrect
        ? "Correct."
        : `That choice is not correct. Flip back and try again.`;
    }

    explainEl.textContent = (wasCorrect ? "✅ " : "❌ ") + expl;

    // Color only the selected choice; do NOT reveal the correct one unless correct
  renderMCQChoices(card.choices, card.correct, true, wasCorrect);

    // Now flip (after content is definitely set)
    setFlipped(true);

    updateButtons();
  });

  // C) Add to Mastered (only allowed if checked + correct)
  masterBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!(checked && wasCorrect)) return;

    const p = ensureDeckProgress(loadProgress(), deckId, deck.cards.length);
    const idx = order[cursor];

    p[deckId][idx].status = "mastered";
    saveProgress(p);

    nextCard();
  });


  // Keyboard shortcuts (optional, simple + consistent)
  document.addEventListener("keydown", (e) => {
    if (e.target && ["INPUT","TEXTAREA","SELECT"].includes(e.target.tagName)) return;

    // Space flips (optional)
    if (e.key === " "){
      e.preventDefault();
      setFlipped(!flipped);
      return;
    }

    // N / P navigation
    if (e.key.toLowerCase() === "n") return nextCard();
    if (e.key.toLowerCase() === "p") return prevCard();

    // Enter checks answer
    if (e.key === "Enter") {
      if (!checkBtn.disabled) checkBtn.click();
      return;
    }

    // R = add to review (after check)
    if (e.key.toLowerCase() === "r") {
      if (!reviewBtn.disabled) reviewBtn.click();
      return;
    }

    // M = add to mastered (after correct)
    if (e.key.toLowerCase() === "m") {
      if (!masterBtn.disabled) masterBtn.click();
      return;
    }
  });

  // Initial render
  render(loadProgress());
}

init();
