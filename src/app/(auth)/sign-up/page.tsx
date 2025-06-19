import { SignUpView } from "@/modules/auth/ui/views/sign-up-view";


import {headers} from "next/headers";
import {auth} from "@/lib/auth";
import { Redirect } from "next";
import { redirect } from "next/navigation";



const Page =async () => {
    const session=await       auth.api.getSession ({
        headers: await headers(),
    })
    if(!!session) {
        redirect("/");
    }
    return <SignUpView />
}

export default Page;