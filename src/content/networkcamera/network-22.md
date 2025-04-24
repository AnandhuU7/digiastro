---
id: 22
title: "DS-2CD2347G2H-LI(U)"
slug: "DS-2CD2347G2H-LI(U)"
subTitle: "4 MP ColorVu Hybrid Turret Camera"
category: "networkcamera"
imgCard: "/src/assets/images/networkcamera/DS-2CD2347G2H-LI(U)/DS-2CD2347G2H-LI(U)-1.webp"
imgAlt: "DS-2CD2347G2H-LI(U)"
thumbnails: [
  "/src/assets/images/networkcamera/DS-2CD2347G2H-LI(U)/DS-2CD2347G2H-LI(U)-1.webp",
  "/src/assets/images/networkcamera/DS-2CD2347G2H-LI(U)/DS-2CD2347G2H-LI(U)-2.webp",
  "/src/assets/images/networkcamera/DS-2CD2347G2H-LI(U)/DS-2CD2347G2H-LI(U)-3.webp",
  "/src/assets/images/networkcamera/DS-2CD2347G2H-LI(U)/DS-2CD2347G2H-LI(U)-4.webp",
]
features: [
  "4 MP high-quality imaging with vivid color performance",
  "Smart Hybrid Light for enhanced long-range night visibility",
  "130 dB WDR for clear imaging in backlit environments",
  "Deep learning-based human and vehicle detection",
  "Built-in microphone (-U) for real-time audio monitoring",
  "H.265+ compression and IP67-rated weatherproof design"
]
rating: 5
reviewCount: 100
specifications: {
  Camera: {
    Image_Sensor: "1/1.8\" Progressive Scan CMOS",
    Max_Resolution: "2688 × 1520",
    Min_Illumination: "Color: 0.0005 Lux @ (F1.0, AGC ON), 0 Lux with light",
    Shutter_Time: "1/3 s to 1/100,000 s",
    Day_Night: "IR cut filter",
    Angle_Adjustment: "Pan: 0° to 360°, tilt: 0° to 75°, rotate: 0° to 360°"
  },
  Lens: {
    Lens_Type: "Fixed focal lens, 2.8 and 4 mm optional",
    Focal_Length_FOV: {
      "2.8 mm": "horizontal FOV 111.1°, vertical FOV 57.6°, diagonal FOV 138.5°",
      "4 mm": "horizontal FOV 95.2°, vertical FOV 48.3°, diagonal FOV 117.4°"
    },
    Lens_Mount: "M16",
    Iris_Type: "Fixed",
    Aperture: "F1.0",
    Depth_of_Field: {
      "2.8 mm": "2.5 m to ∞",
      "4 mm": "3.1 m to ∞"
    }
  },
  Video: {
    Main_Stream: {
      "50_Hz": "25 fps (2688 × 1520, 1920 × 1080, 1280 × 720)",
      "60_Hz": "30 fps (2688 × 1520, 1920 × 1080, 1280 × 720)"
    },
    Sub_Stream: {
      "50_Hz": "25 fps (1280 × 720, 640 × 480, 640 × 360)",
      "60_Hz": "30 fps (1280 × 720, 640 × 480, 640 × 360)"
    },
    Third_Stream: {
      "50_Hz": "10 fps (1920 × 1080, 1280 × 720, 640 × 480, 640 × 360)",
      "60_Hz": "10 fps (1920 × 1080, 1280 × 720, 640 × 480, 640 × 360)",
      Note: "The third stream is supported under certain settings."
    },
    Video_Compression: {
      Main_Stream: "H.265/H.264/H.264+/H.265+",
      Sub_Stream: "H.265/H.264/MJPEG",
      Third_Stream: "H.265/H.264"
    },
    Video_Bit_Rate: "32 Kbps to 8 Mbps",
    H264_Type: "Baseline Profile, Main Profile, High Profile",
    H265_Type: "Main Profile",
    Bit_Rate_Control: "CBR, VBR",
    Scalable_Video_Coding: "H.264 and H.265 encoding",
    ROI: "1 fixed region for main stream and sub-stream"
  },
  Audio: {
    Audio_Compression: "-U: G.711/G.722.1/G.726/MP2L2/PCM/MP3/AAC-LC",
    Audio_Bit_Rate: "-U: 64 Kbps (G.711ulaw/G.711alaw)/16 Kbps (G.722.1)/16 Kbps (G.726)/16 Kbps to 64 Kbps (AAC-LC)/32 to 192 Kbps (MP2L2)/8 to 320 Kbps (MP3)",
    Audio_Sampling_Rate: "-U: 8 kHz/16 kHz/32 kHz/44.1 kHz/48 kHz",
    Environment_Noise_Filtering: "-U: Yes"
  },
  Network: {
    Protocols: "TCP/IP, ICMP, HTTP, HTTPS, FTP, DHCP, DNS, DDNS, RTP, RTSP, RTCP, NTP, UPnP, SMTP, IGMP, 802.1X, QoS, IPv4, IPv6, UDP, Bonjour, SSL/TLS, PPPoE, SNMP, WebSocket, WebSockets, SRTP, SFTP",
    Simultaneous_Live_View: "Up to 6 channels",
    API: "Open Network Video Interface (Profile S, Profile G, Profile T), ISAPI, SDK, ISUP",
    User_Host: "Up to 32 users; 3 user levels: administrator, operator, and user",
    Security: "Password protection, complicated password, HTTPS encryption, 802.1X authentication (EAP-TLS, EAP-LEAP, EAP-MD5), watermark, IP address filter, basic and digest authentication for HTTP/HTTPS, WSSE and digest authentication for Open Network Video Interface, RTP/RTSP over HTTPS, control timeout settings, security audit log, TLS 1.1/1.2/1.3, host authentication (MAC address)",
    Network_Storage: "NAS (NFS, SMB/CIFS), Auto Network Replenishment (ANR)",
    Client: "iVMS-4200, Hik-Connect, Hik-Central",
    Web_Browser: "Plug-in required live view: IE 10, IE 11; Plug-in free live view: Chrome 57.0+, Firefox 52.0+, Edge 89+; Local service: Chrome 57.0+, Firefox 52.0+, Edge 89+"
  },
  Image: {
    Image_Parameters_Switch: "Yes",
    Image_Settings: "Rotate mode, saturation, brightness, contrast, sharpness, gain, white balance, adjustable by client software or web browser",
    Day_Night_Switch: "Day, Night, Auto, Schedule",
    Image_Enhancement: "BLC, HLC, 3D DNR",
    SNR: "≥ 52 dB",
    WDR: "130 dB",
    Privacy_Mask: "4 programmable polygon privacy masks"
  },
  Deep_Learning_Function: {
    Face_Capture: "Yes",
    Perimeter_Protection: "Line crossing, intrusion, region entrance, region exiting; Support alarm triggering by specified target types (human and vehicle)"
  },
  General: {
    Power: "12 VDC ± 25%, 0.41 A, max. 5 W, Ø5.5 mm coaxial power plug, reverse polarity protection; PoE: IEEE 802.3af, Class 3, max. 6 W",
    Material: "Cover: Metal, main body: Metal",
    Dimension: "Ø138.3 mm × 115.4 mm (Ø5.4\" × 4.5\")",
    Package_Dimension: "170 mm × 170 mm × 160 mm (6.7\" × 6.7\" × 6.3\")",
    Weight: "Approx. 770 g (1.7 lb.)",
    With_Package_Weight: "Approx. 1040 g (2.3 lb.)",
    Storage_Conditions: "-30 °C to 60 °C (-22 °F to 140 °F). Humidity 95% or less (non-condensing)",
    Startup_and_Operating_Conditions: "-30 °C to 60 °C (-22 °F to 140 °F). Humidity 95% or less (non-condensing)",
    General_Function: "Heartbeat, mirror, password reset via email, pixel counter, anti-banding",
    Language: "33 languages: English, Russian, Estonian, Bulgarian, Hungarian, Greek, German, Italian, Czech, Slovak, French, Polish, Dutch, Portuguese, Spanish, Romanian, Danish, Swedish, Norwegian, Finnish, Croatian, Slovenian, Serbian, Turkish, Korean, Traditional Chinese, Thai, Vietnamese, Japanese, Latvian, Lithuanian, Portuguese (Brazil), Ukrainian"
  }
}
---