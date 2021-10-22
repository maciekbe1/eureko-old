import { getSession } from "next-auth/react";

export default function Patients() {
  return <div>do strony pacjentow moze dostac sie tylko lekarz</div>;
}
export async function getServerSideProps(context: any) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permament: false,
      },
    };
  }
  return { props: { session } };
}
Patients.layout = "IN";
