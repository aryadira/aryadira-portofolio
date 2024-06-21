"use client";
import { Art, Expertise, Intro, Project } from "@/components/sections";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <Intro />
      <Expertise />
      <Project />
      <Art />
    </>
  );
}
