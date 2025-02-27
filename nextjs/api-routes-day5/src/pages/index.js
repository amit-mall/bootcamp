import Link from "next/link";
export default function Home() {
  return (
    <div className="p-8">
      <span className="text-[red]">make sure to run app on 3000 port only, also as per session owner ,question 5 is optional for us (FE)</span>
      <h2 className="text-xl font-bold">Question 1:</h2>
      <p>Create a json file with 5 records of teachers and 30 records of students.</p>
      <strong>Ans:</strong> file created inside public folder: "school.json" this file contain info about student and teacher. I have also added a key to map each student to their teacher.
      <h2 className="text-xl font-bold">Question 2:</h2>
      <p>Create an API endpoint to fetch the list of all the teachers.</p>
      <strong>Ans:</strong> created following api to fetch the list of all teachers:<br />
      <Link href="http://localhost:3000/api/teachers" className="text-blue-600" target="_blank">
        Fetch list of all teachers</Link>

        <h2 className="text-xl font-bold">Question 3:</h2>
        <p>Create an API endpoint to fetch the list of all the students.
        </p>
        <strong>Ans:</strong> created following api to fetch the list of all students:<br />
      <Link href="http://localhost:3000/api/students" className="text-blue-600" target="_blank">
        Fetch list of all students</Link>
        <h2 className="text-xl font-bold">Question 4:</h2>
        <p>Create an API endpoint to fetch the list of students who are under a specific teacher.
        </p>
        <strong>Ans:</strong> created following api to fetch the list of all students:<br />
      <Link href="api/students/1" className="text-blue-600" target="_blank">
        Fetch list of all students</Link><br />
        /api/students/teacher_id
    </div>
  );
}
