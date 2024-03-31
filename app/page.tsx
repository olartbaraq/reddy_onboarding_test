"use client";

import React from "react";
import { Puzzle } from "lucide-react";
import useBoard from "@/hooks/useBoard";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const page = () => {
  const { data, isLoading, isSuccess, refetch } = useBoard();

  return (
    <div className="w-full flex flex-row items-center">
      <div className="w-1/4 h-screen p-5 flex flex-col space-y-4 bg-black">
        <h2 className="text-xl text-white leading-relaxed text-center">
          ONBOARDING
          <span className="text-green-500 text-xl">TEST</span>
        </h2>

        <div className="flex flex-row space-x-1 items-center self-start">
          <Puzzle size={15} color="#fff" />
          <h4 className="text-slate-200 text-lg">Training</h4>
        </div>
      </div>

      <div className="w-full  h-screen p-5 bg-slate-200">
        {isSuccess ? (
          <Table>
            <TableCaption>Recent Leaderboard</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Username</TableHead>
                <TableHead className="text-center">Score</TableHead>
                <TableHead>User Activity</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.map((eachScore: any, index: number) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">
                    {eachScore.user}
                  </TableCell>
                  <TableCell className="text-center">
                    {eachScore.score}
                  </TableCell>
                  <TableCell>{eachScore.activity_name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default page;
