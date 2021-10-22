import { getSession } from "next-auth/react";

export default function Dashboard({ session }: any) {
  console.log(session);
  return <div>dashboard</div>;
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
Dashboard.layout = "IN";
