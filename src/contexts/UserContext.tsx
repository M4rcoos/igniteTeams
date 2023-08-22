// contexts/UserContext.jsx
import React, { ReactNode, createContext, useContext, useState } from "react";
import { shuffle } from "lodash";

interface User {
  id: string;
  name: string;
}

interface UserContextType {
  users: User[];
  addUser: (name: string) => void;
  teams: string[][];
  generateTeams: (teamSize: string) => void;
}

type UserContexProps = {
  children: ReactNode;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: UserContexProps) => {
  const [users, setUsers] = useState<User[]>([]);
  const [teams, setTeams] = useState<string[][]>([]);

  const addUser = (name: string) => {
    const newUser: User = { id: String(users.length + 1), name };
    setUsers([...users, newUser]);
  };
  console.log("Todos os usuarios>>>", users);
  const generateTeams = (teamSize: string) => {
    const parsedTeamSize = parseInt(teamSize, 10);
    if (parsedTeamSize <= 0) {
      return;
    }

    const shuffledUsers = shuffle(users);
    const teamCount = Math.floor(shuffledUsers.length / parsedTeamSize);
    const remainingUsers = shuffledUsers.length % parsedTeamSize;

    const generatedTeams: string[][] = [];
    let currentIndex = 0;

    for (let i = 0; i < teamCount; i++) {
      const team: string[] = [];
      for (let j = 0; j < parsedTeamSize; j++) {
        team.push(shuffledUsers[currentIndex]?.name || "");
        currentIndex++;
      }
      generatedTeams.push(team);
    }

    if (remainingUsers > 0) {
      const reserveTeam: string[] = [];
      for (let i = 0; i < remainingUsers; i++) {
        reserveTeam.push(shuffledUsers[currentIndex]?.name || "");
        currentIndex++;
      }
      generatedTeams.push(reserveTeam);
    }

    setTeams(generatedTeams);
  };

  return (
    <UserContext.Provider value={{ users, addUser, teams, generateTeams }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
