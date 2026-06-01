// favicon
const svg = `
            <svg class="badgeFavicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <defs>

                    <!-- Gold Metall Verlauf -->
                    <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stop-color="#FFF4C2" />
                        <stop offset="35%" stop-color="#F7D35A" />
                        <stop offset="70%" stop-color="#D4A017" />
                        <stop offset="100%" stop-color="#9C6B00" />
                    </linearGradient>

                    <!-- Highlight -->
                    <radialGradient id="shine" cx="30%" cy="25%" r="70%">
                        <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.55" />
                        <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0" />
                    </radialGradient>

                    <!-- Innerer Schatten -->
                    <radialGradient id="innerShade" cx="50%" cy="60%" r="75%">
                        <stop offset="0%" stop-color="#000" stop-opacity="0" />
                        <stop offset="100%" stop-color="#000" stop-opacity="0.35" />
                    </radialGradient>

                    <!-- Kantenverdunklung -->
                    <linearGradient id="edgeDark" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="#000" stop-opacity="0.15" />
                        <stop offset="100%" stop-color="#000" stop-opacity="0.35" />
                    </linearGradient>

                </defs>

                <!-- Außen-Badge -->
                <rect x="1" y="1" width="14" height="14" rx="3.5" fill="url(#gold)" />

                <!-- Innerer Schatten -->
                <rect x="1" y="1" width="14" height="14" rx="3.5" fill="url(#innerShade)" />

                <!-- Glanz -->
                <rect x="1" y="1" width="14" height="14" rx="3.5" fill="url(#shine)" />

                <!-- Untere Tiefe -->
                <rect x="1" y="1" width="14" height="14" rx="3.5" fill="url(#edgeDark)" />

                <!-- Innenrahmen -->
                <rect x="2.2" y="2.2" width="11.6" height="11.6" rx="2.8" fill="none" stroke="#FFF6D0"
                    stroke-width="0.35" opacity="0.9" />

                <!-- Monogramm -->
                <g transform="skewX(-6) translate(0.2,0)">

                    <!-- Schatten -->
                    <g fill="#000" opacity="0.35" transform="translate(0.3,0.4)">
                        <path
                            d="M4.3 12 L6.2 4.8 L8.1 12 L7.3 12 L6.9 10.6 H5.7 L5.3 12 Z M6.1 9.4 H6.7 L6.4 8 Z" />
                        <path
                            d="M9.6 4.8 V12 H10.6 V9.8 L12.2 12 H13.2 L11.3 9.2 L13.1 4.8 H12.1 L10.6 7.6 V4.8 Z" />
                    </g>

                    <!-- Hauptschrift -->
                    <g fill="#111" stroke="#FFFFFF" stroke-width="0.45" paint-order="stroke"
                        stroke-linejoin="round">
                        <path
                            d="M4.3 12 L6.2 4.8 L8.1 12 L7.3 12 L6.9 10.6 H5.7 L5.3 12 Z M6.1 9.4 H6.7 L6.4 8 Z" />
                        <path
                            d="M9.6 4.8 V12 H10.6 V9.8 L12.2 12 H13.2 L11.3 9.2 L13.1 4.8 H12.1 L10.6 7.6 V4.8 Z" />
                    </g>

                </g>
            </svg>
        `;

const url = "data:image/svg+xml," + encodeURIComponent(svg);
document.querySelector("link[rel='icon']").href = url;

