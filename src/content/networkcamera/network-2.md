---
id: 2
title: "DS-2CD2383G2-LI(2U)"
subTitle: "8 MP AcuSense Smart Hybrid Light Turret Camera"
category: "Network Camera"
imgCard: "/src/assets/images/networkcamera/DS-2CD2383G2-LI(2U)/DS-2CD2383G2-LI(2U)-1.png"
imgAlt: "DS-2CD2383G2-LI(2U)"
thumbnails: [
  "/src/assets/images/networkcamera/DS-2CD2383G2-LI(2U)/DS-2CD2383G2-LI(2U)-1.png",
]
features: [
  "8 MP high-quality imaging for clear and detailed surveillance",
  "AcuSense technology for human and vehicle classification using deep learning",
  "Smart Hybrid Light with IR and white lights, offering 4 lighting modes",
  "Built-in dual microphones for real-time, high-quality audio",
  "120 dB true WDR for clear imaging in strong backlight conditions",
  "Efficient H.265+ compression for optimized storage",
  "IP67 water and dust resistance for reliable outdoor use",
]
specifications: {
  Camera: {
    Image_Sensor: "1/2.8\" Progressive Scan CMOS",
    Max_Resolution: "3840 × 2160",
    Min_Illumination: "Color: 0.005 Lux @ (F1.6, AGC ON), 0 Lux with light",
    Shutter_Time: "1/3 s to 1/100,000 s",
    Day_Night: "IR cut filter",
    Angle_Adjustment: "Pan: 0° to 360°, Tilt: 0° to 75°, Rotate: 0° to 360°"
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
      Note: "Third stream is supported under certain settings."
    },
    Video_Compression: {
      Main_Stream: "H.265/H.264/H.264+/H.265+",
      Sub_Stream: "H.265/H.264/MJPEG",
      Third_Stream: "H.265/H.264",
      Note: "Third stream is supported under certain settings."
    },
    Video_Bit_Rate: "32 Kbps to 16 Mbps",
    H264_Type: "Baseline Profile, Main Profile, High Profile",
    H265_Type: "Main Profile",
    Scalable_Video_Coding: "H.264 and H.265 encoding",
    Bit_Rate_Control: "CBR, VBR",
    Region_of_Interest: "1 fixed region for main stream and sub-stream",
    Target_Cropping: "Yes"
  },
  Audio: {
    Audio_Compression: "-2U: G.711/G.722.1/G.726/MP2L2/PCM/MP3/AAC-LC",
    Audio_Bit_Rate: "-2U: 64 Kbps (G.711ulaw/G.711alaw)/16 Kbps (G.722.1)/16 Kbps (G.726)/32 to 160 Kbps (MP2L2)/8 to 320 Kbps (MP3)/16 to 64 Kbps (AAC-LC)",
    Audio_Sampling_Rate: "-2U: 8 kHz/16 kHz/32 kHz/48 kHz",
    Environment_Noise_Filtering: "-2U: Yes"
  }
}
---