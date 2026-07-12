
import React from 'react';
import { Home, Calendar, Users, User } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Accueil', path: '/' },
    { icon: Calendar, label: 'Calendrier', path: '/calendrier' },
    { icon: Users, label: 'Roster', path: '/roster' },
    { icon: User, label: 'Plus', path: '/plus' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bottom-nav">
      <div className="bottom-nav-inner">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          
          return (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '5px',
                background: 'none',
                border: 'none',
                color: active ? 'var(--gold)' : 'var(--grey)',
                fontSize: '11px',
                fontWeight: active ? 700 : 500,
                padding: '8px 12px',
                cursor: 'pointer'
              }}
            >
              <Icon size={23} strokeWidth={active ? 2.5 : 2} />
              <span>{item.label}</span>
            </button>
          );
        })}

        {/* Floating Action Button */}
        <button 
          onClick={() => navigate('/create-scrim')}
          className="fab"
          style={{
            width: '58px',
            height: '58px',
            boxShadow: '0 6px 24px rgba(212, 175, 55, 0.5)'
          }}
        >
          <span style={{ fontSize: '30px', lineHeight: 0, fontWeight: 300 }}>+</span>
        </button>
      </div>
    </nav>
  );
};

export default BottomNav;