import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      let loveCount = await redis.get('loveCount');
      if (loveCount === null) {
        loveCount = 6;
        await redis.set('loveCount', loveCount);
      }
      let messageCount = await redis.get('messageCount');
      if (messageCount === null) {
        messageCount = 0;
        await redis.set('messageCount', messageCount);
      }
      res.status(200).json({ loveCount: Number(loveCount), messageCount: Number(messageCount) });
    } catch (error) {
      console.error('Error fetching counts:', error);
      res.status(500).json({ error: 'Failed to fetch counts' });
    }
  } else if (req.method === 'POST') {
    try {
      const { type } = req.body;
      if (type === 'love') {
        let loveCount = await redis.get('loveCount');
        if (loveCount === null) {
          loveCount = 6;
        }
        loveCount = Number(loveCount) + 1;
        await redis.set('loveCount', loveCount);
        res.status(200).json({ loveCount });
      } else if (type === 'message') {
        let messageCount = await redis.get('messageCount');
        if (messageCount === null) {
          messageCount = 0;
        }
        messageCount = Number(messageCount) + 1;
        await redis.set('messageCount', messageCount);
        res.status(200).json({ messageCount });
      } else {
        res.status(400).json({ error: 'Invalid type' });
      }
    } catch (error) {
      console.error('Error incrementing count:', error);
      res.status(500).json({ error: 'Failed to increment count' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
