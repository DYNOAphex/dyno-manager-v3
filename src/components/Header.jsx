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
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: 42,
            height: 42,
            background: 'var(--gold)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#090909',
            fontWeight: 800,
            fontSize: '22px'
          }}>
            D
          </div>
          <div>
            <div style={{ fontSize: '15px', color: 'var(--grey)' }}>DYNO</div>
            <div style={{ fontSize: '21px', fontWeight: 700, letterSpacing: '-0.5px' }}>
              Manager
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '13px', color: 'var(--grey)' }}>Bonjour</div>
          <div style={{ fontWeight: 600 }}>{user?.pseudo || 'Manager'}</div>
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
        />
      </div>
    </header>
  );
};

export default Header;