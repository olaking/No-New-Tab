# No New Tab

A Drake-themed high-discipline Safari extension builtto enforce productivity by strictly limiting browser tab clutter. 

## 🚫 The Problem
Digital hoarding often starts with "just one more tab." Before you know it, your focus is fragmented across dozens of pages. **No New Tab** stops the cycle at the source.

## 🛠 The Intervention
When you exceed your defined limit, the extension:
1. **Terminates** the offending tab immediately.
2. **Triggers** the "Drake Protocol"—a centered visual overlay on your active page to signal a breach of focus.

## 🎨 Branding & Modes
'No New Tab' name was inspired by Dj Khaled ft Drake's 'No New Friends song.

The extension uses a custom-branded interface with specific productivity tiers:

| Mode | Tab Limit | Palette |
| :--- | :--- | :--- |
| **One Dance** | 1 | Oxblood (#6E2B33) |
| **Sicko Mode** | 5 | Deep Green (#10372C) |
| **Work** | 10 | Deep Green (#10372C) |
| **Worst Behaviour** | 20 | Deep Green (#10372C) |

## 🚀 Installation

### 1. Developer Setup
Since this is an open-source Safari extension, you must enable developer mode:
* Open **Safari > Settings > Advanced**.
* Check **"Show features for web developers"**.
* In the **Develop** menu, check **"Allow Unsigned Extensions"**.

### 2. Build via Xcode
1. Clone the repository.
2. Open the project in Xcode.
3. Ensure all assets (`drake.png`, `popup.js`, etc.) have **Target Membership** checked for the extension.
4. Press `Cmd + R` to build.

## 💻 Tech Stack
* **Manifest V3** (Safari Web Extensions)
* **Asynchronous Background Logic** for real-time tab monitoring.
* **Storage API** for persistent mode selection.
* **Custom CSS Injection** for the intervention overlay.

## 📝 License
This project is open-source. Feel free to fork and customize your own.
