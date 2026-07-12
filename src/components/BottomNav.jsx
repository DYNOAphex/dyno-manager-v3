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
                gap: '4px',
                background: 'none',
                border: 'none',
                color: active ? 'var(--gold)' : 'var(--grey)',
                fontSize: '11px',
                fontWeight: active ? 600 : 500,
                padding: '8px 12px',
                cursor: 'pointer'
              }}
            >
              <Icon size={22} />
              <span>{item.label}</span>
            </button>
          );
        })}

        {/* Floating Action Button */}
        <button 
          onClick={() => navigate('/create-scrim')}
          className="fab"
        >
          <span style={{ fontSize: '28px', lineHeight: 0 }}>+</span>
        </button>
      </div>
    </nav>
  );
};

export default BottomNav;