import styles from "../styles/Home.module.css";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Typography from "@/components/Typography";

// import { fetcher } from "../src/util/fetcher";

export default function Home() {
  // const create = () => {
  //   const body = {
  //     firstName: "Maciej",
  //     lastName: "Bednarczyk",
  //     role: "ADMIN",
  //     email: "test@test.pl",
  //     avatar: "https://via.placeholder.com/600/24f355",
  //   };
  //   fetcher("/api/create", { user: body });
  // };
  // const getAllUsers = async () => {
  //   const results = await fetcher("/api/getAllUsers");
  //   console.log(results);
  // };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <div className={styles.container}>
      <Typography variant="label" htmlFor="name-field">
        Witamy na eureko
      </Typography>
      <Button size="large" variant="danger">
        hello
      </Button>
      <div className="flex">
        <Input
          placeholder="First Name"
          type="text"
          name="name"
          onChange={onChange}
          minLength={4}
          maxLength={8}
          size={10}
        />
        <Input
          placeholder="*************"
          type="password"
          name="password"
          onChange={onChange}
        />
      </div>
      <Input
        placeholder="@"
        error
        type="email"
        name="email"
        onChange={onChange}
      />
      {/* <button onClick={create}>Dodaj uzytkownika</button> */}
      {/* <button onClick={getAllUsers}>Pobierz Użytkownika</button> */}
    </div>
  );
}
