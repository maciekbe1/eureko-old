// import styles from "../styles/Home.module.css";
import { signIn, signOut, getSession } from "next-auth/react";

// import { fetcher } from "../src/util/fetcher";

export default function Home({ session }: any) {
  if (session) {
    return (
      <>
        Signed in as {session?.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
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
