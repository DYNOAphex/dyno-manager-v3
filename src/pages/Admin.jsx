import React from 'react';
import BottomNav from '../components/BottomNav';

const Admin = () => {
  return (
      <div style={{ paddingBottom: '90px' }}>
            <div style={{ padding: '24px 20px' }}>
                    <div className="section-title">Administration</div>

                            <div className="glass-card" style={{ padding: '24px' }}>
                                      <div style={{ marginBottom: '24px' }}>
                                                  <div style={{ fontWeight: 700, marginBottom: '8px' }}>Gestion de l'équipe</div>
                                                              <div style={{ color: 'var(--grey)', fontSize: '14px' }}>
                                                                            Accès réservé aux Coachs et Admins
                                                                                        </div>
                                                                                                  </div>

                                                                                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                                                                                                        <button className="btn btn-secondary" style={{ justifyContent: 'flex-start' }}>
                                                                                                                                      Gérer les joueurs
                                                                                                                                                  </button>
                                                                                                                                                              <button className="btn btn-secondary" style={{ justifyContent: 'flex-start' }}>
                                                                                                                                                                            Créer une annonce
                                                                                                                                                                                        </button>
                                                                                                                                                                                                    <button className="btn btn-secondary" style={{ justifyContent: 'flex-start' }}>
                                                                                                                                                                                                                  Historique des scrims
                                                                                                                                                                                                                              </button>
                                                                                                                                                                                                                                          <button className="btn btn-secondary" style={{ justifyContent: 'flex-start' }}>
                                                                                                                                                                                                                                                        Paramètres de l'équipe
                                                                                                                                                                                                                                                                    </button>
                                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                            </div>

                                                                                                                                                                                                                                                                                                  <BottomNav />
                                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                                                                                        };

                                                                                                                                                                                                                                                                                                        export default Admin;