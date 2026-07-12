import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const CreateScrim = () => {
  const navigate = useNavigate();

    return (
        <div style={{ padding: '20px', paddingBottom: '100px' }}>
              <button 
                      onClick={() => navigate(-1)} 
                              style={{ 
                                        background: 'none', 
                                                  border: 'none', 
                                                            color: 'var(--gold)', 
                                                                      marginBottom: '24px',
                                                                                display: 'flex',
                                                                                          alignItems: 'center',
                                                                                                    gap: '8px'
                                                                                                            }}
                                                                                                                  >
                                                                                                                          <ArrowLeft size={24} /> Retour
                                                                                                                                </button>

                                                                                                                                      <h1 style={{ fontSize: '28px', marginBottom: '32px' }}>Nouveau Scrim</h1>

                                                                                                                                            <div className="glass-card" style={{ padding: '24px' }}>
                                                                                                                                                    <div style={{ marginBottom: '20px' }}>
                                                                                                                                                              <label style={{ display: 'block', marginBottom: '8px', color: 'var(--grey)' }}>Adversaire</label>
                                                                                                                                                                        <input className="input" placeholder="Nom de l'équipe adverse" />
                                                                                                                                                                                </div>

                                                                                                                                                                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                                                                                                                                                                                  <div>
                                                                                                                                                                                                              <label style={{ display: 'block', marginBottom: '8px', color: 'var(--grey)' }}>Date</label>
                                                                                                                                                                                                                          <input type="date" className="input" />
                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                              <div>
                                                                                                                                                                                                                                                          <label style={{ display: 'block', marginBottom: '8px', color: 'var(--grey)' }}>Heure</label>
                                                                                                                                                                                                                                                                      <input type="time" className="input" defaultValue="20:00" />
                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                        </div>

                                                                                                                                                                                                                                                                                                <div style={{ marginTop: '20px' }}>
                                                                                                                                                                                                                                                                                                          <label style={{ display: 'block', marginBottom: '8px', color: 'var(--grey)' }}>Arène / Map</label>
                                                                                                                                                                                                                                                                                                                    <input className="input" placeholder="Summoner's Rift" />
                                                                                                                                                                                                                                                                                                                            </div>

                                                                                                                                                                                                                                                                                                                                    <button 
                                                                                                                                                                                                                                                                                                                                              className="btn btn-primary" 
                                                                                                                                                                                                                                                                                                                                                        style={{ width: '100%', marginTop: '32px' }}
                                                                                                                                                                                                                                                                                                                                                                  onClick={() => navigate('/')}
                                                                                                                                                                                                                                                                                                                                                                          >
                                                                                                                                                                                                                                                                                                                                                                                    Créer le scrim
                                                                                                                                                                                                                                                                                                                                                                                            </button>
                                                                                                                                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                                                                                                                                                                                        };

                                                                                                                                                                                                                                                                                                                                                                                                        export default CreateScrim;