---
id: 24
title: "DS-2CD2183G2-LI(S)(2U)"
slug: "DS-2CD2183G2-LI(S)(2U)"
subTitle: "8 MP AcuSense Hybrid Dome Camera"
category: "networkcamera"
imgCard: "/src/assets/images/networkcamera/DS-2CD2183G2-LI(S)(2U)/DS-2CD2183G2-LI(S)(2U)-1.webp"
imgAlt: "DS-2CD2183G2-LI(S)(2U)"
thumbnails: [
  "/src/assets/images/networkcamera/DS-2CD2183G2-LI(S)(2U)/DS-2CD2183G2-LI(S)(2U)-1.webp",
  "/src/assets/images/networkcamera/DS-2CD2183G2-LI(S)(2U)/DS-2CD2183G2-LI(S)(2U)-2.webp",
  "/src/assets/images/networkcamera/DS-2CD2183G2-LI(S)(2U)/DS-2CD2183G2-LI(S)(2U)-3.webp",
  "/src/assets/images/networkcamera/DS-2CD2183G2-LI(S)(2U)/DS-2CD2183G2-LI(S)(2U)-4.webp"

]
features: [
  "8 MP ultra HD imaging for precise surveillance",
  "AcuSense for accurate human and vehicle detection",
  "Smart Hybrid Light with IR/white light and 4 lighting modes",
  "Arrayed dual-microphone (-2U) for high-quality real-time audio",
  "120 dB true WDR for clear imaging in harsh lighting",
  "H.265+ compression, IP67 weatherproof, and IK10 vandal-resistant"
]
rating: 5
reviewCount: 100
specifications: {
  Camera: {
    Image_Sensor: "1/2.8\" Progressive Scan CMOS",
    Max_Resolution: "3840 × 2160",
    Min_Illumination: "Color: 0.005 Lux @ (F1.6, AGC ON), 0 Lux with light",
    Shutter_Time: "1/3 s to 1/100,000 s",
    Day_Night: "IR cut filter",
    Angle_Adjustment: "Pan: 0° to 355°, Tilt: 0° to 75°, Rotate: 0° to 355°"
  },
  Lens: {
    Lens_Type: "Fixed focal lens, 2.8 and 4 mm optional",
    Focal_Length_FOV: {
      "2.8 mm": "Horizontal FOV 108°, Vertical FOV 59°, Diagonal FOV 127°",
      "4 mm": "Horizontal FOV 88°, Vertical FOV 44°, Diagonal FOV 105°"
    },
    Lens_Mount: "M12",
    Iris_Type: "Fixed",
    Aperture: "F1.6",
    Depth_of_Field: {
      "2.8 mm": "1.7 m to ∞",
      "4 mm": "2.6 m to ∞"
    }
  },
  Video: {
    Main_Stream: {
      "50_Hz": "20 fps (3840 × 2160), 25 fps (3200 × 1800, 2688 × 1520, 1920 × 1080, 1280 × 720)",
      "60_Hz": "20 fps (3840 × 2160), 30 fps (3200 × 1800, 2688 × 1520, 1920 × 1080, 1280 × 720)"
    },
    Sub_Stream: {
      "50_Hz": "25 fps (1280 × 720, 640 × 480, 640 × 360)",
      "60_Hz": "30 fps (1280 × 720, 640 × 480, 640 × 360)"
    },
    Third_Stream: {
      "50_Hz": "10 fps (1920 × 1080, 1280 × 720, 640 × 480, 640 × 360)",
      "60_Hz": "10 fps (1920 × 1080, 1280 × 720, 640 × 480, 640 × 360)",
      Note: "Third stream is supported under certain settings"
    },
    Video_Compression: {
      Main_Stream: "H.265/H.264/H.264+/H.265+",
      Sub_Stream: "H.265/H.264/MJPEG",
      Third_Stream: "H.265/H.264"
    },
    Video_Bit_Rate: "32 Kbps to 16 Mbps",
    H264_Type: "Baseline Profile, Main Profile, High Profile",
    H265_Type: "Main Profile",
    SVC: "H.264 and H.265 encoding",
    Bit_Rate_Control: "CBR, VBR",
    ROI: "1 fixed region for main stream and sub-stream",
    Target_Cropping: "Yes"
  },
  Audio: {
    Audio_Compression: "-2U: G.711/G.722.1/G.726/MP2L2/PCM/MP3/AAC-LC",
    Audio_Bit_Rate: "-2U: 64 Kbps (G.711ulaw/G.711alaw)/16 Kbps (G.722.1)/16 Kbps (G.726)/32 to 160 Kbps (MP2L2)/8 to 320 Kbps (MP3)/16 to 64 Kbps (AAC-LC)",
    Audio_Sampling_Rate: "-2U: 8 kHz/16 kHz/32 kHz/48 kHz",
    Environment_Noise_Filtering: "-2U: Yes"
  },
  Network: {
    Protocols: "TCP/IP, ICMP, HTTP, HTTPS, FTP, DHCP, DNS, DDNS, RTP, RTSP, RTCP, NTP, UPnP, SMTP, IGMP, 802.1X, QoS, IPv4, IPv6, UDP, Bonjour, SSL/TLS, PPPoE, SNMP, WebSocket, WebSockets",
    Simultaneous_Live_View: "Up to 6 channels",
    API: "ONVIF (Profile S, Profile G), ISAPI, SDK, ISUP",
    Security: "Password protection, complicated password, HTTPS encryption, IP address filter, Security Audit Log, basic and digest authentication for HTTP/HTTPS, TLS 1.1/1.2/1.3, WSSE and digest authentication for Open Network Video Interface",
    User_Host: "Up to 32 users; 3 user levels: administrator, operator, and user",
    Client: "iVMS-4200, Hik-Connect, Hik-Central",
    Network_Storage: "NAS (NFS, SMB/CIFS), ANR, supports Hikvision memory card with encryption and health detection",
    Web_Browser: "Plug-in required live view: IE 11; Plug-in free live view: Chrome 80+, Firefox 80+, Edge 89+, Safari 13+; Local service: Chrome 80+, Firefox 80+, Edge 89+, Safari 13+"
  },
  Image: {
    Image_Parameters_Switch: "Yes",
    Day_Night_Switch: "Day, Night, Auto, Schedule",
    Image_Settings: "Rotate mode",
    WDR: "120 dB",
    SNR: "≥ 52 dB",
    Image_Enhancement: "BLC, HLC, 3D DNR",
    Privacy_Mask: "8 programmable polygon privacy masks"
  },
  Deep_Learning_Function: {
    Perimeter_Protection: "Line crossing, intrusion; Supports alarm triggering by human and vehicle detection"
  },
  General: {
    Power: "12 VDC ± 25%, 0.7 A, max. 8.4 W, Ø5.5 mm coaxial power plug, reverse polarity protection; PoE: IEEE 802.3af, Class 3, max. 10 W",
    Material: "Base: aluminum alloy, Cover: aluminum alloy",
    Dimension: "Ø121.5 mm × 97.6 mm (Ø4.78\" × 3.84\")",
    Package_Dimension: "150 mm × 150 mm × 141 mm (5.91\" × 5.91\" × 5.55\")",
    Weight: "Approx. 600 g (1.3 lb.)",
    With_Package_Weight: "Approx. 840 g (1.9 lb.)",
    Storage_Conditions: "-30 °C to 60 °C (-22 °F to 140 °F), Humidity 95% or less (non-condensing)",
    Startup_and_Operating_Conditions: "-30 °C to 60 °C (-22 °F to 140 °F), Humidity 95% or less (non-condensing)",
    Language: "33 languages including English, Russian, German, French, Portuguese, Spanish, Chinese, Japanese, etc.",
    General_Function: "Heartbeat, mirror, flash log, password reset via email, pixel counter, anti-banding"
  }
}
---