import { SyntheticEvent, useMemo } from "react";
import { useUsers } from "../../hooks/use.users";
import { UserStructure } from "../../models/user";
import { UsersRepo } from "../../services/repository/user.api.repo";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../services/firebase/firebase.config";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
let pictureName: string = "picture.png";
let urlUserPicture: string = "";

export default function Register() {
  const repo = useMemo(() => new UsersRepo(), []);

  const { createUser } = useUsers(repo);

  const handleSubmit = async (ev: SyntheticEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const formNewUser = ev.currentTarget;
    // NO se hace con document.querySelector
    // const formNewUser = document.querySelector("form") as HTMLFormElement;

    const fileUserPicture = (formNewUser[3] as HTMLInputElement).files?.item(0);

    if (fileUserPicture) {
      pictureName = `${(formNewUser[0] as HTMLFormElement).value}.png`;

      const storageRef = ref(storage, pictureName);

      await uploadBytes(storageRef, fileUserPicture);

      urlUserPicture = await getDownloadURL(storageRef);

      pictureName = "";
    }

    const newUser: Partial<UserStructure> = {
      userName: (formNewUser[0] as HTMLFormElement).value,
      email: (formNewUser[1] as HTMLFormElement).value,
      password: (formNewUser[2] as HTMLFormElement).value,
      picture: urlUserPicture,
    };

    createUser(newUser);

    urlUserPicture = "";
    formNewUser.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input type="text" name="userName" required />
      </label>

      <label>
        Email
        <input type="email" name="email" required />
      </label>

      <label>
        Password
        <input type="password" name="password" required />
      </label>

      <label>
        Picture
        <input type="file" name="picture" />
      </label>

      <button type="submit">Register</button>
    </form>
  );
}
