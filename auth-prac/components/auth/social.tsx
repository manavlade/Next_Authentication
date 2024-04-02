"use client"

import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";

export const Social = () => {
    return (
        <div className=" flex items-center w-full gap-x-2" >
            <Button 
            size= "lg"
            className=" w-full"
            variant= "outline"
            onClick={() => {}}
            >
                <FcGoogle className=" h-4 w-4" />
            </Button>

            <Button
                size="lg"
                className=" w-full"
                variant="outline"
                onClick={() => { }}
            >
                <FaGithub className=" h-4 w-4" />
            </Button>
        </div>
    )
}