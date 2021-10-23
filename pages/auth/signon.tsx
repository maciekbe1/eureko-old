import { useState } from "react";
import { getCsrfToken, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import Input from "@/components/input";
import Button from "@/components/button";

export default function SignIn({ csrfToken }: any) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // signOn function
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <label>
          Username
          <Input
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            error={error}
          />
        </label>
        <label>
          Password
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            error={error}
          />
        </label>
        <Button type="submit" variant="primary" size="small" outline>
          Zarejestruj
        </Button>
      </form>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getSession({ req: context.req });

  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
        permament: false,
      },
    };
  }
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}

SignIn.layout = "OUT";
