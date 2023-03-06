import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../core/store/store";
import { UsersRepo } from "../services/repository/user.api.repo";
import * as ac from "../reducer/users.actions.creator";

export function useUsers(repo: UsersRepo) {
  const users = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const readAllUsers = async () => {
      try {
        const token = "test";
        const infoUsers = await repo.readAll(token);
        dispatch(ac.readAllCreator(infoUsers.results));
      } catch (error) {
        console.log((error as Error).message);
      }
    };
  });
}
