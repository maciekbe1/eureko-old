import { useState } from "react";
import { getCsrfToken, signIn } from "next-auth/react";
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
    await signIn("credentials", {
      username,
      password,
      redirect: false,
    })
      .then((res: any) => {
        !res.error ? router.replace("/") : setError(true);
      })
      .catch((err) => {
        console.error(err);
      });
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
        <Button type="submit" variant="primary" size="small" pill outline>
          Sign in
        </Button>
      </form>
    </>
  );
}

export async function getServerSideProps(context: any) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
