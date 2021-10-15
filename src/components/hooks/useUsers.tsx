import { useEffect, useRef, useState } from "react";
import { reqResIn } from "../../api/reqResIn";
import { ReqResIn, User as UserInterface } from "../../interfaces/reqResIn";

export const useUsers = () => {
  const [users, setUsers] = useState<UserInterface[]>([]);
  const pageRef = useRef(1);
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const resp = await reqResIn.get<ReqResIn>("/users", {
      params: {
        page: pageRef.current,
      },
    });
    if (resp.data.data.length > 0) {
      setUsers(resp.data.data);
    } else {
      pageRef.current--;
      alert("No hay más registros");
    }
  };
  const nextUsers = () => {
    pageRef.current++;
    loadUsers();
  };
  const previousUsers = () => {
    pageRef.current--;
    loadUsers();
  };
  return { users, pageRef, nextUsers, previousUsers };
};
