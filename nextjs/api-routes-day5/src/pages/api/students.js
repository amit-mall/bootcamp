export default async function handler(req, res) {
    try {
      const response = await fetch('http://localhost:3000/school.json');
      const data = await response.json();
      
      res.status(200).json({ students: data.students });
    } catch (error) {
      res.status(500).json({ error: 'Failed to load student data' });
    }
  }
  