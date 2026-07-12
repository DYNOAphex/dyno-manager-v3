import React from 'react';
import BottomNav from '../components/BottomNav';
import { User, Settings, LogOut } from 'lucide-react';

const Plus = () => {
  return (
      <div style={{ paddingBottom: '90px' }}>
            <div style={{ padding: '24px 20px' }}>
                    <div className="section-title">Plus</div>

                            <div className="glass-card" style={{ padding: '8px 0' }}>
                                      <div style={{ padding: '18px 20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                                                  <User size={22} />
                                                              <div>Mon profil</div>
                                                                        </div>
                                                                                  <div style={{ padding: '18px 20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                                                                                              <Settings size={22} />
                                                                                                          <div>Paramètres</div>
                                                                                                                    </div>
                                                                                                                              <div style={{ padding: '18px 20px', display: 'flex', alignItems: 'center', gap: '16px', color: '#ff6b6b' }}>
                                                                                                                                          <LogOut size={22} />
                                                                                                                                                      <div>Se déconnecter</div>
                                                                                                                                                                </div>
                                                                                                                                                                        </div>
                                                                                                                                                                              </div>

                                                                                                                                                                                    <BottomNav />
                                                                                                                                                                                        </div>
                                                                                                                                                                                          );
                                                                                                                                                                                          };

                                                                                                                                                                                          export default Plus;