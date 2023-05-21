import React from "react";
import useTitle from "../../hooks/useTitle";
import { Accordion } from "flowbite-react";

const Blog = () => {
  useTitle("Blog");
  return (
    <div>
      <div className="my-container">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              Blog Section!!!
            </h2>
          </div>
        </div>
        <Accordion className="" collapseAll={true}>
          <Accordion.Panel>
            <Accordion.Title>
              What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <span className="underline font-bold text-md">
                  Access token:
                </span>{" "}
                A refresh token allows the user to get a new access token
                without needing to log in again. Access tokens are used in
                token-based authentication to allow an application to access an
                API. The application receives an access token after a user
                successfully authenticates and authorizes access, then passes
                the access token as a credential when it calls the target API.
                The passed token informs the API that the bearer of the token
                has been authorized to access the API and perform specific
                actions specified by the Scope that was granted during
                authorization.
              </p>
              <hr /> <hr /> <hr />
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <span className="underline font-bold text-md">
                  {" "}
                  Refresh token:
                </span>{" "}
                A refresh token is a special key that enables a client for an
                API or service to retrieve new access tokens without requiring
                the user to perform a complete login. In other words, an
                application can exchange a valid refresh token for a new access
                token. In addition to the new access token, the service may
                return a new refresh token too.
              </p>
              <hr /> <hr /> <hr />
              <p className="text-gray-500 dark:text-gray-400">
                When a user logs in or authenticates with an application, both
                an access token and a refresh token are typically generated. The
                access token is a short-lived token with a limited expiration
                time. It is used to authenticate and authorize the user's
                requests to protected resources or APIs. This token is included
                in the Authorization header of API requests as a bearer token.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Compare SQL and NoSQL databases?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <span className="underline font-bold text-md">SQL:</span>{" "}
                Structured Query language (SQL) pronounced as “S-Q-L” or
                sometimes as “See-Quel” is the standard language for dealing
                with Relational Databases. A relational database defines
                relationships in the form of tables. SQL programming can be
                effectively used to insert, search, update, delete database
                records.
              </p>
              <hr /> <hr /> <hr />
              <p className="text-gray-500 dark:text-gray-400">
                <span className="underline font-bold text-md">NoSQL:</span>{" "}
                NoSQL is a non-relational DMS, that does not require a fixed
                schema, avoids joins, and is easy to scale. NoSQL database is
                used for distributed data stores with humongous data storage
                needs. NoSQL is used for Big data and real-time web apps. For
                example companies like Twitter, Facebook
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              What is express js? What is Nest JS ?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <span className="underline font-bold text-md">Express js:</span>{" "}
                Express is a node js web application framework that provides
                broad features for building web and mobile applications. It is
                used to build a single page, multipage, and hybrid web
                application.It's a layer built on the top of the Node js that
                helps manage servers and routes.
              </p>
              <hr /> <hr /> <hr />
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <span className="underline font-bold text-md">Nest js:</span>{" "}
                NestJS is a progressive Node.js framework that helps build
                server-side applications. Nest extends Node.js frameworks like
                Express or Fastify adding modular organization and a wide range
                of other libraries to take care of repetitive tasks. It’s
                open-source, uses TypeScript, and is a very versatile Node.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              What is MongoDB aggregate and how does it work?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <span className="underline font-bold text-md">
                  MongoDb Aggregate:
                </span>{" "}
                MongoDB's aggregate is a powerful framework for performing
                advanced data processing operations on MongoDB collections. It
                allows you to perform complex queries, transformations, and
                aggregations on your data. The aggregate framework processes
                data through a pipeline of stages, where each stage applies a
                specific operation to the data.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </div>
  );
};

export default Blog;
