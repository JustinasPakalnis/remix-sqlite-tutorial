import type { MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import prisma from "prisma/prismaClient";

import { LoaderFunction } from "@remix-run/node";
import { requireUserId } from "../utils/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request);
  return null;
};

export const meta: MetaFunction = () => {
  return [{ title: "Remix" }, { name: "description", content: "Welcome!" }];
};
// export const loader = async () => {
//   const users = await prisma.user.findMany();
//   return { users };
// };
export default function Index() {
  // const { users } = useLoaderData<typeof loader>();
  // console.log(users);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        {/* <ul>
          {users.map((user) => (
            <li key={user.id}>
              <p className="items-center gap-3 self-stretch p-3 leading-normal text-blue-700 hover:underline dark:text-blue-500">
                {user.email}
              </p>
              <p className=" items-center gap-3 self-stretch p-3 leading-normal text-blue-700 hover:underline dark:text-blue-500">
                {user.createdAt.toLocaleDateString()}
              </p>
              <p className="items-center gap-3 self-stretch p-3 leading-normal text-blue-700 hover:underline dark:text-blue-500">
                {user.updatedAt.toLocaleDateString()}
              </p>
              <p className="items-center gap-3 self-stretch p-3 leading-normal text-blue-700 hover:underline dark:text-blue-500">
                {user.password}
              </p>
            </li>
          ))} */}
        {/* </ul> */}
      </div>
    </div>
  );
}
