import React from 'react';
import { Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const MatchCard = ({ match, onView }) => {
  if (!match) {
    return (
      <div className="glass-card" style={{ 
        padding: '36px', 
        textAlign: 'center',
        border: '1px solid rgba(212, 175, 55, 0.25)'
      }}>
        <div style={{ fontSize: '19px', fontWeight: 700, marginBottom: '8px' }}>
          Aucun scrim prévu
        </div>
        <div style={{ color: 'var(--grey)' }}>Créez votre prochain match</div>
      </div>
    );
  }

  return (
    <motion.div 
      whileHover={{ scale: 1.01 }}
      className="glass-card" 
      style={{ 
        padding: '26px 24px',
        border: '1px solid rgba(212, 175, 55, 0.3)',
        position: 'relative'
      }}
    >
      {/* Badge */}
      <div style={{
        position: 'absolute',
        top: '22px',
        right: '22px',
        background: 'var(--gold)',
        color: '#0A0A0A',
        fontSize: '12px',
        fontWeight: 800,
        padding: '5px 16px',
        borderRadius: '9999px'
      }}>
        {match.type}
      </div>

      <div style={{ marginBottom: '20px' }}>
        <div style={{ 
          fontSize: '13px', 
          color: 'var(--grey)', 
          marginBottom: '6px',
          letterSpacing: '0.5px'
        }}>
          PROCHAIN SCRIM
        </div>
        <div style={{ 
          fontSize: '28px', 
          fontWeight: 800, 
          lineHeight: 1.1 
        }}>
          {match.adversaire}
        </div>
        <div style={{ 
          color: 'var(--grey)', 
          marginTop: '6px',
          fontSize: '15px'
        }}>
          {match.arene}
        </div>
      </div>

      <div style={{ 
        display: 'flex', 
        gap: '28px', 
        marginBottom: '28px',
        color: 'var(--grey)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
          <Clock size={19} />
          <span style={{ fontWeight: 700, color: 'var(--white)', fontSize: '15px' }}>
            {match.heure}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
          <MapPin size={19} />
          <span style={{ fontSize: '15px' }}>{match.date}</span>
        </div>
      </div>

      <button 
        onClick={() => onView(match)}
        className="btn btn-primary" 
        style={{ 
          width: '100%', 
          padding: '17px', 
          fontSize: '16px',
          fontWeight: 700
        }}
      >
        Voir les détails
      </button>
    </motion.div>
  );
};

export default MatchCard;