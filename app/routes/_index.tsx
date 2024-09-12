import type { MetaFunction } from "@remix-run/node";
import BookSeller from "./BookSeller";

export const meta: MetaFunction = () => {
  return [
    { title: "Bookonline" },
    { name: "description", content: "Welcome to Bookonline" },
  ];
};

export default function Index() {
  return (
   <>
   <BookSeller />
   </>
  );
}
