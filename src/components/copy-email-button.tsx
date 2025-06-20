"use client";
import React from "react";
import { Button } from "./ui/button";
import { Copy } from "lucide-react";
import { toast } from "sonner";

type Props = {
  email: string;
  text?: string;
};

const CopyEmailButton = ({ email, text }: Props) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      toast.success("Email copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return (
    <Button variant={"outline"} className="px-2" onClick={handleCopy}>
      {text} <Copy size={"1rem"} />
    </Button>
  );
};

export default CopyEmailButton;
