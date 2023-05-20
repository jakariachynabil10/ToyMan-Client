import React from "react";

const BLog = () => {
  return (
    <>
      <div className="mx-10">
        <div>
          <h1 className="text-xl font-bold">
            1.What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h1>
          <p>
            Ans : Access Token and Refresh Token are commonly used in
            authentication and authorization systems. Access Token is a
            credential that is used to access protected resources on behalf of
            an authenticated user. It is typically short-lived and includes
            information about the user's identity and permissions. A Refresh
            Token is a long-lived credential that is used to obtain a new Access
            Token without the need to re-authenticate the user. It is typically
            used when the Access Token expires or becomes invalid. Refresh
            Tokens are securely stored on the client-side. Its Work Like The
            user authenticates and receives both an Access Token and a Refresh
            Token. The Access Token is used to access protected resources as
            described earlier. When the Access Token expires, the client sends a
            request to the server using the Refresh Token. The server verifies
            the Refresh Token's validity and issues a new Access Token if it is
            valid. The new Access Token is returned to the client, which can
            then continue accessing protected resources.
          </p>
        </div>
        <div>
          <h1 className="text-xl font-bold mt-5">
            2.Compare SQL and NoSQL databases?
          </h1>
          <p>
            Ans : SQL is Structured Query Language and NoSQL is Not Only SQL.
            These are Different types of databases. SQL databases are based on a
            structured data model where data is organized into tables with
            predefined schemas, columns, and relationships. In the Other side
            NoSQL databases are schema-less or have a flexible schema, allowing
            the storage of unstructured or semi-structured data. They store data
            in various formats like key-value pairs, documents, graphs, or
            columnar structures. SQL databases enforce strong data integrity
            constraints through features like primary keys, foreign keys, and
            unique constraints. They ensure data consistency and accuracy. But
            NoSQL allow agile development and accommodate evolving data
            structures without requiring schema modifications. They are suitable
            for handling large volumes of unstructured data.
          </p>
        </div>
        <div>
          <h1 className="text-xl font-bold mt-5">
            3.What is express js? What is Nest JS?
          </h1>
          <p>
            Ans : Express js is like a web application framework for Node.js.
            Its very Popular minimalistic and flexible framework that provides a
            set of features and tools for building web applications and APIs.
            Express.js simplifies the process of handling HTTP requests,
            routing, middleware integration, and other common web development
            tasks. It follows a middleware-based architecture, allowing
            developers to add multiple middleware functions to handle various
            aspects of the request-response cycle. Express.js is known for its
            simplicity, ease of use, and extensive ecosystem of third-party
            modules and extensions. On the Other Hand NestJS is a progressive
            Node.js framework built with TypeScript. It is inspired by Angular,
            leveraging its concepts and architecture to create highly scalable
            and maintainable server-side applications. NestJS focuses on
            developer productivity, modularity, and extensibility. It provides a
            robust set of features, including dependency injection, declarative
            syntax, powerful routing system, and integrated support for
            TypeScript, making it easy to build scalable and enterprise-grade
            applications.
          </p>
        </div>
        <div>
          <h1 className="text-xl font-bold mt-5">
            4.What is MongoDB aggregate and how does it work?
          </h1>
          <p>
            Ans : MongoDB's aggregate is a powerful feature that allows for advanced data processing and analysis within the database. It provides a way to perform complex data operations, such as filtering, grouping, sorting, joining, and transforming data, all in a single query. 
            Its Work With 8 operations . 
            Exc : 
            1.$match
            2.$group
            3.$project
            4.$sort
            5.$limit 
            6.$lookup
            7.$unwind
            8.$skip
          </p>
        </div>
      </div>
    </>
  );
};

export default BLog;
