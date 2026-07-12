import React from 'react';
import { Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const MatchCard = ({ match, onView }) => {
  if (!match) {
    return (
      <div className="glass-card" style={{ 
        padding: '32px', 
        textAlign: 'center',
        border: '1px solid rgba(212, 175, 55, 0.2)'
      }}>
        <div style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>
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
        padding: '24px',
        border: '1px solid rgba(212, 175, 55, 0.25)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Badge Type */}
      <div style={{ 
        position: 'absolute',
        top: '20px',
        right: '20px',
        background: 'var(--gold)',
        color: '#0A0A0A',
        fontSize: '12px',
        fontWeight: 700,
        padding: '4px 14px',
        borderRadius: '9999px'
      }}>
        {match.type}
      </div>

      <div style={{ marginBottom: '16px' }}>
        <div style={{ fontSize: '13px', color: 'var(--grey)', marginBottom: '4px' }}>
          PROCHAIN SCRIM
        </div>
        <div style={{ fontSize: '26px', fontWeight: 800, lineHeight: 1.1 }}>
          {match.adversaire}
        </div>
        <div style={{ color: 'var(--grey)', marginTop: '4px' }}>
          {match.arene}
        </div>
      </div>

      <div style={{ 
        display: 'flex', 
        gap: '24px', 
        marginBottom: '24px',
        color: 'var(--grey)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Clock size={18} />
          <span style={{ fontWeight: 600, color: 'var(--white)' }}>{match.heure}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <MapPin size={18} />
          <span>{match.date}</span>
        </div>
      </div>

      <button 
        onClick={() => onView(match)}
        className="btn btn-primary" 
        style={{ width: '100%', padding: '16px', fontSize: '16px' }}
      >
        Voir les détails
      </button>
    </motion.div>
  );
};

export default MatchCard;