import mongoose from 'mongoose';
export const countConnections = () => {
  const count = mongoose.connections.length;
  console.log(`Number of connections: ${count}`);
};
