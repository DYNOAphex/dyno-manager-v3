import React, { useState } from 'react';
import Header from '../components/Header';
import MatchCard from '../components/MatchCard';
import BottomNav from '../components/BottomNav';
import { Users, Trophy, Target, Percent } from 'lucide-react';

const Dashboard = () => {
  const [user] = useState({
    pseudo: "Zephyr",
    uid: "demo123",
    avatar: "https://i.pravatar.cc/44?u=demo123"
  });

  const nextMatch = {
    type: "Scrim",
    date: "17 Juillet",
    heure: "20:30",
    adversaire: "TITANS",
    arene: "Arène 2"
  };

  const stats = [
    { label: "Joueurs", value: 6, icon: Users },
    { label: "Présents", value: "5/6", icon: Target },
    { label: "Dernier match", value: "2-0", icon: Trophy },
    { label: "Winrate", value: "68%", icon: Percent },
  ];

  const playersOnline = [
    { pseudo: "KroxX", status: "En ligne" },
    { pseudo: "Neazy", status: "En ligne" },
    { pseudo: "ZeroX", status: "En ligne" },
    { pseudo: "Venom", status: "En ligne" },
    { pseudo: "Lyzen", status: "En ligne" },
    { pseudo: "Skyzz", status: "En ligne" },
  ];

  const announcements = [
    {
      id: 1,
      title: "Scrim contre TITANS confirmé !",
      author: "Coach",
      date: "Il y a 2h",
      description: "Rendez-vous à 20h30 pour le lobby."
    }
  ];

  return (
    <>
      <div style={{ paddingBottom: '100px', paddingTop: '20px' }}>
        <Header user={user} />

        <div style={{ padding: '0 20px' }}>
          {/* Prochain Scrim */}
          <div style={{ marginBottom: '32px' }}>
            <div className="section-title">Prochain scrim</div>
            <MatchCard match={nextMatch} onView={() => {}} />
          </div>

          {/* Statistiques */}
          <div style={{ marginBottom: '32px' }}>
            <div className="section-title">Statistiques</div>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, 1fr)', 
              gap: '12px' 
            }}>
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="stat-card">
                    <Icon size={22} color="#D4AF37" style={{ marginBottom: '8px' }} />
                    <div style={{ fontSize: '26px', fontWeight: 800 }}>{stat.value}</div>
                    <div style={{ fontSize: '13px', color: 'var(--grey)' }}>{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Joueurs connectés */}
          <div style={{ marginBottom: '32px' }}>
            <div className="section-title">Derniers joueurs connectés</div>
            <div className="glass-card" style={{ padding: '16px' }}>
              {playersOnline.map((player, index) => (
                <div key={index} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '14px',
                  padding: '10px 0',
                  borderBottom: index !== playersOnline.length - 1 ? '1px solid #252525' : 'none'
                }}>
                  <img 
                    src={`https://i.pravatar.cc/36?u=${player.pseudo}`} 
                    alt={player.pseudo}
                    className="avatar" 
                    style={{ width: 36, height: 36 }}
                  />
                  <div>
                    <div style={{ fontWeight: 600 }}>{player.pseudo}</div>
                    <div style={{ fontSize: '12px', color: 'var(--grey)' }}>{player.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Annonces */}
          <div>
            <div className="section-title">Annonces récentes</div>
            {announcements.map((ann, index) => (
              <div style={{ 
  display: 'grid', 
  gridTemplateColumns: 'repeat(2, 1fr)', 
  gap: '14px' 
}}>
  {stats.map((stat, index) => {
    const Icon = stat.icon;
    return (
      <div key={index} className="glass-card" style={{ 
        padding: '22px 18px',
        textAlign: 'center',
        border: '1px solid rgba(212, 175, 55, 0.2)'
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginBottom: '12px' 
        }}>
          <Icon size={26} color="#D4AF37" />
        </div>
        <div style={{ fontSize: '28px', fontWeight: 800, lineHeight: 1 }}>
          {stat.value}
        </div>
        <div style={{ 
          fontSize: '13px', 
          color: 'var(--grey)', 
          marginTop: '4px',
          fontWeight: 500
        }}>
          {stat.label}
        </div>
      </div>
    );
  })}
</div>
        </div>
      </div>

      <BottomNav />
    </>
  );
};

export default Dashboard;