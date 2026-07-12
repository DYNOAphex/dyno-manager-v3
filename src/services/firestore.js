import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from './firebase';

export const getUpcomingScrims = async () => {
  try {
      const q = query(collection(db, 'scrims'), orderBy('date', 'asc'), limit(3));
          const snapshot = await getDocs(q);
              return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                } catch (error) {
                    return [];
                      }
                      };

                      export const getAnnouncements = async () => {
                        try {
                            const q = query(collection(db, 'announcements'), orderBy('createdAt', 'desc'), limit(3));
                                const snapshot = await getDocs(q);
                                    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                                      } catch (error) {
                                          return [];
                                            }
                                            };

                                            export const getOnlinePlayers = async () => {
                                              try {
                                                  const snapshot = await getDocs(collection(db, 'players'));
                                                      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                                                        } catch (error) {
                                                            return [];
                                                              }
                                                              };

                                                              export const getTeamStats = async () => {
                                                                return { players: 7, scrims: 24, presence: "92%", winrate: "68%" };
                                                                };