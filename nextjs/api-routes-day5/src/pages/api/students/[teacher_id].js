export default async function handler(req, res) {
    const { teacher_id } = req.query;
  
    try {
      const response = await fetch('http://localhost:3000/school.json');
      const data = await response.json();
      const teacherId = parseInt(teacher_id);
      const studentsUnderTeacher = data.students.filter(student => student.teacher_id === teacherId);
      if (studentsUnderTeacher.length > 0) {
        res.status(200).json({ students: studentsUnderTeacher });
      } else {
        res.status(404).json({ message: 'No students found for this teacher' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to load student data' });
    }
  }
  