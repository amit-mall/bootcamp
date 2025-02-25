import React from "react";
import { GetServerSideProps } from "next";

type AboutProps = {
  about_us: {
    description: string;
  };
};

const About: React.FC<AboutProps> = ({ about_us }) => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">About Company</h1>
      <div className="flex flex-wrap">
        <p>{about_us.description}</p>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const protocol = context.req.headers['x-forwarded-proto'] || 'http';
  const host = context.req.headers.host;
  const siteUrl = `${protocol}://${host}`;

  try {
    const response = await fetch(`${siteUrl}/about.json`);
   

    if (!response.ok) {
      console.error("Failed to fetch data");
      return { props: { about_us: { description: "" } } };
    }

    const about_us = await response.json();
    console.log('res', about_us);
    return {
      props: { ...about_us },
    };
  } catch (error) {
    console.error(error);
    return { props: { about_us: { description: "" } } };
  }
}

export default About;
