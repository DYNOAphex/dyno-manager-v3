import React from 'react';
import { Bell } from 'lucide-react';

const Header = ({ user, onNotificationClick }) => {
  return (
    <header style={{
      padding: '16px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{
          width: 46,
          height: 46,
          background: 'var(--gold)',
          borderRadius: '14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#0A0A0A',
          fontWeight: 900,
          fontSize: '26px'
        }}>
          D
        </div>
        <div>
          <div style={{ fontSize: '13px', color: 'var(--grey)', letterSpacing: '1px' }}>DYNO</div>
          <div style={{ fontSize: '22px', fontWeight: 800, marginTop: '-4px' }}>
            Manager
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '12px', color: 'var(--grey)' }}>Bonjour</div>
          <div style={{ fontWeight: 700, fontSize: '15px' }}>{user?.pseudo || 'Manager'}</div>
        </div>

        <button 
          onClick={onNotificationClick}
          style={{
            background: 'var(--surface-light)',
            border: 'none',
            width: 42,
            height: 42,
            borderRadius: '9999px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            position: 'relative'
          }}
        >
          <Bell size={20} />
        </button>

        <img 
          src={user?.avatar || `https://i.pravatar.cc/44?u=${user?.uid}`} 
          alt="Avatar" 
          className="avatar" 
          style={{ width: 42, height: 42 }}
        />
      </div>
    </header>
  );
};

export default Header;