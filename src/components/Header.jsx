import React from 'react';
import { Bell } from 'lucide-react';

const Header = ({ user, onNotificationClick }) => {
  return (
    <header style={{
      padding: '20px 20px 12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div style={{
          width: 50,
          height: 50,
          background: 'var(--gold)',
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#0A0A0A',
          fontWeight: 900,
          fontSize: '28px',
          boxShadow: '0 4px 12px rgba(212, 175, 55, 0.4)'
        }}>
          D
        </div>
        <div>
          <div style={{ 
            fontSize: '12px', 
            color: 'var(--grey)', 
            letterSpacing: '2px',
            fontWeight: 600
          }}>
            DYNO
          </div>
          <div style={{ 
            fontSize: '24px', 
            fontWeight: 800, 
            marginTop: '-6px',
            letterSpacing: '-0.5px'
          }}>
            Manager
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '12px', color: 'var(--grey)' }}>Bonjour</div>
          <div style={{ fontWeight: 700, fontSize: '16px' }}>{user?.pseudo || 'Manager'}</div>
        </div>

        <button 
          onClick={onNotificationClick}
          style={{
            background: 'var(--surface-light)',
            border: 'none',
            width: 44,
            height: 44,
            borderRadius: '9999px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <Bell size={20} />
        </button>

        <img 
          src={user?.avatar || `https://i.pravatar.cc/44?u=${user?.uid}`} 
          alt="Avatar" 
          className="avatar" 
          style={{ width: 44, height: 44, border: '2px solid var(--gold)' }}
        />
      </div>
    </header>
  );
};

export default Header;