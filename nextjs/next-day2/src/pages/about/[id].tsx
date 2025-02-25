import React from "react";
import { GetServerSideProps } from "next";

interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
  email: string;
  phone: string;
}

interface EmployeeDetailProps {
  employee: Employee | null;
}

const EmployeeDetail: React.FC<EmployeeDetailProps> = ({ employee }) => {
  if (!employee) {
    return <div className="text-center text-xl mt-10">Employee not found!</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Name: {employee.name}</h1>
      <div className="mb-4"><strong>Position:</strong> {employee.position}</div>
      <p className="text-gray-700 mb-6"><strong>Department:</strong> {employee.department}</p>
      <p className="text-gray-700 mb-6"><strong>Email:</strong> {employee.email}</p>
      <p className="text-gray-700 mb-6"><strong>Phone:</strong> {employee.phone}</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<EmployeeDetailProps> = async (context) => {
  const { id } = context.params!;
  const protocol = context.req.headers['x-forwarded-proto'] || 'http';
  const host = context.req.headers.host;
  const siteUrl = `${protocol}://${host}`;

  try {
    const response = await fetch(`${siteUrl}/about.json`);
    if (!response.ok) throw new Error("Failed to fetch");

    const data = await response.json();
    const employees: Employee[] = data.employees;
    const employee = employees.find((p) => p.id === parseInt(id as string));

    return {
      props: { employee: employee || null },
    };
  } catch (error) {
    console.error(error);
    return { props: { employee: null } };
  }
};

export default EmployeeDetail;
