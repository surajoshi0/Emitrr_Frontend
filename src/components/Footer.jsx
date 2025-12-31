export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
       Built & Developed by <strong>Suraj Joshi</strong> | Custom Workflow Builder
      </p>

      <div className="footer-icons">
        <a
          href="https://github.com/surajoshi0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          {/* GitHub Icon */}
          <svg viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.11 3.29 9.44 7.86 10.97.58.11.79-.25.79-.56v-2.17c-3.2.7-3.88-1.55-3.88-1.55-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.72-1.55-2.56-.29-5.26-1.29-5.26-5.74 0-1.27.46-2.31 1.2-3.12-.12-.3-.52-1.52.12-3.17 0 0 .98-.31 3.2 1.19a11.1 11.1 0 0 1 5.83 0c2.22-1.5 3.2-1.19 3.2-1.19.64 1.65.24 2.87.12 3.17.75.81 1.2 1.85 1.2 3.12 0 4.46-2.7 5.44-5.28 5.73.41.36.77 1.07.77 2.16v3.2c0 .31.21.68.8.56a11.53 11.53 0 0 0 7.86-10.97C23.5 5.74 18.27.5 12 .5z"
            />
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/in/suraj-joshii"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          {/* LinkedIn Icon */}
          <svg viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M20.45 20.45h-3.55v-5.4c0-1.29-.03-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85v5.5H9.48V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.42v6.32zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z"
            />
          </svg>
        </a>
      </div>
    </footer>
  );
}
