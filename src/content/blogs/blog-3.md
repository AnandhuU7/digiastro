---
id: 3
title: "How to Reset Password on SADP Tool: A Step-by-Step Guide"
description: |
  ## Introduction
  
  Hikvision devices require a password reset in certain scenarios, such as forgotten credentials or security updates. The SADP (Search Active Device Protocol) tool offers multiple ways to reset the password efficiently. This guide provides a step-by-step process to help you reset your Hikvision device password using SADP.

  ## Prerequisites
  
  1. Ensure that your computer and the Hikvision device are on the same subnet.
  2. Download and install the latest version of the SADP tool from the [official Hikvision website](https://www.hikvision.com/en/support/tools/destop-tools/sadp-for-windows/).

  ## Steps to Reset Password

  ### Launch SADP Tool

  1. Open the SADP tool on your computer to search for connected Hikvision devices. Once the tool detects your device, select it and click on Forget Password.
  
  2. Depending on your device, one of three pop-ups will appear. Follow the corresponding method based on the prompt displayed.

  ## Reset Methods

  ### Method 1: Security Code
  
  If the pop-up asks for a security code, follow these steps:
  
  1. Copy the Start Time and Device Serial Number.
  2. Send these details to Hikvision's technical support team.
  3. The support team will provide security codes.
  4. Restart the device and choose the appropriate security code according to the device's current time.
  5. Enter the code and click **Confirm** to reset the password.

  ### Method 2: XML File
  
  If the pop-up asks for an XML file, follow these steps:
  
  1. Click on the Export button to save the XML file.
  2. Send the XML file to Hikvision's technical support team.
  3. The support team will send back an encrypted file.
  4. Select the encrypted file, enter your new password, and confirm.
  5. Click **Confirm** to reset the password.

  > **Note:** The encrypted file is valid for 48 hours.

  ### Method 3: QR Code
  
  If the pop-up asks for a QR code, follow these steps:
  
  1. Export the XML file or take a screenshot of the QR code.
  2. If using an XML file, refer to Method 2.
  3. If using a QR code, send the screenshot to Hikvision's technical support team.
  4. The support team will send back a key consisting of numbers and letters (8 bytes).
  5. Enter the key, type in the new password, and confirm.
  6. Click **Confirm** to reset the password.

  ## Additional Information
  
  - If resetting the password for an **NVR and connected cameras simultaneously**, select the **Reset Network Cameras' Passwords** option.
  - Hikvision's technical support team is available to assist with any issues during the reset process.

  ## Conclusion
  
  Using the SADP tool, you can reset your Hikvision device's password in three different ways: via security code, XML file, or QR code. By following these methods, you can restore access to your device securely and efficiently.

  For more information, visit [Hikvision's official support page](https://www.hikvision.com/en/support/tools/destop-tools/sadp-for-windows/).

cardImage: "/src/assets/images/image01.webp"
publishDate: "2025-03-25"
author: "Shajid"
readingTime: 10
intro: "Hikvision devices may require a password reset due to forgotten credentials or security updates, and the SADP (Search Active Device Protocol) tool offers an efficient way to do this. This guide provides a step-by-step process to help you reset your Hikvision device password using SADP."
---