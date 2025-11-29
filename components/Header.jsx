'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header({ logoSrc = '/assets/images/logo.png' }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark px-3 header-glow">
      <Link className="navbar-brand d-flex align-items-center gap-2" href="/">
        <div className="d-flex align-items-center gap-2">
          <div className="position-relative" style={{ width: 36, height: 36 }}>
            <Image src={logoSrc} alt="StarWrath" fill sizes="36px" style={{ objectFit: 'contain' }} />
          </div>
          <span className="fw-bold">StarWrath</span>
        </div>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-lg-3">
          <li className="nav-item">
            <Link className="nav-link" href="#features">
              Features
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#factions">
              Factions
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" href="#">
              Account
            </a>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <Link className="dropdown-item" href="#login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="#register">
                  Register
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link className="dropdown-item" href="#settings">
                  Settings
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
}
