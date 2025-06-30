'use client';
import { UserType } from "@/type/User";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
async function getUser() {
    const res = await fetch("https://dummyjson.com/users");
    const data = await res.json();
    const users: UserType[] = data.users;
    return users;
}
export default function UserCard() {
    const { data: users, isLoading, error } = useQuery({
        queryKey: ["users"],
        queryFn: getUser,
    })
    if (isLoading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Error: {(error as Error).message}</p>;
    }

    return (
        <>
            {
                users?.map((user) => (
                    <div key={user.id} className="text-sm leading-6">
                        <figure className="relative flex flex-col-reverse bg-slate-100 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
                            <blockquote className="mt-6 text-slate-700 dark:text-slate-300">
                                <p>I may not show it but i cant live without</p>
                            </blockquote>
                            <figcaption className="flex items-center space-x-4">
                                <Image width={80} height={80} src={user.image} alt="user avatar" unoptimized className="flex-none w-14 h-14 rounded-full object-cover" loading="lazy" decoding="async"/>
                                    <div className="flex-auto">
                                        <div className="text-base text-slate-900 font-semibold dark:text-slate-200">
                                            {user.username}
                                        </div>
                                        <div className="mt-0.5 dark:text-slate-300">
                                            {user.email}
                                        </div>
                                    </div>
                            </figcaption>
                        </figure>
                    </div>
                ))
            }
        </>
    );
}
