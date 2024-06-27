"use client";
import { Art, Expertise, Intro, Project } from "@/components/sections";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Intro />
      <Expertise />
      <Project />
      <Art />
    </>
  );
}
